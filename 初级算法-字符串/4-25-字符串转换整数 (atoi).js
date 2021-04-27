const INT_MAX = 2 ** 31 - 1
const INT_MIN = -INT_MAX - 1

class Automaton {
    constructor() {
        this.state = 'start'
        this.sign = 1
        this.ans = 0
        this.table = {
            'start': ['start', 'signed', 'in_number', 'end'],
            'signed': ['end', 'end', 'in_number', 'end'],
            'in_number': ['end', 'end', 'in_number', 'end'],
            'end': ['end', 'end', 'end', 'end'],
        }
    }

    get_col(c) {
        if (c == " ")
            return 0
        if (c == '+' || c == '-')
            return 1
        if (/[0-9]/.test(c))
            return 2
        return 3
    }

    get(c) {
        this.state = this.table[this.state][this.get_col(c)]
        if ("in_number" == this.state) {
            this.ans = this.ans * 10 + c * 1;
            this.ans = this.sign == 1 ? Math.min(this.ans, INT_MAX) : Math.min(this.ans, -INT_MIN);
            
        } else if ("signed" == this.state) {
            this.sign = (c == '+') ? 1 : -1;
            console.log(this.sign);
        }
    }
}

var myAtoi = function (str) {
    let automaton = new Automaton();
    let length = str.length;
    for (let i = 0; i < length; ++i) {
        automaton.get(str.charAt(i));
    }
    return automaton.sign * automaton.ans * 1;
}


console.log(myAtoi("-91283472332"), INT_MIN);