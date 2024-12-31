
import { Colleges } from '../entities/college.entity.ts';
import { CollegePlacement } from '../entities/college-placement.entity.ts';
import { CollegeWiseCourse } from '../entities/college-wise-course.entity.ts';
// import { Cities } from './entities/city.entity.ts';
// import { States } from './entities/state.entity.ts';

async function seed() {
  const collegeRepository = getRepository(Colleges);
  const placementRepository = getRepository(CollegePlacement);
  const courseRepository = getRepository(CollegeWiseCourse);
//   const cityRepository = getRepository(Cities);
//   const stateRepository = getRepository(States);

  await stateRepository.save([
    { id: 1, name: 'California' },
    { id: 2, name: 'Texas' },
  ]);

  await cityRepository.save([
    { id: 1, name: 'New York' },
    { id: 2, name: 'Los Angeles' },
    { id: 3, name: 'Chicago' },
  ]);

  await collegeRepository.save([
    { id: 1, name: 'College A', score: 850, city_id: 1, state_id: 1 },
    { id: 2, name: 'College B', score: 920, city_id: 2, state_id: 2 },
    { id: 3, name: 'College C', score: 780, city_id: 3, state_id: 1 },
  ]);

  await placementRepository.save([
    { id: 1, college_id: 1, year: 2023, highest_placement: 50, average_placement: 45, median_placement: 40, placement_rate: 90 },
    { id: 2, college_id: 1, year: 2022, highest_placement: 55, average_placement: 47, median_placement: 42, placement_rate: 92 },
    { id: 3, college_id: 2, year: 2023, highest_placement: 70, average_placement: 65, median_placement: 60, placement_rate: 85 },
    { id: 4, college_id: 3, year: 2023, highest_placement: 40, average_placement: 35, median_placement: 30, placement_rate: 75 },
  ]);

  await courseRepository.save([
    { id: 1, college_id: 1, course_name: 'Computer Science', course_duration: 4, course_fee: 100000 },
    { id: 2, college_id: 1, course_name: 'Mechanical Engineering', course_duration: 4, course_fee: 95000 },
    { id: 3, college_id: 2, course_name: 'Data Science', course_duration: 2, course_fee: 120000 },
    { id: 4, college_id: 3, course_name: 'Civil Engineering', course_duration: 4, course_fee: 80000 },
  ]);

  console.log('Data seeded successfully!');
}

seed().catch((error) => console.log(error));
