var x = 0;

var chars = [
    "Mario",
    "Luigi",
    "Peach",
    "Bowser",
    "Yoshi",
    "Rosalina & Luma",
    "Bowser Jr.",
    "Wario",
    "Donkey Kong",
    "Diddy Kong",
    "Mr. Game & Watch",
    "Little Mac",
    "Link",
    "Zelda",
    "Sheik",
    "Ganondorf",
    "Toon Link",
    "Samus",
    "Zero Suit Samus",
    "Pit",
    "Palutena",
    "Marth",
    "Ike",
    "Robin",
    "Duck Hunt Duo",
    "Kirby",
    "King DeDeDe",
    "Meta Knight",
    "Fox",
    "Falco",
    "Pikachu",
    "Charizard",
    "Lucario",
    "Jigglypuff",
    "Greninja",
    "R.O.B.",
    "Ness",
    "Captain Falcon",
    "Villager",
    "Olimar",
    "Wii Fit Trainer",
    "Shulk",
    "Dr. Mario",
    "Dark Pit",
    "Lucina",
    "Pac-Man",
    "Mega Man",
    "Sonic",
    "Mewtwo",
    "Lucas",
    "Roy",
    "Ryu",
    "Cloud",
    "Bayonetta",
    "Corrin"
];

$(document).ready(function() {
    $(".pick-character-btn").click(function() {
        randomChar();
    });
});

function randomChar() {
    c = (1 + Math.floor(Math.random() * 55)) * -128;
    $(".img-ssb4").css('background-position', '0 ' + c + 'px');

    setTimeout(function() {
        x++;
        if(x<30) randomChar();
        else update();
    },75);
}

function update() {
    x = 0;
    $(".text-container h2").text(chars[Math.abs(c) / 128 - 1] + ", has been choosen!");
}
