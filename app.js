'use strict';
let y = document.querySelector('.yearDC');
let m = document.querySelector('.monthDC');
let d = document.querySelector('.dayDC');
let startYear = 1939, startDM = 0, finishDay = 31, finishMonth = 12;
let finishYear = new Date().getFullYear();
let res = document.getElementById('resultDC');

y.insertAdjacentHTML('afterbegin', fillSelects(startYear, finishYear, 'Year'));
d.insertAdjacentHTML('afterbegin', fillSelects(startDM, finishDay, 'Day'));
m.insertAdjacentHTML('afterbegin', fillSelects(startDM, finishMonth, 'Month'));

document.querySelector('#checkResult').addEventListener('click', function () {
    if (!y.value || !m.value || !d.value) {
        res.innerText = 'fill all input';
    } else {
        let a = Number(y.value + m.value + d.value);
        let dc = checkNum(a);
        res.innerHTML = `<span class="numDC">${dc}</span>`;
        
    }
});

function fillSelects(min, max, optDate) {
    let list = `<option value="">&nbsp; ${optDate} &nbsp;</option>`;
    do {
        list += `<option value="${max}">${max}</option>`;
        max -= 1;
    } while (max > min);
    return list;
}

function checkNum(firstNum) {
    while (firstNum >= 10) {
        let b = sumDigitFromNumber(firstNum);
        firstNum = b;
    };
    return firstNum;
}

function sumDigitFromNumber(num) {
    let newNum = 0;
    String(num).split('').map(function callback(element) {
        newNum += Number(element);
    });
    return newNum;
};

