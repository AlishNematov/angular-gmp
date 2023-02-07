import { FilterPipe } from './filter.pipe';

describe('FilterPipe', () => {
  const pipe = new FilterPipe();
  const courses = [
    {
      id: 1,
      title: 'Video Course 1. Name tag',
      creationDate: new Date('12.15.2022'),
      duration: 73,
      description: "1Learn about where you can find course descriptions, what information they include, how they work and details about various components of a course description. Course descriptions report information about a university or college's classes. They're published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during",
      topRated: true,
    },
    {
      id: 2,
      title: 'Video Course 2. Second',
      creationDate: new Date('02.25.2023'),
      duration: 88,
      description: "2Learn about where you can find course descriptions, what information they include, how they work and details about various components of a course description. Course descriptions report information about a university or college's classes. They're published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during",
      topRated: false,
    },
    {
      id: 3,
      title: 'Video Course 3. Name tag',
      creationDate: new Date('02.01.2023'),
      duration: 29,
      description: "3Learn about where you can find course descriptions, what information they include, how they work and details about various components of a course description. Course descriptions report information about a university or college's classes. They're published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during",
      topRated: false,
    },
  ];

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });
  it('should filter course array by title', () => {
    expect(pipe.transform(courses, 'Name')).toEqual(courses.filter(course => course.title.includes('Name') ));
  });
  it('should return same array if passed empty string', () => {
    expect(pipe.transform(courses, '')).toBe(courses);
  });
});
