import { Platform, StyleSheet } from 'react-native';

import { Colors } from '@/theme/colors';

const styles = StyleSheet.create({
  label: {
    marginTop: 24,
    color: Colors.black,
  },
  inputWrapper: {
    paddingHorizontal: 16,
    paddingVertical: Platform.OS === 'ios' ? 14 : 0,
    marginTop: 12,
    marginBottom: 25,
    borderRadius: 4,
    backgroundColor: Colors.white,
    borderWidth: 1,
    borderColor: Colors.white,
  },
  errorWrapper: {
    borderWidth: 1,
    borderColor: Colors.red,
  },
  input: {
    minWidth: '80%',
    color: Colors.black,
  },
  errorText: {
    position: 'absolute',
    fontSize: 10,
    bottom: 5,
    color: Colors.red,
  },
});

export default styles;
