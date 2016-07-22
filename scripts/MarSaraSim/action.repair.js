var roleUpgrader = require('role.upgrader');

module.exports = {
    
    /** @param {Creep} creep **/
    run: function(creep) {
        var closestDamagedStructure = creep.pos.findClosestByRange(FIND_STRUCTURES, {
            filter: (structure) => structure.hits < structure.hitsMax
        });
        if(closestDamagedStructure) {
            if(creep.repair(closestDamagedStructure) == ERR_NOT_IN_RANGE) {
                creep.moveTo(closestDamagedStructure);
            }
        } else {
            roleUpgrader.run(creep);
        }
    }
};