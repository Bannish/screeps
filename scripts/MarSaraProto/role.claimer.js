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
            var tarHarvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'tarHarvester');
            var tarUpgraders = _.filter(Game.creeps, (creep) => creep.memory.role == 'tarUpgrader');
            var tarBuilders = _.filter(Game.creeps, (creep) => creep.memory.role == 'tarBuilder');
			if(tarHarvesters.length < 6) {
			    creep.memory.role = 'tarHarvester';
			    creep.memory.enSource = 0;
            }
            if(tarBuilders.length < 0) {
                creep.memory.role = 'tarUpgrader';
                creep.memory.enSource = 1;
            }
            if(tarUpgraders.length < 1) {
			    creep.memory.role = 'tarUpgrader';
			    creep.memory.enSource = 1;
            }
		}
    }
};