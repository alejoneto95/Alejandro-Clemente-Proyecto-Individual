// JavaScript Document

window.onload = function(){
	
	



	var dv = document.getElementById("historia1");
	var br = document.createElement("hr");
	dv.appendChild(br);
	var t = document.createTextNode("En el transcurso de la materia Lenguaje Interpretado en el Cliente he pvar odido comprender la sintaxis del lenguaje de programacion JavaScript, las utlilidades que este brinda con sus herramientas a la hora de manipular eventos del lado del cliente y la utilidad que tiene a la hora de tener que intervenir con el area del servidor, yo me describo como una persona tranquila, accesible cuando me necesitan, soy amigable me esfuerzo por lo que quiero tener, aunque con mucho sacrificio ahi voy adelante, espero que la vida me sonria en un futuro y por eso es que estoy estudiando, en fin la materia me gusto mucho :)");
	var p = document.createElement("p");
	p.appendChild(t);
	dv.appendChild(p);
	//Aqui empiezan las imagenes
	var imagenes = new Array();
		imagenes[0]="img/4runner.jpg";
		imagenes[1]="img/corolla.jpg";
		var d = document.getElementById("imagenes");
		var img = document.createElement("img");
		img.src=imagenes[0];
		img.width = 550;
		img.height = 500;	
		dv.appendChild(img);
	

	}