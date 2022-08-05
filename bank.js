// deposite with function 
function getOutput(inputId) {
    const input = document.getElementById(inputId);
    inputText = input.value;
    const inputAmount = parseFloat(inputText);
    input.value = '';
    return inputAmount;
}
// update total funtion 
function updateTotal(updateId, updateAmount) {
    const updateShow = document.getElementById(updateId);
    const currentUpdate = updateShow.innerText;
    const updateTotal = parseFloat(currentUpdate) + updateAmount;
    updateShow.innerText = updateTotal;
    return updateTotal;
}

// update balance function 
function updateBalance(amount, add) {
    const balanceShow = document.getElementById('balance-show');
    const balanceAmount = balanceShow.innerText;
    const previousAmount = parseFloat(balanceAmount);
    if (add == true) {
        balanceShow.innerText = previousAmount + amount;
    }
    else {
        balanceShow.innerText = previousAmount - amount;
    }
}

// deposite system 
document.getElementById('deposite-submit').addEventListener('click', function (event) {
    const depositeAmount = getOutput('deposite')
    if (depositeAmount > 0) {
        updateTotal('deposite-show', depositeAmount)
        updateBalance(depositeAmount, true)
    }

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
    const balanceShow = document.getElementById('balance-show');
    const balanceAmount = balanceShow.innerText;
    const previousAmount = parseFloat(balanceAmount);
    if (withdrawAmount > 0 && withdrawAmount < previousAmount) {
        updateTotal('withdraw-show', withdrawAmount);
        updateBalance(withdrawAmount, false)
    }

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
