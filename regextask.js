function validatecard(cardnumber){
    cardNumber = cardnumber.replace(/[^\d]/g,"");
    if (!/^\d{13,16}$/.test(cardnumber)) {
        return "Invalid Card Number"
    }

    if (!luhnAlgorithm(cardnumber)){
        return "Invalid card Number"
    }


    var cardtype = getcardtype(cardnumber);
    return "Valid" + cardtype + "card number";
}

function luhnAlgorithm(cardnumber){
    var sum = 0 ;
    var doubleup = false;
    for (var i = cardnumber.length - 1; i >= 0; i--){
        var digit = parseInt(cardnumber.charAt(i),10);
        if (doubleup) {
            digit *= 2;
            if (digit > 9){
                digit -= 9;
            }
        }
        sum += digit;
        doubleup = !doubleup
    }

    return (sum % 10 === 0)
}

function getcardtype(cardnumber){
    if (/^4/.test(cardnumber)){
        return "Visa";

    }else if (/^5[1-5]/.test(cardnumber)){
        return "Mastercard"

    }else if (/^3[47]/.test(cardnumber)){
        return "American Express"
    }else if(/^6(?:011|5)/.test(cardnumber)){
        return "Discover"
    }else{
        return "unknown"
    }
}


var cardnumber ="5555555555554444";
var cardnumber2 ="4012888888881881"
var cardnumber3 = "371449635398431"
var cardnumber4 = "6011000990139424"
console.log(validatecard(cardnumber4));

