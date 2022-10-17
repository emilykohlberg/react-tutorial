import { BrowserRouter, Routes, Route } from "react-router-dom";
import CourseEdit from "./CourseEdit";
import CoursePage from "./CoursePage"
import { useProfile } from '../utilities/profile';

const Dispatcher = ({courses}) => {
  const [profile, profileLoading, profileError] = useProfile();

  if (profileError) return <h1>Error loading profile: {`${profileError}`}</h1>;
  if (profileLoading) return <h1>Loading user profile</h1>;
  if (!profile) return <h1>No profile data</h1>;

  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<CoursePage courses={courses} profile={profile}/>} />
          <Route path="/:id" element={<CourseEdit courses={courses}/>} />
        </Routes>
    </BrowserRouter>
  )
  
};

export default Dispatcher;