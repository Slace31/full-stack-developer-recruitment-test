import { render } from '@testing-library/react';

import TimeSlotWrapper from './timeslotwrapper';

describe('TimeSlotWrapper', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TimeSlotWrapper timeSlot={"10:00"} />);
    expect(baseElement).toBeTruthy();
  });
});
