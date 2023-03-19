import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from 'react-router-dom';
import { fetchAPI } from "../../utils/network";
import LessonsList from "../../components/LessonsList/LessonsList";

const LessonsPage = () => {
    const { id } = useParams();
    console.log(id);    
    const token = useSelector(state => state.auth.token);
    const [lessons, setLessons] = useState();
    useEffect(() => {
        async function fetchData() {                    
          const lessons = await fetchAPI(`https://api.wisey.app/api/v1/core/preview-courses/${id}`, {
              headers: {
                'Authorization': `Bearer ${token}`
              }
          });
          setLessons(lessons);             
        }
        fetchData();    
      }, []);

      console.log(lessons);      

  return (
    <LessonsList lessons={lessons} />
  )
}

export default LessonsPage