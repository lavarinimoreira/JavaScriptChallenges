// Write a isValidPassword function
// It accepts 2 arguments: password and username
// Password must:
//	- be at least 8 characters
//  - cannot contain spaces
//  - cannot contain the username
// If all requirements are met, return true.
//Otherwise: false

// isValidPassword('89Fjj1nms', 'dogLuvr');  //true
// isValidPassword('dogLuvr123!', 'dogLuvr') //false
// isValidPassword('hello1', 'dogLuvr') //false

function isValidPassword(password, username){
    const tooShort   = password.length < 8;
    const hasSpace   = password.indexOf(' ') > 0;
    const tooSimilar = password.includes(username);
    if(tooShort || hasSpace || tooSimilar)
        return false;
    return true;
}
