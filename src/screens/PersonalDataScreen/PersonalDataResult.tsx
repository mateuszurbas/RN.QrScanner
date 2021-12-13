import React, { useEffect } from 'react';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

import { AppText } from '@/components/AppText';
import { Dict } from '@/constants/dictionary';

import { PersonalDataFrom } from './PersonalDataScreen';
import styles from './styles';

type Props = {
  data: PersonalDataFrom | undefined;
};

function PersonalDataResult({ data }: Props) {
  const yOffset = useSharedValue(200);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: yOffset.value }],
    };
  });

  useEffect(() => {
    yOffset.value = withTiming(data ? 0 : 200, {
      duration: 1000,
      easing: Easing.out(Easing.exp),
    });
  }, [data, yOffset]);

  return (
    <Animated.View style={[styles.personalDataResult, animatedStyles]}>
      <AppText style={styles.formInfoText}>{Dict.formResult}</AppText>

      {data ? (
        <>
          <AppText style={styles.formResultItem}>
            {Dict.nameLabel}: {data.name}
          </AppText>
          <AppText style={styles.formResultItem}>
            {Dict.surnameLabel}: {data.surname}
          </AppText>
          <AppText style={styles.formResultItem}>
            Checkbox: {String(data.terms)}
          </AppText>
        </>
      ) : null}
    </Animated.View>
  );
}

export default PersonalDataResult;
