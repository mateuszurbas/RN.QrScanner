import { Colors } from '@/theme/colors';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    borderRadius: 4,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 115,
    paddingHorizontal: 12,
  },
  primary: {
    backgroundColor: Colors.blue,
    paddingVertical: 11,
  },
  secondary: {
    backgroundColor: Colors.pink,
    paddingVertical: 9,
  },
  disabled: {
    opacity: 0.6,
  },
  icon: {
    marginRight: 8,
  },
  text: {
    color: Colors.white,
  },
  primaryText: {
    fontSize: 15,
  },
  secondaryText: {
    fontSize: 14,
  },
});

export default styles;
