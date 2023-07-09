import { ReactNode } from "react";
import { View } from "react-native";
import { Navbar, Selected } from "./navbar";

type Props = {
  children: ReactNode;
  selected: Selected;
};

export function NavbarLayout({ children, selected }: Props) {
  return (
    <View style={{ flex: 1 }}>
      {children}
      <Navbar selected={selected}></Navbar>
    </View>
  );
}
