import { Project } from "../types/Project";

const dataProjects = [
  {
    id: "8b62a1ef-031b-4831-973f-e14f07a88289",
    logo: "https://omni-pub-bkt.s3.amazonaws.com/omni-tasks/projeto/49854af2-d7e5-49bd-a658-665866bf78c0-9ca3ca28-f3a0-48c1-96b0-57b66d5d31f4.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIASO46S7U24BXETDCQ%2F20220919%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20220919T135355Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=9c6259ede55c0d1f3260de5148408b78e2ede208a02da09bc6eb8d5b44f0dec3",
    nome: "Projeto teste omni",
    entregaveis: [
      {
        id: "6658d05a-cec5-4bd3-99c6-88204406dd8d",
        nome: "trilhas 2",
        tarefas: [
          {
            id: "ee96725a-2ee7-4ae9-8b48-bb7bb1f27aaf",
            nome: "trilhas 2 2",
            status: "em_andamento",
            prioridade_estimada: 0,
            estimativa_fim: null,
            descricao: "",
            encarregado: {
              id: "8eb44d50-69f1-4625-ac6f-ddac9ab5a2b7",
              username: "ericmachado",
              email: "eric@omnisaude.life",
              foto_perfil:
                "https://omni-pub-bkt.s3.amazonaws.com/omni-tasks/usuario/4cabe4c8-249b-40bb-b022-09ae8e435950-fallout-4-gameplay-exclusive-interview-todd-howard.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIASO46S7U24BXETDCQ%2F20220919%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20220919T135355Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=b6c55ccf082d8341a42658eec78c706feb5de6da5f3f435959f18e43ee17feb7",
              nome_completo: "Sony ericson",
            },
            codigo: "S5",
            tags: [],
            ordem: 1,
          },
          {
            id: "051658f1-7f85-4886-a54e-89cb5c4b404a",
            nome: "AAAAAAAAA V423123",
            status: "pausado",
            prioridade_estimada: 0,
            estimativa_fim: "2022-09-16",
            descricao: "",
            encarregado: {
              id: "8eb44d50-69f1-4625-ac6f-ddac9ab5a2b7",
              username: "ericmachado",
              email: "eric@omnisaude.life",
              foto_perfil:
                "https://omni-pub-bkt.s3.amazonaws.com/omni-tasks/usuario/4cabe4c8-249b-40bb-b022-09ae8e435950-fallout-4-gameplay-exclusive-interview-todd-howard.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIASO46S7U24BXETDCQ%2F20220919%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20220919T135355Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=b6c55ccf082d8341a42658eec78c706feb5de6da5f3f435959f18e43ee17feb7",
              nome_completo: "Sony ericson",
            },
            codigo: "6G",
            tags: [
              {
                id: "d7190aa5-9997-4661-a2a0-81572226d775",
                nome: "aaaa2212",
                cor: "#FB0FFF",
              },
            ],
            ordem: 1,
          },
        ],
      },
      {
        id: "ce5391fc-f7e4-4461-b2ca-bd5e40d23b95",
        nome: "trilhas",
        tarefas: [
          {
            id: "0819a575-f487-49f9-965d-f3f092cc24ef",
            nome: "TESTANDO MINHAS TASKS V2",
            status: "pausado",
            prioridade_estimada: 2,
            estimativa_fim: "2022-09-16",
            descricao: "TESTANDO MINHAS TASKS V2",
            encarregado: {
              id: "8eb44d50-69f1-4625-ac6f-ddac9ab5a2b7",
              username: "ericmachado",
              email: "eric@omnisaude.life",
              foto_perfil:
                "https://omni-pub-bkt.s3.amazonaws.com/omni-tasks/usuario/4cabe4c8-249b-40bb-b022-09ae8e435950-fallout-4-gameplay-exclusive-interview-todd-howard.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIASO46S7U24BXETDCQ%2F20220919%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20220919T135355Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=b6c55ccf082d8341a42658eec78c706feb5de6da5f3f435959f18e43ee17feb7",
              nome_completo: "Sony ericson",
            },
            codigo: "3Q",
            tags: [
              {
                id: "15e5698b-c8a2-4931-b9ec-6b64b9f901b9",
                nome: "aaaa3",
                cor: "#59D624",
              },
              {
                id: "d7190aa5-9997-4661-a2a0-81572226d775",
                nome: "aaaa2212",
                cor: "#FB0FFF",
              },
              {
                id: "e1d4e4fa-79e1-41c9-a1a8-1e4c017a20be",
                nome: "armando2",
                cor: "#59A013",
              },
              {
                id: "81f4dab0-adbf-4a08-bb46-9c9cc992f9a8",
                nome: "back-end",
                cor: "#FF0000",
              },
              {
                id: "fedea32b-d23d-412b-8081-85df95da69dc",
                nome: "emerson",
                cor: "#D10CDF",
              },
            ],
            ordem: 1,
          },
          {
            id: "8c6d81dc-a808-4ea7-bf74-1590eb542547",
            nome: "trilhas 1",
            status: "nenhum",
            prioridade_estimada: 2,
            estimativa_fim: "2022-09-15",
            descricao:
              'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites\naaaaaaaaaav\naaaaaaaaaa\naaaaaaaaaa\naaaaaaaaaa\nv\nv\nv of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
            encarregado: {
              id: "8eb44d50-69f1-4625-ac6f-ddac9ab5a2b7",
              username: "ericmachado",
              email: "eric@omnisaude.life",
              foto_perfil:
                "https://omni-pub-bkt.s3.amazonaws.com/omni-tasks/usuario/4cabe4c8-249b-40bb-b022-09ae8e435950-fallout-4-gameplay-exclusive-interview-todd-howard.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIASO46S7U24BXETDCQ%2F20220919%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20220919T135355Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=b6c55ccf082d8341a42658eec78c706feb5de6da5f3f435959f18e43ee17feb7",
              nome_completo: "Sony ericson",
            },
            codigo: "4F",
            tags: [
              {
                id: "e1d4e4fa-79e1-41c9-a1a8-1e4c017a20be",
                nome: "armando2",
                cor: "#59A013",
              },
              {
                id: "d7190aa5-9997-4661-a2a0-81572226d775",
                nome: "aaaa2212",
                cor: "#FB0FFF",
              },
              {
                id: "15e5698b-c8a2-4931-b9ec-6b64b9f901b9",
                nome: "aaaa3",
                cor: "#59D624",
              },
              {
                id: "81f4dab0-adbf-4a08-bb46-9c9cc992f9a8",
                nome: "back-end",
                cor: "#FF0000",
              },
              {
                id: "fedea32b-d23d-412b-8081-85df95da69dc",
                nome: "emerson",
                cor: "#D10CDF",
              },
            ],
            ordem: 1,
          },
        ],
      },
    ],
  },
  {
    id: "aa1fc1fa-4880-4776-828d-33bceb7e0ede",
    logo: "https://omni-pub-bkt.s3.amazonaws.com/omni-tasks/projeto/42892190-3424-4d0c-a4e5-eb7d70de60d1-layered_colored_modern_background_vector_586957.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIASO46S7U24BXETDCQ%2F20220919%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20220919T135355Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=4f304518ee5c84310cf118a23960e46cf04ca1bb74dc156228bd1d7ab5304176",
    nome: "Projeto 1",
    entregaveis: [
      {
        id: "69ec23d2-2538-4bdd-a637-a81d85c42381",
        nome: "Teste entregavel",
        tarefas: [
          {
            id: "29b7025d-196a-40cc-bb03-253cdb2ee2f3",
            nome: "asdfasdfsdfsdf asdagsyufqwgfyuqgf",
            status: "em_andamento",
            prioridade_estimada: 0,
            estimativa_fim: "2022-09-12",
            descricao: "",
            encarregado: {
              id: "8eb44d50-69f1-4625-ac6f-ddac9ab5a2b7",
              username: "ericmachado",
              email: "eric@omnisaude.life",
              foto_perfil:
                "https://omni-pub-bkt.s3.amazonaws.com/omni-tasks/usuario/4cabe4c8-249b-40bb-b022-09ae8e435950-fallout-4-gameplay-exclusive-interview-todd-howard.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIASO46S7U24BXETDCQ%2F20220919%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20220919T135355Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=b6c55ccf082d8341a42658eec78c706feb5de6da5f3f435959f18e43ee17feb7",
              nome_completo: "Sony ericson",
            },
            codigo: "F1",
            tags: [],
            ordem: 2,
          },
          {
            id: "6fc4aeb6-9806-4a30-a3aa-b1a41c24819e",
            nome: "PROJETO 1 TASK ENTREGAVEL 1 TESTE",
            status: "em_validacao",
            prioridade_estimada: 0,
            estimativa_fim: null,
            descricao: "desricao brabaa",
            encarregado: {
              id: "8eb44d50-69f1-4625-ac6f-ddac9ab5a2b7",
              username: "ericmachado",
              email: "eric@omnisaude.life",
              foto_perfil:
                "https://omni-pub-bkt.s3.amazonaws.com/omni-tasks/usuario/4cabe4c8-249b-40bb-b022-09ae8e435950-fallout-4-gameplay-exclusive-interview-todd-howard.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIASO46S7U24BXETDCQ%2F20220919%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20220919T135355Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=b6c55ccf082d8341a42658eec78c706feb5de6da5f3f435959f18e43ee17feb7",
              nome_completo: "Sony ericson",
            },
            codigo: "M7",
            tags: [
              {
                id: "e1d4e4fa-79e1-41c9-a1a8-1e4c017a20be",
                nome: "armando2",
                cor: "#59A013",
              },
              {
                id: "15e5698b-c8a2-4931-b9ec-6b64b9f901b9",
                nome: "aaaa3",
                cor: "#59D624",
              },
              {
                id: "d7190aa5-9997-4661-a2a0-81572226d775",
                nome: "aaaa2212",
                cor: "#FB0FFF",
              },
            ],
            ordem: 1,
          },
        ],
      },
    ],
  },
  {
    id: "b492ff59-9895-4d56-8fa5-6adb169b4270",
    logo: "https://omni-pub-bkt.s3.amazonaws.com/omni-tasks/projeto/f2bac6c2-9afc-4543-bdde-bff05e3b5d5c-fb08129d-0d34-4b67-b1a3-a594eb090394.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIASO46S7U24BXETDCQ%2F20220919%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20220919T135355Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=bcfd3c31133f87823d49ecd9b2c0048382dfeacff97f797b47a19a479c08d54a",
    nome: "bot teste",
    entregaveis: [
      {
        id: "f35a6d38-3d8f-4553-b38d-03c6a204ff38",
        nome: "aaa",
        tarefas: [
          {
            id: "566266de-3469-40f3-a1ec-16e99c1b4e8e",
            nome: "TESTANDO MINHAS TASKS V2 DE NOVO aaaa",
            status: "nenhum",
            prioridade_estimada: 0,
            estimativa_fim: null,
            descricao: "",
            encarregado: {
              id: "8eb44d50-69f1-4625-ac6f-ddac9ab5a2b7",
              username: "ericmachado",
              email: "eric@omnisaude.life",
              foto_perfil:
                "https://omni-pub-bkt.s3.amazonaws.com/omni-tasks/usuario/4cabe4c8-249b-40bb-b022-09ae8e435950-fallout-4-gameplay-exclusive-interview-todd-howard.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIASO46S7U24BXETDCQ%2F20220919%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20220919T135355Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=b6c55ccf082d8341a42658eec78c706feb5de6da5f3f435959f18e43ee17feb7",
              nome_completo: "Sony ericson",
            },
            codigo: "9U",
            tags: [],
            ordem: 1,
          },
        ],
      },
    ],
  },
] as Project.Model[];

export default dataProjects;
