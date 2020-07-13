/*
Debemos lograr tomar un nombre con 'prompt' 
y luego mostrarlo por 'alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	var nombre = prompt ('Ingresa tu nombre');

	if(nombre != null && nombre != '') {
		alert ( nombre );
	}

}

// 1 guardar texto del prompt.
// 2 A caso ok, mostrar mensaje con lo que ingreso.
//	2 A1 ingresa texto, mostrarlo
//	2 A2 no ingresa texto, no mostrarlo
// 2 B cancelar, no mostrar mensaje.
// 

