import React from "react";
import { TextField, Button, Grid, Icon, InputAdornment, Box, Typography } from "@mui/material";

function ContactForm() {
  return (
    <form>
      <div className="text-light">
        <Typography variant="h2" gutterBottom>
          Contact Me...!
        </Typography>
      </div>

      {getInputForm("name", "Name", "fa-solid fa-user")}
      {getInputForm("email", "Email", "fa-regular fa-envelope")}
      {getInputForm("subject", "Subject", "fa-solid fa-closed-captioning")}
      {getInputForm("message", "Message", "fa-solid fa-comment")}
      <div className="text-center mt-5">
        <Button variant="contained" color="primary" type="submit">
          Submit
        </Button>
      </div>

    </form>
  );
}

const getInputForm = (name, label, icon) => {

  return <div className="mt-4">
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <i class={`${icon} fa-lg text-white mx-4`}></i>
      <TextField
        id={name}
        fullWidth
        name={name}
        label={label}
        multiline={name == 'message'}
        rows={3}
        inputMode={name == 'email' ? "email" : "text"}
        InputLabelProps={{
          style: { color: "white" }
        }}
        InputProps={{
          style: { color: "white" }
        }}
        variant="standard"
      />
    </Box>
  </div>
}

export default ContactForm;
