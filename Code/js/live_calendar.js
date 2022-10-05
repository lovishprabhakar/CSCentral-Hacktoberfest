let daylist = document.querySelector(".dates");
let monthname = document.querySelector(".name");
let yearname = document.querySelector(".year_name");
let previous = document.querySelector(".prev_arrow");
let next = document.querySelector(".next_arrow");

let date = new Date();
let month = date.getMonth() + 1;
let year = date.getFullYear();
let current = date.getDate();

let month_array = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

function calendar() {
    monthname.innerHTML = month_array[month - 1];
    yearname.innerHTML = year;
    daylist.innerHTML = ''; 

    month_days = new Date(year, month, 0).getDate();
    first_day = new Date(year, month - 1, 1).getDay();
    let gaps
    if (first_day === 0) {
        gaps = 0;
    }
    else {
        gaps = first_day;
    }
    for (let i = -gaps + 1; i <= month_days; i++) {

        if (i <= 0) {
            const real_day = document.createElement("div");
            real_day.innerHTML = '';
            daylist.appendChild(real_day);
        }


        else if (i === current && year === date.getFullYear() && month === date.getMonth() + 1) {
            const real_day = document.createElement("div");
            real_day.setAttribute('class', 'active');
            real_day.innerHTML = i;
            daylist.appendChild(real_day);
        }

        else {
            const real_day = document.createElement("div");
            real_day.innerHTML = i;
            daylist.appendChild(real_day);
        }



    }
}

previous.addEventListener('click', onclickback);

function onclickback() {
    if (month === 1) {
        month = 12;
        year--;
    }
    else month = month - 1;
    calendar();

}

next.addEventListener('click', onclickforward);

function onclickforward() {
    if (month === 12) {
        month = 1;
        year++;
    }
    else month = month + 1;
    calendar();
}