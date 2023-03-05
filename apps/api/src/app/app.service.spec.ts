import { Test } from '@nestjs/testing';

import { AppService } from './app.service';

describe('AppService', () => {
  let service: AppService;

  beforeAll(async () => {
    const app = await Test.createTestingModule({
      providers: [AppService],
    }).compile();

    service = app.get<AppService>(AppService);
  });

  describe('getLocation', () => {
    it('should return a location', () => {
      expect(service.getLocation()).toHaveProperty('openingTime');
      expect(service.getLocation()).toHaveProperty('terrains');
      expect(service.getLocation()).toHaveProperty('sessionDuration');
    });
  });

  describe('getTimeSlots', () => {
    it('should return the timeslots for a location', () => {
      expect(service.getTimeSlots(service.getLocation())).toHaveLength(96);
    });
  });
});
