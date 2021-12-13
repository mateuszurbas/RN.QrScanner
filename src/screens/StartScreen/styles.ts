import { StyleSheet } from 'react-native';

import { Colors } from '@/theme/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    backgroundColor: Colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  separator: {
    marginBottom: 40,
  },
  scanResult: {
    position: 'absolute',
    top: 40,
    maxHeight: 300,
    marginBottom: 20,
    paddingHorizontal: 16,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  barCodeScanner: {
    width: '50%',
    height: '25%',
    borderRadius: 10,
    marginBottom: 25,
    overflow: 'hidden',
  },
  barCodeScannerInfoText: {
    marginBottom: 25,
    fontSize: 20,
    textAlign: 'center',
    paddingHorizontal: 50,
    color: Colors.blue,
  },
  cancelScannerButton: {
    width: '50%',
  },
});

export default styles;
