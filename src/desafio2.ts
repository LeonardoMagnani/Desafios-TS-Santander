enum Profissao {
    OperadorDeMaquinas,
    Soldador,
    Contador,
    Administrador,
    Diretor,
    Padeiro,
    Atriz
}

// Função para padronizar atribuição de nome em maiúsculas

function toUpperCaseString (userEntry: string):string  {
    let entry:string = userEntry.toUpperCase();
    return entry;
}

interface Pessoa {
    nome: string,
    idade: number,
    profissao: Profissao
}

const pessoa1:Pessoa = {
    nome: "Maria",
    idade: 29,
    profissao: Profissao.Atriz
}

const pessoa2:Pessoa = { 
    nome: toUpperCaseString("Roberto"),
    idade: 19,
    profissao: Profissao.Padeiro
}

const pessoa3:Pessoa = {
    nome: toUpperCaseString("Laura"),
    idade: 32,
    profissao: Profissao.Atriz
}

const pessoa4:Pessoa = {
    nome: toUpperCaseString("Carlos"),
    idade: 19,
    profissao: Profissao.Padeiro
}

