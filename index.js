function getInputTotal(getId){
  const input=document.getElementById(getId);
  const TotalInput=parseFloat(input.value);
  input.value='';
  return TotalInput
}



document.getElementById('claculate').addEventListener('click',function(){
 
  
      const income=getInputTotal('income-input')
      const foodTotal=getInputTotal('food-input')
        const rentTotal=getInputTotal('rent-input')
        const clothesTotal=getInputTotal('clothes-input')
      if(income>0 && foodTotal>0 && rentTotal>0 && clothesTotal>0){
        const total=foodTotal+rentTotal+clothesTotal
        if(income>total){
          const totalexpenses=document.getElementById('total-expenses');
          totalexpenses.innerText=total;
       const balance=income-total;
      
        const BalanceInput=document.getElementById('balance');
        BalanceInput.innerText=balance

        document.getElementById('save').addEventListener('click',function(){


          
          const saveInputTotal=getInputTotal('saveInput')
          
          if(saveInputTotal>0){
            saveInput.value=balance / (Math.round(saveInputTotal));
            
          }
          else{
            alert('Your number is incorrect. Please enter the correct number')
          }
          
          const savingAmount=document.getElementById('saving-amount');
          savingAmount.innerText=saveInput.value
          const remainingBalance=document.getElementById('remaining-balance');
          remainingBalance.innerText=balance - (Math.round(saveInput.value) );
          saveInput.value='';
         
        })
        }  
      }
      else{
        alert('Your number is incorrect. Please enter the correct number')
      }
      
})



