import React from 'react';
import Course from './Course';
import './CourseList.css';
import CoursePage from './CoursePage';

const CourseList = ({courses}) => {
  return (
    <div className="course-list">
      { courses.map(([id, course]) => <Course course={course} key={id} />) }
    </div>
  );
};
  
  export default CourseList;