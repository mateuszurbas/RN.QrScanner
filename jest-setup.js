/* eslint-disable no-undef */
require('react-native-reanimated/lib/reanimated2/jestUtils').setUpTests();

jest.mock('@react-navigation/native', () => {
  const actualNav = jest.requireActual('@react-navigation/native');
  return {
    ...actualNav,
    useFocusEffect: () => jest.fn(),
    useNavigation: () => ({
      navigate: jest.fn(),
    }),
  };
});
