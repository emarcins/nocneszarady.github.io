import { Quote } from './quote.js';

class Game {

    currentStep = 0;
    lastStep = 7;
    
    quotes = [{
        text: 'pewne osoby',
        category: 'Ludzie Nocnego Radia',
    },
    {
        text: 'jan matejko',
        category: 'Artysta',
    },
    {
        text: 'janko muzykant',
        category: 'Ludzie Nocnego Radia/Utwór literacki',
    },
    {
        text: 'gosia i tomu',
        category: 'Ludzie Nocnego Radia',
    },
    {
        text: 'balkon danusi',
        category: 'Placówka Nocnego Radia',
    },
    {
        text: 'patefon ujka radoosa',
        category: 'Discord Nocnego Radia',
    },
    {
        text: 'kapitan krawiec',
        category: 'Ludzie Nocnego Radia',
    },
    {
        text: 'maciej ze szczecina',
        category: 'Ludzie Nocnego Radia',
    },
    {
        text: 'milficja z discorda',
        category: 'Discord Nocnego Radia',
    },
    {
        text: 'krynica wiedzy ze szczecina',
        category: 'Ludzie Nocnego Radia',
    },
    {
        text: 'nocne igraszki',
        category: 'Nocno-Radiowe delicje',
    },
    {
        text: 'z prawej strony mapy',
        category: 'Nocno-Radiowe delicje',
    },
    {
        text: 'siatka z biedronki',
        category: 'Nocno-Radiowe przedmioty',
    },
    {
        text: 'osiem piwek na noc',
        category: 'Nocno-Radiowe delicje',
    },
    {
        text: 'mikrofon dynamiczny',
        category: 'Nocno-Radiowe itemy',
    },
    {
        text: 'zepsuty ruter',
        category: 'Nocno-Radiowe itemy',
    },
    {
        text: 'lutownica etama',
        category: 'Nocno-Radiowe itemy',
    },
    {
        text: 'kobiety nocnego radia',
        category: 'Nocno Radiowe delicje',
    }];
    
    constructor({lettersWrapper, categoryWrapper, wordWrapper, outputWrapper, winAudio, loseAudio }) {
        this.lettersWrapper = lettersWrapper;
        this.categoryWrapper = categoryWrapper;
        this.wordWrapper = wordWrapper;
        this.outputWrapper = outputWrapper;
        this.winAudio = winAudio;
        this.loseAudio = loseAudio;
        

        const {text, category} = this.quotes[Math.floor(Math.random() * this.quotes.length)];
        this.categoryWrapper.innerHTML = category
        this.quote = new Quote(text);
        

    }

    guess(letter){
        event.target.disabled = true;
        if (this.quote.guess(letter)) {
            this.drawQuote();
        } else {
            this.currentStep++;
            document.getElementsByClassName('step')[this.currentStep].style.opacity = 1;
            if(this.currentStep == this.lastStep){
                this.loosing();
            }
        }
    }

    drawLetters(){
        for (let i = 0; i<26; i++) {
            const label = (i+10).toString(36);
            const button = document.createElement('button');
            button.innerHTML = label;
            button.addEventListener('click', (event) => this.guess(label));
            this.lettersWrapper.appendChild(button);
        }
    };
    

    drawQuote() {
        const content = this.quote.getContent();
        this.wordWrapper.innerHTML = content;
        if (!content.includes('_')){
            this.winning();
        }
    }

    start() {
        document.getElementsByClassName('step')[this.currentStep].style.opacity = 1;
        this.drawLetters();
        this.drawQuote();
        
    }

    winning(){
        this.wordWrapper.innerHTML = 'Gratulacje! Wygrałeś! W nagrodę walnij se kielicha!';
        this.lettersWrapper.innerHTML = "";
        this.winAudio.play();

    };

    loosing(){
        this.wordWrapper.innerHTML = 'Co z Ciebie za NOCNIK?! Przegrałeś!';
        this.lettersWrapper.innerHTML = "";
        this.loseAudio.play();
        
    };
    
    
}

    




const game = new Game({
    lettersWrapper: document.getElementById('letters'),
    categoryWrapper: document.getElementById('category'),
    wordWrapper: document.getElementById('word'),
    outputWrapper: document.getElementById('output'),
    winAudio: document.getElementById('win'),
    loseAudio: document.getElementById('lose'),
    
});

game.start()





