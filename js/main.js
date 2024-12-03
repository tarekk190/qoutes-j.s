var quotes = [
    `“Be yourself; everyone else is already taken.”<h4 >― Oscar Wilde</h4>`,
    `“So many books, so little time.”<h4 >― Frank Zappa</h4>`,
    `“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”<h4 >― Albert Einstein</h4>`,
    `“A room without books is like a body without a soul.”<h4 >― Marcus Tullius Cicero"</h4>`,
    `“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”<h4 >― Bernard M. Baruch</h4>`
];

var addButton = document.getElementById("infoButton");
var quotesDisplay = document.getElementById("quotesDisplay");

function getRandomQuote() {
    if (quotes.length === 0) {
        quotes = [
            `“Be yourself; everyone else is already taken.”<h4 >― Oscar Wilde</h4>`,
            `“So many books, so little time.”<h4 >― Frank Zappa</h4>`,
            `“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”<h4 >― Albert Einstein</h4>`,
            `“A room without books is like a body without a soul.”<h4 >― Marcus Tullius Cicero"</h4>`,
            `“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”<h4 >― Bernard M. Baruch</h4>`
        ];
    }
    
    var randomNum = Math.floor(Math.random() * quotes.length);
    var selectedQuote = quotes[randomNum];
    
    quotesDisplay.innerHTML = selectedQuote;
    
    quotes.splice(randomNum, 1);
}

addButton.addEventListener("click", getRandomQuote);
