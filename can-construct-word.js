"use strict";

// add whatever parameters you deem necessary & write doc comment
/** Given a word and letters, find out if we can build word from letters
 *
 *  Takes in a string "word" and a string "letter"
 *
 *  Returns true/false
*/
function canConstructWord(word,letters) {
    if(letters.length < word.length) return false;

    const wordLetterFreq = getFreqCounter(word);
    const letterFreq = getFreqCounter(letters);

    for(let key in wordLetterFreq){
        if(letterFreq[key] < wordLetterFreq[key]){
            return false;
        }
    }
    return true;
}
/** Create a frequency counter and return the object
 *
 *  Takes in a string "items"
 * 
 *  Returns an object
*/
function getFreqCounter(items){
    const freq = {};

    for(const item of items){
        const curr = freq[item] || 0;
        freq[item] = curr+1;
    }
    return freq;
}

//Problem
//Given two strings, can we build string1 from string2
//Inputs: string1(word) , string2(letters)
//Outputs: true/false
    //Notes: letters always in lowercase in both word and letters

//Representation
//('','') => true
//("aa", abc) => false
//("aabb", bcabad) => true

//PseudoCode
//make freq counter for word (string1)
//make freq counter for letters (string2)

//if letters length is less than word, return false

//loop through word obj (for..in)
    //if letterFreq doesnt have the char for word
        //return false

//return true
