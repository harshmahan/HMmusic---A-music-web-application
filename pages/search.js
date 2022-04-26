import React from 'react'
import { BiSearch } from 'react-icons/bi';
import { useState, useRef } from 'react';
import { GetSearch } from '../components/requests';
import Link from 'next/link';

const Search = () => {
  const element = useRef("");
  const [text, setText] = useState('');
  const [results, setResults] = useState({});
  const handelOnChange = () => {  
    setText(element.current.value);
    if (element.current.value.length > 0){
      if (GetSearch(element.current.value).then(res => {
        setResults(res);
      })){
        setResults({});
      }
    }
  }
  const result = () =>{
    if(results["data"] != undefined && results["data"]["albums"] != undefined && results["data"]["albums"]["data"] != undefined && results["data"]["albums"]["data"][0] != undefined && results["data"]["albums"]["data"][1] != undefined && results["data"]["albums"]["data"][2] != undefined && results["data"]["albums"]["data"][0]["image"] != undefined && results["data"]["albums"]["data"][1]["image"] != undefined && results["data"]["albums"]["data"][2]["image"] != undefined && results["data"]["albums"]["data"][0]["title"] != undefined && text.length > 0){
      let img1 = results["data"]["albums"]["data"][0]["image"];
      let img2 = results["data"]["albums"]["data"][1]["image"];
      let img3 = results["data"]["albums"]["data"][2]["image"];
      let title1 = results["data"]["albums"]["data"][0]["title"];
      let title2 = results["data"]["albums"]["data"][1]["title"];
      let title3 = results["data"]["albums"]["data"][2]["title"];
      let sp1 = results["data"]["albums"]["data"][0]["more_info"]["song_pids"];
      let sp2 = results["data"]["albums"]["data"][1]["more_info"]["song_pids"];
      let sp3 = results["data"]["albums"]["data"][2]["more_info"]["song_pids"];
      console.log(img1.replace('/', '#'));
      return(
        <div className="flex flex-col justify-center mt-4 ml-[36vw] space-y-4">
          <Link href={`/player/${sp1}-${title1}`}><a><div className="data1 flex justify-start items-center space-x-4"><img className="rounded-md" src={`${img1}`} alt="" />
          <p>{`${title1}`}</p>
          </div></a></Link>
          <Link href={`/player/${sp2}-${title2}`}><a><div className="data1 flex justify-start items-center space-x-4"><img className="rounded-md" src={`${img2}`} alt="" />
          <p>{`${title2}`}</p>
          </div></a></Link>
          <Link href={`/player/${sp3}-${title3}`}><a><div className="data1 flex justify-start items-center space-x-4"><img className="rounded-md" src={`${img3}`} alt="" />
          <p>{`${title3}`}</p>
          </div></a></Link>
        </div>
      );
    }else if(text.length > 0){
      return( 
        <div className="flex flex-col justify-center mt-4 ml-[36vw] space-y-4">
          <p>No Result Found!</p>
        </div>
      );
    }
  }
  const res = result();
  return (
    <div>
      <div className="input mr-96 text-black flex mt-24 ml-[35vw]">
        <h1 className='absolute top-40 text-3xl font-bold left-[30vw]'>Search Your Music and Listen Them !</h1>
        <input ref={element} className='h-10 w-80 rounded-md p-2 mt-28 text-lg border-2 border-solid border-gray-500 outline-blue-400' value={text} type="text" alt='' placeholder='Search' onChange={handelOnChange}/>
        <span className=' w-12 -ml-12 mt-28 text-2xl text-black flex items-center justify-center'><BiSearch/></span>
        </div>
        {res}
    </div>
  )
}

export default Search