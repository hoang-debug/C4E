// //Bai 1
let strInput = prompt(`Nhập một chuỗi:`);
let arr = strInput.split('');
let arrSecond = ``
console.log(arr)
for (let i = arr.length - 1; i >= 0; i--) {
    arrSecond += arr[i];
}
alert(arrSecond)
// //Bai 2
let str_input = prompt(`Nhập một chuỗi:`);
let arr_input = str_input.split(" ");
console.log(arr_input);
for (let i = 0; i < arr_input.length; i++) {
    arr_input[i] = arr_input[i][0].toUpperCase() + arr_input[i].substr(1);
}
alert(arr_input.join(" "))
// //Bai 3
let str_Input = prompt(`Nhập một mảng cách nhau bởi dấu phẩy:`);
let arr_Input = str_Input.split(',');
let uniqueArr = [new Set(arr_Input)];
console.log(uniqueArr)
// //Bai 4
let employeesMindX = [
    { name: `Hoang`, age: 22, wage: 1000, position: `developer` },
    { name: `Linh`, age: 21, wage: 1000, position: `assistant` },
    { name: `Hai`, age: 25, wage: 2000, position: `manager` }
]
while (true) {
    let command = prompt(`Welcome, what do you want (Read, Create, Update, Delete)`)
    if (!command) {
        alert(`Logged out!`)
        break;
    }
    let cmd = command.toLowerCase();
    if (cmd === `read`) {
        for (let i = 0; i < employeesMindX.length; i++) {
            console.log(`#${i + 1}`);
            console.log(`Name: ${employeesMindX[i].name}`);
            console.log(`Age: ${employeesMindX[i].age}`);
            console.log(`Wage: ${employeesMindX[i].wage}`);
            console.log(`Position: ${employeesMindX[i].position}`);
            console.log(`--------------------------------------`)
        }
    }
    else if (cmd === `creat`) {
        let newEmployee = {}
        newEmployee.name = prompt(`Name:`);
        newEmployee.age = prompt(`Age:`);
        newEmployee.wage = prompt(`Wage:`);
        newEmployee.position = prompt(`Position:`);
        employeesMindX.push(newEmployee)
        alert(`Done!`)
    }
    else if (cmd === `update`) {
        while (true) {
            let update = Number(prompt(`Enter the position you want to update: // Press cancel to comeback`));
            if (!update) {
                break;
            }
            while (true) {
                let updateObject = prompt(`Choose what to update (name, age, wage, position): // Press cancel to comeback`)
                if (!updateObject) {
                    break;
                }
                let updateObjectLow = updateObject.toLowerCase();
                employeesMindX[update - 1][updateObjectLow] = prompt(`Update ${updateObjectLow}:`);
            }
        }
    }
    else if (cmd === `delete`) {
        while (true) {
            let deleteEmployee = Number(prompt(`Enter the position you want to delete: // Press cancel to comeback`));
            if (!deleteEmployee) {
                break;
            }
            employeesMindX.splice(deleteEmployee - 1, 1)
        }
    }
}
//Bai 5
let dateString = prompt(`Input string is a valid date formatted as "dd/mm/yyyy":`);
while (true) {
    if (!/^\d{1,2}\/\d{1,2}\/\d{4}$/.test(dateString)) {
        alert(`Wrong date format, please input again!`);
        break;
    }
    let parts = dateString.split("/");
    let day = parseInt(parts[0], 10);
    let month = parseInt(parts[1], 10);
    let year = parseInt(parts[2], 10);
    if (year < 1000 || year >= 10000 || month == 0 || month > 12) {
        alert(`Wrong date format, please input again!`)
        break;
    }
    let monthLength = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if (year % 400 == 0 || (year % 100 != 0 && year % 4 == 0)) {
        monthLength[1] = 29;
    }
    if (!(day > 0 && day <= monthLength[month - 1])) {
        alert(`Invalid Date!`)
        break;
    }
    else {
        alert(`Valid Date`)
        let nextDay;
        let nextMonth;
        let nextYear;
        if (day == monthLength[month - 1]) {
            nextDay = 1;
            if (month == 12) {
                nextMonth = 1;
                nextYear = year + 1
            }
            else {
                nextMonth = month + 1;
                nextYear = year
            }
        }
        else {
            nextDay = day + 1;
            nextMonth = month;
            nextYear = year
        }
        alert(`The next day is ${nextDay}/${nextMonth}/${nextYear}`)
        break;
    }
}

