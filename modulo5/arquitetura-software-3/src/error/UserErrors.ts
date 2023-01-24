import { CustomError } from "./CustomError";

export class InvalidEmail extends CustomError {
    constructor(){
        super(400, "Email inválido")
    }
}

export class InvalidPassaword extends CustomError {
    constructor(){
        super(400, "Senha inválida, precisa ter no mínimo 6 caracteres")
    }
}

export class InvalidName extends CustomError {
    constructor(){
        super(400, "Nome inválido")
    }
}