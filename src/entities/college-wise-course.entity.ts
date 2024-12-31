import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { College } from './college.entity';

@Entity()
export class CollegeWiseCourse {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => College, (college) => college.courses)
  college: College;

  @Column()
  courseName: string;

  @Column()
  courseDuration: string;

  @Column({ type: 'float' })
  courseFee: number;
}
