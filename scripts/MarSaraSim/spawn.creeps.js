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
        var harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester');
        var upgraders = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader');
        var builders = _.filter(Game.creeps, (creep) => creep.memory.role == 'builder');
        
        if(upgraders.length < 3) {
            var newName = Game.spawns.MarSara.createCreep([WORK,CARRY,MOVE], undefined, {role: 'upgrader', enSource: 0});
            console.log('Spawning new upgrader: ' + newName);
        }
        if(harvesters.length < 2) {
            var newName = Game.spawns.MarSara.createCreep([WORK,CARRY,MOVE], undefined, {role: 'harvester', enSource: 1});
            console.log('Spawning new harvester: ' + newName);
        }
        if(builders.length < 3) {
            var newName = Game.spawns.MarSara.createCreep([WORK,CARRY,MOVE], undefined, {role: 'builder', enSource: 1});
            console.log('Spawning new builder: ' + newName);
        }
    }
}

module.exports = spawner;