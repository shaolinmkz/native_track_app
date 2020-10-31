import React from "react";
import { Text } from "react-native-elements";
import { withNavigation } from "react-navigation";
import { StyleSheet, TouchableOpacity } from "react-native";
import Spacer from "./Spacer";

const NavLink = ({
  navigation,
  linkText,
  pageLink,
}) => (
      <Spacer>
        <TouchableOpacity onPress={() => navigation.navigate(pageLink)}>
          <Text style={styles.link}>
            {linkText}
          </Text>
        </TouchableOpacity>
      </Spacer>
  )

const styles = StyleSheet.create({
  link: {
    color: "blue",
  }
});

export default withNavigation(NavLink);
