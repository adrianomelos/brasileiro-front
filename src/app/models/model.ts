export interface Login{
    email: string
    senha: string
}

export interface Curso{
    id: number;
    nome: string
}

export interface Aluno {
  id: number
  nome: string
  dataCadastro: string
  vencimento: any
  status: any
  email: string,
  cpf: string
  telefone: string
}

export interface Role {
  id: number
  name: string
  type: string
}
  