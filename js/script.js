/* сохраняем текстовое поле в переменную text */
var text = document.getElementById("inputText1");

/* сохраняем кнопку в переменную btn */
var btn = document.getElementById("copyText1");

/* вызываем функцию при нажатии на кнопку */
btn.onclick = function () {
	text.select();
	document.execCommand("copy");
}
/* сохраняем текстовое поле в переменную text */
var text2 = document.getElementById("inputText2");

/* сохраняем кнопку в переменную btn */
var btn2 = document.getElementById("copyText2");

/* вызываем функцию при нажатии на кнопку */
btn2.onclick = function () {
	text2.select();
	document.execCommand("copy");
}
/* сохраняем текстовое поле в переменную text */
var text3 = document.getElementById("inputText3");

/* сохраняем кнопку в переменную btn */
var btn3 = document.getElementById("copyText3");

/* вызываем функцию при нажатии на кнопку */
btn3.onclick = function () {
	text3.select();
	document.execCommand("copy");
}
/* сохраняем текстовое поле в переменную text */
var text4 = document.getElementById("inputText4");

/* сохраняем кнопку в переменную btn */
var btn4 = document.getElementById("copyText4");

/* вызываем функцию при нажатии на кнопку */
btn4.onclick = function () {
	text4.select();
	document.execCommand("copy");
}