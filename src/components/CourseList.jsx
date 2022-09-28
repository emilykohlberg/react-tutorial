import React from 'react';
import Course from './Course';

const CourseList = ({courses}) => (
    <div>
      { Object.entries(courses).map(([id, course]) => <Course course={course} key={id} />) }
    </div>
  );
  
  export default CourseList;