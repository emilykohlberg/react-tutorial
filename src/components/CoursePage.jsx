import { useState } from "react";
import CourseList from "./CourseList";
import Modal from './Modal';
import Cart from './Cart'
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
      <div id="classCards" className="card" >
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
  const [open, setOpen] = useState(false);

  const openModal = () => setOpen(true);
  
  const closeModal = () => setOpen(false);

  const toggleSelected = ([id, course]) => setSelected(
    selected.some(([myId, myCourse]) => 
        myId === id && myCourse === course) 
        ? selected.filter(([myId, myCourse]) => myId != id)
        : [...selected, [id, course]]
  );

  return (
    <>
      <nav className="d-flex">
        <TermSelector terms={terms} selection={selection} setSelection={setSelection} />
        <button onClick={openModal} className="btn btn-outline-dark">View Schedule</button>
      </nav>
      <Modal open={open} close={closeModal}>
          <Cart selected={Object.entries(courses)
                            .filter(([id, course]) => selected.includes([id, course]))} />
      </Modal>
      <TermCourses selection={selection} 
                    courses={courses} 
                    selected={selected}
                    toggleSelected={toggleSelected} />
    </>
  );
}

export default CoursePage;