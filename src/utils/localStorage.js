import AsyncStorage from "@react-native-community/async-storage";

export const localStore = {
  save: (key, value) =>
  new Promise((resolve, reject) => {
    AsyncStorage.setItem(key, value, (err) => {
      if (err) {
        return reject(err);
      } else {
        return resolve(value);
      }
    });
  }),
  find: () =>
    new Promise((resolve, reject) => {
      AsyncStorage.getAllKeys((err, keys) => {
        const keysObj = {};
        if (keys?.length) {
          keys.forEach(async (key) => {
            const data = await AsyncStorage.getItem(key);
            keysObj[key] = data;
          });
          return resolve(keysObj);
        } else {
          return resolve(keysObj);
        }
      });
    }),
  findOne: (key = "") =>
    new Promise((resolve, reject) => {
      AsyncStorage.getItem(key, (err, result) => {
        if (result) {
          resolve(result);
        } else {
          resolve(null);
        }
      });
    }),
  removeOne: (key = "") =>
    new Promise((resolve, reject) => {
      AsyncStorage.removeItem(key, () => {
        resolve(null);
      });
    }),
};
