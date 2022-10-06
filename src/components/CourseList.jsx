import React from 'react';
import Course from './Course';
import './CourseList.css';
import CoursePage from './CoursePage';

const CourseList = ({courses, selected, toggleSelected}) => {
  console.log(selected)
  return (
    <div className="course-list">
      { courses.map(([id, course]) => <Course key={id}
                                              id={id}
                                              course={course} 
                                              selected={selected} 
                                              toggleSelected={toggleSelected} />) }
    </div>
  );
};
  
  export default CourseList;