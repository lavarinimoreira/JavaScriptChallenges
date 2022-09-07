// Write a getCard() function which returns a random playing card object, like:
// 		{
// 			value: 'K'
// 			suit: 'clubs'
// 		}
//Pick a random value from:
//----A,2,3,4,5,6,7,8,9,10,J,Q,K
//Pick a random suit from:
//----clubs,spades, hearts, diamonds
//Return both in an object

function pickRandonElement(arr){
    // Returns a randon element from arr.
    const idx = Math.floor(Math.random() * arr.length);
    return arr[idx];
}

function getCard(){
    const values = ['A','2','3','4','5','6','7','8','9','10','J','Q','K'];
    const suits = ['clubs','spades','hearts','diamonds'];
    const card = {}

    card.value = pickRandonElement(values);
    card.suit  = pickRandonElement(suits);

    return card;
}
