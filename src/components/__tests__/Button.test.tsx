import * as React from 'react';
import renderer from 'react-test-renderer';

import { Button } from '../Button';

it(`Component Button renders correctly`, () => {
  const tree = renderer.create(<Button label="Test" onPress={() => {}} />);
  expect(tree).toMatchSnapshot();
});
