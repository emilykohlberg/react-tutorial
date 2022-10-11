import { BrowserRouter, Routes, Route } from "react-router-dom";
import CourseEdit from "./CourseEdit";
import CoursePage from "./CoursePage"


const Dispatcher = ({courses}) => (
<BrowserRouter>
    <Routes>
      <Route path="/" element={<CoursePage courses={courses} />} />
      <Route path="/:id" element={<CourseEdit courses={courses} />} />
    </Routes>
  </BrowserRouter>
  
);

export default Dispatcher;