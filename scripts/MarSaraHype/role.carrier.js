module.exports = {
    run: function(creep) {
    
        if(creep.memory.storing && creep.carry.energy == 0) {
            creep.memory.storing = false;
        }
        if((!creep.memory.storing && creep.carry.energy == creep.carryCapacity) || (creep.ticksToLive <= 100)) {
            creep.memory.storing = true;
        }
        
        if(!creep.memory.storing) {
            var res = creep.room.find(FIND_DROPPED_ENERGY);
            res.sort(function(a, b){return b-a})
            var target = res[0]; 
            
            if(creep.pickup(target) == ERR_NOT_IN_RANGE) {
                creep.moveTo(target);    
            }
            
        } else {
            var target = creep.pos.findClosestByPath(FIND_STRUCTURES, {
                    filter: (structure) => {
                        return ((structure.structureType == STRUCTURE_EXTENSION ||
                                structure.structureType == STRUCTURE_SPAWN) && 
                                structure.energy < structure.energyCapacity)
                    }
            });
            if(!target) {
                target = creep.pos.findClosestByPath(FIND_STRUCTURES, {
                    filter: (structure) => {
                        return ((structure.structureType == STRUCTURE_TOWER) && 
                                (structure.energy < structure.energyCapacity))
                    }
                });
            }
            if(!target) {
                target = creep.pos.findClosestByPath(FIND_STRUCTURES, {
                    filter: (structure) => {
                        return ((structure.structureType == STRUCTURE_STORAGE ||
                                structure.structureType == STRUCTURE_CONTAINER) &&
                                (structure.store.energy < structure.storeCapacity) && 
                                (structure.store.energy < 500000))
                    }
            });
            }
            if(target) {
                if(creep.transfer(target, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(target);
                }
            }
        }
    }
};