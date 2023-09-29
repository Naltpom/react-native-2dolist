import { Text, TouchableOpacity, View } from "react-native";
import { s } from "./TabBottomMenu.style";

export function TabBottomMenu({ selectedTabName, onPress }) {
  function getTextStyle(tabName) {
    return {
      fontWeight: "bold",
      color: tabName === selectedTabName ? "#2f76e5" : "black",
    };
  }

  return (
    <View style={s.container}>
      <TouchableOpacity onPress={() => onPress("all")}>
        <Text style={getTextStyle("all")}>All</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onPress("in-progress")}>
        <Text style={getTextStyle("in-progress")}>In Progress</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onPress("done")}>
        <Text style={getTextStyle("done")}>Done</Text>
      </TouchableOpacity>
    </View>
  );
}
