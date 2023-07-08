import { ReactNode } from "react";
import { View } from "react-native";
import { Navbar } from "./navbar";

type Props = {
  children: ReactNode;
};

export function NavbarLayout({ children }: Props) {
  return (
    <View style={{ flex: 1 }}>
      {children}
      <Navbar></Navbar>
    </View>
  );
}
