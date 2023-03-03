import Zombie from './zombie';
import Undead from './undead';
import Daemon from './daemon';
import Magician from './magician';
import Swordsman from './swordsman';
import Bowerman from './bowerman';

const zombie = new Zombie('Viktor');
const undead = new Undead('Viktor');
const daemon = new Daemon('Viktor');
const magician = new Magician('Viktor');
const swordsman = new Swordsman('Viktor');
const bowerman = new Bowerman('Viktor');

console.log(zombie, undead, daemon, magician, swordsman, bowerman);
