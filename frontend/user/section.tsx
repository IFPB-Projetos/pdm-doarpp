import { ReactNode } from "react";
import { Text, View } from "react-native";

type Props = {
  title: string;
  children: ReactNode;
};

export function Section({ title, children }: Props) {
  return (
    <View style={{ gap: 4 }}>
      <Text style={{ fontSize: 18 }}>{title}</Text>
      {children}
    </View>
  );
}
