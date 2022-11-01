type usuario = {
    name: string,
    email: string,
    role: string
}


const usuarios: usuario[] = [
        {name: "Rogério", email: "roger@email.com", role: "user"},
        {name: "Ademir", email: "ademir@email.com", role: "admin"},
        {name: "Aline", email: "aline@email.com", role: "user"},
        {name: "Jéssica", email: "jessica@email.com", role: "user"},  
        {name: "Adilson", email: "adilson@email.com", role: "user"},  
        {name: "Carina", email: "carina@email.com", role: "admin"}      
] 

const administradores = (lista: usuario[]): string [] => {
    const listaAdministradores: usuario[] = lista.filter((item) => {
        return item.role === "admin"
    })

    const emails: string[] = listaAdministradores.map((item) => {
        return item.email
    })

    return emails
    
}
console.log(administradores(usuarios));
