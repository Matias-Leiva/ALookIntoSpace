import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Tab,
  Tabs,
  TextField,
} from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/lab';
import AdapterMoment from '@mui/lab/AdapterMoment';
import moment from 'moment';

import { roversList, camerasNames } from '../../constant/rovers';
import { setQuerys, setRover } from '../../redux/actions';

function ImageSearch({ rovers }) {
  const dispatch = useDispatch();
  const [valueTab, setValueTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setValueTab(newValue);
  };

  const handleChange = (event, key) => {
    switch (key) {
      case 'rover':
        dispatch(
          setRover(
            roversList.find((rover) => rover.name === event.target.value),
          ),
        );
        break;
      case 'sol':
        dispatch(setQuerys({ sol: event.target.value, earth_date: '' }));
        break;
      default:
        dispatch(setQuerys({ [key]: event.target.value }));
        break;
    }
  };

  const handleDateChange = (event, key) => {
    dispatch(setQuerys({ [key]: moment(event).format('YYYY-MM-DD'), sol: '' }));
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
        <FormControl fullWidth>
          <InputLabel id="select_rover">Rovers</InputLabel>
          <Select
            labelId="select_rover"
            id="select_rover"
            value={rovers.rover}
            label="Rover"
            onChange={(e) => handleChange(e, 'rover')}
          >
            {roversList.map((rover) => (
              <MenuItem key={rover.name} value={rover.name}>
                {rover.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={12} md={6}>
        {rovers.cameras && (
          <FormControl fullWidth>
            <InputLabel id="camera">Select a Camera</InputLabel>
            <Select
              labelId="camera"
              id="select_camera"
              value={rovers.querys.camera}
              label="Camera"
              onChange={(e) => handleChange(e, 'camera')}
            >
              {rovers.cameras.map((camera) => (
                <MenuItem key={camera} value={camera}>
                  {camerasNames[camera]}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        )}
      </Grid>
      <Grid item xs={11} md={11} justifyItems="center">
        <Tabs
          value={valueTab}
          onChange={handleTabChange}
          aria-label="Search tabs"
        >
          <Tab label="Earth Date" />
          <Tab label="Sol" />
        </Tabs>
        {!valueTab ? (
          <FormControl sx={{ m: 1, width: '100%' }} variant="standard">
            <LocalizationProvider dateAdapter={AdapterMoment}>
              <DatePicker
                mask="____-__-__"
                orientation="portrait"
                label="Earth Date"
                inputFormat="YYYY-MM-DD"
                value={rovers.querys.earth_date}
                onChange={(e) => handleDateChange(e, 'earth_date')}
                renderInput={(params) => (
                  <TextField variant="standard" {...params} />
                )}
              />
            </LocalizationProvider>
          </FormControl>
        ) : (
          <TextField
            id="sol"
            label="Sol"
            variant="standard"
            type="number"
            value={rovers.querys.sol}
            onChange={(e) => handleChange(e, 'sol')}
            fullWidth
          />
        )}
      </Grid>
      <Grid item xs={12} md={12} justifyItems="center" />
    </Grid>
  );
}

export default ImageSearch;
