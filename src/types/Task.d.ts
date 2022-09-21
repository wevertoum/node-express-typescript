export namespace Task {
  interface Model {
    id: string;
    nome: string;
    status: Status;
    prioridade_estimada: number;
    estimativa_fim: string;
    descricao: string;
    encarregado: Encarregado;
    qtd_horas?: number;
    codigo: string;
    tags: Tag[];
    ordem: number;
  }

  interface Encarregado {
    id: string;
    username: string;
    email: string;
    foto_perfil: string;
    nome_completo: string;
  }

  interface Tag {
    id: string;
    nome: string;
    cor: string;
  }

  type Status =
    | "nenhum"
    | "em_andamento"
    | "pausado"
    | "em_atraso"
    | "cancelado"
    | "em_validacao"
    | "concluido";
}
