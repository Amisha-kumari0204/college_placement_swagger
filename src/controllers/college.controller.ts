import { Controller, Get, Query } from '@nestjs/common';
import { CollegeService } from '../services/college.service';

@Controller('colleges')
export class CollegeController {
  constructor(private readonly collegeService: CollegeService) {}

  @Get()
  getCollegesByCityOrState(
    @Query('city') cityId?: number,
    @Query('state') stateId?: number,
  ) {
    return this.collegeService.getCollegesByCityOrState(cityId, stateId);
  }
}
