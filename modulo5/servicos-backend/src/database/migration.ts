import { connection } from './connection';

const createTables = () => connection.raw(
    `
    CREATE TABLE IF NOT EXISTS users_ceps (
        id_user VARCHAR(255) PRIMARY KEY,
        CEP VARCHAR(255) NOT NULL,
        logradouro VARCHAR(255) NOT NULL,
        numero INT NOT NULL,         
        complemento VARCHAR(255),
        bairro VARCHAR(255) NOT NULL,
        cidade VARCHAR(255) NOT NULL,
        estado VARCHAR(255) NOT NULL    
    )
    `
)
.then(()=> {console.log("Tabela criada");
}).catch((error: any)=> {
    console.log(error.sqlMessage || error.message);
})

const closeConnection = () => { connection.destroy() }

createTables()
   .then(() => console.log("Banco pronto!"))
   .finally(closeConnection)