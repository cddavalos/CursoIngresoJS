/*Debemos lograr tomar Los numeros por ID ,transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/

function sumar () {

	var numero1 = txtIdNumeroUno.value;
	var numero2 = txtIdNumeroDos.value;
	var suma = parseInt (numero1) + parseInt (numero2);
	
	alert ('La suma es ' + suma );
}

