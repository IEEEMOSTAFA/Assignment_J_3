function calculateMoney(n) {
    let total_cost ;

    if(n < 0){
        console.log("Invalid Number");
    }
    else{
        total_cost = (n*120) - (500 + (8*50));
              
    }
    return total_cost;

    
    }

    const result = calculateMoney(-130);
    console.log(result);