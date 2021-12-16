import React, { useEffect } from 'react';
import { ScrollView } from 'react-native';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

import { AppText } from '@/components/AppText';
import { Dict } from '@/constants/dictionary';

import styles from './styles';

type Props = {
  data: string | undefined;
};

function BarCodeResult({ data }: Props) {
  const yOffset = useSharedValue(-250);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: yOffset.value }],
    };
  });

  useEffect(() => {
    yOffset.value = withTiming(data ? 0 : -250, {
      duration: 1000,
      easing: Easing.out(Easing.exp),
    });
  }, [data, yOffset]);

  return (
    <Animated.View style={[styles.scanResultContainer, animatedStyles]}>
      <ScrollView>
        <AppText style={styles.scanResultText}>{Dict.scanResultText}</AppText>
        <AppText>{data}</AppText>
      </ScrollView>
    </Animated.View>
  );
}

export default BarCodeResult;
