const weekSections = document.querySelectorAll('section');
const navBtn = document.querySelectorAll('nav button');
const weekText = document.querySelectorAll('nav h3');
let lastWeek;
let weekCount = 1;

navBtn[0].addEventListener('click', () => {
    if(weekCount > 0) {
        weekCount--
    }
    weekCounter();
})
navBtn[2].addEventListener('click', () => {
    if(weekCount > 0) {
        weekCount--
    }
    weekCounter();
})
navBtn[1].addEventListener('click', () => {
    if(weekCount < 3) {
        weekCount++
    }
    weekCounter();
})
navBtn[3].addEventListener('click', () => {
    if(weekCount < 3) {
        weekCount++
    }
    weekCounter();
})

function weekCounter() {
    weekSections.forEach(week => { week.classList.add('hide') });
    weekSections[weekCount].classList.remove('hide');
    if(weekCount === 0) {
        weekText.forEach(text => {
            text.textContent = '2 mei tot 8 mei';
        })
    } else if (weekCount === 1) {
        weekText.forEach(text => {
            text.textContent = '9 mei tot 15 mei';
        })
    } else if (weekCount === 2) {
        weekText.forEach(text => {
            text.textContent = '16 mei tot 22 mei';
        })
    } else if (weekCount === 3) {
        weekText.forEach(text => {
            text.textContent = '23 mei tot 29 mei';
        })
    }
}

const dateForm = document.querySelector('main form');
const dateInput = document.querySelector('main form input')
const generalEl = document.querySelectorAll('header, footer');
let toggleForm;

function toggleDate(e) {
    if(e.altKey === true && e.keyCode == 70) {
        if(!toggleForm) {
            generalEl.forEach(element => { element.classList.add('hide') })
            weekSections.forEach(element => { element.classList.add('hide') })
            dateForm.classList.remove('hide');
            document.querySelector('main label').focus();
            toggleForm = true;
        } else {
            generalEl.forEach(element => { element.classList.remove('hide') })
            dateForm.classList.add('hide');
            toggleForm = false;
            weekCounter();
        }
    } 
}

function searchDate(e) {
    e.preventDefault();
    let dateValue = dateInput.value;
    date = new Date(dateValue).toLocaleDateString('nl-nl', { day:"numeric", month:"long", year:"numeric"});
    const weekDay = document.querySelectorAll('section button h4');
    weekDay.forEach(day => {
        if(day.textContent.includes(date)) {
            generalEl.forEach(element => element.classList.remove('hide'));
            dateForm.classList.add('hide');
            weekSections.forEach(section => {
                if(section.textContent.trim().includes(date)) {
                    let checkSection = Array.prototype.slice.call(weekSections);
                    weekCount = checkSection.indexOf(section);
                    weekCounter();
                }
            })
            day.focus();
        }
    });
}

window.addEventListener('keydown', toggleDate);
dateForm.addEventListener('submit', searchDate);

