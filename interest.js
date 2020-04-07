// @ts-check

//data array holding values for principal and time
var data = [{principal:"2500", time:"1.8"}, 
            {principal:"1000", time:"5"},
            {principal:"3000", time:"1"},
            {principal:"2000", time:"3"}];
      
/* interestCalculator Function calculates interest using the conditional rates */
function interestCalculator(newData){

    let rate = 0;
    let interestData = [];

    for(let index of newData){
      
        //conditional statements to determine rate 
                if ((index.principal >= 2500) && (index.time > 1 && index.time < 3)) {
                      rate = 3;
                  }
                else  if (index.principal >= 2500 && index.time >= 3) {
                          rate = 4;
                      }
                else  if (index.principal < 2500 || index.time <= 1) {
                          rate = 2;
                      }
                      else { rate = 1}
            


            let interest = (index.principal * index.time * rate)/100;      

            interestData.push( {principal:index.principal, rate: rate, time:index.time, interest: interest} );

      }


console.log(interestData);
return interestData;
}
