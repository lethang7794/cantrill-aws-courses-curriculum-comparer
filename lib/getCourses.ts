import { promises as fs } from "fs";
import { cache } from "react";

export const getCourses = cache(async () => {
  const file = await fs.readFile(process.cwd() + "/app/courses.json", "utf8");
  const data = JSON.parse(file);
  return data;
});

export const getFlatCourses = cache(async () => {
  let courses = await getCourses();
  let flat: any[] = [];
  let entries = Object.entries(courses).forEach(([level, levelCourse]) => {
    (levelCourse as []).forEach((course) => {
      flat.push(course);
    });
  });
  return flat;
});

export const coursesByKey = cache(async () => {
  let courses = await getCourses();
  let flat: any = {};
  Object.entries(courses).forEach(([level, levelCourse]) => {
    (levelCourse as []).forEach((course: any) => {
      flat[course.code as string] = course;
    });
  });
  return flat;
});
