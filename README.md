# Native Track App

## Setting up an expo app

1. Run `npx expo-cli init <APP_NAME_GOES_HERE> --npm`

2. **Install React Navigation** `npm install react-navigation react-navigation-stack react-navigation-tabs`

3. **Install Dependencies**

`expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view`

4. Navigator Hookup

```
  import { createAppContainer, createSwitchNavigator } from 'react-navigation';
  import { createStackNavigator } from 'react-navigation-stack';
  import { createBottomTabNavigator } from 'react-navigation-tabs';
```

---

# navigationOptions Deprecation Warning

If you are using expo v39+ you will need to do the following:

```
SignupScreen.navigationOptions = () => {
  return {
    headerShown: false,
  };
};
```

Older versions of Expo (such as v37) will need to write it this way:

```
SignupScreen.navigationOptions = () => {
  return {
    header: () => false,
  };
};
```

# AsyncStorage (EXPO)

Run the command below on your CLI

`expo install @react-native-community/async-storage`

### USAGE

```
   import AsyncStorage from '@react-native-async-storage/async-storage';

   OR (Depending on the location in your node_modules)

   import AsyncStorage from '@react-native-community/async-storage';

  const storeData = async (value) => {
    try {
      const jsonValue = JSON.stringify(value)
      await AsyncStorage.setItem('@storage_Key', jsonValue)
    } catch (e) {
      // saving error
    }
}
```

https://react-native-async-storage.github.io/async-storage/docs/usage/

## Installing maps

Run

`npx expo-cli install react-native-maps`

