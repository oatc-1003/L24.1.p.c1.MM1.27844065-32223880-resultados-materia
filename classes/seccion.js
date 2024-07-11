export default class Seccion{
    constructor(){
        this.NOTA_APROBADO=48;
        this.contEstudiantes=0;
        this.contAprobados=0;
        this.contReprobados=0;
        this.acuNotas=0;
    }

    procesarEstudiante(estudiante){
        this.contEstudiantes++
        this.acuNotas+=estudiante.nota

        if(estudiante.nota>=this.NOTA_APROBADO){
            this.contAprobados++
        }
        if(estudiante.nota<this.NOTA_APROBADO){
            this.contReprobados++
        }

    }


    promedioNota(){
        return (this.acuNotas/this.contEstudiantes).toFixed(2)
    }


}