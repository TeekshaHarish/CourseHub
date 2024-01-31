# CourseHub - React Course Management App

This web application showcases a list of courses and their details using React.

### Course Listing Page

1. Fetch a list of sample courses (use a dummy API or readymade backends like Firebase).
2. Display the courses in a scrollable list with basic information.
3. Enable searching based on course name and instructor.

### Course Details Screen

Create a new screen that displays detailed information about a selected course. This screen should be accessible from the course listing screen.

Display Course Information:

- Course name
- Instructor's name
- Description
- Enrollment status (e.g., 'Open', 'Closed', 'In Progress')
- Course duration
- Schedule
- Location
- Pre-requisites
- Syllabus as an expandable item

### Student Dashboard

1. Create a user dashboard for students to display the courses they are enrolled in.
2. Display course name, instructor name, thumbnail, due date, and a progress bar.
3. Implement a feature that allows students to mark courses as completed.

### Advanced State Management

Utilize a state management library such as Redux or MobX to manage the application's state effectively.

### Implementation
Server made using expressJs and frontend using Reactjs. Redux is used to store the universla state for the current user. Also the details of the courses are fteched from an api and stored in a Mongo Database.

## How to Run

1. Clone the repository: `git clone https://github.com/your-username/your-repo.git`
2. Navigate to the project directory: `cd CourseHub`
3. Install backend dependencies: `npm install`
4. Install frontend dependencies: `cd frontend` ->
                                  `npm i` ->
                                  `cd ..`
5. Make an .env file ,add a key for MONGO_URL with value of your connection url for mongo database in it, take .env.example file as reference.
6. Run the development server and frontend concurrently: `npm run dev`

### Tech Stack
- Nodejs
- Expressjs
- React
- MongoDB
- Bootstrap

