import React from 'react';

const Course = ({course}) => (
    <div>
      <p>{course.term} CS{course.number}: {course.title}</p>
      <p>{course.meets}</p>
    </div>
  );
  
  export default Course;