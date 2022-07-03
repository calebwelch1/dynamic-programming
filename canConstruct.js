const canConstruct = (target, strings) => {
    if (target in strings) return true;
    let currentGuess;
    // does current string match beginning of target string?
    for (let i; i < strings.length; i++){
        let prefix;
        let targetArr=target.split('');
        let thisWordArr=strings[i].split();

        if (thisWordArr === targetArr[thisWordArr.length])
    }
}