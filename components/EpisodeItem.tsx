import React from "react";
import { Image, StyleSheet } from "react-native";
import { Text, View } from "../components/Themed";
import { AntDesign } from "@expo/vector-icons";

interface EpisodeItemProps {
  episode: {
    id: string;
    title: string;
    poster: string;
    duration: string;
    plot: string;
    video: string;
  };
}

const EpisodeItem = (props: EpisodeItemProps) => {
  const { episode } = props;
  return (
    <View style={{ marginVertical: 10 }}>
      <View style={styles.row}>
        <Image style={styles.image} source={{ uri: episode.poster }} />

        <View style={styles.titleContainer}>
          <Text style={styles.title}>{episode.title}</Text>
          <Text style={styles.duration}>{episode.duration}</Text>
        </View>
        <AntDesign name="download" size={24} color={"white"} />
      </View>
      <Text style={styles.plot}>{episode.plot} </Text>
    </View>
  );
};

export default EpisodeItem;

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 5,
  },
  image: {
    height: 75,
    aspectRatio: 16 / 9,
    resizeMode: "cover",
    borderRadius: 3,
  },
  titleContainer: {
    flex: 1,
    padding: 5,
    justifyContent: "center",
  },
  title: {},
  duration: {
    color: "darkgrey",
    fontSize: 10,
  },
  plot: {
    color: "darkgrey",
  },
});
