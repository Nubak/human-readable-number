module.exports = function toReadable (number) {
    let a;  
    let b;
    let c;
    let arr = ['zero','one','two','three','four',
    'five','six','seven','eight','nine']; 
    let arr1 = ['ten','eleven','twelve','thirteen', 'fourteen','fifteen','sixteen',
    'seventeen','eighteen','nineteen']; 
    let arr2 = ['twenty','thirty','forty','fifty',
    'sixty','seventy','eighty','ninety'];
    let strNumber = number.toString(); 
            if  (strNumber.length < 2){
            return arr[number];  
            }
            else if  (strNumber.length < 3){
                if (number % 10 === 0 && number != 10){
                    return arr2[number/10 - 2];
                }
                else if (number > 20){
                     a = number - Math.trunc(number/10)*10;
                    return arr2[Math.trunc(number/10) - 2] + ' ' + arr[a];
                }
                else {
                    return arr1[number - 10]; 
                }
            }
            else if  (strNumber.length == 3){
                  b = Math.trunc(number/100);  
                  c = Math.trunc((number - (b * 100))/10);
                  m = number - (b*100 + c*10);
                  w = number - (b*100);
                  if ( number % 100 === 0){
                      return arr[b] + ' hundred';
                  }
                  if (number % 10 === 0){
                      if ( w == 10){
                        return arr[b] + ' hundred ' + arr1[w - 10];
                      }
                      else {
                      return arr[b] + ' hundred ' + arr2[ c - 2 ] ;
                  }
                }
                  else {
                      if (!c){
                        return arr[b] + ' hundred ' + arr[w];    
                      }
                      else if ( w < 20){
                          return arr[b] + ' hundred ' + arr1[w - 10];
                      }
                      else {
                      return arr[b] + ' hundred ' + arr2[ c - 2] + ' ' + arr[m];
                  }
                }
            }

  
}

