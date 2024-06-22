export type CourseContent = {
  name: string;
  slug?: string;
  description?: string;
  content?: CourseContent[];
};

export interface Course {
  title: string;
  slug: string;
  banner: string;
  description: string;
  content: CourseContent[];
}

export const courseSlugMap = {
  flask: 'Learn Flask',
};

export const courses: Course[] = [
  {
    title: 'Learn Flask',
    slug: 'flask',
    banner: '/static/courses/flask/flask.png',
    description:
      'Understand the fundamentals of Flask Framework!',
    content: [
      {
        name: 'Getting Started',
        content: [
          {
            name: 'Welcome to the course',
            slug: 'welcome-to-the-course',
          },
          {
            name: 'What is Flask?',
            slug: 'flask-basics',
          },
        ],
      },
      {
        name: 'Templates',
        content: [
          {
            name: 'Flask Templates',
            slug: 'flask-templates',
          },
        ],
      },
      {
        name: 'Forms',
        content: [
          {
            name: 'Forms in flask',
            slug: 'flask-forms',
          },
          {
            name: 'Advanced Forms',
            slug: 'adv-forms',
          },
        ],
      },
    ],
  },
];
