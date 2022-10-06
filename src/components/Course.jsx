import React from 'react';
import './Course.css';

const Course = ({id, course, selected, toggleSelected}) => {
  // console.log(id);

  return (
    <div className="card m-1 p-2" 
      id={selected.includes(id) ? 'selected' : ''}
      onClick={() => toggleSelected(id)}>
      <div className="card-body">
        <h5 className="card-title">{course.term} CS{course.number}</h5>
        <p className="card-text">{course.title}</p>
      </div>
      <div className="card-footer">
        <p className="card-text">{course.meets}</p>
      </div>
      
    </div>
  );
};
  
  export default Course;