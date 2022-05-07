import React, { useEffect, useState } from 'react';
import { getRoversImages } from '../../api/api';


function Home() {

  const [querys, setQuerys] = useState({page: 1, rover: 'curiosity'})
  const [imagesRovers, setImagesRovers] = useState([])

  const getImages = async () => {
    const images = await getRoversImages(querys)
    console.log(images.data)
    // setImagesRovers(images.data.photos)
  }

  useEffect(() => {
    getImages()
  }, [querys])

  return (
    <div>
      {
        // imagesRovers.length > 0 &&
        // imagesRovers.map(image => <img src={image}/>)
      }
    </div>
  );

}

export default Home;
