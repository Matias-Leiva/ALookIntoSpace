import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Paper, Stack } from '@mui/material';

import { getRoversImages } from '../../redux/actions';
import ImageSearch from '../../components/ImagesSearch/ImageSearch';
import Pagination from '../../components/Pagination/Pagination';
import RoversImages from '../../components/RoversImages/RoversImages';

const Rovers = () => {

    const dispatch = useDispatch();
    const rovers = useSelector(state => state.rovers)

    useEffect(() => {
        dispatch(getRoversImages())
    }, [rovers.querys]);

    return (
        <Container fixed>
            <Paper elevate={3} className='container_rovers'>
                <Stack spacing={3}>
                    <ImageSearch rovers={rovers} />
                    <Pagination rovers={rovers} />
                    <RoversImages rovers={rovers} />
                    <Pagination rovers={rovers} />
                </Stack>
            </Paper>
        </Container>
    );
}

export default Rovers