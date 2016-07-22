var roleUpgrader = require('role.upgrader');
var mining = require('action.mining');

var roleHarvester = {

    /** @param {Creep} creep **/
    run: function(creep) {
        
        if(creep.memory.storing && creep.carry.energy === 0) {
            creep.memory.storing = false;
        }
        if(!creep.memory.storing && creep.carry.energy === creep.carryCapacity) {
            creep.memory.storing = true;
        }
        
	    if(!creep.memory.storing) {
            mining.run(creep);
        }
        else {
            var targets = creep.room.find(FIND_STRUCTURES, {
                    filter: (structure) => {
                        return (structure.structureType == STRUCTURE_EXTENSION ||
                                structure.structureType == STRUCTURE_SPAWN ||
                                structure.structureType == STRUCTURE_CONTAINER ||
                                structure.structureType == STRUCTURE_TOWER) && structure.energy < structure.energyCapacity;
                    }
            });
            if(targets.length > 0) {
                if(creep.transfer(targets[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(targets[0]);
                }
            } else {
                if(creep.memory.role === 'harvester') {
                    roleUpgrader.run(creep);
                }
            }
        }
	}
};

module.exports = roleHarvester;