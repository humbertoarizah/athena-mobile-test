export function resolveCommonRules({
  fieldName,
  isRequired = true,
  maxLength = 60,
}: {
  fieldName: string;
  isRequired?: boolean;
  maxLength?: number;
}) {
  const rules = {
    required: {
      value: isRequired,
      message: `${fieldName} es un campo requerido`,
    },
    maxLength: {
      value: maxLength,
      message: "La longitud debe de ser menor a 60",
    },
  };
  return rules;
}
