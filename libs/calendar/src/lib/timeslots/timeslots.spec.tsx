import { render } from '@testing-library/react';

import TimeSlots from './timeslots';

describe('TimeSlots', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TimeSlots timeSlots={["10:00", "10:30"]} />);
    expect(baseElement).toBeTruthy();
  });
});
