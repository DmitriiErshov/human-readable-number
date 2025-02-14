module.exports = function toReadable (number) {
    let one = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    let ten = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']; 
    let tensy = ["", 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

    let zeroItems = number.toString().charAt(2) == 0 ? '' : ' ' + one[number%10];
    let tensyItems = (number % 100 >= 11 && number % 100 <= 19);
    let tenItems = tensyItems ? ' ' + tensy[number.toString().charAt(2)] : ' ' + ten[number.toString().charAt(1)];
    
    if (number.toString().length === 1) {
        return one[number];
    }

    else if (number.toString().length === 2 && tensyItems) {
        return tensy[number.toString().charAt(1)];
    }

    else if (number.toString().length === 2) {
        return ten[number.toString().charAt(1)];
    }

    else if (number.toString().length === 3 && tensyItems) {
        return one[Math.trunc(number/100)] + ' hundred' + tenItems;
    }
    
    if (number.toString().length === 3) {
        return one[Math.trunc(number/100)] + ' hundred' + tenItems + zeroItems;
    }
};

// } else if (str.length === 3) {
//     if (str[1] == 0 && str[2] == 0) {
//         return oneArr[str[0]] + ' hundred';
//     } else if (str[1] == 0 && str[2] != 0) {
//         return oneArr[str[0]] + ' hundred ' + oneArr[str[2]];     
//     } else if (str[1] != 0 && str[2] == 0) {
//         return oneArr[str[0]] + ' hundred ' + tensArr[str[1]];        
//     } else if (str[1] == 1) {
//         return oneArr[str[0]] + ' hundred ' + dozensArr[str[2]];
//     }  else if (str[1] > 1) {
//         return oneArr[str[0]] + ' hundred ' + tensArr[str[1]] + ' ' + oneArr[str[2]];
//     }
// }