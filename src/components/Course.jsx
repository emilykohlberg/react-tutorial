import React from 'react';
import './Course.css';

const Course = ({course}) => (
    <div className="card m-1 p-2">
      <div className="card-body">
        <h5 className="card-title">{course.term} CS{course.number}</h5>
        <p className="card-text">{course.title}</p>
      </div>
      <div class="card-footer">
        <p className="card-text">{course.meets}</p>
      </div>
      
    </div>
  );
  
  export default Course;