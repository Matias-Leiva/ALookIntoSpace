import React, { useEffect, useState } from 'react';
import { Container, FormControl, ImageList, ImageListItem, InputLabel, MenuItem, Pagination, Select, TextField, Box } from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/lab';
import AdapterMoment from '@mui/lab/AdapterMoment';
import moment from 'moment';

import nasaApi from '../../api/api';
import { roversList, cameras } from '../../constant/rovers';
import { useDispatch, useSelector } from 'react-redux';
import { getRoversImages } from '../../redux/actions';

const Rovers = () => {

    const dispatch = useDispatch();

    const rovers = useSelector(state => state.rovers)

    const [querys, setQuerys] = useState({
        page: 1,
        rover: 'curiosity',
        sol: 1,
        earth_date: '',
    });
    const [imagesRovers, setImagesRovers] = useState([]);
    const [roverCameras, setRoverCameras] = useState([]);

    const getImages = async () => {
        const images = await nasaApi.getRoversImages(querys);
        console.log(images.data.photos);
        setImagesRovers(images.data.photos);
    };

    const handleChangePage = (event, newPage) => {
        console.log(event)
        setQuerys(querys => ({ ...querys, page: newPage }));
    }

    useEffect(() => {
        dispatch(getRoversImages())
        // getImages();
    }, []);

    const handleChange = (event, key) => {
        setQuerys(querys => ({ ...querys, [key]: event.target.value }));
        if (key == 'rover') {
            setRoverCameras(roversList.find(rover => rover.name.toLocaleLowerCase() == event.target.value))
        }
    };

    const handleDateChange = (event, key) => {
        setQuerys(querys => ({ ...querys, [key]:  moment(event).format('YYYY-MM-DD')}));
    };

    return (
        <Container>
            <Box >
                <FormControl >
                    <InputLabel id="rover">Select a Rover</InputLabel>
                    <Select
                        labelId="rover"
                        id="select_rover"
                        value={querys.rover}
                        label="Rover"
                        onChange={(e) => handleChange(e, 'rover')}
                    >
                        {
                            roversList.map(rover => <MenuItem key={rover.name} value={rover.name.toLocaleLowerCase()}>{rover.name}</MenuItem>)
                        }
                    </Select>
                </FormControl>
                {
                    roverCameras?.cameras &&
                    <FormControl >
                        <InputLabel id="camera">Select a Rover</InputLabel>
                        <Select
                            labelId="camera"
                            id="select_camera"
                            value={querys.cameras}
                            label="Camera"
                            onChange={(e) => handleChange(e, 'camera')}
                        >
                            {
                                roverCameras.cameras.map(camera => <MenuItem key={camera} value={camera}>{cameras[camera]}</MenuItem>)
                            }
                        </Select>
                    </FormControl>
                }
                <TextField id="sol" label="Sol" variant="outlined" type="number" onChange={(e) => handleChange(e, 'sol')}/>
                <FormControl sx={{ m: 1, width: "100%" }} variant="standard">
                    <LocalizationProvider dateAdapter={AdapterMoment}>
                        <DatePicker
                            mask="____-__-__"
                            orientation="portrait"
                            label="Earth Date"
                            inputFormat="YYYY-MM-DD"
                            value={querys.earth_date}
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
                    rovers.images.lenght > 0
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
                page={querys.page}
                onChange={handleChangePage}
                count={26}
            />
        </Container>

    );
}

export default Rovers