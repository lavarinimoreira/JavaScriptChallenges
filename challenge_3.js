// A pangram is a sentence that contains every letter of the alphabet, like:
//"The quick brown fox jumps over the lazy dog"

// Write a function called isPangram, which checks to see if a given sentence contains every letter of the alphabet.
// Make sure you igore string casing!

// isPangram('The five boxing wizards jump quickly') //true
// isPangram('The five boxing wizards jump quick') //false

function isPangram(sentence){
    const alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    let sentenceUpperCased = sentence.toUpperCase();
    for(let characteresOfAlplhabet of alphabet){
        const containsCharactere = sentenceUpperCased.indexOf(characteresOfAlplhabet);
        if(containsCharactere === -1)
            return false;
    }
    return true;
}