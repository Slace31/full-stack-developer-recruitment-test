import { render } from '@testing-library/react';

import DatePicker from './datepicker';

describe('DatePicker', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DatePicker selectedDate={new Date()} onSelectedDateChange={null} dateRange={9} />);
    expect(baseElement).toBeTruthy();
  });
});
