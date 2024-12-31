import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CollegePlacement } from '../entities/college-placement.entity';

@Injectable()
export class CollegePlacementService {
  constructor(
    @InjectRepository(CollegePlacement)
    private readonly placementRepo: Repository<CollegePlacement>,
  ) {}

  async getAvgSection(collegeId: number) {
    return this.placementRepo
      .createQueryBuilder('placement')
      .select('placement.year', 'year')
      .addSelect('AVG(placement.highestPlacement)', 'avgHighestPlacement')
      .addSelect('AVG(placement.averagePlacement)', 'avgAveragePlacement')
      .addSelect('AVG(placement.medianPlacement)', 'avgMedianPlacement')
      .addSelect('AVG(placement.placementRate)', 'avgPlacementRate')
      .where('placement.collegeId = :collegeId', { collegeId })
      .andWhere('placement.highestPlacement > 0')
      .andWhere('placement.averagePlacement > 0')
      .andWhere('placement.medianPlacement > 0')
      .andWhere('placement.placementRate > 0')
      .groupBy('placement.year')
      .orderBy('placement.year', 'ASC')
      .getRawMany();
  }

  async getPlacementSection(collegeId: number) {
    const placements = await this.placementRepo.find({
      where: { college: { id: collegeId } },
      order: { year: 'DESC' },
    });

    const result = placements.map((placement, index) => {
      let placementTrend = null;
      if (index < placements.length - 1) {
        const nextYearRate = placements[index + 1].placementRate;
        if (placement.placementRate > nextYearRate) placementTrend = 'UP';
        else if (placement.placementRate < nextYearRate) placementTrend = 'DOWN';
      }
      return { ...placement, placementTrend };
    });

    return result.filter((row) => row.highestPlacement && row.highestPlacement > 0);
  }
}
