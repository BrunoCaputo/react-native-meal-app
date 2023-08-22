import {
  GestureResponderEvent,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

function CategoryGridTile({
  title,
  color,
  onPress,
}: {
  title: string;
  color: string;
  onPress?: (event: GestureResponderEvent) => void;
}) {
  return (
    <View
      style={[
        styles.gridItem,
        Platform.OS === "android" ? { backgroundColor: color } : null,
      ]}
    >
      <Pressable
        android_ripple={{ color: "#a8a8a8" }}
        style={({ pressed }) => [
          styles.button,
          pressed && Platform.OS === "ios" ? styles.buttonPressed : null,
        ]}
        onPress={onPress}
      >
        <View
          style={[
            styles.innerContainer,
            Platform.OS === "ios" ? { backgroundColor: color } : null,
          ]}
        >
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

export default CategoryGridTile;

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 8,
    elevation: 4,
    backgroundColor: "white",
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    overflow: Platform.select({ ios: "visible", android: "hidden" }),
  },
  button: {
    flex: 1,
  },
  buttonPressed: {
    opacity: 0.5,
  },
  innerContainer: {
    flex: 1,
    padding: 16,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
});
