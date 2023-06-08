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

let goatArray = [];
goatArray.push(cruisinGoat);
goatArray.push(floatGoat);


console.log(goatArray);

function setGoatImages(goat1, gotat2){
goat1Img.src = goat1.imgSrc;
got1Img.alt = goat1.name;
goat1Img.title = goat1.name;
goat2Img.src = goat2.imgSrc;
goat2Img.alt = goat2.name;
goat2Img.title = goat2.name;
}

setGoatImages(goatArray[0], goatArray[2]);
