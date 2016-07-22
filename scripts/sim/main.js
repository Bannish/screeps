module.exports.loop = function () {
    var creep = Game.creeps.Eva;
    if (!creep.memory.moves) {
        var path = creep.pos.findPathTo(Game.flags['Flag1']);
        creep.memory.path = path;
        console.log('pathfinder');
        creep.memory.moves = true;
    } else {
        creep.moveByPath(creep.memory.path);
        console.log('move');
        console.log(creep.memory.path)
        var lngth = creep.memory.path.length;
        if((creep.memory.moves === true)&&(creep.pos.x === creep.memory.path[lngth - 1].x)&&(creep.memory.path[lngth - 1].y === creep.pos.y)) {
            creep.memory.moves = false;
        }
    }
}