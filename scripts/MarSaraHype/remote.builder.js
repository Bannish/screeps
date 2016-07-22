var repairing = require('action.repair');

module.exports = {

    /** @param {Creep} creep **/
    run: function(creep) {

	    if(creep.memory.building && creep.carry.energy == 0) {
            creep.memory.building = false;
	    }
	    if(!creep.memory.building && creep.carry.energy == creep.carryCapacity) {
	        creep.memory.building = true;
	    }

	    if(creep.memory.building) {
	        if(creep.room.name == Game.flags.Claim.room.name) {
    	        var target = creep.pos.findClosestByPath(FIND_CONSTRUCTION_SITES);
    	        if(target) {
                    if(creep.build(target) == ERR_NOT_IN_RANGE) {
                        creep.moveTo(target);
                    }
    	        } else {
	                repairing.run(creep);
	            }
	        } else {
                creep.moveTo(Game.flags.Claim);	            
	        }
        } else {
            if(creep.room.name == Game.flags.startRoom.room.name) {
                var target = creep.pos.findClosestByPath(FIND_STRUCTURES, {
                    filter: (structure) => {
                        return ((structure.structureType == STRUCTURE_STORAGE ||
                                structure.structureType == STRUCTURE_CONTAINER) &&
                                structure.store.energy > 0)
                }});
                if(target) {
                    if(creep.withdraw(target, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                        creep.moveTo(target);
                    }
                }
            } else {
                creep.moveTo(Game.flags.startRoom);
            }
            
	    }
	}
};