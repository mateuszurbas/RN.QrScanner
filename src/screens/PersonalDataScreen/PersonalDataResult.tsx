import React from 'react';
import { View } from 'react-native';

import { AppText } from '@/components/AppText';
import { Dict } from '@/constants/dictionary';

import { PersonalDataFrom } from './PersonalDataScreen';
import styles from './styles';

type Props = {
  data: PersonalDataFrom | undefined;
};

function PersonalDataResult({ data }: Props) {
  return (
    <View style={styles.personalDataResult}>
      {data ? (
        <>
          <AppText>
            {Dict.nameLabel}: {data.name}
          </AppText>
          <AppText>
            {Dict.surnameLabel}: {data.surname}
          </AppText>
          <AppText>Checkbox: {String(data.terms)}</AppText>
        </>
      ) : null}
    </View>
  );
}

export default PersonalDataResult;
