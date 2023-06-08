let votingArea = document.getElementById('voting-area');
let resultsArea = document.goatElementById('results-area');

function Goat(name, imgSrc) {

    this.name = name;
    this.imgSrc = imgSrc;
    this.voteCount = 0;
    this.viewCount = 0;
}

let cruisinGoat = new Goat("CruisinGoat", "./img/cruisin-goat.jpg");
let floatGoat = new Goat("FloatYourGoat", "./img/float-your-goat.jpg");

let goatArray = [];
goatArray.push(cruisinGoat);
goatArray.push(floatGoat);


console.log(goatArray);

function setGoatImages(goat1, goat2) {
goat1Img.src = goat1.imgSrc;
got1Img.alt = goat1.name;
goat1Img.title = goat1.name;
goat2Img.src = goat2.imgSrc;
goat2Img.alt = goat2.name;
goat2Img.title = goat2.name;
}

setGoatImages(goatArray[0], goatArray[2]);

//define the eventHandler
function handleGoatClick(event) {
    event.preventDefault();
    let target = event.target;
    let goatName = target.alt;

    let theBestGoat;
    for(let i=0; i<goatArray.length; i++) {
        let goat = goatArray[i];
        if(goat.name === goatName) {
            theBestGoat = goat;

        }
    }
    theBestGoat.voteCount++;
    console.log(goatName, theBestGoat.voteCount);

}

votingArea.addEventListener("click", handleGoatClick);

//render results

function renderResults() {
    for(let i=0; i<goatArray.length; i++) {
        let goat = goatArray[i];
        let goatName = goat.name;
        let goatVoteCount = goat.voteCount;
        let report = 'The goat named ${goatName} got ${goatVote}'
        console.log(report);


    }
}

