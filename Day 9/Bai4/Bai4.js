console.log(document.getElementById(`ts_tbody`));
let tbodyElement = document.getElementById(`ts_tbody`);
let projectNameInp = document.getElementById(`addProject`);
document.getElementById(`addButton`).addEventListener(`click`, function () {
    let tagRow = document.createElement(`tr`);
    let tagProject = document.createElement(`td`);
    let textProject = document.createTextNode(`test`);
    let tagTask = document.createElement(`td`);
    let textTask = document.createTextNode(`test task`);
    let tagTime = document.createElement(`td`);
    let textTime = document.createTextNode(`2`);
    tagProject.appendChild(textProject);
    tagRow.appendChild(tagProject);
    tagTask.appendChild(textTask);
    tagRow.appendChild(tagTask);
    tagTime.appendChild(textTime);
    tagRow.appendChild(tagTime);
    tbodyElement.appendChild(tagRow);
})

