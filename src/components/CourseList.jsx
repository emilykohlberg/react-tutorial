import React from 'react';
import Course from './Course';
import './CourseList.css';

const CourseList = ({courses}) => (
    <div className="course-list">
      { Object.entries(courses).map(([id, course]) => <Course course={course} key={id} />) }
    </div>
  );
  
  export default CourseList;