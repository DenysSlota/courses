import ReactPlayer from 'react-player'
import { useState } from 'react';

const VideoCard = ({ videoUrl }) => { 
  const [isHovering, setIsHovering] = useState(false);
  return (
    <>
      <div className='absolute top-0 left-0 w-full h-full z-10'     
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <div>
          {isHovering && (
            <div>
              <ReactPlayer url={videoUrl} playing muted loop />
            </div>
          )}
          {/* {isHovering && console.log('rr')}; */}
          {/* <h5 className="card-title">Назва відео</h5>
          <p className="card-text">Опис відео</p> */}
        </div>
      </div>
    </>
  )
}

export default VideoCard;

