import { useState,useEffect } from "react";
import SearchQuery from "./components/SearchQuery";
import ImagesGrid from "./components/ImagesGrid";
// import { Key } from "key";
function App() {
  const key = "38861307-a7242d37888b818cec2108441";
  const [images,setImages] = useState([]);

  const searchQuery =async (query)=>{
    console.log(query.text)
    const res = await fetch(`https://pixabay.com/api/?key=${key}&q=${query.text}`,{
      method:'GET'
    })

    const data = await res.json()
    console.log(data)
    console.log(data.hits)
    await setImages(data.hits)
  }
  return (

    <div className="App">
      <h2> Image Search Using Pixabay</h2>
      <SearchQuery onSearch={searchQuery}/>
      <br></br>
      { images.length>0 && <ImagesGrid images={images}/>}
    </div>
  );
}

export default App;
