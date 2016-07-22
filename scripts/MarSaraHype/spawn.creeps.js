var spawner = {
    
    check: function() {
        
        var minersPerRoom = 2;
        var carriersPerRoom = 2;
        var buildersPerRoom = 2;
        var upgradersPerRoom = 2;
        var defendersPerRoom = 0;
        
        var miners = _.filter(Game.creeps, (creep) => creep.memory.role == 'miner');
        var carriers = _.filter(Game.creeps, (creep) => creep.memory.role == 'carrier');
        var upgraders = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader');
        var builders = _.filter(Game.creeps, (creep) => creep.memory.role == 'builder');
        var defenders = _.filter(Game.creeps, (creep) => creep.memory.role == 'defender');
        var tarMiners = _.filter(Game.creeps, (creep) => creep.memory.role == 'tarMiner');
        var tarCarriers = _.filter(Game.creeps, (creep) => creep.memory.role == 'tarCarrier');
        var tarUpgraders = _.filter(Game.creeps, (creep) => creep.memory.role == 'tarUpgrader');
        var tarBuilders = _.filter(Game.creeps, (creep) => creep.memory.role == 'tarBuilder');
        var tarDefenders = _.filter(Game.creeps, (creep) => creep.memory.role == 'tarDefender');
        var remBuilders = _.filter(Game.creeps, (creep) => creep.memory.role == 'remBuilder');
        
        var claimers = _.filter(Game.creeps, (creep) => creep.memory.role == 'claimer');
        
        if(miners.length < minersPerRoom) {
            var harvPoint = _.filter(Game.creeps, (creep) => ((creep.memory.role == 'miner') && (creep.memory.enSource == 0)));
            if(harvPoint.length < 1) {
                var newName = Game.spawns.MarSara.createCreep([MOVE,MOVE,WORK,WORK,WORK,WORK,WORK,WORK], undefined, {role: 'miner', enSource: 0, moving: false, mining: false, wait: 30});
            } else {
                var newName = Game.spawns.MarSara.createCreep([MOVE,MOVE,WORK,WORK,WORK,WORK,WORK,WORK], undefined, {role: 'miner', enSource: 1, moving: false, mining: false, wait: 30});
            }
            console.log('Spawning new miner MarSara: ' + newName);
            
        }
        if(carriers.length < carriersPerRoom) {
            var newName = Game.spawns.MarSara.createCreep([MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY], undefined, {role: 'carrier'});
            console.log('Spawning new carrier MarSara: ' + newName);
        }
        if(upgraders.length < upgradersPerRoom) {
            var newName = Game.spawns.MarSara.createCreep([WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,MOVE,MOVE,MOVE], undefined, {role: 'upgrader'});
            console.log('Spawning new upgrader MarSara: ' + newName);
        }
        if(builders.length < buildersPerRoom) {
            var newName = Game.spawns.MarSara.createCreep([WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE], undefined, {role: 'builder'});
            console.log('Spawning new builder MarSara: ' + newName);
        }
        if(defenders.length < defendersPerRoom) {
            var newName = Game.spawns.MarSara.createCreep([MOVE,MOVE,RANGED_ATTACK,ATTACK,ATTACK,ATTACK,RANGED_ATTACK,TOUGH,TOUGH,TOUGH,MOVE,MOVE,RANGED_ATTACK,ATTACK,ATTACK,ATTACK,RANGED_ATTACK,TOUGH,TOUGH,TOUGH,MOVE,MOVE,RANGED_ATTACK,ATTACK,ATTACK,ATTACK,RANGED_ATTACK,TOUGH,TOUGH,TOUGH], undefined, {role: 'defender'});
            console.log('Spawning new defender MarSara: ' + newName);
        }
        
        if(tarMiners.length < minersPerRoom) {
            var harvPoint = _.filter(Game.creeps, (creep) => ((creep.memory.role == 'tarMiner') && (creep.memory.enSource == 0)));
            if(harvPoint.length < 1) {
                var newName = Game.spawns.Tarsonis.createCreep([MOVE,MOVE,WORK,WORK,WORK,WORK,WORK,WORK], undefined, {role: 'tarMiner', enSource: 0, moving: false, mining: false, wait: 30});
            } else {
                var newName = Game.spawns.Tarsonis.createCreep([MOVE,MOVE,WORK,WORK,WORK,WORK,WORK,WORK], undefined, {role: 'tarMiner', enSource: 1, moving: false, mining: false, wait: 30});
            }
            console.log('Spawning new miner Tarsonis: ' + newName);
        }
        if(tarCarriers.length < carriersPerRoom) {
            var newName = Game.spawns.Tarsonis.createCreep([MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY], undefined, {role: 'tarCarrier'});
            console.log('Spawning new carrier Tarsonis: ' + newName);
        }
        
        if(tarUpgraders.length < upgradersPerRoom) {
            var newName = Game.spawns.Tarsonis.createCreep([WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,MOVE,MOVE,MOVE], undefined, {role: 'tarUpgrader'});
            console.log('Spawning new upgrader Tarsonis: ' + newName);
        }
        if(tarBuilders.length < buildersPerRoom) {
            var newName = Game.spawns.Tarsonis.createCreep([WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE], undefined, {role: 'tarBuilder'});
            console.log('Spawning new builder Tarsonis: ' + newName);
        }
        /*
        if(tarDefenders.length < defendersPerRoom) {
            var newName = Game.spawns.Tarsonis.createCreep([MOVE,MOVE,RANGED_ATTACK,ATTACK,ATTACK,ATTACK,RANGED_ATTACK,TOUGH,TOUGH,TOUGH,MOVE,MOVE,RANGED_ATTACK,ATTACK,ATTACK,ATTACK,RANGED_ATTACK,TOUGH,TOUGH,TOUGH], undefined, {role: 'tarDefender'});
            console.log('Spawning new defender Tarsonis: ' + newName);
        }
        if(claimers.length == 1) {
            if(claimers[0].ticksToLive < 100) {
                Game.spawns.Tarsonis.createCreep([CLAIM,MOVE,MOVE], undefined, {role: 'claimer'})
                console.log('Spawning new remote claimer Tarsonis: ' + newName);
            }
        }
        
        if(remBuilders.length < 1) {
            var newName = Game.spawns.Tarsonis.createCreep([WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE], undefined, {role: 'remBuilder'});
            console.log('Spawning new remote builder Tarsonis: ' + newName);
        }*/
    }
}

module.exports = spawner;