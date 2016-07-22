module.exports = {
     /** @param {Creep} creep **/
    run: function(creep) {
        
        if(creep) {
            var closestHostile = creep.pos.findClosestByRange(FIND_HOSTILE_CREEPS , {
                filter: (creep) => ((creep.owner.username != 'Autsider'))
            });
            if(closestHostile) {
                console.log(closestHostile);
                var username = closestHostile.owner.username;
                console.log(username);
                
            }
            
            if(closestHostile && (closestHostile.username != 'Autsider')) {
                if(creep.attack(closestHostile == ERR_NOT_IN_RANGE)) {
                    creep.moveTo(closestHostile);
                }
                
            } else {
                if(creep.memory.role == 'defender') {
                    creep.moveTo(Game.flags.sammelpunkt);
                } else {
                    if(creep.memory.role == 'tarDefender') {
                        creep.moveTo(Game.flags.sammelpunktTar);
                    }
                }
            }
        }
    }
};