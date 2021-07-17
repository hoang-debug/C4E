
let setCountVal = document.getElementById('setCount').value;
function startCountDown(i) {
    let int = setInterval(function () {
        document.getElementById("countDown").innerHTML = i;
        i-- || clearInterval(int); //if i is 0, then stop the interval
    }, 1000);
}
function reset(){
    clearInterval(int);
    document.getElementById("countDown").innerHTML = "reset";
}

