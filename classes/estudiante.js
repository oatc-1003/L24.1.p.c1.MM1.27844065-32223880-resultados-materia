export default class Estudiante{
    constructor(cedula, nota){
        this.nota=nota;
        this.cedula=cedula;
    }

    set nota(n){

        this._nota=n;
    }

    get nota(){
        return this._nota;
    }
    set cedula(c){

        this._cedula=+c;
    }

    get cedula(){
        return this._cedula;
    }


}