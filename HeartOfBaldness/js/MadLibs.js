
var questions = 14;
var questionsLeft = ' [' + questions + ' questions left]';
var title = prompt('What title are you reviewing?' + questionsLeft);
questions -= 1;
questionsLeft = ' [' + questions + ' questions left]';
var verb = prompt('Name of a verb' + questionsLeft);
questions -= 1;
questionsLeft = ' [' + questions + ' questions left]';
var console = prompt('Name of a game console' + questionsLeft);
questions -= 1;
questionsLeft = ' [' + questions + ' questions left]';
var adjective = prompt('Name of an adjective' + questionsLeft);
questions -= 1;
questionsLeft = ' [' + questions + ' questions left]';
var person = prompt('Name of a person' + questionsLeft);
questions -= 1;
questionsLeft = ' [' + questions + ' questions left]';
var movie = prompt('Name of a movie' + questionsLeft);
questions -= 1;
questionsLeft = ' [' + questions + ' questions left]';
var tvShow = prompt('Name of a TV show' + questionsLeft);
questions -= 1;
questionsLeft = ' [' + questions + ' questions left]';
var number = prompt('Choose a number' + questionsLeft);
questions -= 1;
questionsLeft = ' [' + questions + ' questions left]';
var adjective2 = prompt('Choose an adjective' + questionsLeft);
questions -= 1;
questionsLeft = ' [' + questions + ' questions left]';
var adjective3 = prompt('Choose an adjective' + questionsLeft);
questions -= 1;
questionsLeft = ' [' + questions + ' questions left]';
var title2 = prompt('Name of another game' + questionsLeft);
questions -= 1;
questionsLeft = ' [' + questions + ' questions left]';
var number2 = prompt('Choose a number 1-10' + questionsLeft);

questions -= 1;
questionsLeft = ' [' + questions + ' questions left]';
var adjective4 = prompt('Choose an adjective' + questionsLeft);
questions -= 1;
questionsLeft = ' [' + questions + ' questions left]';
var noun = prompt('Name of a noun' + questionsLeft);


    




alert('All done. Ready for the message?');
var sentence = "<h2>Upon booting up " + title + ' for the first time ';
sentence += ' I immediately noticed how ' + adjective + ' it was. ';
sentence += 'Its graphics scream ' + console + ' era. ';
sentence += 'Prior to the release of ' + title + ', I had a chance to sit down with ' + person + ', the games director. ' ;
sentence += 'I asked them what their biggest influences were in terms of storytelling, ' + person + ' immediately said "' + movie + ' and ' + tvShow + ' had a heavy influence on the games story and narrative structure" and after finishing the campaign I can honestly say that it shows.';
sentence += ' When it comes to the gameplay itself, I found it very ' + adjective2 + '. Throughout the ' + number + ' hour campaign I never once felt ' + adjective3 + '. ';
sentence += 'Many are comparing ' + title + ' to ' + title2 + " and they aren't wrong. ";
sentence += 'Overall i give ' + title + ' a ' + number2 + " out of 10. A very " + adjective4 + " experience.";
sentence += '</h2>';
document.write(sentence);