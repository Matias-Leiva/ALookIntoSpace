import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Stack } from '@mui/material';

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
        <Container>
            <Stack spacing={3}>
                <ImageSearch rovers={rovers} />
                <Pagination rovers={rovers} />
                <RoversImages rovers={rovers}/>
                <Pagination rovers={rovers} />
            </Stack>
        </Container>
    );
}

export default Rovers