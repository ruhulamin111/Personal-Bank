document.getElementById('submit').addEventListener('click', function (event) {
    const name = document.getElementById('name').value;
    event.value = '';
    const password = document.getElementById('password').value;
    if (name == 'bd@gmail.com' && password == '0000') {
        window.location.href = 'bank.html'
    }
})