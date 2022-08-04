document.getElementById('submit').addEventListener('click', function (event) {
    const name = document.getElementById('name').value;
    const password = document.getElementById('password').value;
    if (name == 'bd@email.com' && password == '0000') {
        window.location.href = 'bank.html'
    }
})