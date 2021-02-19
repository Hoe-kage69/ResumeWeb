console.log('Its working')

let theme = localStorage.getItem('theme')

if (theme == null) {
    setTheme('light')
} else {
    setTheme(theme)
}

let themeDots = document.getElementsByClassName('theme-dot')

for (var i = 0; themeDots.length > i; i++) {
    themeDots[i].addEventListener('click', function() {
        let mode = this.dataset.mode
        console.log('Option clicked:', mode)
        setTheme(mode)
    })
}

function setTheme(mode) {
    if (mode == 'light') {
        document.getElementById('theme-style').href = 'default.css'
    }

    if (mode == 'blue') {
        document.getElementById('theme-style').href = 'blue.css'
    }

    if (mode == 'green') {
        document.getElementById('theme-style').href = 'green.css'
    }

    if (mode == 'orange') {
        document.getElementById('theme-style').href = 'orange.css'
    }

    localStorage.setItem('theme', mode)
}

const submit = document.querySelector("#submit")

submit.addEventListener("click", (e) => {
    e.preventDefault();
    localStorage.setItem("formValues", JSON.stringify(store()));

    alert("Form sent");
});

function store() {
    let inputName = document.querySelector(".name").value;
    let inputSubject = document.querySelector(".subject").value;
    let inputEmail = document.querySelector(".email").value;
    let inputMessage = document.querySelector(".message").value;

    const formValues = {
        inputName: inputName,
        inputSubject: inputSubject,
        inputEmail: inputEmail,
        inputMessage: inputMessage,
    };

    return formValues;
}