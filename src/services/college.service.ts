import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { College } from '../entities/college.entity';

@Injectable()
export class CollegeService {
  constructor(
    @InjectRepository(College)
    private readonly collegeRepo: Repository<College>,
  ) {}

  async getCollegesByCityOrState(cityId?: number, stateId?: number) {
    const query = this.collegeRepo.createQueryBuilder('college');

    if (cityId) query.where('college.cityId = :cityId', { cityId });
    if (stateId) query.orWhere('college.stateId = :stateId', { stateId });

    return query.getMany();
  }
}
