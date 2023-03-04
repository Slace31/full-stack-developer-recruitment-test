import { render } from '@testing-library/react';

import DateWrapper from './datewrapper';

describe('DateWrapper', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DateWrapper date={new Date()} onSelectedDateChange={null} isSelected={false} />);
    expect(baseElement).toBeTruthy();
  });
});
