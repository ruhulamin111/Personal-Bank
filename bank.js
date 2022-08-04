// deposite system 
document.getElementById('deposite-submit').addEventListener('click', function (event) {
    const deposite = document.getElementById('deposite');
    depositeAmount = deposite.value;
    const depositeShow = document.getElementById('deposite-show');
    const currentDeposite = depositeShow.innerText;
    const updateDeposit = parseFloat(currentDeposite) + parseFloat(depositeAmount);
    depositeShow.innerText = updateDeposit;
    deposite.value = '';


})

// withdraw system 
document.getElementById('withdraw-submit').addEventListener('click', function (event) {
    const withdraw = document.getElementById('withdraw');
    withdrawAmount = withdraw.value;
    const withdrawShow = document.getElementById('withdraw-show');
    const currentWithdraw = withdrawShow.innerText;
    const updateWithdraw = parseFloat(currentWithdraw) + parseFloat(withdrawAmount);
    withdrawShow.innerText = updateWithdraw;
    withdraw.value = '';


})
