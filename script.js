const student = "Ершова Дарья Владимировна"; // делали с Богдановой ^_^

document.getElementById("student").innerHTML = student;

const s1_week = Array(16).fill([4, 1, 2, 5, 2, 2, 0]);
const s1_exam = Array(1).fill([0, 2, 0, 2, 0, 0, 0]);
const holiday = Array(2).fill([0, 0, 0, 0, 0, 0, 0]);
const s2_week = Array(23).fill([1, 4, 4, 2, 5, 0, 0]);
const s2_exam = Array(1).fill([2, 0, 2, 0, 2, 0, 0]);

const array = [s1_week, s1_exam, holiday, s2_week, s2_exam];

let weekNumber = 0;
let dayNumber = 0;
let moneybox = 0;

let consolePrise = 23500;
let mealMoney = 250;
let transMoney = 120;
let transMoney_m = 150;

if (transMoney > transMoney_m) {
    alert('Сумма денег, которую дает мама на проезд не может быть меньше суммы проезда');
    
} else {
    for (let i = 0; i < array.length; i++) {
    let typeOfWeek = array[i];

    for (let j = 0; j < typeOfWeek.length; j++) {
        weekNumber = weekNumber + 1;
        console.log(`Неделя номер ${weekNumber}`);
        let week = typeOfWeek[j]

        for (let k = 0; k < week.length; k++) {
            dayNumber = dayNumber + 1;
            console.log(`День номер ${dayNumber}`);
            let sumLesson = week[k];
            console.log(sumLesson);
            if (moneybox >= consolePrise) {
                break
            }
            if ((sumLesson > 0) && (sumLesson <= 3)) {
                
                console.log(`Денюжку откладываем, ибо пар в день: ${sumLesson}`);

                moneybox = moneybox + mealMoney + transMoney;

                console.log(`Отложили: ${mealMoney} руб., в копилке: ${moneybox} руб.`);

            } else if (sumLesson > 3) {
               
                console.log(`Денюжку НЕ откладываем, ибо пар в день: ${sumLesson}`);

                moneybox = moneybox + transMoney;

            } else {
                
                console.log(`Денюжку НЕ откладываем, ибо пар в день: ${sumLesson}`);
            }
            
            if (moneybox >= consolePrise) {
                
                alert(`Ура! Скопили!!! На ${dayNumber} день, сумму ${moneybox}`);
           }
        }  
    }
}
if ((moneybox < consolePrise) && (moneybox != consolePrise)) {
    alert(`На приставку накопить не удалось, но за всё время накоплено ${moneybox} руб`)
}
}