import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { RegisterOptions, useForm } from 'react-hook-form';
import { KeyboardAvoidingView, Platform, ScrollView } from 'react-native';

import { Button } from '@/components/Button';
import { Checkbox } from '@/components/Checkbox';
import { Input } from '@/components/Input';
import { Dict } from '@/constants/dictionary';

import PersonalDataResult from './PersonalDataResult';
import styles from './styles';

export type PersonalDataFrom = {
  name: string;
  surname: string;
  terms: boolean;
};

const defaultValues = {
  name: '',
  surname: '',
  terms: false,
};

const commonRules: RegisterOptions = {
  required: Dict.requiredError,
  minLength: {
    value: 3,
    message: Dict.notEnoughCharacters,
  },
  maxLength: {
    value: 50,
    message: Dict.toManyCharacters,
  },
};

const PersonalDataScreen = () => {
  const [formData, setFormData] = useState<PersonalDataFrom>();
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<PersonalDataFrom>({
    mode: 'onBlur',
    defaultValues,
  });

  const onSubmit = (formValues: PersonalDataFrom) => {
    reset();
    setFormData(formValues);
  };

  return (
    <>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <ScrollView>
          <Input
            control={control}
            name={'name'}
            label={Dict.nameLabel}
            placeholder={Dict.namePlaceholder}
            error={errors.name?.message}
            key={'name'}
            rules={commonRules}
            testID="input.name"
          />
          <Input
            control={control}
            name={'surname'}
            label={Dict.surnameLabel}
            placeholder={Dict.surnamePlaceholder}
            error={errors.surname?.message}
            key={'surname'}
            rules={commonRules}
            testID="input.surname"
          />
          <Checkbox
            control={control}
            name={'terms'}
            label={Dict.personalData}
            error={errors.terms?.message}
            rules={{ required: commonRules.required }}
          />
          <Button label={Dict.sendForm} onPress={handleSubmit(onSubmit)} />
          <StatusBar style="auto" />
        </ScrollView>
      </KeyboardAvoidingView>
      <PersonalDataResult data={formData} />
    </>
  );
};

export default PersonalDataScreen;
