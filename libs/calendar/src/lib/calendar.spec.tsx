import { render } from '@testing-library/react';

import Calendar from './calendar';

describe('Calendar', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Calendar selectedDate={new Date()} onSelectedDateChange={null} dateRange={9} availableTimeSlots={[]} />);
    expect(baseElement).toBeTruthy();
  });
});
