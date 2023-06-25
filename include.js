async function includeHTML() {
    let includeElements = document.querySelectorAll('[w3-include-html]');
    for (let i = 0; i < includeElements.length; i++) {
        const element = includeElements[i];
        file = element.getAttribute("w3-include-html"); // "includes/header.html"
        let resp = await fetch(file);
        if (resp.ok) {
            element.innerHTML = await resp.text();
        } else {
            element.innerHTML = 'Page not found';
        }
    }
}

function showMobileNav() {
    document.getElementById('mobile-nav').classList.add('mobile-nav-show');
}

function hideMobileNav() {
    document.getElementById('mobile-nav').classList.remove('mobile-nav-show');
}

function newsletter() {
    let email = document.getElementById('input-newsletter').value;

    if (email.includes('@' && '.') == false) {
        document.getElementById('newsletter').classList.add('newsletter-error');
        // alert('Bitte geben Sie eine gültige E-Mail Adresse ein.');
    } else {
        document.getElementById('newsletter').innerHTML = 'Du hast dich erfolgreich zum Newsletter angemeldet!';
        document.getElementById('newsletter').classList.add('newsletter-success');
    }
}

function calculateServings() {

    let persons = +document.getElementById('persons').value;
    let amount = [200, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 2, 0.5, 250, 0.5, 75];
    let portions = [];

    for (let i = 0; i < amount.length; i++) {
        let portion = amount[i] * persons;
        portions.push(portion);
    }

    document.getElementById('number1').innerHTML = `${portions[0]}`;
    document.getElementById('number2').innerHTML = `${portions[1]}`;
    document.getElementById('number3').innerHTML = `${portions[2]}`;
    document.getElementById('number4').innerHTML = `${portions[3]}`;
    document.getElementById('number5').innerHTML = `${portions[4]}`;
    document.getElementById('number6').innerHTML = `${portions[5]}`;
    document.getElementById('number7').innerHTML = `${portions[6]}`;
    document.getElementById('number8').innerHTML = `${portions[7]}`;
    document.getElementById('number9').innerHTML = `${portions[8]}`;
    document.getElementById('number10').innerHTML = `${portions[9]}`;
    document.getElementById('number11').innerHTML = `${portions[10]}`;
    document.getElementById('number12').innerHTML = `${portions[11]}`;

    portions = [];
}

function qanda_question1() {
    document.getElementById('qanda-answer1').classList.add('qanda-answer-click');
}
function qanda_answer1() {
    document.getElementById('qanda-answer1').classList.remove('qanda-answer-click');
}
function qanda_question2() {
    document.getElementById('qanda-answer2').classList.add('qanda-answer-click');
}
function qanda_answer2() {
    document.getElementById('qanda-answer2').classList.remove('qanda-answer-click');
}
function qanda_question3() {
    document.getElementById('qanda-answer3').classList.add('qanda-answer-click');
}
function qanda_answer3() {
    document.getElementById('qanda-answer3').classList.remove('qanda-answer-click');
}
function qanda_question4() {
    document.getElementById('qanda-answer4').classList.add('qanda-answer-click');
}
function qanda_answer4() {
    document.getElementById('qanda-answer4').classList.remove('qanda-answer-click');
}