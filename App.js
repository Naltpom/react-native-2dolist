import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { s } from "./App.style";
import { ScrollView, Text, View } from "react-native";
import { Header } from "./components/Header/Header";
import { CardTodo } from "./components/CardTodo/CardTodo";
import { useState } from "react";
import { TabBottomMenu } from "./components/TabBottomMenu/TabBottomMenu";

export default function App() {
  const [selectedTabName, setSelectedTabName] = useState("all");

  const [todoList, setTodoList] = useState([
    { id: 1, title: "Premiere todo", isCompleted: false },
    { id: 2, title: "Seconde todo", isCompleted: false },
    { id: 3, title: "Troisieme todo", isCompleted: true },
    { id: 4, title: "todo numero 4", isCompleted: true },
    { id: 5, title: "et pour finir", isCompleted: false },
  ]);

  function updateTodo(todo) {
    const updateTodo = {
      ...todo,
      isCompleted: !todo.isCompleted,
    };

    const indexToUpdate = todoList.findIndex(
      (todo) => todo.id === updateTodo.id
    );

    const updatedTodoList = [...todoList];
    updatedTodoList[indexToUpdate] = updateTodo;
    setTodoList(updatedTodoList);
  }

  function renderTodoList() {
    return todoList.map((todo) => (
      <View style={s.cardItem} key={s.id}>
        <CardTodo onPress={updateTodo} todo={todo} />
      </View>
    ));
  }

  return (
    <>
      <SafeAreaProvider>
        <SafeAreaView style={s.app}>
          <Header style={s.header} />
          <View style={s.body}>
            <ScrollView>{renderTodoList()}</ScrollView>
          </View>
        </SafeAreaView>
      </SafeAreaProvider>
      <View style={s.footer}>
        <TabBottomMenu
          selectedTabName={selectedTabName}
          onPress={setSelectedTabName}
        />
      </View>
    </>
  );
}
