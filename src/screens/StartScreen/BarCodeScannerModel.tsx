import { BarCodeScanner, PermissionStatus } from 'expo-barcode-scanner';
import React, { useEffect, useState } from 'react';
import { View, Modal } from 'react-native';

import { AppText } from '@/components/AppText';
import { Button } from '@/components/Button';
import { Dict } from '@/constants/dictionary';

import styles from './styles';

type ScanResult = {
  type: string;
  data: string;
};

type Props = {
  isModalVisible: boolean;
  setModalVisible: (value: boolean) => void;
  handleBarCodeScanned: (data: string) => void;
};

function BarCodeScannerModal({
  isModalVisible,
  setModalVisible,
  handleBarCodeScanned,
}: Props) {
  const [hasPermission, setHasPermission] = useState<boolean>();
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === PermissionStatus.GRANTED);
    })();
  }, []);

  useEffect(() => {
    if (hasPermission === null) {
      console.warn(Dict.cameraPermission);
    } else if (hasPermission === false) {
      console.warn(Dict.noAccessToCamera);
    }
  }, [hasPermission]);

  useEffect(() => {
    if (isModalVisible) {
      setScanned(false);
    }
  }, [isModalVisible]);

  const handleScanedResult = ({ type, data }: ScanResult) => {
    setScanned(true);
    toggleModal();
    console.log(type);
    handleBarCodeScanned(data);
  };

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <Modal
      visible={isModalVisible}
      transparent={true}
      animationType="fade"
      onRequestClose={toggleModal}>
      <View style={styles.modalContainer}>
        {hasPermission && (
          <>
            <AppText style={styles.barCodeScannerInfoText}>
              {Dict.qrCodeInfo}
            </AppText>
            <BarCodeScanner
              onBarCodeScanned={scanned ? undefined : handleScanedResult}
              style={styles.barCodeScanner}
            />
          </>
        )}
        <Button
          label={Dict.cancel}
          onPress={toggleModal}
          style={styles.cancelScannerButton}
        />
      </View>
    </Modal>
  );
}

export default BarCodeScannerModal;
