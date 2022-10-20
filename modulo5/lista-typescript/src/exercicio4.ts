enum SETORES {
    MARKETING = "Marketing",
    VENDAS = "Vendas",
    FINANCEIRO = "Financeiro",
}

type pessoas = {
    nome: string,
    salário: number,
    setor: SETORES,
    presencial: boolean
}

const colaboradores: pessoas[] =[
        { nome: "Marcos", salário: 2500, setor: SETORES.MARKETING, presencial: true },
        { nome: "Maria" ,salário: 1500, setor: SETORES.VENDAS, presencial: false},
        { nome: "Salete" ,salário: 2200, setor: SETORES.FINANCEIRO, presencial: true},
        { nome: "João" ,salário: 2800, setor: SETORES.MARKETING, presencial: false},
        { nome: "Josué" ,salário: 5500, setor: SETORES.FINANCEIRO, presencial: true},
        { nome: "Natalia" ,salário: 4700, setor: SETORES.VENDAS, presencial: true},
        { nome: "Paola" ,salário: 3500, setor: SETORES.MARKETING, presencial: true }
]

const setorMarketing = (lista: pessoas[]): pessoas[] => {
    const listaMarketingPresencial = lista.filter((item) => {
        return item.setor === SETORES.MARKETING && item.presencial === true
    })

    return listaMarketingPresencial
}

console.table(setorMarketing(colaboradores));
 

