module.exports = {
     /** @param {Structure} tower **/
    run: function(tower) {
        
        var closestDamagedStructure = tower.pos.findClosestByRange(FIND_STRUCTURES, {
            filter: (structure) => ((structure.hits < structure.hitsMax) && (structure.hits < 2000))
        });
        
        if(closestDamagedStructure) {
            
            if(tower.repair(closestDamagedStructure) === ERR_NOT_IN_RANGE) {
            }
        }
        
        if(tower) {
            var closestHostile = tower.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
            if(closestHostile && closestHostile.owner !== 'Autsider') {
             tower.attack(closestHostile);
            }
        }
    }
};