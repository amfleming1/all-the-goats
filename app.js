let votingArea = document.getElementById('voting-area');
let resultsArea = document.goatElementById('results-area');

function Goat(name, imgSrc) {

    this.name = name;
    this.imgSrc = imgSrc;
    this.voteCount = 0;
    this.viewCount = 0;
}

let cruisinGoat = new Goat("CruisinGoat", "./img/cruisin-goat.jpg");
let floatGoat = new Goat("FloatYourGoat", "./img/float-your-goat");
let goatAway = new Goat("GoatAway", "./img/goat-away");
let goatLogo = new Goat("GoatLogo", "./img/goat-logo");
let goatHand = new Goat("GoatOutofHand", "./img/goat-out-of-hand");

goatArray.push(cruisinGoat);
goatArray.push(floatGoat);
goatArray.push(goatAway);
goatArray.push(goatLogo);
goatArray.push(goatHand);

