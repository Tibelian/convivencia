
class Profesor{

    constructor(id, nombre, apellidos, telefono, perfil = "Profesor"){
        this.id = id;
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.telefono = telefono;
        this.perfil = perfil;
    }

}

export {Profesor};