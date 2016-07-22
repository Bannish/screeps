var role = require('role.upgrader');

module.exports = {
    
    /** @param {Creep} creep **/
    run: function(creep) {
        var closestDamagedStructure = creep.pos.findClosestByRange(FIND_STRUCTURES, {
            filter: (structure) => ((structure.hits < structure.hitsMax) && (structure.hits < 45000))
        });
        if(closestDamagedStructure) {
            
            /**if(!creep.memory.path) {
                creep.memory.path = creep.pos.findPathTo(creep.pos, closestDamagedStructure);
                console.log('findPathToRepairing'+creep.name);
            }
            creep.moveByPath(creep.memory.path);
            */
            if(creep.repair(closestDamagedStructure) === ERR_NOT_IN_RANGE) {
                //console.log('moveToRepairing')
                creep.moveTo(closestDamagedStructure);
            }
        } else {
            role.run(creep);
        }
    }
};