//Iteration 1
//1.1
//driver
const hacker1 = 'John';
//1.2
console.log(`The driver's name is ${hacker1}`);
//1.3
//navigator
const hacker2 = 'Wick';
//1.4
console.log(`The navigator's name is ${hacker2}`);

//Iteration 2
//2.1
if(hacker1.length > hacker2.length){
console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
}else if (hacker1.length === hacker2.length){
console.log(`Wow, you both have equally long names,${hacker1.length}  characters!`)
}else if(hacker2.length > hacker1.length){
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
}

//3.1

console.log(...hacker1.toUpperCase());

//3.2
let reverseName = hacker1.split('').reverse().join('');

console.log(reverseName);

//3.3

if(hacker1[0] < hacker2[0]){
console.log(`The driver's name goes first.`)
}else if(hacker2[0] < hacker1[0]){
console.log(`Yo, the navigator goes first definitely.`)
}else if(hacker1[0] === hacker2[0]){
console.log(`What?! You both have the same name?`)
}


const bigText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum porttitor eros nec massa venenatis venenatis. Donec congue lectus nec urna euismod luctus. Fusce ac ante tortor. Morbi eget cursus nisi, sit amet sodales velit. Maecenas hendrerit, justo et vulputate molestie, magna mi mollis odio, in egestas metus erat ut ex. Pellentesque vitae lorem consequat, rhoncus nunc non, tincidunt sem. Aenean mollis gravida leo vitae interdum. Quisque a dictum elit. Sed neque leo, ornare sit amet purus eget, scelerisque aliquet sapien. Donec sed neque mattis, sagittis odio at, elementum justo. Vivamus laoreet vestibulum tortor, a vehicula enim pretium a. Sed mattis justo ipsum, ut accumsan tortor luctus egestas. Donec eleifend dui ut neque pulvinar, at hendrerit ante vehicula. Nam eleifend nibh vel massa tempus pulvinar. Sed cursus massa id dui porttitor, ac cursus nibh posuere. Praesent vitae urna malesuada, finibus tortor ut, suscipit mauris.Mauris tempus ornare sollicitudin. Aenean commodo felis justo, nec rutrum lorem viverra ac. Vestibulum feugiat orci at ligula fermentum, at rhoncus erat auctor. Aenean blandit sodales eros sit amet rhoncus. Nunc tempor, lorem eu gravida maximus, nibh eros bibendum nisl, a rutrum libero urna sed massa. Suspendisse convallis ex eu enim molestie elementum. Aliquam erat volutpat. Pellentesque cursus luctus mattis. Etiam molestie dui id risus euismod, quis lobortis purus vehicula. Duis pretium, lectus sit amDonec fringilla feugiat sapien, quis bibendum eros maximus a. Proin eu nisi a ex iaculis vestibulum at in mauris. Phasellus massa elit, tempor sed tempor a, lacinia lobortis erat. Nam sit amet eleifend felis. Pellentesque vel placerat sapien. Fusce at interdum est. Suspendisse potenti. Quisque vitae tortor id tortor dictum mattis vitae a nisi. Nunc tempor ipsum ac augue vehicula venenatis. Etiam pretium augue mi, id lacinia orci molestie sit amet. Donec laoreet tincidunt mi, non aliquam sem tincidunt sit amet. Nam rutrum laoreet accumsan. Nunc facilisis et velit eget aliquet. Mauris ornare enim sem, eget gravida lacus sollicitudin eu. Maecenas orci ligula, ornare pharetra risus et, dictum luctus neque. Maecenas cursus nisi neque, at pretium nulla efficitur cursus."
//bonus1
//count 
//num of words
console.log(bigText.length);
bigText.split(' ').length;
//num of times et appears
var count = (bigText.match(/et/g) || []).length;
console.log(count);

//bonus2
let phraseToCheck = 'Racecar';
let len = phraseToCheck.length;
let mid = Math.floor(len/2)
for ( let i = 0; i < mid; i++ ) {
        if (phraseToCheck[i] !== phraseToCheck[len - 1 - i]) {
            console.log("not a palindrome");
        }
    }
    console.log("palindrome");


function palindrome(str) {

    var len = str.length;
    var mid = Math.floor(len/2);

    for ( var i = 0; i < mid; i++ ) {
        if (str[i] !== str[len - 1 - i]) {
            return false;
        }
    }

    return true;
}
