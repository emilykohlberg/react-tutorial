import React from 'react';
import Course from './Course';
import './CourseList.css';

const CourseList = ({courses, selected, toggleSelected, profile}) => {
  return (
    <div className="course-list">
      { courses.map(([id, course]) => <Course key={id}
                                              id={id}
                                              course={course} 
                                              selected={selected} 
                                              toggleSelected={toggleSelected}
                                              profile={profile}/>) }
    </div>
  );
};
  
  export default CourseList;