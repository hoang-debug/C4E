let projects =[
    {
        name: `Project Test 1`,
        task: `Task test 1`,
        timeSpent: 0
    },
    {
        name: `Project Test 2`,
        task: `Task test 2`,
        timeSpent: 0
    },
    {
        name: `Project Test 3`,
        task: `Task test 3`,
        timeSpent: 0
    },
]
// hien thi list projects trong the body
// insert dom
// insertAdjancentElement
// b1: lay ra vi tri can insert
// position: afterbegin, html element(string) => 
let resultEl = document.getElementById(`result`);

// mang object => mang string => join(): string
function renderProjects(){
    let htmlInsertProject = projects.map(function(project) {
        return `<tr>
            <td>${project.name}</td>
            <td>${project.task}</td>
            <td>${project.timeSpent}</td>
            <td>
            <button class="btn-delete">x</button>
            <button class="btn-update">u</button>
            </td>
        </tr>`
    }).join('');
    resultEl.insertAdjacentHTML(`afterbegin`, htmlInsertProject);
    let delButtons = document.querySelectorAll(`.btn-delete`);

    for(let i = 0; i<delButtons.length;i++){
        let delBtn = delButtons[i];
        delBtn.addEventListener('click', deleteProject)
    }
}

