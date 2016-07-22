/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports.thing = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('role.miner');
 * mod.thing == 'a thing'; // true
 */

module.exports = {
    
    /** @param {Creep} creep **/
    run: function(creep) {
        var sources = creep.room.find(FIND_SOURCES);
        
        if(!creep.memory.moving && !creep.memory.mining) {
            creep.memory.path = creep.pos.findPathTo(sources[creep.memory.enSource]);
            creep.memory.moving = true;
            console.log('findPathToMining'+creep.name);
        }
        
        if(creep.memory.moving) {
            creep.moveByPath(creep.memory.path);
            console.log('move');
            if(creep.harvest(sources[creep.memory.enSource]) == OK) {
                creep.memory.moving = false;
                creep.memory.mining = true;
            }
        }
        
        if(creep.memory.mining) {
            if(creep.harvest(sources[creep.memory.enSource]) == ERR_NOT_IN_RANGE) {
                creep.moveTo(sources[creep.memory.enSource]);
                //console.log('moveToMining'+creep.name);
            }
        }
    }

};