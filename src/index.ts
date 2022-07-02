/* Una empresa desea premiar a sus empleados con un
aumento de sueldo. Este aumento se ajusta a la siguiente
tabla:

0 - 15.000 $         20%
15.001 - 20.000 $    10%
20.001 - 25.000 $    5%
Más de 25.000 $      No hay aumento

Desarrolle un algoritmo dado el salario actual de un
empleado determine el aumento de sueldo a aplicar y
se lo muestre */

let sueldoEmpleado: number = Number(prompt("Indique su salario actual:"));
let aumento5Porciento: number = sueldoEmpleado * 0.05;
let aumento10Porciento: number = sueldoEmpleado * 0.1;
let aumento20Porciento: number = sueldoEmpleado * 0.2;

if (sueldoEmpleado >= 0 && sueldoEmpleado <= 15000) {
  console.log(
    "Su sueldo tiene un aumento del 20%, y el total es de :",
    aumento20Porciento
  );
} else {
  if (sueldoEmpleado > 15000 && sueldoEmpleado <= 20000) {
    console.log(
      "Su sueldo tiene un aumento del 10%, y el total es de: ",
      aumento10Porciento
    );
  } else {
    if (sueldoEmpleado > 20000 && sueldoEmpleado <= 25000) {
      console.log(
        "Su sueldo tiene un aumento del 5%, y el total es de: ",
        aumento5Porciento
      );
    }
  }
}

//POR QUE NO ME SALE EN CONSOLA??
