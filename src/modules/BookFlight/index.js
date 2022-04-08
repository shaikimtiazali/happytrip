import React, { useState, useContext } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { Grid, Typography, TextField, Box } from "@material-ui/core";
import { Autocomplete, Container } from "@mui/material";
import data from "../../components/data";
import { gender } from "../../components/data";
import { Link } from 'react-router-dom';
// import React, { useContext } from 'react';
import { PayContext } from '../../context/PayContext';
import '../../Assets/style/Home2.css';




const BookFlight = () => {
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [emailValidator, setEmailValidator] = useState(false);
  const [mobileValidator, setMobileValidator] = useState(false);
  const [errorFlag, setErrorFlag] = useState(false);
  const [pincodeValidator, setPincodeValidator] = useState(false);
  const [pincode, setPincode] = useState("");
  const [value, setValue] = React.useState(new Date());
  let Navigate =useNavigate()

  /**
   * @function handleFName
   * @param {object} e
   * @description get first name
   */
  const handleFName = (e) => {
    setFName(e.target.value);
  };

  /**
   * @function handleLName
   * @param {object} e
   * @description get Last name
   */
  const handleLName = (e) => {
    setLName(e.target.value);
  };

  /**
   * @function handleEmail
   * @param {object} e
   * @description get email id
   */
  const handleEmail = (e) => {
    const inputEmail = e.target.value;
    const validEmailRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (inputEmail.match(validEmailRegex) || inputEmail.length === 0) {
      setEmailValidator(false);
    } else {
      setEmailValidator(true);
    }

    //setEmailValidator(!inputEmail.match(validEmailRegex));
    setEmail(inputEmail);
  };

  /**
   * @function handleMobile
   * @param {object} e
   * @description get mobile number
   */
  const handleMobile = (e) => {
    const inputMobile = e.target.value;
    const validMobileRegex = /^(\+\d{1,3}[- ]?)?\d{10}$/;

    if (inputMobile.match(validMobileRegex) || inputMobile.length === 0) {
      setMobileValidator(false);
    } else {
      setMobileValidator(true);
    }
    //setMobileValidator(!inputMobile.match(validMobileRegex));
    setMobile(inputMobile);
  };

  /**
   * @function handlePincode
   * @param {object} e
   * @description get pincode
   */
  const handlePincode = (e) => {
    const inputPincode = e.target.value;
    const validPincodeRegex = /^(\+\d{1,3}[- ]?)?\d{6}$/;

    if (inputPincode.match(validPincodeRegex) || inputPincode.length === 0) {
      setPincodeValidator(false);
    } else {
      setPincodeValidator(true);
    }
    setPincode(inputPincode);
  };

  /**
   * @function handleConfirm
   * @param {object} e
   * @description Confirm the booking
   */
  const handleConfirm = (e) => {
    if (
      fName.length !== 0 &&
      lName.length !== 0 &&
      email.length !== 0 &&
      !emailValidator &&
      mobile.length !== 0 &&
      !mobileValidator
    ) {
      setErrorFlag(false);
      Navigate.push("/confirmation");
    } else {
      setErrorFlag(true);
    }
  };

  const [pay, setPay] = useContext(PayContext);

  return (
    <Container sx={{ marginTop: 12 }}>
      <Grid>
        <Typography variant="h4">{`Booking Confirmation for Flight `}</Typography>
      </Grid>

      <Grid container spacing={3}>
        <Grid item xs={6}>
          <TextField
            required
            label="First Name"
            value={fName}
            onChange={handleFName}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            required
            label="Last Name"
            value={lName}
            onChange={handleLName}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            required
            error={emailValidator}
            label="Email ID"
            value={email}
            onChange={handleEmail}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            required
            error={mobileValidator}
            label="Mobile Number"
            value={mobile}
            onChange={handleMobile}
          />
        </Grid>

        <Grid item xs={6}>
          <div className="choose">
            <Box spacing={2} sx={{ width: 380, marginTop: -0 }}>
              <Autocomplete
                required
                disableClearable
                options={data.map((option) => option.country)}
                renderInput={(params) => (
                  <TextField {...params} label="Country" />
                )}
              />
            </Box>
          </div>
        </Grid>

        <Grid item xs={6}>
          <TextField
            required
            label="State"
            defaultvalue="state"
            onChange={""}
          />
        </Grid>

        <Grid item xs={6}>
          <TextField
            required
            error={pincodeValidator}
            label="Pincode"
            value={pincode}
            onChange={handlePincode}
          />
        </Grid>

        <Grid item xs={6}>
          <div className="choose">
            <Box spacing={2} sx={{ width: 380, marginTop: -0 }}>
              <Autocomplete
                required
                disableClearable
                options={gender.map((option) => option.gender)}
                renderInput={(params) => (
                  <TextField {...params} label="Gender" />
                )}
              />
            </Box>
          </div>
        </Grid>

        <Grid item xs={6}>
          <TextField
            required
            label="Id Proof Number"
            defaultvalue="Id Proof Number"
            onChange={""}
          />
        </Grid>

        <Grid item xs={6}>
          <TextField type="date" />
        </Grid>
      </Grid>

      <br />

      <Grid item xs={6}>
       


			<button className='Home__btn' onClick={()=>Navigate("/Payment")}>Confirm Booking</button>
	

        {errorFlag && (
          <Typography color="error">{`All Fields are mandatory`}</Typography>
        )}
      </Grid>
    </Container>
  );
};

export default BookFlight;
