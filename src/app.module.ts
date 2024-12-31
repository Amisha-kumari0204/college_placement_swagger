import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { College } from './entities/college.entity';
import { CollegePlacement } from './entities/college-placement.entity';
import { CollegeWiseCourse } from './entities/college-wise-course.entity';
import { CollegeController } from './controllers/college.controller';
import { CollegePlacementController } from './controllers/college-placement.controller';
import { CollegeWiseCourseController } from './controllers/college-wise-course.controller';
import { CollegeService } from './services/college.service';
import { CollegePlacementService } from './services/college-placement.service';
import { CollegeWiseCourseService } from './services/college-wise-course.service';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'dpg-ctq23ejqf0us73egi6j0-a',
      username: 'backend0202_user',
      password: 'XfVW2nLSMlk4ElMh1urDlG91uBI2AdMG',
    database: 'backend0202',
    autoLoadEntities: true,
      url: process.env.DATABASE_URL,
      entities: [College, CollegePlacement, CollegeWiseCourse],
      synchronize: true,
      ssl: {
        rejectUnauthorized: false, // Use certificates in production
    },
    }),
    TypeOrmModule.forFeature([College, CollegePlacement, CollegeWiseCourse]),
  ],
  controllers: [
    CollegeController,
    CollegePlacementController,
    CollegeWiseCourseController,
  ],
  providers: [
    CollegeService,
    CollegePlacementService,
    CollegeWiseCourseService,
  ],
})
export class AppModule {}
