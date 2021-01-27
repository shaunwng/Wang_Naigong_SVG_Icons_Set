(() => {

	console.log('JS is linked!Hooray');


	let theIcon = document.querySelectorAll(".icon");

	function logClick(){
		console.log(this.id)
	}

	
	theIcon.forEach(icon=> icon.addEventListener("click", logClick));





})();