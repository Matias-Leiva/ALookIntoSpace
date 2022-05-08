import React from 'react'
import { Box } from '@mui/system'
import { NewtonsCradle } from '@uiball/loaders'
import { ImageList, ImageListItem } from '@mui/material'

const RoversImages = ({rovers}) => {

    const width = window.innerWidth;

    const props = {
        cols: width < 900 ? 1 : width < 1200 ? 2 : 3,
        gap: 8
    }

    return (
        <Box className='box_rovers_images'>
            {
                rovers.loading ?
                    <NewtonsCradle
                        size={40}
                        speed={0.7}
                        color="black"
                    />
                    :
                    rovers.images.length > 0
                        ?
                        <ImageList variant="woven" {...props}>
                            {rovers.images.map((image) => (
                                <ImageListItem key={image.id}>
                                    <img
                                        src={`${image.img_src}?w=248&fit=crop&auto=format`}
                                        srcSet={`${image.img_src}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                        alt={image.rover.name}
                                        loading="lazy"
                                    />
                                </ImageListItem>
                            ))}
                        </ImageList>
                        :
                        <div className='div_not_image'>
                            <img src={require('../../assets/img/backgorund-02.jpg')} className="not_image_found"/>
                            <p className='not_images_text'>No Photos Found</p>
                        </div>
            }
        </Box>
    )
}

export default RoversImages