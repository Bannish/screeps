/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports.thing = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('role.claimer');
 * mod.thing == 'a thing'; // true
 */

module.exports = {
    /** @param {Creep} creep **/
    run: function(creep) {
		
		if(!creep.memory.moving && !creep.memory.claiming) {
			creep.memory.moving = true;
		} else if(creep.memory.moving && !creep.memory.claiming) {
		    var target = Game.flags['Claim'];
			creep.moveTo(target);
			if((creep.pos.x == target.pos.x) &&(creep.pos.y == target.pos.y)) {
				creep.memory.moving = false;
				creep.memory.claiming = true;
			}
		} else if(!creep.memory.moving && creep.memory.claiming) {
		    if(creep.claimController(creep.room.controller) == ERR_NOT_IN_RANGE) {
		        creep.moveTo(creep.room.controller);
		    } else if(creep.claimController(creep.room.controller) == ERR_GCL_NOT_ENOUGH) {
		        if(creep.reserveController(creep.room.controller) == ERR_NOT_IN_RANGE) {
		            creep.moveTo(creep.room.controller);
		        }
		    }
		}
    }
};