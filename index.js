







document.getElementById('claculate').addEventListener('click',function(){
   const food=document.getElementById('food-input');
   const foodTotal=food.value;
   const totalFood=parseFloat(foodTotal)

   const rent=document.getElementById('rent-input');
   const rentTotal=rent.value;
   const totalrent=parseFloat(rentTotal);

   const colthes=document.getElementById('clothes-input');
   const colthesTotal=colthes.value;
   const totalColthes=parseFloat(colthesTotal)

   const totalexpenses=document.getElementById('total-expenses');
  totalexpenses.innerText=totalFood+totalrent+totalColthes


})