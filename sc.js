//Declarando objeto global que contiene la informacion
var piezas = new Object();
var Persona = new Object();
var est1=false,est2=false,est3=false,est4=false,est5=false;
window.onload = function(){
	//Validando para las regulares
	var btn = document.getElementById("btnguardar");
	btn.onclick= function(){
		var frm = document.getElementById("frm");
		validar(frm);
		}
	
	}
	

	
	function imagenes(val){
		switch(val){
			case 1:
			imagen1();
			break;
			case 2:
			imagen2();
			break;
			case 3: 
			imagen3();
			break;
			case 4: 
			imagen4();
			break;
			case 5: 
			imagen5();
			break;
			case 6:
			imagen6();
			break;
			}
		}
	
	function imagen1(){
		
			piezas.nombre1="Bujia";
			piezas.precio1="$2.60";
			piezas.distribuidor1="Honda";
			piezas.existencias1 = 30;
		alert("Nombre: "+piezas.nombre1+" precio: "+piezas.precio1+" Distribidor: "+piezas.distribuidor1+ " Existencias: "+piezas.existencias1);
		}
		
		
	function imagen2(){
		
			piezas.nombre2="Culata de motor";
			piezas.precio2="$55.70";
			piezas.distribuidor2="Mazda";
			piezas.existencias2 = 40;
		alert("Nombre: "+piezas.nombre2+" precio: "+piezas.precio2+" Distribidor: "+piezas.distribuidor2+ " Existencias: "+piezas.existencias2);
		}
		
		
	function imagen3(){
		
			piezas.nombre3="Tablero";
			piezas.precio3="$96.50";
			piezas.distribuidor3="Toyota";
			piezas.existencias3 = 12;
		alert("Nombre: "+piezas.nombre3+" precio: "+piezas.precio3+" Distribidor: "+piezas.distribuidor3+ " Existencias: "+piezas.existencias3);
		}
		
	function imagen4(){
		piezas.nombre4="Espejo retrovisor";
			piezas.precio4="$10.00";
			piezas.distribuidor4="Toyota";
			piezas.existencias4 = 14;
		alert("Nombre: "+piezas.nombre4+" precio: "+piezas.precio4+" Distribidor: "+piezas.distribuidor4+ " Existencias: "+piezas.existencias4);
		}
		
	function imagen5(){
		piezas.nombre5="Timon";
			piezas.precio5="$101.00";
			piezas.distribuidor5="Momo";
			piezas.existencias5 = 100;
		alert("Nombre: "+piezas.nombre5+" precio: "+piezas.precio5+" Distribidor: "+piezas.distribuidor5+ " Existencias: "+piezas.existencias5);
		}
		
		
	function imagen6(){
		piezas.nombre6="Rin khumo";
			piezas.precio6="$300.00";
			piezas.distribuidor6="Toyota";
			piezas.existencias6 = 100;	
		var t = confirm("Nombre: "+piezas.nombre6+" precio: "+piezas.precio6+" Distribidor: "+piezas.distribuidor6+ " Existencias: "+piezas.existencias6);
		}
		
		//Formulario de contactos
		
		function validar(frm){
		
		Persona.nombre=frm.txtnombre.value;
		Persona.apellido=frm.txtapellido.value;
		Persona.telefono=frm.txttelefono.value;
		Persona.rubro=frm.txtrubro.value;
		Persona.correo=frm.txtcorreo.value;
		
		//Declarando las expresiones regulares
		var regletras = /[a-zA-Z]/;
		var regtelefono = /^[0-9]{4}-[0-9]{4}$/;
		var regcorreo = /^[a-zA-Z-._]+@+[a-zA-Z]+.+[a-zA-Z]$/;
		if(regletras.test(Persona.nombre)){
			est1=true;
			}else{
					alert("Solo ingresa letras en este campo");
					}
		if(regletras.test(Persona.apellido)){
			est2=true;
			}else{
					alert("Solo ingresa letras en este campo");
					}
			
			if(regletras.test(Persona.rubro)){
				est3=true;
				}else{
					alert("Solo ingresa letras en este campo");
					}
				
			if(regcorreo.test(Persona.correo)){
				est4=true;
				}
				else{
					alert("Ingresa bien el formato de correo");
					}
			if(regtelefono.test(Persona.telefono))
			{
				est5=true;
			}else{alert("Debes ingresar 4 numeros 1 guion seguido de 4 numeros: 2222-2222");}
			
			if(est1==true && est2==true && est3==true && est4==true && est5==true){
				alert("Datos ingresados Correctamente");
				var nombre = prompt("Digite su nombre por favor: ","");
				alert("Bienvenido al sitio web de Alejandro's!!   "+nombre);
				}
		
		
			}
		
		
		