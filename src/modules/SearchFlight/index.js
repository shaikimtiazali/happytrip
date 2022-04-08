import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import { Button, FormControlLabel, Grid, Radio, RadioGroup } from '@mui/material';
// import { useDispatch } from 'react-redux';
// import { home } from '../../../userSlice';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { InputLabel } from '@mui/material';
import FlightList from '../../components/FlightList';

const SearchFlight = () => {
    const [source, setSource] = useState();
    const [destination, setDestination] = useState();
    const [journey, setJourney] = useState();
    const [classType, setClassType] = useState();
    const [selectTrip, setSelectTrip] = useState("one");
    const [returnDate, setReturnDate] = useState("");
    const [search, setSearch] = useState('');
    const [data, setData] = useState([]);


    const submitHandler =  e => {
        e.preventDefault();
        // debugger
        // const response = await fetch("../../data.json")
        // const jsonData =await response.json()
        // setData(jsonData)
        // fetch("../../data.json").then(
         fetch("../../data.json").then(
            response => response.json()
        ).then(
            data => setData(data)
        )
    }
    // const history = useHistory();
    const handleReturn = (e) => {
        setReturnDate(e.target.value);
    };

    const handleSelectTrip = (e) => {

        setSelectTrip(e.target.value);
    };

    // const dispatch = useDispatch();

    const handleClick = async (e) => {
        e.preventDefault();
        setSource("");
        setDestination("");
        setJourney("");
        setClassType("");
        returnDate("");
        const res = fetch(
            "https://addsubscriptions-78e16-default-rtdb.firebaseio.com/data3.json",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application.json",
                },
                body: JSON.stringify({
                    source,
                    destination,
                    journey,
                    classType,
                    returnDate,

                })
            }
        );


       

    }
    return (

        <div>
            <h1><center>Search For Flights</center></h1>
            <div style={{ marginLeft: '300px', marginTop: '100px' }}>

                <Grid container>
                    <Grid item>
                        <RadioGroup row onChange={handleSelectTrip} value={selectTrip} >

                            <FormControlLabel

                                value="one"

                                control={<Radio color="primary" />}

                                label="One Way"

                            />

                            <FormControlLabel

                                value=""

                                control={<Radio color="primary" />}

                                label="Round Trip"

                            />

                        </RadioGroup>

                        <InputLabel id="demo-simple-select-helper-label" />Source City
                        <br></br>

                        <Select

                            labelId="demo-simple-select-helper-label"
                            value={source}
                            onChange={(e) => setSearch(e.target.value)}
                            label="Source City"
                            style={{ width: '100%' }}
                        >

                            <MenuItem value={"Mumbai"}>Mumbai</MenuItem>
                            <MenuItem value={"Pune"}>Pune</MenuItem>
                            <MenuItem value={"Chennai"}>Chennai</MenuItem>
                            <MenuItem value={"Banglore"}>Banglore</MenuItem>
                            <MenuItem value={"Delhi"}>Delhi</MenuItem>

                        </Select>
                        <br></br>
                        <br></br>
                        <InputLabel id="demo-simple-select-helper-label" />Destination
                        <br></br>
                        <Select
                            labelId="demo-simple-select-helper-label"
                            value={destination}
                            label="Destination"
                            onChange={(e) => setDestination(e.target.value)}
                            style={{ width: '100%' }}
                        >

                            <MenuItem value={"Mumbai"}>Mumbai</MenuItem>
                            <MenuItem value={"Pune"}>Pune</MenuItem>
                            <MenuItem value={"Chennai"}>Chennai</MenuItem>
                            <MenuItem value={"Banglore"}>Banglore</MenuItem>
                            <MenuItem value={"Delhi"}>Delhi</MenuItem>

                        </Select>



                        <br></br>
                        <br></br>

                        <TextField
                            label="Journey Date"
                            type="date"
                            value={journey}
                            onChange={(e) => setJourney(e.target.value)}
                            variant="outlined"
                            style={{ width: '100%' }}
                            InputLabelProps={{
                                shrink: true
                            }}
                        />
                        <br></br>
                        <br></br>
                        <InputLabel id="demo-simple-select-helper-label" />Class
                        <br></br>

                        <Select

                            labelId="demo-simple-select-helper-label"
                            value={classType}
                            label="classType"
                            onChange={(e) => setSource(e.target.value)}
                            style={{ width: '100%' }}
                        >

                            <MenuItem value={"Mumbai"}>First Class</MenuItem>
                            <MenuItem value={"Pune"}>Business</MenuItem>
                            <MenuItem value={"Chennai"}>Ecnomy</MenuItem>


                        </Select>
                    </Grid>

                    {selectTrip?.toUpperCase() === "BOTH" && (
                        <Grid item xs={12} md={6} className={""}>
                            <TextField
                                label="Return Date"
                                type="date"
                                value={returnDate}
                                onChange={handleReturn}
                                variant="outlined"
                                style={{ width: 300 }}
                                InputLabelProps={{
                                    shrink: true
                                }}
                            />
                        </Grid>
                    )}
                    
                </Grid>
                <br></br>

                <br></br>
                <Button
                    variant="contained"
                    color="primary"
                    className={""}
                    onClick={(e) => submitHandler(e)}

                >
                    {`Search Flight`}

                </Button>

                <div>
                    <br></br>
                    <br></br>
                    {data.length >= 1 ? <FlightList list={data} /> : null}
                </div>


            </div >
        </div >
    )
}
export default SearchFlight
