

const nameForm= document.querySelector('.js-form-name'),
	nameText = document.querySelector('.name_text');




function loadName(){
	const curUser = localStorage.getItem('name');

	if(curUser == null || undefined || ''){

		nameText.setAttribute('show', 'off');
		nameForm.setAttribute('show', 'on');
	}else{

		nameForm.setAttribute('show', 'off');
		nameText.setAttribute('show', 'on');
		nameText.innerText = 'Hello ' + curUser;
	}

}


function handleSubmit(){
	nameForm.addEventListener('keyup', enterEvent);	
}


function enterEvent(e){
	e.preventDefault();
	const getName = nameForm.value;
	//enter
	if(e.keyCode == 13 && nameText !=''){
		localStorage.setItem('name', getName);
	}
	loadName();

}

	

function init() {
	loadName();
	handleSubmit();
}

init();
