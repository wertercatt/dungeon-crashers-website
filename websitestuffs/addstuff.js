//menuarea
let menuareaHTML = '<h2>Links</h2><ul> <li><a href="' + 'dungeon.html">What is a voidco dungeon?</a></li>' + 
'<li><a href="' + 'crashers.html">Meet the Dungeon Crashers</a></li>' +
'<li><a href="' + 'locations.html">Locations of Interest</a></li>' +
'<li><a href="' + 'pokemons.html">Pokemon Data</a></li>' +
'<li><a href="' + 'missions.html">Unfinished Missions</a></li>' +
'<li><a href="' + 'https://mspfa.com/?s=38989&p=1">None Pizza With Left Beef</a></li>' +
'<li><a href="' + 'https://charcherry-weekly.tumblr.com/">Charcherry Weekly</a></li>' +
'<li><a href="' + 'golby.html">look at my golbat</a></li></ul>' +
'<hr><hr>' +
'<h2>The Duct-tape Zone</h2><ul> <li><a href="' + 'ooc_dtape.html">...Duct tape?</a></li>' + 
'<li><a href="' + 'ooc_pokencounter.html">Pokemon Encounter Generator</a></li>' +
'<li><a href="' + 'ooc_systems.html">Systems used for combat and such</a></li>' +
'<li><a href="' + 'https://letssosl.boards.net/thread/274/pokemon-world-mage-quest">Mage Quest</a></li>' +
'<li><a href="' + 'http://jingloria.wertercatt.com/oldsite/pichuinfo.htm">Pichu Quest (pre-scratch Mage Quest, sorta)</a></li>' +
'<li><a href="' + 'ooc_starterclock.html">Current Time</a></li>' +
'<li><a href="' + 'http://jingloria.wertercatt.com/lostpawns/">Lost Pawns Website</a></li>' + 
'<li><a href="' + 'http://www.ifelse95.xyz/index.html">ifelse95\'s Website</a></li>' + 
'<li><a href="' + 'http://wertercatt.com/">wetercatt\'s Website</a></li>';

//header
let headerHTML = '<a href="index.html"><img src="sitelogo.png" alt="SBARG 2.5: Dungeon Crashers"></a>' ;

//footer
let footerHTML = '<hr><br><p>site made by shinyJiggly, special thanks to ifelse95</p>' ;


//teh elements
if (document.getElementById("menuarea")) {
  document.getElementById("menuarea").innerHTML = menuareaHTML;
}

if (document.getElementById("header")) {
  document.getElementById("header").innerHTML = headerHTML;
}

if (document.getElementById("footer")) {
  document.getElementById("footer").innerHTML = footerHTML;
}