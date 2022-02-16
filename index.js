function getTotalExpenses(expenses){
    const food=document.getElementById(expenses+'-input');
    const foodTotal=food.value;
    const totalFood=parseFloat(foodTotal)
    return totalFood
}







document.getElementById('claculate').addEventListener('click',function(){
  const totalFood=  getTotalExpenses('food')

//    const rent=document.getElementById('rent-input');
//    const rentTotal=rent.value;
//    const totalrent=parseFloat(rentTotal);
    const totalrent= getTotalExpenses('rent')

//    const colthes=document.getElementById('clothes-input');
//    const colthesTotal=colthes.value;
//    const totalColthes=parseFloat(colthesTotal)
const totalColthes= getTotalExpenses('rent')


   const totalexpenses=document.getElementById('total-expenses');
  totalexpenses.innerText=totalFood+totalrent+totalColthes

 


})