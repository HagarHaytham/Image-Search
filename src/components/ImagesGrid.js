const ImagesGrid = ({images}) => {
  return (
    <div className="grid-container">
       
        {images.map((image)=>(
          <img key ={image.id} src={image.webformatURL}/>))}
    </div>
    
  )
}

export default ImagesGrid