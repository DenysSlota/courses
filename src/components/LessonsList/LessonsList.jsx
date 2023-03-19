import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { setProgress } from "../../redux/video/reducer";
import ReactPlayer from 'react-player';
import GoBackBtn from "../UI/Button/GoBackBtn";
import VideoPreview from "../Video/VideoPreview";


const LessonsList = ( {lessons} ) => {
    const [currentLesson, setCurrentLesson] = useState(null);
    const [pip, setPip] = useState(false);
    const [pipUrl, setPipUrl] = useState('');
    const goBack = () => navigate(-1);
    const navigate = useNavigate();    
    const dispatch = useDispatch();
    const progress = useSelector(state => state.progress.played || 0);

    const handleProgress = progress => {
        dispatch(setProgress({ currentLesson, progress }));
    };

    const handleLessonClick = (lesson) => {
        if (lesson.status == "locked") {
          alert('This lesson blocked');
          return;
        }    
        setCurrentLesson(lesson.id);
      };

      const handlePipClick = () => {
        if (pip) {
          document.exitPictureInPicture();
          setPip(false);
        } else {
          const video = document.querySelector('video');
          setPipUrl(video.src);
          video.requestPictureInPicture();
          setPip(true);
        }
      };

  return (
    <div className='mt-[85px] p-4'>
        <GoBackBtn onClick={goBack} />
        <h3 className='text-black text-3xl font-medium text-center my-1 py-1'>Course: {lessons?.title}</h3>
        <div className='p-4 flex flex-wrap gap-4 justify-around'>
            <div className='w-[500px] min-h-[300px]'>
                <VideoPreview videoUrl={lessons?.lessons[0].link} />
            </div>
            <div className='w-[500px] min-h-[300px] ml-2'>
                <p className='m-0 text-left text-xl dark:text-white'>
                    <strong>Descriptions:</strong> {lessons?.description}
                </p>
                <p className='my-2 text-center text-xl dark:text-white'>
                    <strong>Lessons:</strong>
                </p>
                <ul className='ml-8'>
                                {lessons?.lessons.map((lesson) => {
                                    return (
                                    <li
                                        className='cursor-pointer mb-2 hover:text-[#61dafb]'
                                        onClick={() => handleLessonClick(lesson)} key={lesson.order}>
                                        {lesson.order}. {lesson.title}
                                    </li>
                                    )
                                })}
                </ul>

            </div>  
        </div>
        {currentLesson && (
        <div className='fixed bottom-0 right-0 z-20'>
            <div className="relative">
                <h2 className="absolute top-2 left-2 z-20">Current lesson: {lessons?.lessons.find((lesson) => lesson.id === currentLesson).title}</h2>
                <ReactPlayer
                    width='320px'
                    height='240px'
                    url={lessons?.lessons.find((lesson) => lesson.id === currentLesson).link}
                    controls={true}
                    onProgress={handleProgress}
                    progress={progress}
                />
            </div>
            <p>Browsing progress: {progress.played * 100}%</p>
            <button className='bg-gray-300 border-2 rounded-xl p-2 hover:bg-[#61dafb]' onClick={handlePipClick}>
                {pip ? 'Exit mode picture-in-picture' : 'Open in mode picture-in-picture'}
            </button>
        </div>
      )}
    </div>
  )
}

export default LessonsList