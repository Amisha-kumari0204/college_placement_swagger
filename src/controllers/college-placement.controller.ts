import { Controller, Get, Param } from '@nestjs/common';
import { CollegePlacementService } from '../services/college-placement.service';

@Controller('college_data')
export class CollegePlacementController {
  constructor(private readonly placementService: CollegePlacementService) {}

  @Get(':collegeId/avg_section')
  getAvgSection(@Param('collegeId') collegeId: number) {
    return this.placementService.getAvgSection(collegeId);
  }

  @Get(':collegeId/placement_section')
  getPlacementSection(@Param('collegeId') collegeId: number) {
    return this.placementService.getPlacementSection(collegeId);
  }
}
