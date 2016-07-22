/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports.thing = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('spawn.creeps');
 * mod.thing == 'a thing'; // true
 */
var spawner = {
    
    check: function() {
        var miners = _.filter(Game.creeps, (creep) => creep.memory.role == 'miner');
        var upgraders = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader');
        var builders = _.filter(Game.creeps, (creep) => creep.memory.role == 'builder');
        //var tarHarvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'tarHarvester');
        //var tarUpgraders = _.filter(Game.creeps, (creep) => creep.memory.role == 'tarUpgrader');
        //var tarBuilders = _.filter(Game.creeps, (creep) => creep.memory.role == 'tarBuilder');
        
        if(miners.length < 4) {
            var newName = Game.spawns.MarSara.createCreep([WORK,WORK,WORK,CARRY,CARRY,MOVE,MOVE,MOVE], undefined, {role: 'miner', enSource: 1});
            console.log('Spawning new harvester MarSara: ' + newName);
        }
        if(upgraders.length < 2) {
            var newName = Game.spawns.MarSara.createCreep([WORK,WORK,WORK,CARRY,CARRY,MOVE,MOVE,MOVE], undefined, {role: 'upgrader', enSource: 0});
            console.log('Spawning new upgrader MarSara: ' + newName);
        }
        if(builders.length < 2) {
            var newName = Game.spawns.MarSara.createCreep([WORK,WORK,WORK,CARRY,CARRY,MOVE,MOVE,MOVE], undefined, {role: 'builder', enSource: 0});
            console.log('Spawning new builder MarSara: ' + newName);
        }
        /*
        if(tarUpgraders.length < 2) {
            var newName = Game.spawns.Tarsonis.createCreep([WORK,CARRY,MOVE], undefined, {role: 'tarUpgrader', enSource: 1});
            console.log('Spawning new upgrader Tarsonis: ' + newName);
        }
        if(tarHarvesters.length < 4) {
            var newName = Game.spawns.Tarsonis.createCreep([WORK,CARRY,MOVE], undefined, {role: 'tarHarvester', enSource: 0});
            console.log('Spawning new harvester Tarsonis: ' + newName);
        }
        if(tarBuilders.length < 2) {
            var newName = Game.spawns.Tarsonis.createCreep([WORK,CARRY,MOVE], undefined, {role: 'tarBuilder', enSource: 1});
            console.log('Spawning new builder Tarsonis: ' + newName);
        }
        */
    }
}

module.exports = spawner;