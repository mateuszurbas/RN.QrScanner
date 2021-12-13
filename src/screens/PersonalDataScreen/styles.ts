import { StyleSheet } from 'react-native';

import { Colors } from '@/theme/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },

  personalDataResult: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 200,
    paddingHorizontal: 16,
    backgroundColor: '#f5f5f5',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
  },

  formInfoText: {
    fontSize: 20,
    textAlign: 'center',
    color: Colors.blue,
    marginBottom: 20,
    marginTop: 10,
  },
  formResultItem: {
    marginVertical: 5,
    textAlign: 'center',
  },
});

export default styles;
