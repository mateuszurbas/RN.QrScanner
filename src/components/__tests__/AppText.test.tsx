import * as React from 'react';
import renderer from 'react-test-renderer';

import { AppText } from '../AppText';

it(`Component AppText renders correctly`, () => {
  const tree = renderer.create(<AppText>Test</AppText>);
  expect(tree).toMatchSnapshot();
});
