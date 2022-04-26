const url="https://muskan123.azurewebsites.net/api/v1/";


const get=async(url)=>{
  const res={};
  res.data=[];
  try {
      const d=await fetch(url);
      res.data=await d.json();
  } catch (error) {
      console.log(error);
      res.error=error.message;
  }
  return res;
}

const GetSearch=async(query)=>{
  const res=await get(url+'search?query='+query);
  return res.data;
}

const GetSongURL=async(id)=>{
    const res=await get(url+`getsongurl?id=${id}&bitrate=${localStorage.quality}`);
    return res.data;
}
export {get, GetSearch,GetSongURL};