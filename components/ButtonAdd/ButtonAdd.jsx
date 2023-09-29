import { Text, TouchableOpacity } from "react-native";
import { s } from "./ButtonAdd.style";

export function ButtonAdd({ todo, onPress }) {
  return (
    <TouchableOpacity onPress={onPress} style={s.button}>
      <Text style={s.text}>+ New todo</Text>
    </TouchableOpacity>
  );
}
