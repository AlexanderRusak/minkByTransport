import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { withNavigation } from "react-navigation";
import { THEME } from "../theme";

class AppTransportItem extends React.Component {
  directionHandler = () => {
    const directionsData = this.props.directions;
    this.props.navigation.navigate("Directions", [
      directionsData,
      this.props.type,
      this.props.number,
    ]);
  };
  render() {
    return (
      <TouchableOpacity
        onPress={() => this.directionHandler()}
        style={styles.item}
      >
        <View style={styles.boxItem}>
          <Text style={styles.text}>{this.props.number}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  boxItem: {
    width: 70,
    height: 70,
    justifyContent: "center",
    alignItems: "center",
  },
  item: {
    backgroundColor: "#ccc",
    marginTop: 5,
    marginRight: 5,
  },
  text: {
    fontFamily: "open-regular",
    fontSize: 20,
  },
});

export default withNavigation(AppTransportItem);
