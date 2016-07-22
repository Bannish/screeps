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
            var target = creep.pos.findClosestByPath(FIND_STRUCTURES, {
                    filter: (structure) => {
                        return ((structure.structureType == STRUCTURE_EXTENSION ||
                                structure.structureType == STRUCTURE_TOWER ||
                                structure.structureType == STRUCTURE_SPAWN ) && 
                                structure.energy < structure.energyCapacity) ||
                                ((structure.structureType == STRUCTURE_STORAGE ||
                                structure.structureType == STRUCTURE_CONTAINER) &&
                                structure.store.energy < 7000);
                    }
            });
            if(target) {
                if(creep.transfer(target, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(target);
                }
            } else {
                if(creep.memory.role == 'harvester' || creep.memory.role == 'tarHarvester') {
                    var target = creep.pos.findClosestByPath(FIND_CONSTRUCTION_SITES);
        	        if(target) {
                        if(creep.build(target) == ERR_NOT_IN_RANGE) {
                            creep.moveTo(target);
                        }
        	        } else {
	                    roleUpgrader.run(creep);
	                }
                } else {
	                roleUpgrader.run(creep);
	            }
            }
        }
	}
};

module.exports = roleHarvester;