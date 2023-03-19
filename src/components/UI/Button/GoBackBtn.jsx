const GoBackBtn = ( {onClick} ) => {
    return (
      <>
          <button className="w-16 h-8 mt-8 bg-gray-400 rounded-xl hover:bg-[#61dafb]" onClick={onClick} >
              back
          </button>
      </>
    )
  }
  
  export default GoBackBtn;