import { StyleSheet } from 'react-native';

import { Colors } from '@/theme/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  separator: {
    marginBottom: 40,
  },
  scanResultContainer: {
    position: 'absolute',
    top: 0,
    height: 250,
    width: '100%',
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
  scanResultText: {
    marginTop: 50,
    textAlign: 'center',
    marginBottom: 20,
    color: Colors.blue,
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
