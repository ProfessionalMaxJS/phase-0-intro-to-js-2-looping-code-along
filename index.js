// Code your solutions in this file

function writeCards(names, event){
    const writtenCards = [];
    for(let a=0; a < names.length; a++){
        writtenCards.push(`Thank you, ${names[a]}, for the wonderful ${event} gift!`);}
        return writtenCards;
}  
//returns an array of thank you messages for each name provided to the function

function countDown(start){
    while (start >= 0){
        console.log(start);
        start--
    }
}
//invokes console.log once for each number, counting down from the number provided to zero
//logs each number when counting down, starting from the number provided