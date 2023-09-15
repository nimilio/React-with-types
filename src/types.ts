interface CoursePartBase {
  name: string;
  exerciseCount: number;
}

interface CoursePartBasic extends CourseDescription {
  kind: "basic"
}

interface CoursePartGroup extends CoursePartBase {
  groupProjectCount: number;
  kind: "group"
}

interface CoursePartBackground extends CourseDescription {
  backgroundMaterial: string;
  kind: "background"
}

interface CourseDescription extends CoursePartBase {
  description: string;
}

interface CoursePartSpecial extends CourseDescription {
  requirements: Array<string>,
  kind: "special"

}

export type CoursePart = CoursePartBasic | CoursePartGroup | CoursePartBackground | CoursePartSpecial;
