/*Debemos lograr tomar Los numeros por ID ,transformarlos a enteros (parseInt)
realizar la operación correcta y mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/

function sumar () {

	var numeroUno = txtIdNumeroUno.value;
	var numeroDos = txtIdNumeroDos.value;
	var suma = parseInt (numeroUno) + parseInt (numeroDos);

	alert (suma);
}

function restar () {

	var numeroUno = txtIdNumeroUno.value;
	var numeroDos = txtIdNumeroDos.value;
	var resta = parseInt (numeroUno) - parseInt (numeroDos);

	alert (resta);
}

function multiplicar () {
	
	var numeroUno = txtIdNumeroUno.value;
	var numeroDos = txtIdNumeroDos.value;
	var multiplicar = parseInt (numeroUno) * parseInt (numeroDos);

	alert (multiplicar);
}

function dividir () {

	var numeroUno = txtIdNumeroUno.value;
	var numeroDos = txtIdNumeroDos.value;
	var dividir = parseInt (numeroUno) / parseInt (numeroDos);

	alert (dividir);
}

