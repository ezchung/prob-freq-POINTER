// add whatever parameters you deem necessary & write doc comment
function canConstructWord(word,letters) {
    const wordLetterFreq = getFreqCounter(word);
    const letterFreq = getFreqCounter(letters);

    if(letters.length < word.length) return false;

    for(let key in wordLetterFreq){
        if(letterFreq[key] < wordLetterFreq[key]){
            return false;
        }
    }
    return true;
}

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

    
