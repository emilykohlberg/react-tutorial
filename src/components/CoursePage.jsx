import { useState } from "react";
import CourseList from "./CourseList";

const terms = 
    ["Fall", "Winter", "Spring"]
;

const TermButton = ({term, selection, setSelection}) => (
  <div>
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

const TermCourses = ({selection, courses}) => (
  <div className="card" >
  <CourseList courses={Object.entries(courses)
                              .filter(([id, course]) => course.term == selection)
                              .map(([id,course]) => ({[id]:course}))}></CourseList>
  </div>
);

const CoursePage = ({courses}) => {
  const [selection, setSelection] = useState(() => terms);
  console.log(courses);
  console.log("selection", selection)
  console.log(Object.entries(courses)
    .filter(([id, course]) => course.term == selection)
    .map(([id,course]) => ({[id]:course})))
  return (
    <div>
      <TermSelector terms={terms} selection={selection} setSelection={setSelection} />
      <TermCourses selection={selection} courses={courses} />
    </div>
  );
}

export default CoursePage;