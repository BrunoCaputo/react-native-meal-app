import { FlatList, ListRenderItemInfo } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import Category from "../models/category";
import CategoryGridTile from "../components/CategoryGridTile";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types/navigation-param-list.type";

function CategoriesScreen({
  navigation,
}: NativeStackScreenProps<RootStackParamList, "MealsCategories">) {
  function renderCategoryItem({ item }: ListRenderItemInfo<Category>) {
    function pressHandler() {
      navigation.navigate("MealsOverview", { categoryId: item.id });
    }

    return (
      <CategoryGridTile
        title={item.title}
        color={item.color}
        onPress={pressHandler}
      />
    );
  }

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
    />
  );
}

export default CategoriesScreen;
