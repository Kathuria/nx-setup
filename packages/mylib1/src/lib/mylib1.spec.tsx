import { render } from '@testing-library/react';

import Mylib1 from './mylib1';

describe('Mylib1', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Mylib1 />);
    expect(baseElement).toBeTruthy();
  });
});
