// 5. RESULTADOS MATERIA
// Sea la información de varios estudiantes: cédula y nota final. Se sabe que los estudiantes
// aprueban con 48Ptos.
// Se desea procesar a varios estudiantes y determinar la siguiente estadística: cantidad de
// aprobados, cantidad de reprobados y nota promedio de la sección.
// Siendo los resultados de un salón de clases los siguientes: cédula(puntos); 888 (60Ptos),
// 777 (50Ptos), 999 (40Ptos), 333 (80Ptos), 111 (30Ptos), 333 (90Ptos), 444 (48Ptos) y
// 222 (60Ptos), la salida que se espera es como la siguiente:
// Cantidad de aprobados: 6
// Cantidad de reprobados: 2
// Nota promedio de la sección: 57.25

import Estudiante from "./classes/estudiante.js";
import Seccion from "./classes/seccion.js";



let _estudiante1=new Estudiante(888,60);
let _estudiante2=new Estudiante(777,50);
let _estudiante3=new Estudiante(999,40);
let _estudiante4=new Estudiante(333,80);
let _estudiante5=new Estudiante(111,30);
let _estudiante6=new Estudiante(333,90);
let _estudiante7=new Estudiante(444,48);
let _estudiante8=new Estudiante(222,60);


let _seccion=new Seccion()

_seccion.procesarEstudiante(_estudiante1)
_seccion.procesarEstudiante(_estudiante2)
_seccion.procesarEstudiante(_estudiante3)
_seccion.procesarEstudiante(_estudiante4)
_seccion.procesarEstudiante(_estudiante5)
_seccion.procesarEstudiante(_estudiante6)
_seccion.procesarEstudiante(_estudiante7)
_seccion.procesarEstudiante(_estudiante8)




document.body.innerHTML=`
<br>
Cantidad de aprobados: ${_seccion.contAprobados}
<br>
Cantidad de reprobados: ${_seccion.contReprobados}
<br>
Nota promedio de la seccion: ${_seccion.promedioNota()}


`