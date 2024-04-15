function cryptText(text) {
    const vowels = ['а', 'у', 'о', 'ы', 'э', 'я', 'ю', 'ё', 'и', 'е']
    const breakk = text.split(' ')
    const encode = breakk.map(word => {
        if (text.length < 3) {
            return word + 'ик'
        }
        if (vowels[0].toLowerCase()) {
            return 'код' + word
        } else {
            return 'инту' + word
        }
    })
    return encode.join(' ')
}

console.log(cryptText('привет мир'))
console.log(cryptText('карл у клары украл кораллы'))
console.log(cryptText('я Вас обязан известить'))
console.log(cryptText('джон уик'))




function cryptNumbers(number) {
    const a = number.split('').reverse().join('')
    const b = number[0]
    const c = number[number.length - 1]
    if (number.length < 3) {
        return a
    }

    else {
        return b.repeat(2) + number.slice(1, -1) + c.repeat(2);
    }
}


function cryptNumberss(text) {

    const words = text.split(" ");


    const wordss = words.map(word => {

        if (typeof(word) !== "number") {
            return cryptNumbers(word);
        }

        else {
            return word;
        }
    });


    const textt = wordss.join(" ");

    return textt;
}


console.log(cryptNumberss("мне 30 лет"));
console.log(cryptNumberss("я родился в 1991 году"));








