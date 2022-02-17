function getInputTotal(getId){
  const input=document.getElementById(getId);
  const TotalInput=parseFloat(input.value);
  input.value='';
  return TotalInput
}



document.getElementById('claculate').addEventListener('click',function(){
  // const foodInput=document.getElementById('food-input');
  // const foodTotal=parseFloat(foodInput.value);
  const foodTotal=getInputTotal('food-input')
  
  // const rentInput=document.getElementById('rent-input');
  // const rentTotal=parseFloat(rentInput.value);
  const rentTotal=getInputTotal('rent-input')


  // const clothesInput=document.getElementById('clothes-input');
  // const clothesTotal=parseFloat(clothesInput.value)
  const clothesTotal=getInputTotal('clothes-input')

  const total=foodTotal+rentTotal+clothesTotal
  const totalexpenses=document.getElementById('total-expenses');
totalexpenses.innerText=total

   const income=getInputTotal('income-input');
  const balance=income-total;
    
  const BalanceInput=document.getElementById('balance');
    BalanceInput.innerText=balance

  
})