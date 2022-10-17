import React from 'react';
import './Course.css';
import { hasConflict } from '../utilities/course';
import { Link } from 'react-router-dom';

const Course = ({id, course, selected, toggleSelected, profile}) => {
  const conflict = hasConflict(course, selected);
  const isSelected = selected.some(([myId, myCourse]) => 
                myId === id && myCourse === course);

  var idAttribute;
  if(isSelected){
    idAttribute = "selected";
  }
  else if(conflict){
    idAttribute = "conflict";
  }
  else{
    idAttribute = "";
  }

  return (
    <div className="card m-1 p-2" 
      id={idAttribute}
      onClick={conflict ? () => void 0 : () => toggleSelected([id, course])}>
      <div className="card-body">
        <h5 className="card-title">{course.term} CS{course.number}</h5>
        <p className="card-text">{course.title}</p>
      </div>
      <div className="card-footer">
        <p className="card-text">{course.meets}</p>
        { profile?.isAdmin &&
          <p><Link to={`/${id}`}>Edit Course</Link></p>
        }     
      </div>
      
    </div>
  );
};
  
  export default Course;