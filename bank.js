
// deposite with function 
function getOutput(inputId) {
    const deposite = document.getElementById(inputId);
    depositeAmount = deposite.value;
    const updateDeposit = parseFloat(depositeAmount);
    deposite.value = '';
    return updateDeposit;
}


// deposite system 
document.getElementById('deposite-submit').addEventListener('click', function (event) {
    const depositeAmount = getOutput('deposite')
    const depositeShow = document.getElementById('deposite-show');
    const currentDeposite = depositeShow.innerText;
    const updateDeposit = parseFloat(currentDeposite) + depositeAmount;
    depositeShow.innerText = updateDeposit;

    const balanceShow = document.getElementById('balance-show');
    const balanceAmount = balanceShow.innerText;
    const updateBalance = parseFloat(balanceAmount) + parseFloat(depositeAmount);
    balanceShow.innerText = updateBalance;
    deposite.value = '';

    /* const deposite = document.getElementById('deposite');
    depositeAmount = deposite.value;
    const depositeShow = document.getElementById('deposite-show');
    const currentDeposite = depositeShow.innerText;
    const updateDeposit = parseFloat(currentDeposite) + parseFloat(depositeAmount);
    depositeShow.innerText = updateDeposit;

    const balanceShow = document.getElementById('balance-show');
    const balanceAmount = balanceShow.innerText;
    const updateBalance = parseFloat(balanceAmount) + parseFloat(depositeAmount);
    balanceShow.innerText = updateBalance;
    deposite.value = ''; */

})

// withdraw system 
document.getElementById('withdraw-submit').addEventListener('click', function (event) {
    const withdrawAmount = getOutput('withdraw');
    const withdrawShow = document.getElementById('withdraw-show');
    const currentWithdraw = withdrawShow.innerText;
    const updateWithdraw = parseFloat(currentWithdraw) + withdrawAmount;
    withdrawShow.innerText = updateWithdraw;

    const balanceShow = document.getElementById('balance-show');
    const balanceAmount = balanceShow.innerText;
    const updateBalance = parseFloat(balanceAmount) - parseFloat(withdrawAmount);
    balanceShow.innerText = updateBalance;
    withdraw.value = '';


    /* const withdraw = document.getElementById('withdraw');
    withdrawAmount = withdraw.value;
    const withdrawShow = document.getElementById('withdraw-show');
    const currentWithdraw = withdrawShow.innerText;
    const updateWithdraw = parseFloat(currentWithdraw) + parseFloat(withdrawAmount);
    withdrawShow.innerText = updateWithdraw;

    const balanceShow = document.getElementById('balance-show');
    const balanceAmount = balanceShow.innerText;
    const updateBalance = parseFloat(balanceAmount) - parseFloat(withdrawAmount);
    balanceShow.innerText = updateBalance;
    withdraw.value = ''; */

})

