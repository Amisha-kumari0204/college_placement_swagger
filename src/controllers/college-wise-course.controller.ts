import { Controller, Get, Param } from '@nestjs/common';
import { CollegeWiseCourseService } from '../services/college-wise-course.service';

@Controller('college_courses')
export class CollegeWiseCourseController {
  constructor(private readonly courseService: CollegeWiseCourseService) {}

  @Get(':collegeId')
  getCoursesByCollegeId(@Param('collegeId') collegeId: number) {
    return this.courseService.getCoursesByCollegeId(collegeId);
  }
}
