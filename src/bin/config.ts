const path = require('path');
const os = require('os');

const isHome:string = os.homedir();

export const home = isHome;
export const docs = path.join(isHome, 'Documents', 'StudentSync');