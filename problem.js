function reverse(str) {
    let temp = ""
    let result = ""
    for (let i = 0; i < str.length; i++) {
        const element = str[i];
        if (element === " ") {
            result += temp + " "
            temp = ""
        }
        else {
            temp = element + temp
        }
    }
    result += temp
    return result
}