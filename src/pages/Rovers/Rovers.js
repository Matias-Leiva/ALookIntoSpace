import React , { useEffect, useState } from 'react';
import { Grid } from '@mui/material';
import nasaApi from '../../api/api';

const Rovers = () => {
    const [querys, setQuerys] = useState({
        page: 1,
        rover: 'curiosity',
        sol: 1000,
    });
    const [imagesRovers, setImagesRovers] = useState([]);

    const getImages = async () => {
        const images = await nasaApi.getRoversImages(querys);
        console.log(images.data.photos);
        setImagesRovers(images.data.photos);
    };

    useEffect(() => {
        getImages();
    }, [querys]);

    return (
        <Grid container spacing={2}>
            {imagesRovers.length > 0 &&
                imagesRovers.map((image) => (
                    <Grid item xs={12} md={2} key={image.id}>
                        <img
                            src={`${image.img_src}?w=164&h=164&fit=crop&auto=format`}
                            srcSet={`${image.img_src}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                            alt={image.rover.name}
                            loading="lazy"
                        />
                    </Grid>
                ))}
        </Grid>
    );
}

export default Rovers