import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { View } from 'react-native';

import { Button, ButtonVariants } from '@/components/Button';
import { Dict } from '@/constants/dictionary';
import { MainStackParamList } from '@/navigation/MainStack/MainStack';
import { MainStackRoutes } from '@/navigation/routes';
import { Colors } from '@/theme/colors';

import BarCodeResult from './BarCodeResult';
import BarCodeScannerModal from './BarCodeScannerModel';
import styles from './styles';

const StartScreen = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [scannerData, setScannerData] = useState<string>();
  const navigation = useNavigation<StackNavigationProp<MainStackParamList>>();

  const handleBarCodeScanned = (data: string) => {
    setScannerData(data);
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <BarCodeResult data={scannerData} />
        <Button
          label={Dict.scan}
          icon={<Ionicons name="md-barcode" size={19} color={Colors.white} />}
          onPress={() => {
            setScannerData(undefined);
            setIsModalVisible(true);
          }}
          style={styles.separator}
        />
        <Button
          label={Dict.personalData}
          variant={ButtonVariants.secondary}
          onPress={() => {
            navigation.navigate(MainStackRoutes.PersonalData);
          }}
        />
        <BarCodeScannerModal
          isModalVisible={isModalVisible}
          setModalVisible={setIsModalVisible}
          handleBarCodeScanned={handleBarCodeScanned}
        />
        <StatusBar style="auto" />
      </View>
    </View>
  );
};

export default StartScreen;
