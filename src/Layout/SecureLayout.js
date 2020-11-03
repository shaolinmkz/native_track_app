import React from "react";

const SecureLayout = ({ component: Component, navigation, ...rest }) => {
  return <Component navigation={navigation} {...rest} />;
};

SecureLayout.navigationOptions = {
  headerShown: false,
};

export default SecureLayout;
