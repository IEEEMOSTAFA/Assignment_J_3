





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
            total_tax += payment * 0.2 
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

const payment = 100;
const cost = [ 900 , 2700 , 3400];
const saving = monthlySavings(payment,cost);
console.log(saving);