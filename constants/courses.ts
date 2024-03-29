export const COURSES = {
  "saa-c03": { name: "SAA", color: "#3638EE" },
  "dva-c02": { name: "DVA", color: "#3638EE" },
  "soa-c02": { name: "SOA", color: "#3638EE" },
  "sap-c02": { name: "SAP", color: "#058296" },
  "dop-c02": { name: "DOP", color: "#058296" },
  "ans-c01": { name: "ANS", color: "#5131B1" },
  "scs-c01": { name: "SCS", color: "#5131B1" },
} as const;

export type CourseCode = keyof typeof COURSES;

export const COURSE_CODES = Object.entries(COURSES).map(
  ([key]) => key as CourseCode,
);

export const COURSE_CHECKBOXES = Object.entries(COURSES).map(([key, val]) => ({
  id: key as CourseCode,
  label: val.name,
}));
