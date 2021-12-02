// index.js 
const Moustache = require('mustache'); 
const fs = require('fs'); 
const MUSTACHE_MAIN_DIR = './main.mustache';
/** 
  * DATA est l'objet qui contient toutes 
  * les données à fournir à Moustache 
  * Notez les propriétés "name" et "date". 
*/ 
let DATA = { 
  name: 'Jean', 
  date: new Date()
} ;
/** 
  * A - Nous ouvrons 'main.mustache' 
  * B - Nous demandons à Moustache de rendre notre fichier avec les données 
  * C - Nous créons un fichier README.md avec la sortie générée 
  */ 
function generateReadMe() { 
  fs.readFile (MUSTACHE_MAIN_DIR, (err, data) => { 
    if (err) throw err; 
    const output = Moustache.render(data.toString(), DATA); 
    fs.writeFileSync('README.md', output); 
  }); 
}
generateReadMe();