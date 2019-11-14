// Complete the following procedure, the 'name' variable in all letters to uppercase, output: ' 'HELLO' '.
var name = 'hello';
// TODO write your code here...
name = name.toUpperCase();


// Complete the following procedure, capitalizing all the words in the variable sentence and printing: 'Good Afternoon, Mr Mike.'
var sentence = 'good afternoon, mr mike.';
//TODO write your code here...
sentence = sentence.split(" ");
for (var i = 0, x = sentence.length; i < x; i++) {
    sentence[i] = sentence[i][0].toUpperCase() + sentence[i].substr(1);
}
sentence = sentence.join(" ");


// Complete the following procedure to extract the amount of money variable, output: 20.
var money = '￥20';
//TODO write your code here...
money = money.substr(1);
