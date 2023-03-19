import ReactPlayer from 'react-player'

const VideoPreview = ({ videoUrl }) => { 
  return (
    <>               
        <div className='w-[500px] min-h-[300px]'>
            <ReactPlayer url={videoUrl} playing muted loop width='500px' />
        </div>            
        {/* <h5 className="card-title">Назва відео</h5>
        <p className="card-text">Опис відео</p> */}              
    </>
  )
}

export default VideoPreview;