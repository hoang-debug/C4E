document.getElementById(`button-1`).addEventListener('click', function (e) {
	console.log(e.target)
});
document.getElementById(`button-2`).addEventListener('click', function (e) {
	console.log(e.target)
});
//e.target là nội dung html thẻ chứa Id khi thực hiện Event 'click' button tương ứng
document.getElementById(`input`).addEventListener('keydown', function (e) {
	console.log(e.target)
});
//e.target là nội dung html thẻ chứa Id khi thực hiện Event nhấn nút bàn phím bất kì