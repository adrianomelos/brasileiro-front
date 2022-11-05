export interface Login{
    email: string
    senha: string
}

export interface Cliente {
    id: number;
    nome: string;
    cpf: string;
    email: string;
    telefone: string;
    dataCadastro: string;
}

export interface Produto {
    id: number;
    nome: string;
    descricao: string;
    quantidade?: number;
    preco?: number;
}

export interface Cliente {
    id: number;
    nome: string;
    cpf: string;
    email: string;
    telefone: string;
    dataCadastro: string;
   
}


export interface Pedido {
    id: number;
    cliente: Cliente;
    produtos: Produto[];
    valorPedido: number;
    formaPagamento: string;
    dataPedido: Date;
    dataHoraSaida: Date;
    dataHoraChegada: Date;
    observacao: string;
}