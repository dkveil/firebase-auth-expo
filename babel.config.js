module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      "babel-preset-expo",
      // "module:react-native-dotenv",
      "nativewind/babel",
    ],
    plugins: [
      // 'module:react-native-dotenv',
    ],
  };
};