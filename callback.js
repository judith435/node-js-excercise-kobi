


function callMe(callback) {
    /*
    if (typeof callback !== 'function') {

    }
    */
    const trueOrFalse = Math.ceil(Math.random()*10) % 2 == 0;
    
    if (trueOrFalse) {
        callback(new Error('true happend'));
    }

    callback(null, 'Good things happens');
}



callMe(funny)


function funny(err, str) {
    if (err) {
        console.log(err);
    }

    console.log(str);
}