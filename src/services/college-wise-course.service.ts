import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CollegeWiseCourse } from '../entities/college-wise-course.entity';

@Injectable()
export class CollegeWiseCourseService {
  constructor(
    @InjectRepository(CollegeWiseCourse)
    private readonly courseRepo: Repository<CollegeWiseCourse>,
  ) {}

  async getCoursesByCollegeId(collegeId: number) {
    return this.courseRepo.find({
      where: { college: { id: collegeId } },
      order: { courseFee: 'DESC' },
    });
  }
}
