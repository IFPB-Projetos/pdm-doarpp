import { Link, useRouter } from "expo-router";
import { useRef } from "react";
import { Controller, useForm } from "react-hook-form";
import { Button, ScrollView, TextInput, View } from "react-native";
import PhoneInput from "react-native-phone-input";
import { api } from "../common/api";
import { ErrorMessage } from "../common/errorMessage";
import { styles } from "../common/formStyles";
import { Section } from "../common/section";
import { Upload } from "../types/upload";
import { User } from "../types/user";
import ImageInput from "../upload/imageInput";

type UserEdit = User & { imageUpload?: Upload };

type Props = {
  user: UserEdit;
};

export function UserEditScreen({ user }: Props) {
  const size = 120;
  const phoneRef = useRef<PhoneInput>();
  const router = useRouter();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: user });

  async function submit(data: UserEdit) {
    let { phone } = data;
    if (phone === "+") {
      phone = null;
    }

    const { name, description, imageUpload } = data;
    const edited = { name, description, imageUpload, phone };
    await api.patch("/users/me", edited);
    router.replace(`/users/me`);
  }

  return (
    <ScrollView keyboardShouldPersistTaps="handled">
      <View style={styles.container}>
        <Section title="Imagem">
          <Controller
            control={control}
            name="imageUpload"
            render={({ field: { onChange, onBlur } }) => (
              <View style={{ alignItems: "center" }}>
                <View
                  style={{
                    borderRadius: 1000,
                    overflow: "hidden",
                    width: size,
                    height: size,
                  }}
                >
                  <ImageInput
                    size={size}
                    onBlur={onBlur}
                    defaultImage={user.image}
                    onChange={(value) => onChange(value)}
                  />
                </View>
              </View>
            )}
          />
        </Section>
        <Section title="Nome">
          <Controller
            name="name"
            control={control}
            rules={{ required: true }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                value={value}
                maxLength={35}
                onBlur={onBlur}
                style={styles.input}
                onChangeText={(value) => onChange(value)}
              />
            )}
          />
          <ErrorMessage error={errors.name} />
        </Section>
        <Section title="Telefone">
          <Controller
            name="phone"
            control={control}
            rules={{
              validate: (value) => {
                if (!value) return true;

                const { current } = phoneRef;
                if (current) {
                  const isEmpty = ["", "+"].includes(value);
                  if (isEmpty) {
                    return true;
                  }
                  return current.isValidNumber();
                }

                return true;
              },
            }}
            render={({ field: { onChange, value } }) => (
              <PhoneInput
                autoFormat
                style={styles.input}
                ref={phoneRef as any}
                initialValue={value || undefined}
                onChangePhoneNumber={(value: string) => onChange(value)}
              />
            )}
          />
          <ErrorMessage error={errors.phone} />
        </Section>
        <Section title="Sobre">
          <Controller
            name="description"
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                multiline
                value={value}
                onBlur={onBlur}
                maxLength={200}
                numberOfLines={5}
                style={styles.input}
                onChangeText={(value) => onChange(value)}
              />
            )}
          />
          <ErrorMessage error={errors.description} />
        </Section>

        <Button title="Salvar" onPress={handleSubmit(submit)} />
        <Link href={"/users/me/editLocal"}>Editar localização</Link>
      </View>
    </ScrollView>
  );
}
