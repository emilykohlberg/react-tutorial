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

const TermCourses = ({selection, courses, selected, toggleSelected}) => {
  if(selection === terms){
    return (
      <div className="card" >
        <CourseList courses={Object.entries(courses)} 
                    selected={selected} 
                    toggleSelected={toggleSelected}></CourseList>
      </div>
    );
  }
  else{
    return (
      <div className="card" >
      <CourseList courses={Object.entries(courses)
                            .filter(([id, course]) => course.term === selection)}
                            selected={selected} 
                            toggleSelected={toggleSelected}></CourseList>
    </div>
    );
  }
};

const CoursePage = ({courses}) => {
  const [selection, setSelection] = useState(() => terms);
  const [selected, setSelected] = useState([]);

  const toggleSelected = (item) => setSelected(
    selected.includes(item)
    ? selected.filter(x => x !== item)
    : [...selected, item]
  );

  return (
    <div>
      <TermSelector terms={terms} selection={selection} setSelection={setSelection} />
      <TermCourses selection={selection} 
                    courses={courses} 
                    selected = {selected}
                    toggleSelected={toggleSelected} />
    </div>
  );
}

export default CoursePage;