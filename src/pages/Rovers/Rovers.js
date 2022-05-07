import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, FormControl, ImageList, ImageListItem, InputLabel, MenuItem, Pagination, Select, TextField, Box } from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/lab';
import AdapterMoment from '@mui/lab/AdapterMoment';
import moment from 'moment';

import { roversList, camerasNames } from '../../constant/rovers';
import { getRoversImages, setPage, setQuerys, setRover } from '../../redux/actions';

const Rovers = () => {

    const dispatch = useDispatch();
    const rovers = useSelector(state => state.rovers)

    const handleChangePage = (event, newPage) => {
        dispatch(setPage(newPage));
    }

    const handleChange = (event, key) => {
        if (key == 'rover') {
            dispatch(setRover(roversList.find(rover => rover.name.toLowerCase() == event.target.value)))
        } else {
            dispatch(setQuerys({ [key]: event.target.value }));
        }
    };

    const handleDateChange = (event, key) => {
        dispatch(setQuerys({ [key]: moment(event).format('YYYY-MM-DD') }))
    };

    useEffect(() => {
        dispatch(getRoversImages())
    }, [rovers.querys]);

    return (
        <Container>
            <Box >
                <FormControl >
                    <InputLabel id="rover">Select a Rover</InputLabel>
                    <Select
                        labelId="rover"
                        id="select_rover"
                        value={rovers.rover}
                        label="Rover"
                        onChange={(e) => handleChange(e, 'rover')}
                    >
                        {
                            roversList.map(rover => <MenuItem key={rover.name} value={rover.name.toLocaleLowerCase()}>{rover.name}</MenuItem>)
                        }
                    </Select>
                </FormControl>
                {
                    rovers.cameras &&
                    <FormControl >
                        <InputLabel id="camera">Select a Camera</InputLabel>
                        <Select
                            labelId="camera"
                            id="select_camera"
                            value={rovers.querys.camera}
                            label="Camera"
                            onChange={(e) => handleChange(e, 'camera')}
                        >
                            {
                                rovers.cameras.map(camera => <MenuItem key={camera} value={camera}>{camerasNames[camera]}</MenuItem>)
                            }
                        </Select>
                    </FormControl>
                }
                <TextField
                    id="sol"
                    label="Sol"
                    variant="outlined"
                    type="number"
                    value={rovers.querys.sol}
                    onChange={(e) => handleChange(e, 'sol')}
                />
                <FormControl sx={{ m: 1, width: "100%" }} variant="standard">
                    <LocalizationProvider dateAdapter={AdapterMoment}>
                        <DatePicker
                            mask="____-__-__"
                            orientation="portrait"
                            label="Earth Date"
                            inputFormat="YYYY-MM-DD"
                            value={rovers.querys.earth_date}
                            onChange={(e) => handleDateChange(e, 'earth_date')}
                            renderInput={(params) => <TextField variant="standard" {...params} />}
                        />
                    </LocalizationProvider>
                </FormControl>
            </Box>
            <Box sx={{ width: '100%', minHeight: '100%' }}>
                {
                    rovers.loading ?
                        <div>:\</div>
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
                            <div>:-</div>
                }
            </Box>
            <Pagination
                page={rovers.querys.page}
                onChange={handleChangePage}
                count={26}
            />
        </Container>

    );
}

export default Rovers