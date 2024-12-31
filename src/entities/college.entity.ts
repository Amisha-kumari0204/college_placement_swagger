import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { CollegePlacement } from './college-placement.entity';
import { CollegeWiseCourse } from './college-wise-course.entity';

@Entity()
export class College {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  score: number;

  @Column()
  cityId: number;

  @Column()
  stateId: number;

  @OneToMany(() => CollegePlacement, (placement) => placement.college)
  placements: CollegePlacement[];

  @OneToMany(() => CollegeWiseCourse, (course) => course.college)
  courses: CollegeWiseCourse[];
}
