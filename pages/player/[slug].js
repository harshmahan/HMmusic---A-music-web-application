import { useRouter } from 'next/router'
// import { GetSongURL } from '../../components/requests'
import { useState, useEffect } from 'react'
import AudioPlayer from '../../components/audioplayer'
import { data } from 'autoprefixer'
// import { useQuery } from "react-query";
// import {  QueryClient, QueryClientProvider, useQuery } from 'react-query';
// const queryClient = new QueryClient();

const Slug = () => {
  const router = useRouter()
  const { slug } = router.query
  const [songData, setSongData] = useState({})
  let song_pids = ""
  let title = ""
  if(slug.includes('-')){
  let s = slug.split('-');
//   console.log(s)
  song_pids = s[0];
  title = s[1];
//   console.log(dataArr)
  }

  let spid = " ";
    if (song_pids.includes(',')){
        let arr = song_pids.split(',');
        spid = arr[0];
    }else{
        spid = song_pids;
    }
    useEffect(() => {
        fetch(`https://muskan123.azurewebsites.net/api/v1/getsongurl?id=${spid}&bitrate=95`)
          .then(res => res.json())
          .then(
            (result) => {
              setSongData(result);
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
              console.log(error);
            }
          )
        //   eslint-disable-next-line
      }, [])

      const url = songData.url;
    if (songData != undefined && songData.url != undefined && url != undefined){ 
        return(
        <div>
            <AudioPlayer url = {url} title = {title}/>
        </div>
    )}
    }

    //title = {dataArr[0]} img = {dataArr[1]}
export default Slug
