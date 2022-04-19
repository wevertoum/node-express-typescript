const results = [
  {
    id: "e34f4c5e-f9d6-4a0f-b8c0-b8c9d8c8f8f8",
    empresa: {
      nome: "Empresa 1",
      cnpj: "12345678901234",
      responsavel: {
        nome: "Responsavel 1",
      }
    }
  },
  {
    id: "e34f4c5e-f9d6-4a0f-b8c0-b8c9d8c8f8f9",
    empresa: {
      nome: "Empresa 2",
      cnpj: "12345678901234",
      responsavel: {
        nome: "Responsavel 2",
      }
    }
  },
];

type ReturnConverted = {
  value: string;
  label: string;
}

const getValuesByKey = (arr: any[], key: string | string[]): string[] => {
  if (!Array.isArray(key)) {
    return arr.map(
      (value) => value[key] as unknown as string
    );
  } else {
    return arr.map((value) =>
      key.reduce((acc, cur) => acc[cur], value)
    );
  }
}

const convertValuesUsingKeys = (arr: any[], keyLabel: string | string[], keyValue: string | string[]): ReturnConverted[] => {
  const values = getValuesByKey(arr, keyValue);
  const labels = getValuesByKey(arr, keyLabel);
  return values.map((value, index) => ({
    value,
    label: labels[index]
  }));
}

console.log(convertValuesUsingKeys(results, ["empresa", "nome"], "id"));