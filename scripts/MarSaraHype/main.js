var roleUpgrader = require('role.upgrader');
var roleBuilder = require('role.builder');
var roleClaimer = require('role.claimer');
var roleCarrier = require('role.carrier');
var roleMiner = require('role.miner');
var roleDefender = require('role.defender');
var remoteBuilder = require('remote.builder');
var spawner = require('spawn.creeps');
var structTower = require('structure.tower');

module.exports.loop = function () {

    for(var name in Memory.creeps) {
        if(!Game.creeps[name]) {
        delete Memory.creeps[name];
        }
    }
    spawner.check();

    for(var name in Game.structures) {
        if (Game.structures[name].structureType === STRUCTURE_TOWER) {
            var tower = Game.structures[name];
            structTower.run(tower);
        }        
    }

    for(var name in Game.creeps) {
        var creep = Game.creeps[name];

        if(creep.memory.role == 'defender' || creep.memory.role == 'tarDefender') {
            roleDefender.run(creep);
        }

        if(creep.memory.role == 'upgrader' || creep.memory.role == 'tarUpgrader') {
            roleUpgrader.run(creep);
        }

        if(creep.memory.role == 'builder' || creep.memory.role == 'tarBuilder') {
            roleBuilder.run(creep);
        }
        
        if(creep.memory.role == 'remBuilder') {
            remoteBuilder.run(creep);
        }
        
        if(creep.memory.role == 'claimer') {
            roleClaimer.run(creep);
        }
        if(creep.memory.role == 'miner' || creep.memory.role == 'tarMiner') {
            roleMiner.run(creep);
        }
        if(creep.memory.role == 'carrier' || creep.memory.role == 'tarCarrier') {
            roleCarrier.run(creep);
        }
    }
}