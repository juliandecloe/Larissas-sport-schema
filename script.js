const weekSections = document.querySelectorAll('section');
const navBtn = document.querySelectorAll('nav button');
const weekText = document.querySelector('nav h3');
let lastWeek;
let weekCount = 1;

navBtn[0].addEventListener('click', () => {
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

function weekCounter() {
    weekSections.forEach(week => { week.classList.add('hide') });
    weekSections[weekCount].classList.remove('hide');
    if(weekCount === 0) {
        weekText.textContent = '2 mei tot 8 mei';
    } else if (weekCount === 1) {
        weekText.textContent = '9 mei tot 15 mei';
    } else if (weekCount === 2) {
        weekText.textContent = '16 mei tot 22 mei';
    } else if (weekCount === 3) {
        weekText.textContent = '23 mei tot 29 mei';
    }
}

// const mainEl = document.querySelector('main');
// let date = new Date();
// // date.setDate(date.getDate - 1);

// createCalendar();

// function createCalendar() {
//     date = getMonday(new Date())
//     let intervalCount = 0;
//     let createDays = setInterval(function () {
//         mainEl.insertAdjacentHTML('beforeend', `
//             <article>
//                 <h3>${new Intl.DateTimeFormat('nl', { dateStyle: 'full' }).format(date)}</h3>
//             </article>
//         `);
//         date.setDate(date.getDate() + 1)
//         if (++intervalCount === 7) {
//             window.clearInterval(createDays);
//             intervalCount = 0;
//         }
//     });  
// }

// function getMonday(d) {
//     d = new Date(d);
//     let day = d.getDay(),
//         diff = d.getDate() - day + (day == 0 ? -6:1); // adjust when day is sunday
//     return new Date(d.setDate(diff));
// }

//Grab day of the week from local computer




// const btnNext = document.querySelector('')
// let weekChecker = 0;

// mainEl[weekChecker].classList.remove('hide');

// btnNext.addEventlistener('click', () => {
//     weekChecker++;
//     if(weekChecker > 4) {
//         weekChecker = 4;
//     }
//     mainEl.forEach(item => item.classList.add('hide'));
//     mainEl[weekChecker].classList.remove('hide');
// });

// btnPrev.addEventlistener('click', () => {
//     weekChecker--;
//     if(weekChecker < 0) {
//         weekChecker = 0;
//     }
//     mainEl.forEach(item => item.classList.add('hide'));
//     mainEl[weekChecker].classList.remove('hide');
// });
