export default (screen, navigationOptions = {}) => ({
  screen,
  navigationOptions: {
    header: false,
    ...navigationOptions,
  }
});
