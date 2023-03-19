import Header from './components/Header/Header';
import CoursesPage from './pages/coursespage/CoursesPage';
import LessonsPage from './pages/lessonspage/LessonsPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div >
        <Header />
        <Routes>          
          <Route path="/" element={<CoursesPage />} />
          <Route path="/:id" element={<LessonsPage />} />          
          {/* <Route path="*" element={<NoteFoundPage />} /> */}
        </Routes>
        {/* <Footer /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
