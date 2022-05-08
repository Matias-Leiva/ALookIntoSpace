import React from 'react'
import { Box } from '@mui/system'
import { NewtonsCradle } from '@uiball/loaders'
import { ImageList, ImageListItem } from '@mui/material'

const RoversImages = ({rovers}) => {
    return (
        <Box sx={{ width: '100%', minHeight: '70vh', alignItems: 'center', justifyContent: 'center', display: 'flex' }}>
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
                        <ImageList variant="masonry" cols={3} gap={8}>
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
                        <img src={require('../../assets/img/backgorund-02.jpg')}/>
            }
        </Box>
    )
}

export default RoversImages