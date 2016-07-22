/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports.thing = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('action.mining');
 * mod.thing == 'a thing'; // true
 */

module.exports = {
    
    /** @param {Creep} creep **/
    run: function(creep) {
        var sources = creep.room.find(FIND_SOURCES);
        
        var res = creep.room.find(FIND_DROPPED_ENERGY);
        
        /**if(!creep.memory.path) {
            creep.memory.path = creep.pos.findPathTo(creep.pos, sources[creep.memory.enSource]);
            console.log('findPathToMining'+creep.name);
        }
        creep.moveByPath(creep.memory.path);
        */
        if(res.length > 0) {
            if(creep.pickup(res[0]) == ERR_NOT_IN_RANGE) {
                creep.moveTo(res[0]);
            }
        } else {
            if(creep.harvest(sources[creep.memory.enSource]) == ERR_NOT_IN_RANGE) {
                creep.moveTo(sources[creep.memory.enSource]);
                //console.log('moveToMining'+creep.name);
            }
        }
    }

};