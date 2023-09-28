document.addEventListener('DOMContentLoaded', function() {
    var button = document.getElementById('button');
    button.addEventListener('click', function(event) {
        var nameField = document.getElementsByName('your-name')[0];
        var emailField = document.getElementsByName('email')[0];
        var interestField = document.getElementsByName('interest')[0];
        
        var name = nameField.value;
        var email = emailField.value;
        var interest = interestField.value;

        var isValid = true;

        if (name === "") {
            alert("Nama wajib diisi!");
            event.preventDefault();
            isValid = false;
            nameField.style.border = '2px solid red';
        } else {
            nameField.style.border = '2px solid blue';
        }

        if (email === "") {
            alert("Email wajib diisi!");
            event.preventDefault();
            isValid = false;
            emailField.style.border = '2px solid red';
        } else if (!validateEmail(email)) {
            alert("Format email tidak valid!");
            event.preventDefault();
            isValid = false;
            emailField.style.border = '2px solid red';
        } else {
            emailField.style.border = '2px solid blue';
        }

        if (interest === "") {
            alert("Pilihan minat wajib dipilih!");
            event.preventDefault();
            isValid = false;
            interestField.style.border = '2px solid red';
        } else {
            interestField.style.border = '2px solid blue';
        }

        if (isValid) {
            alert("Formulir berhasil dikirim!");
            document.getElementById('top-up').style.border = '2px solid blue';
        }
    });

    function validateEmail(email) {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
    }
});


let slideIndex = 0;

function showSlides() {
    let slides = document.getElementsByClassName("slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 10000);
}

function plusSlides(n) {
    showSlides(slideIndex += n);
}

document.addEventListener('DOMContentLoaded', function() {
    showSlides();
});
