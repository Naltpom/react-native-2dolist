import { Image, Text } from "react-native";
import { s } from "./Header.style";
import headerLogo from "../../assets/logo.png";
export function Header() {
  return (
    <>
      <Image source={headerLogo} style={s.img} resizeMode="contain" />
      <Text style={s.subtitle}>Tu as probablement un truc à faire</Text>
    </>
  );
}
