


function fancyRadioAlert() {
	
	alert("fancy radio clicked");
}


function boringRadioAlert(){
	
	
	alert("boring radio clicked");
	
	var textboxdata = document.getElementById("fancytextbox");
	var boringBettyRadio = document.getElementById("BoringBetty");
	
		if(boringBettyRadio.checked){
		
		textboxdata.style.fontWeight = "none";
		textboxdata.style.fontSize = "12pt";
		textboxdata.style.color = "black";
		textboxdata.style.textDecoration = "none";
	}
	
}

function fancyButtonClicked() {
	
	var textboxdata = document.getElementById("fancytextbox");
	var fancyShmancyRadio = document.getElementById("FancyShmancy");
	

		if(fancyShmancyRadio.checked){
		
		textboxdata.style.fontWeight = "bold";
		textboxdata.style.fontSize = "24pt";
		textboxdata.style.color = "blue";
		textboxdata.style.textDecoration = "underline";
		
	}
	
}

function mooButtonClicked(){
	
alert("MOO");
	
}


function alertRadioButton() {

	alert("Hello, world!");

}





