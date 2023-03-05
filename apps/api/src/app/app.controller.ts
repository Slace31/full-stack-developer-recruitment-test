import {Controller, Get} from '@nestjs/common';
import {AppService} from './app.service';
import {ITimeSlot} from "../models";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getTimeSlots(): ITimeSlot[] {
    const location = this.appService.getLocation()

    return this.appService.getTimeSlots(location);
  }
}
