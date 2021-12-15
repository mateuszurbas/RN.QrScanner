import { render, fireEvent, waitFor } from '@testing-library/react-native';
import React from 'react';

import { Dict } from '@/constants/dictionary';

import { StartScreen } from '../StartScreen';

it('PersonalDataScreen - Content', () => {
  const { getAllByText } = render(<StartScreen />);
  // Sprawdzanie czy screen ma potzrebny content
  expect(getAllByText(Dict.scan).length).toBe(1);
  expect(getAllByText(Dict.personalData).length).toBe(1);
});

it('PersonalDataScreen - Open/Close modal event', async () => {
  const { getByText, queryByText } = render(<StartScreen />);
  // Sprawdzanie czy modal jest początkowo zamknięty
  expect(queryByText(Dict.cancel)).toBeNull();
  fireEvent.press(getByText(Dict.scan));
  await waitFor(() => {
    // Sprawdzanie czy modal jest otwarty
    getByText(Dict.qrCodeInfo);
    getByText(Dict.cancel);
    fireEvent.press(getByText(Dict.cancel));
  });
  // Sprawdzanie czy modal jest ponownie zamknięty
  expect(queryByText(Dict.cancel)).toBeNull();
});
