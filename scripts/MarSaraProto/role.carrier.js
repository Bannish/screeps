/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports.thing = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('role.carrier');
 * mod.thing == 'a thing'; // true
 */

module.exports = {
    run: function(creep) {
    
        if(creep.memory.storing && creep.carry.energy == 0) {
            creep.memory.storing = false;
        }
        if(!creep.memory.storing && creep.carry.energy == creep.carryCapacity) {
            creep.memory.storing = true;
        }
        
        var res = creep.room.find(FIND_DROPPED_ENERGY);
        
        if(!creep.memory.storing) {
            if(creep.pickup(res[0]) == ERR_NOT_IN_RANGE) {
                creep.moveTo(res[0]);    
            }
        } else {
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
            }
        }
    }
};