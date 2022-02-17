function getInputTotal(getId){
  const input=document.getElementById(getId);
  const TotalInput=parseFloat(input.value);
  input.value='';
  return TotalInput
}



document.getElementById('claculate').addEventListener('click',function(){
  const foodTotal=getInputTotal('food-input')
  const rentTotal=getInputTotal('rent-input')
  const clothesTotal=getInputTotal('clothes-input')
  const total=foodTotal+rentTotal+clothesTotal
  if(total>0){

    const totalexpenses=document.getElementById('total-expenses');
    totalexpenses.innerText=total
    
   const income=getInputTotal('income-input')
   if(income>0){
    const balance=income-total;
     
    const BalanceInput=document.getElementById('balance');
      BalanceInput.innerText=balance
   }
  
  }
  else{
    alert('Your number is incorrect.Please enter the correct number!!')
  }


  
})