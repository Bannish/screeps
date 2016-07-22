module.exports = {
     /** @param {Structure} tower **/
    run: function(tower) {
        
        var closestDamagedStructure = tower.pos.findClosestByRange(FIND_STRUCTURES, {
            filter: (structure) => ((structure.hits < structure.hitsMax) && (structure.hits < 2000))
        });
        
        if(closestDamagedStructure) {
            
            if(tower.repair(closestDamagedStructure) === ERR_NOT_IN_RANGE) {
            }
        } else {
            if(tower) {
                var closestHostile = tower.pos.findClosestByRange(FIND_HOSTILE_CREEPS , {
                    filter: (creep) => ((creep.owner.username != 'Autsider'))
                });
                if(closestHostile) {
                    console.log(closestHostile);
                    var username = closestHostile.owner.username;
                    console.log(username);
                    
                }
                
                if(closestHostile && (closestHostile.username != 'Autsider')) {
                    tower.attack(closestHostile);
                }
            }
        }
    }
   
};