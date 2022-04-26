import React from 'react'

const AudioPlayer = (props) => {
    console.log(props.url);
    console.log(props.title);
    // console.log(props.img);
  return (
    <div className='container'>
        <div className="upper">
            <img src="props.img" alt="" />
            <p className=' absolute text-2xl font-bold top-[77vh] left-[21vw]'>{props.title}</p>
        </div>
        <div className="lower mt-[73vh] ml-[20vw]">
            <audio className='w-[80%] h-20' autoPlay controls>
                <source src={`${props.url}`} type="audio/mp4"/>
            </audio>
        </div>
    </div>
  )
}

export default AudioPlayer