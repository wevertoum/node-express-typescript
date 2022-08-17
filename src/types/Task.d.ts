export namespace Task {
  interface Model {
    id: string;
    nome: string;
    descricao: string;
    prioridade_estimada: number;
    ordem: number;
    qtd_horas: number;
    status: Status;
    estimativa_inicio?: string;
    estimativa_fim?: string;
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
