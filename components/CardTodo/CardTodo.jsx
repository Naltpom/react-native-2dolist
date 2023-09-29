import { Image, Text, TouchableOpacity } from "react-native";
import { s } from "./CardTodo.style";
import checkImg from "../../assets/check.png";

export function CardTodo({ todo, onPress }) {
  return (
    <>
      <TouchableOpacity onPress={() => onPress(todo)} style={s.card}>
        <Text
          style={[
            s.text,
            todo.isCompleted && { textDecorationLine: "line-through" },
          ]}
        >
          {todo.title}
        </Text>
        {todo.isCompleted && <Image style={s.img} source={checkImg} />}
      </TouchableOpacity>
    </>
  );
}
