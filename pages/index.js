import Head from 'next/head'
import Image from 'next/image'
import { BiRadio } from 'react-icons/bi';
import { ImHeadphones } from 'react-icons/im';


export default function Home() {
  return (
    <div className="container">
      <img className='w-full h-[100vh]' src="https://images.unsplash.com/photo-1528645602411-bbeb0d69a6de?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZGFyayUyMGJhY2tncm91bmQlMjBtdXNpY3xlbnwwfHwwfHw%3D&w=1000&q=80" alt="HM Music Logo" />
      <div className="heading absolute text-white top-24 left-24 text-4xl font-bold">ALL <br /> YOUR <br /> MUSIC </div>
      <div className="quote absolute  text-white text-4xl font-normal top-60 left-24">Experience  Your  Music <br /> Like  Never  Before. </div>
      <p className='absolute top-96 left-24 text-white text-sm'>Imagin a music library at your back and call--50,000 and over--10,000 radio <br /> station all for you to explore. Play, use and download our high quality audio material at your <br /> hearts content. After all thats what our royalty free service is all about allowing you to <br /> experience music at its purest--no hassle, no guilt, easy like sunday morning.  </p>
      {/* <button className='w-1/5 h-20 absolute top-[40vh] right-28 hover:bg-blue-700 font-bold text-2xl rounded-sm text-white bg-blue-500'>SIGN UP NOW</button> */}
      <div className="options flex absolute top-[75vh] left-[33vw] space-x-12 text-white">
        <div className="download flex space-y-2 flex-col items-center text-center">
          <p className='text-xl'>Discover and <br /> Download Music</p>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
</svg></div>
          <div className="download flex space-y-2 flex-col items-center text-center">
            <p className='text-xl'>Thousands of Free <br /> Radio Station</p>
            <p className="text-6xl"><BiRadio/></p>
          </div>
          <div className="download space-y-2 flex flex-col items-center text-center">
            <p className='text-xl'>Join Now to <br /> Start Listning!</p>
            <p className="text-6xl"><ImHeadphones/></p>
          </div>
      </div>
      <div className="footer absolute top-[105vh] left-[38vw] text-white">
        <p>Copyright @ 2022 HM <i>music</i> | Privacy Notice</p>
      </div>
    </div>
  )
}
