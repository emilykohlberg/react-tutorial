import { useState } from "react";
import CourseList from "./CourseList";
import './CoursePage.css';

const terms = 
    ["Fall", "Winter", "Spring"]
;

const TermButton = ({term, selection, setSelection}) => (
  <div id='termbutton'>
    <input type="radio" id={term} className="btn-check" checked={term === selection} autoComplete="off"
      onChange={() => setSelection(term)} />
    <label className="btn btn-success mb-1 p-2" htmlFor={term}>
    { term }
    </label>
  </div>
);

const TermSelector = ({terms, selection, setSelection}) => (
  <div className="btn-group">
    { 
      terms.map(term => <TermButton key={term} term={term} selection={selection} setSelection={setSelection} />)
    }
  </div>
);

const TermCourses = ({selection, courses}) => {
  if(selection === terms){
    return (
      <div className="card" >
        <CourseList courses={Object.entries(courses)}></CourseList>
      </div>
    );
  }
  else{
    return (
      <div className="card" >
      <CourseList courses={Object.entries(courses)
                            .filter(([id, course]) => course.term === selection)}></CourseList>
    </div>
    );
  }
};

const CoursePage = ({courses}) => {
  const [selection, setSelection] = useState(() => terms);
  // console.log(Object.entries(courses).map(([id, course]) => course.term));
  console.log("selection", selection)
  return (
    <div>
      <TermSelector terms={terms} selection={selection} setSelection={setSelection} />
      <TermCourses selection={selection} courses={courses} />
    </div>
  );
}

export default CoursePage;