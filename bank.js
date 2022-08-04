// deposite system 
document.getElementById('deposite-submit').addEventListener('click', function (event) {
    const deposite = document.getElementById('deposite');
    depositeAmount = deposite.value;
    const depositeShow = document.getElementById('deposite-show');
    depositeShow.innerText = depositeAmount;
    deposite.value = '';


})
