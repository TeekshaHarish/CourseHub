const courses = [
    {
    id: 1, // Unique identifier for the course
    name: 'Introduction to React Native',
    instructor: 'John Doe', // Name of the course instructor
    description: 'Learn the basics of React Native development and build your first mobile app.',
    enrollmentStatus: 'Open', // Can be 'Open', 'Closed', or 'In Progress
    thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTld-XreuEVL3w8SfTXgoC3Iyz9QF2KI2WSoA&usqp=CAU', //Link to the course thumbnail
    duration: '8 weeks', // Duration of the course
    schedule: 'Tuesdays and Thursdays, 6:00 PM - 8:00 PM',
    location: 'Online',
    prerequisites: ['Basic JavaScript knowledge', 'Familiarity with React'],
    syllabus: [
    {
    week: 1,
    topic: 'Introduction to React Native',
    content: 'Overview of React Native, setting up your development environment.'
    },
    {
    week: 2,
    topic: 'Building Your First App',
    content: 'Creating a simple mobile app using React Native components.'
    },
    // Additional weeks and topics...
    ],
    students: [],
},
{
    id: 2,
    name: 'Web Development with React',
    instructor: 'Jane Smith',
    description: 'Master web development using React and create modern, interactive websites.',
    enrollmentStatus: 'Open',
    thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTld-XreuEVL3w8SfTXgoC3Iyz9QF2KI2WSoA&usqp=CAU', //Link to the course thumbnail
    duration: '10 weeks',
    schedule: 'Mondays and Wednesdays, 7:00 PM - 9:00 PM',
    location: 'In-person',
    prerequisites: ['HTML', 'CSS', 'Basic JavaScript'],
    syllabus: [
      {
        week: 1,
        topic: 'Introduction to React',
        content: 'Overview of React library and its key concepts.',
      },
      {
        week: 2,
        topic: 'Building Components',
        content: 'Creating reusable components in React applications.',
      },
      // Additional weeks and topics...
    ],
    students: [],
  },
  {
    id: 3,
    name: 'Advanced JavaScript Fundamentals',
    instructor: 'Alex Johnson',
    description: 'Deep dive into advanced JavaScript concepts and improve your coding skills.',
    enrollmentStatus: 'Closed',
    thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTld-XreuEVL3w8SfTXgoC3Iyz9QF2KI2WSoA&usqp=CAU', //Link to the course thumbnail
    duration: '6 weeks',
    schedule: 'Saturdays, 10:00 AM - 12:00 PM',
    location: 'Online',
    prerequisites: ['Intermediate JavaScript knowledge'],
    syllabus: [
      {
        week: 1,
        topic: 'Closures and Scope',
        content: 'Understanding closures and lexical scope in JavaScript.',
      },
      {
        week: 2,
        topic: 'Asynchronous JavaScript',
        content: 'Working with asynchronous code using promises and async/await.',
      },
      // Additional weeks and topics...
    ],
    students: [],
  },
  
  {
    id: 4,
    name: 'Data Science with Python',
    instructor: 'Emily Davis',
    description: 'Explore data science techniques using Python and popular libraries.',
    enrollmentStatus: 'In Progress',
    thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTld-XreuEVL3w8SfTXgoC3Iyz9QF2KI2WSoA&usqp=CAU', //Link to the course thumbnail
    duration: '12 weeks',
    schedule: 'Thursdays, 7:00 PM - 9:00 PM',
    location: 'In-person',
    prerequisites: ['Basic Python knowledge', 'Intro to Statistics'],
    syllabus: [
      {
        week: 1,
        topic: 'Data Exploration',
        content: 'Understanding and exploring datasets with Python.',
      },
      {
        week: 2,
        topic: 'Machine Learning Basics',
        content: 'Introduction to machine learning algorithms and concepts.',
      },
      // Additional weeks and topics...
    ],
    students: [],
  },
  {
    id: 5,
    name: 'Frontend Web Design Mastery',
    instructor: 'Sophie Turner',
    description: 'Learn modern frontend web design techniques and create stunning user interfaces.',
    enrollmentStatus: 'Open',
    thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTld-XreuEVL3w8SfTXgoC3Iyz9QF2KI2WSoA&usqp=CAU', //Link to the course thumbnail
    duration: '8 weeks',
    schedule: 'Tuesdays and Fridays, 5:00 PM - 7:00 PM',
    location: 'Online',
    prerequisites: ['HTML', 'CSS basics'],
    syllabus: [
      {
        week: 1,
        topic: 'Responsive Design',
        content: 'Creating responsive and mobile-friendly web designs.',
      },
      {
        week: 2,
        topic: 'CSS Grid and Flexbox',
        content: 'Mastering layout techniques using CSS Grid and Flexbox.',
      },
      // Additional weeks and topics...
    ],
    students: [],
  },

  {
    id: 6,
    name: 'Mobile App Development with Flutter',
    instructor: 'Michael Chang',
    description: 'Build cross-platform mobile apps using the Flutter framework.',
    enrollmentStatus: 'Open',
    thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTld-XreuEVL3w8SfTXgoC3Iyz9QF2KI2WSoA&usqp=CAU', //Link to the course thumbnail
    duration: '10 weeks',
    schedule: 'Wednesdays, 6:00 PM - 8:00 PM',
    location: 'In-person',
    prerequisites: ['Dart programming language basics'],
    syllabus: [
      {
        week: 1,
        topic: 'Introduction to Flutter',
        content: 'Understanding the Flutter framework and its advantages.',
      },
      {
        week: 2,
        topic: 'Building UIs with Widgets',
        content: 'Creating user interfaces using Flutter widgets.',
      },
      // Additional weeks and topics...
    ],
    students: [],
  },{
    id: 7,
    name: 'Node.js and Express: Building APIs',
    instructor: 'Chris Thompson',
    description: 'Learn to build robust APIs using Node.js and Express framework.',
    enrollmentStatus: 'Open',
    thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTld-XreuEVL3w8SfTXgoC3Iyz9QF2KI2WSoA&usqp=CAU', //Link to the course thumbnail
    duration: '8 weeks',
    schedule: 'Mondays and Thursdays, 7:00 PM - 9:00 PM',
    location: 'Online',
    prerequisites: ['JavaScript', 'Basic knowledge of web development'],
    syllabus: [
      {
        week: 1,
        topic: 'Introduction to Node.js',
        content: 'Overview of Node.js and its use in server-side development.',
      },
      {
        week: 2,
        topic: 'Building RESTful APIs with Express',
        content: 'Creating RESTful APIs using the Express framework.',
      },
      // Additional weeks and topics...
    ],
    students: [],
  },

  {
    id: 8,
    name: 'Database Design and Management with MongoDB',
    instructor: 'Maria Rodriguez',
    description: 'Explore database design principles and learn MongoDB for effective data management.',
    enrollmentStatus: 'Open',
    thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTld-XreuEVL3w8SfTXgoC3Iyz9QF2KI2WSoA&usqp=CAU', //Link to the course thumbnail
    duration: '10 weeks',
    schedule: 'Wednesdays, 6:00 PM - 8:00 PM',
    location: 'In-person',
    prerequisites: ['Basic knowledge of databases'],
    syllabus: [
      {
        week: 1,
        topic: 'Introduction to Databases',
        content: 'Understanding fundamental concepts of databases and data modeling.',
      },
      {
        week: 2,
        topic: 'MongoDB Basics',
        content: 'Getting started with MongoDB and CRUD operations.',
      },
      // Additional weeks and topics...
    ],
    students: [],
  },
];
module.exports=courses;