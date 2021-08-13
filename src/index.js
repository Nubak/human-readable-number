module.exports = function toReadable (number) {
let a;  
let b;
let c;
let units = ['zero','one','two','three','four',
             'five','six','seven','eight','nine']; 
let dozens = ['ten','eleven','twelve','thirteen', 'fourteen','fifteen','sixteen',
              'seventeen','eighteen','nineteen']; 
let hundreds = ['twenty','thirty','forty','fifty',
                'sixty','seventy','eighty','ninety'];
let strNumber = number.toString(); 
if  (strNumber.length < 2){
    return units[number];  
    }
else if  (strNumber.length < 3){
    if (number % 10 === 0 && number != 10){
        return hundreds[number/10 - 2];
    }
else if (number > 20){
    a = number - Math.trunc(number/10)*10;
        return hundreds[Math.trunc(number/10) - 2] + ' ' + units[a];
    }
else {
    return dozens[number - 10]; 
    }
    }
else if  (strNumber.length == 3){
    b = Math.trunc(number/100);  
    c = Math.trunc((number - (b * 100))/10);
    m = number - (b*100 + c*10);
    w = number - (b*100);
if ( number % 100 === 0){
    return units[b] + ' hundred';
    }
if (number % 10 === 0){
    if ( w == 10){
        return units[b] + ' hundred ' + dozens[w - 10];
        }
    else {
        return units[b] + ' hundred ' + hundreds[ c - 2 ] ;
        }
    }
else {
    if (!c){
        return units[b] + ' hundred ' + units[w];    
        }
    else if ( w < 20){
        return units[b] + ' hundred ' + dozens[w - 10];
        }
    else {
        return units[b] + ' hundred ' + hundreds[ c - 2] + ' ' + units[m];
        }
    }
    }  
}

