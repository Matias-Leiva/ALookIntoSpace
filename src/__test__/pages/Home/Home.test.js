import React from 'react';
import { render } from '@testing-library/react';
import Home from '../../../pages/Home/Home';

describe('Tests in <Home />', () => {
  test('To Match Snapshot', () => {
    const component = render(<Home />);
    expect(component).toMatchSnapshot();
  });
});
