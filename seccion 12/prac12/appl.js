
function sumarNumeros(){
    const entrada =document.getElementById(`promedio`).value;
    const numeros = entrada.split(`,`).map(num=>parseFloat(num.trim()));
    //let numeros=[10, 20,30, 50,60,70,90,100];
    let suma = 0;

    for(let i=0; i < numeros.length; i++) {
        if (!isNaN(numeros[i])) { 
            suma = suma + numeros[i];
        
        }
    }

    const promedio = suma / numeros.length;
    document.getElementById(`salidaPromedio`).innerText = `suma total:${suma.toFixed(1)},promedio:${promedio.toFixed(1)}`;

}
function ingresarNumeros(){
    let numerosIngresados =[];
    let suma = 0;
    let numero=1;


    while (numero>= 0){
        numero = parseFloat(prompt("Ingresa un numero (negativo para terminar):"));
            if (numero>= 0){
                if (!isNaN(numero)){
                    numerosIngresados.push(numero);
                    suma = suma + numero;
                }
            }
        }
    document.getElementById('salidaNumeros').innerHTML =`
            <strong>Numeros ingresados:</stong> ${numerosIngresados.join(',')}<br>
            <strong>suma total:</strong> ${suma}`;
    }

    function validarContrasena(){
        const contrasenaCorrecta = "2892";
        let intentos = 0;
        let contrasena;
        let contrasenaIngresadas = [];

        do{
            contrasena = prompt("Ingresa la contraseña:");
            contrasenaIngresadas.push(contrasena);
            intentos=intentos+1;
          if (contrasena !== contrasenaCorrecta){
            alert("Contraseña Incorrecta");
          }  
        } while (contrasena !== contrasenaCorrecta);

        document.getElementById('salidaContrasena').innerHTML =`
        <strong>!contraseña correcta!</strong><br>
        <strong>Intentos fallidos:</strong> ${intentos-1}<br>
        <strong>Contraseñas ingresadas:</strong> ${contrasenaIngresadas.join(',')}`;

    }
