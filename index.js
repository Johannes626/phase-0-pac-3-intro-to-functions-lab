
function shout(string) {
    return string.toUpperCase();
}

function whisper(string) {
    return string.toLowerCase();
}

function logShout(string) {
    console.log (string.toUpperCase());
    return string.toUpperCase();
}

function logWhisper(string) {
    console.log (string.toLowerCase());
    return string.toLowerCase();
}

const string2 = "Let\'s have dinner together!"

function sayHiToHeadphonedRoommate(string2) {
    let reply;
    if (string2 === string2.toLowerCase()) {
        reply = 'I can\'t hear you!'
    } else if (string2 === string2.toUpperCase()) {
        reply = 'YES INDEED!'
    } else {
        reply = 'I would love to!'    
    }
    return reply
}
