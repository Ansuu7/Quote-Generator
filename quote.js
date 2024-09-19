function generate(){
var quotes={"-Oscar Wilde":'“Be yourself; everyone else is already taken.”',
    "-Albert Einstein":'“Two things are infinite: the universe and human stupidity; and Im not sure about the universe."',
    "― Bernard M. Baruch":'“Be who you are and say what you feel, because those who mind do not matter, and those who matter do  not mind.”',
    "― J.K. Rowling, Harry Potter and the Goblet of Fire":'“If you want to know what a man is like, take a good look at how he treats his inferiors, not his equals.”',
    "― Narcotics Anonymous":'“Insanity is doing the same thing, over and over again, but expecting different results.”',
     "― Andre Gide, Autumn Leaves":'“It is better to be hated for what you are than to be loved for what you are not.”',
    "― Marilyn Monroe":'“I believe that everything happens for a reason. People change so that you can learn to let go, things go wrong so that you appreciate them when they are right, you believe lies so you eventually learn to trust no one but yourself, and sometimes good things fall apart so better things can fall together.”'
}
var authors = Object.keys(quotes);
var author = authors[Math.floor(Math.random() * authors.length)];
var quote = quotes[author];
document.getElementById("quote").innerHTML = quote;
document.getElementById("author").innerHTML = author;
} 