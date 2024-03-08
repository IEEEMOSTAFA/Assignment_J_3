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

    const result = calculateMoney(10);
    console.log(result);