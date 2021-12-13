import { StyleSheet } from 'react-native';

import { Colors } from '@theme/colors';

const styles = StyleSheet.create({
  checkboxContainer: {
    alignItems: 'flex-start',
    display: 'flex',
    flexDirection: 'row',
    marginVertical: 25,
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
    top: 50,
    color: Colors.red,
  },
});

export default styles;
