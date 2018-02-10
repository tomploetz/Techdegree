//declare quotes array and create quote objects
var quotes = [
    {
        quote : 'You can do anything but not everything',
        source : 'David Allen',
        citation : 'Making It All Work',
        year : '2009',
    },
    {
        quote : "There is some good in this world, and it’s worth fighting for.",
        source : 'J.R.R. Tolkien',
        citation : 'The Two Towers',
        year : '1954',
    },
    {
        quote : 'Get busy living, or get busy dying.',
        source : 'Stephen King',
        citation : 'Different Seasons',
        year : '1982',
    },
    {
        //quote without citation to test data checks
        quote : 'Travel far enough, you meet yourself.',
        source : 'David Mitchell',
        citation : '',
        year : '2012',
    },
    {
        //quote without year to test data checks
        quote : 'Most people are nice when you finally see them.',
        source : 'Harper Lee',
        citation : 'To Kill a Mockingbird',
        year : '',
    },
];

//function to randomly select a quote from the quotes array
function getRandomQuote(){
    // variable to generate random number
    var randomNumber = Math.floor(Math.random() * quotes.length);
    //return the quote that matches the random number generated   
    return quotes[randomNumber]; 
}

//prints the quote chosen from the random quote function
function printQuote(){
    var print = getRandomQuote();
    //add the quote and source to the variable to be printed
    var printQuotePhrase = '<p class="quote">' + print.quote + '</p>';
        printQuotePhrase += '<p class="source"> ' + print.source ;
    //check if either citation or year are empty, if so add the other to the message variable
        if (print.citation !== ''){     
            printQuotePhrase += '<span class="citation">' + print.citation + '</span>' + '</p>';
        } 
        
        if (print.year !== ''){
            printQuotePhrase += '<span class="year">' + print.year + '</span>' + '</p>';
        } 
    //write the full quote to the HTML page
    document.getElementById('quote-box').innerHTML = printQuotePhrase;
}
   
//randomly generate and display a quote 20000 miliseconds after button is clicked
function intervalQuote(){
    var timeout = window.setTimeout(printQuote, 20000);
}

// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);











