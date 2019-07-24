


const clockContainer = document.querySelector('.js-clock'),
	clockText = clockContainer.querySelector('h3');

function getTime(){
	//시, 분, 초
	let date = new Date(),
		hour = date.getHours(),
		min = date.getMinutes(),
		sec = date.getSeconds();
 		
 		// console.log('date--->', hour, min, sec < 10);


		// 한 자리수 경우 앞에 0을 붙임
		clockText.innerHTML = `${hour < 10 ? `0${hour}` : hour} : ${min < 10 ? `0${min}` : min} : ${sec < 10 ? `0${sec}` : sec}`;
}




function init(){
	getTime();
	setInterval(getTime, 1000);

}

init();