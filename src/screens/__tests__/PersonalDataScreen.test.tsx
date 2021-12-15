import { render, fireEvent, waitFor } from '@testing-library/react-native';
import React from 'react';

import { Dict } from '@/constants/dictionary';

import { PersonalDataScreen } from '../PersonalDataScreen';

it('PersonalDataScreen - Content', () => {
  const { getAllByText } = render(<PersonalDataScreen />);
  // Sprawdzanie czy screen ma niezbędny content
  expect(getAllByText(Dict.surnameLabel).length).toBe(1);
  expect(getAllByText(Dict.nameLabel).length).toBe(1);
  expect(getAllByText(Dict.personalData).length).toBe(1);
  expect(getAllByText(Dict.sendForm).length).toBe(1);
});

it('PersonalDataScreen - required error', async () => {
  const { getAllByText, getByText } = render(<PersonalDataScreen />);
  fireEvent.press(getByText(Dict.sendForm));
  await waitFor(() => {
    expect(getAllByText(Dict.requiredError).length).toBe(3);
  });
});

it('PersonalDataScreen - min error', async () => {
  const { getAllByText, getByText, getByTestId } = render(
    <PersonalDataScreen />,
  );
  fireEvent.changeText(getByTestId('input.name'), 'a');
  fireEvent.changeText(getByTestId('input.surname'), 'a');
  fireEvent.press(getByText(Dict.sendForm));
  await waitFor(() => {
    expect(getAllByText(Dict.notEnoughCharacters).length).toBe(2);
  });
});

it('PersonalDataScreen - max error', async () => {
  const { getAllByText, getByText, getByTestId } = render(
    <PersonalDataScreen />,
  );
  fireEvent.changeText(
    getByTestId('input.name'),
    'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
  );
  fireEvent.changeText(
    getByTestId('input.surname'),
    'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
  );
  fireEvent.press(getByText(Dict.sendForm));
  await waitFor(() => {
    expect(getAllByText(Dict.toManyCharacters).length).toBe(2);
  });
});

it('PersonalDataScreen - valid form', async () => {
  const { getByText, getByTestId, queryByText } = render(
    <PersonalDataScreen />,
  );
  fireEvent.changeText(getByTestId('input.name'), 'Abcd');
  fireEvent.changeText(getByTestId('input.surname'), 'Abcd');
  fireEvent.press(getByText(Dict.personalData));
  await waitFor(() => {
    fireEvent.press(getByText(Dict.sendForm));
  });

  expect(queryByText(Dict.requiredError)).toBeNull();
  expect(queryByText(Dict.notEnoughCharacters)).toBeNull();
  expect(queryByText(Dict.toManyCharacters)).toBeNull();
});
