if (document.getElementById('contactForm')) {
    document.getElementById('contactForm').addEventListener('submit', function(e) {
        e.preventDefault();

        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var message = document.getElementById('message').value;

        localStorage.setItem('name', name);
        localStorage.setItem('email', email);
        localStorage.setItem('message', message);



        window.location.href = "mesajlar.html";
    });
}


if (document.getElementById('showName')) {
    document.getElementById('showName').textContent = localStorage.getItem('name');
    document.getElementById('showEmail').textContent = localStorage.getItem('email');
    document.getElementById('showMessage').textContent = localStorage.getItem('message');
}
