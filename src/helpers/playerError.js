class PLAYER_NOT_FOUND extends Error {
    constructor() {
        super("Usuario no encontrado");
        this.status = 404;
    }
}

class PLAYER_ALREADY_EXISTS extends Error {
    constructor() {
        super("El usuario ya existe");
        this.status = 409;
    }
}

class INCORRECT_PASSWORD extends Error {
    constructor() {
        super("Contraseña incorrecta");
        this.status = 401;
    }
}

class INVALID_CREDENTIALS extends Error{
    constructor(){
        super("Credenciales inválidas");
        this.status=400;
    }
  }


export const errors = {
    PLAYER_NOT_FOUND,
    PLAYER_ALREADY_EXISTS,
    INCORRECT_PASSWORD,
    INVALID_CREDENTIALS
}

export default errors;