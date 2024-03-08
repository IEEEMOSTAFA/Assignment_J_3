// pb-1
function calculateMoney(ticketSale) {
    let total_cost ;

    if(ticketSale < 0){
        console.log("Invalid Number");
    }
    else{
        total_cost = (ticketSale*120) - (500 + (8*50));
              
    }
    return total_cost;

    
    }

// pb-2
function checkName(name)
{
    if(typeof name != 'string' ){
        return "invalid";
    }
    if(typeof name === 'number' ){
        return "invalid";
    }
    if(typeof name === 'Array' ){
        return "invalid";
    }

    
    let lastChar = name.charAt(name.length - 1);

    if(lastChar === 'a' || lastChar === 'A' || lastChar === 'e' || lastChar === 'E' || lastChar === 'i' || lastChar === 'I' || lastChar === 'o' || lastChar === 'O' || lastChar === 'u' || lastChar === 'U' || lastChar === 'y' || lastChar === 'Y' || lastChar === 'w' || lastChar === 'W' ){
        return 'Good Name';
    }
    return 'Bad Name'

}
// pb - 3
function deleteInvalids(array) {

    if (!Array.isArray(array)) {
        return "Invalid Array";
    }  

    const result = [];
    for (let i = 0; i < array.length; i++) {
        const item = array[i];
        if (typeof item === 'number' && !isNaN(item)) {
            result.push(item);
        }
    }
     return result;
}
// pb - 4
function password(obj) {
    if (obj.name === undefined || obj.birthYear === undefined || obj.siteName === undefined) {
      return "invalid";
    }
    else if (isNaN(obj.birthYear) || obj.birthYear.toString().length !== 4) {
      return "invalid";
    }
    
      const websiteName = obj.siteName.charAt(0).toUpperCase() + obj.siteName.slice(1);
    
      const strongPass = websiteName + '#' + obj.name + '@' + obj.birthYear;
  
    
    return strongPass;
  }
// pb - 5
 
function monthlySavings(arr,livingCost){
    if(!Array.isArray(arr)  || typeof livingCost != 'number'){
        return "invalid input"
    }
    let sum = 0;
    for(let i = 0; i < arr.length ;i++)
    {
       
        sum += arr[i];
    }
    let total_tax = 0 ;
    for(const payment of arr){
        if( payment >= 3000){
            total_tax += payment * 0.2 ;
        }
    }
    let saving = sum - (total_tax + livingCost);

    
    if( saving >= 0){
        return saving;
    }
    else{
        return "earn more";
    }

}
