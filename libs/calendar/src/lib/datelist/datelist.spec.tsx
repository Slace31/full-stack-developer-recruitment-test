import { render } from '@testing-library/react';

import DateList from './datelist';

describe('DateList', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DateList dates={[new Date('2021-04-10'), new Date('2021-04-11')]} onSelectedDateChange={null} />);
    expect(baseElement).toBeTruthy();
  });
});
