import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { College } from './college.entity';

@Entity()
export class CollegePlacement {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => College, (college) => college.placements)
  college: College;

  @Column()
  year: number;

  @Column({ type: 'float', nullable: true })
  highestPlacement: number;

  @Column({ type: 'float', nullable: true })
  averagePlacement: number;

  @Column({ type: 'float', nullable: true })
  medianPlacement: number;

  @Column({ type: 'float', nullable: true })
  placementRate: number;
}
