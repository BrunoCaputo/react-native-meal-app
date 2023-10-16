import { StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import { CustomRootParamList } from "./types/navigation-param-list.type";
import MealDetailScreen from "./screens/MealDetailScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import CategoriesScreen from "./screens/CategoriesScreen";
import FavoritesScreen from "./screens/FavoritesScreen";

const { Navigator: StackNavigator, Screen: StackScreen } =
  createNativeStackNavigator<CustomRootParamList>();
const { Navigator: DrawerNavigator, Screen: DrawerScreen } =
  createDrawerNavigator<CustomRootParamList>();

function DrawerNavigatorContainer() {
  return (
    <DrawerNavigator
      screenOptions={{
        headerStyle: { backgroundColor: "#351401" },
        headerTintColor: "white",
        sceneContainerStyle: { backgroundColor: "#3f2f25" },
      }}
    >
      <DrawerScreen
        name="Categories"
        component={CategoriesScreen}
        options={{
          title: "All Categories",
        }}
      />
      <DrawerScreen name="Favorites" component={FavoritesScreen} />
    </DrawerNavigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <StackNavigator
          initialRouteName="MealsCategories"
          screenOptions={{
            headerStyle: { backgroundColor: "#351401" },
            headerTintColor: "white",
            contentStyle: { backgroundColor: "#3f2f25" },
          }}
        >
          <StackScreen
            name="MealsCategories"
            component={DrawerNavigatorContainer}
            options={{
              headerShown: false,
            }}
          />
          <StackScreen
            name="MealsOverview"
            component={MealsOverviewScreen}
            // options={({ route, navigation }) => {
            //   const categoryId = (route as any).params.categoryId;
            //   return {
            //     title: categoryId,
            //   };
            // }}
          />
          <StackScreen
            name="MealDetail"
            component={MealDetailScreen}
            options={{ title: "About the Meal" }}
          />
        </StackNavigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
