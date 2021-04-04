import * as React from "react";
import { StyleSheet, Image, FlatList } from "react-native";
import HomeCategory from "../components/HomeCategory";

import { Text, View } from "../components/Themed";
import categories from "../assets/data/categories";

const firstCategory = categories.items[0];

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={categories.items}
        renderItem={({ item }) => <HomeCategory category={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});
