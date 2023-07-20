// Se precisan de un bucle que se inicialice en 100 e itere hasta 250. Este debe contener una estructura condicional que verifique si el número es par o impar. 
// Para el caso par, se deberá visualizar en consola la raíz cuadrada del valor, para ello usar el método Math.sqrt()
// Para el caso impar, se deberá visualizar en consola la potencia de esos valores, para ello usar el método Math.pow() ej: Math.pow(valorAPotenciar, 2) = x^2

for (let i = 100; i <= 250; i = i + 1) {
    let raiz = Math.sqrt(i);
    let potencia = Math.pow(i, 2);

    if (i % 2 == 0) {
        console.log(`La raíz cuadrada de ${i} es ${Math.sqrt(i)}`);
    } else {
        console.log(`La potencia de ${i} es ${Math.pow(i, 2)}`)
    }
    }