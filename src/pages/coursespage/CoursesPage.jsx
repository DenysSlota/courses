import { useEffect, useState } from "react";
import { useDispatch } from 'react-redux';
import { setToken } from "../../redux/auth/reducer";
import { fetchAPI } from "../../utils/network";
import CoursesList from "../../components/CoursesList/CoursesList";
import Pagination from "../../components/Pagination/Pagination";


const CoursesPage = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;
    const [totalItems, setTotalItems] = useState(0);
    const [courses, setCourses] = useState();
    const dispatch = useDispatch();
    useEffect(() => {
      async function fetchData() {      
        const result = await fetchAPI('http://api.wisey.app/api/v1/auth/anonymous?platform=subscriptions');
        const token = result.token;
        dispatch(setToken(token));
        const offset = (currentPage - 1) * itemsPerPage;   
        const courses = await fetchAPI(`https://api.wisey.app/api/v1/core/preview-courses?offset=${offset}&limit=${itemsPerPage}`, {
            headers: {
              'Authorization': `Bearer ${token}`
            }
        });
        setCourses(courses.courses);
        setTotalItems(courses.courses.length);      
      }
      fetchData();    
    }, [dispatch, currentPage]);
     console.log(courses);
     console.log(totalItems)

    const handleChangePage = (page) => {
      setCurrentPage(page);
    }
    const totalPages = Math.ceil(totalItems / itemsPerPage);
     
  return (
    <>
      <div className='text-black text-3xl font-medium text-center mt-[85px] my-1 py-1'>Our courses</div>
      <CoursesList courses={courses} />
      <Pagination currentPage={currentPage} totalPages={totalPages} onChangePage={handleChangePage} />
    </>
  )
}

export default CoursesPage