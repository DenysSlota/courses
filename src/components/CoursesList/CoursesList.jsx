import { Link } from "react-router-dom";
import VideoCard from "../Video/VideoCard";

const CoursesList = ({courses}) => {
      
  return (
    <div className='p-4 flex flex-wrap gap-4 justify-around'>           
          {courses?.map((course) => {
              return (                                        
                  <div className='flex flex-col border-2 border-black rounded-xl p-4 w-[300px] ss:w-[500px] min-h-[300px] ss:min-h-[500px] relative' key={course.id}>
                          <Link to={`/${course.id}`}>
                              <img className='object-cover mx-auto max-w-[250px] ss:max-w-[400px] h-[250px] ss:h-[400px]' 
                              src={`${course.previewImageLink}/cover.webp`} alt={course.title} />                        
                              <h3 className='text-center font-bold m-0 mt-2 text-xl'>{course.title}</h3>
                              <p className='m-0 text-left text-base'>
                                <strong>Lessons:</strong> {course.lessonsCount}
                              </p>
                              <p className='m-0 text-left text-base'>
                                <strong>Skills:</strong>
                              </p>
                              <ul className='ml-8'>
                                {course.meta.skills?.map((skill, index) => {
                                    return (
                                    <li className='list-disc' key={index}>
                                        {skill}
                                    </li>
                                    )
                                })}
                              </ul>
                              <p className='m-0 text-left text-base'>
                                <strong>Rating:</strong> {course.rating}
                              </p>
                              <div>
                                <VideoCard videoUrl={course.meta.courseVideoPreview?.link} />
                              </div>
                          </Link>                                                  
                  </div>                    
              );
          })}
      </div> 
  )
}

export default CoursesList;

