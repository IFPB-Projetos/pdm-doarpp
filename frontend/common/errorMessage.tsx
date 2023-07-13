import { FieldError, FieldErrorsImpl, Merge } from "react-hook-form";
import { Text } from "react-native";

type Props = {
  error?: FieldError | Merge<FieldError, FieldErrorsImpl<any>>;
};

export function ErrorMessage({ error }: Props) {
  if (!error) return null;

  const textOptions = {
    required: "Por favor, preencha esse campo",
    maxLength: "Por favor, use um texto mais curto",
  } as const;

  let text: string = textOptions[error.type as keyof typeof textOptions];
  if (!text) {
    text = "Esse valor é inválido";
  }

  if (error.ref?.name === "phone") {
    text = "Esse número de telefone é inválido";
  }

  return <Text style={{ color: "red" }}>{text}</Text>;
}
