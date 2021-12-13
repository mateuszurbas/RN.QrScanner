import { Platform, StyleSheet } from 'react-native';

import { Colors } from '@theme/colors';

const styles = StyleSheet.create({
  checkboxContainer: {
    paddingVertical: Platform.OS === 'ios' ? 14 : 0,
    marginTop: 12,
    marginBottom: 25,
    alignItems: 'center',
    flexDirection: 'row',
  },
  box: {
    width: 20,
    height: 20,
    borderRadius: 2,
    borderWidth: 1,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: Colors.black,
  },
  label: {
    marginLeft: 14,
  },
  errorText: {
    position: 'absolute',
    fontSize: 10,
    bottom: 15,
    color: Colors.red,
  },
});

export default styles;
