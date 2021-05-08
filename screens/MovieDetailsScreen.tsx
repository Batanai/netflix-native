import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  FlatList,
  Pressable,
} from "react-native";
import {
  AntDesign,
  MaterialIcons,
  Ionicons,
  Entypo,
  FontAwesome,
  Feather,
} from "@expo/vector-icons";
import movie from "../assets/data/movie";
import EpisodeItem from "../components/EpisodeItem";
import { Picker } from "@react-native-picker/picker";

const firstEpisode = movie.seasons.items[0].episodes.items[0];
const firstSeason = movie.seasons.items[0];

const MovieDetailsScreen = () => {
  const seasonNames = movie.seasons.items.map((season) => season.name);

  return (
    <View>
      <Image style={styles.image} source={{ uri: firstEpisode.poster }} />

      <FlatList
        data={firstSeason.episodes.items}
        style={{ marginBottom: 250 }}
        renderItem={({ item }) => <EpisodeItem episode={item} />}
        ListHeaderComponent={
          <View style={{ padding: 12 }}>
            <Text style={styles.title}>{movie.title}</Text>
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.match}>98% match</Text>
              <Text style={styles.year}>{movie.year}</Text>
              <View style={styles.ageContainer}>
                <Text style={styles.age}>12+</Text>
              </View>
              <Text style={styles.year}>{movie.numberOfSeasons} Seasons</Text>
              <MaterialIcons name="hd" size={24} color="white" />
            </View>

            {/* Play Button */}
            <Pressable
              onPress={() => {
                console.warn("Plage");
              }}
              style={styles.playButton}
            >
              <Text style={styles.playButtonText}>
                <Entypo name="controller-play" size={16} color="black" />
                Play
              </Text>
            </Pressable>

            {/* Download Button */}
            <Pressable
              onPress={() => {
                console.warn("Download");
              }}
              style={styles.downloadButton}
            >
              <Text style={styles.downloadButtonText}>
                <AntDesign name="download" size={16} color="white" /> Download
              </Text>
            </Pressable>

            <Text style={{ marginVertical: 10, color: "white" }}>
              {movie.plot}
            </Text>
            <Text style={styles.year}>Cast: {movie.cast}</Text>
            <Text style={styles.year}>Creator: {movie.creator}</Text>

            {/* Row with icon buttons */}
            <View style={{ flexDirection: "row", marginTop: 20 }}>
              <View style={{ alignItems: "center", marginHorizontal: 20 }}>
                <AntDesign name="plus" size={24} color={"white"} />
                <Text style={{ color: "darkgrey", marginTop: 5 }}>My List</Text>
              </View>

              <View style={{ alignItems: "center", marginHorizontal: 20 }}>
                <Feather name="thumbs-up" size={24} color="white" />
                <Text style={{ color: "darkgrey", marginTop: 5 }}>Rate</Text>
              </View>

              <View style={{ alignItems: "center", marginHorizontal: 20 }}>
                <FontAwesome name="send-o" size={24} color="white" />
                <Text style={{ color: "darkgrey", marginTop: 5 }}>Share</Text>
              </View>
            </View>
            <View style={{ backgroundColor: "white" }}></View>

            <Picker
              selectedValue={"a"}
              onValueChange={(itemValue, itemIndex) => {}}
              style={{ backgroundColor: "white" }}
            >
              {seasonNames.map((seasonName) => (
                <Picker.Item
                  label={seasonName}
                  value={seasonName}
                  key={seasonName}
                />
              ))}
            </Picker>
          </View>
        }
      />
    </View>
  );
};

export default MovieDetailsScreen;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    aspectRatio: 16 / 9,
    resizeMode: "cover",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  match: {
    color: "#59d467",
    fontWeight: "bold",
    marginRight: 5,
  },
  year: {
    color: "#757575",
    marginRight: 5,
  },
  ageContainer: {
    backgroundColor: "#e6e229",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 2,
    paddingHorizontal: 3,
    marginRight: 5,
  },
  age: {
    color: "black",
    fontWeight: "bold",
  },

  // Button
  playButton: {
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
    borderRadius: 3,
    marginVertical: 5,
  },
  playButtonText: {
    color: "black",
    fontSize: 16,
    fontWeight: "bold",
  },
  downloadButton: {
    backgroundColor: "#2b2b2b",
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
    borderRadius: 3,
    marginVertical: 5,
  },
  downloadButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
