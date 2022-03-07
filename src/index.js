module.exports = function toReadable (number) {
    const numArr = [
        [
            'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine',
            'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'
        ],
        [
            'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'
        ]
    ];

    const getDecimal = (num) => {
        if (num < 20) {
            return numArr[0][num];
        }

        const first = Math.floor(num / 10);
        const second = num % 10;

        const ten = numArr[1][first - 2];
        const res = second ? numArr[0][second] : '';

        return [ten, res].join(` `).trim();
    };

    if (number < 100) {
        return getDecimal(number);
    } else {
        const first = Math.floor(number / 100);
        const second = number % 100;

        let hundred = first ? `${numArr[0][first]} hundred` : ``;
        let tens = second ? getDecimal(second) : ``;

        return [hundred, tens].join(` `).trim();
    }
}
