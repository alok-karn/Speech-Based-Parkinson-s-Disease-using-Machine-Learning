// minimum time to type a string from a 3x3 keypad
// STRING s
// STRING keypad

function entryTime(s, keypad) {
    // Write your code here
    let time = 0;
    let current = keypad.indexOf(s[0]);
    for (let i = 1; i < s.length; i++) {
        let next = keypad.indexOf(s[i]);
        time +=
            Math.abs(Math.floor(current / 3) - Math.floor(next / 3)) +
            Math.abs((current % 3) - (next % 3));
        current = next;
    }
    return time;
}
