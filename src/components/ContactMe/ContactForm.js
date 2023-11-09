import React from "react";
import { TextField, Button, Grid, Icon, InputAdornment, Box, Typography } from "@mui/material";
import { useState } from "react";
import "./Contact.css"




function ContactForm() {
  const [clasname, setClass] = useState("btn-box");
  const [isFilled, setFilled] = useState(false);
  const [person, setPerson] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  })

  const handleText = (e) => {
    let ele = e.currentTarget
    let p1 = { ...person }
    p1[ele.name] = ele.value;
    setPerson(p1)
    if (p1.name && p1.email && p1.subject && p1.message) {
      setFilled(true)
      setClass("btn-box")
    }
    else {
      setFilled(false)
    }

  }

  const handelHover = () => {
    if (!isFilled) {
      if (clasname == 'btn-box') {
        setClass("btn-box2")
      }
      if (clasname == 'btn-box2') {
        setClass("btn-box3")
      }
      if (clasname == 'btn-box3') {
        setClass("btn-box4")
      }
      if (clasname == 'btn-box4') {
        setClass("btn-box")
      }
    }
  }





  return (
    <form>
      <div className="text-light">
        <Typography variant="h2" gutterBottom>
          Contact Me...!
        </Typography>
      </div>
      <div className={`text-center ${isFilled ? "text-success" : "text-danger"}`}>
        {isFilled ? "Form Completed You can go on" : "Form Incomplete You cant touch the button...!"}
      </div>
      {getInputForm("name", "Name", "fa-solid fa-user", person.name, handleText)}
      {getInputForm("email", "Email", "fa-regular fa-envelope", person.email, handleText)}
      {getInputForm("subject", "Subject", "fa-solid fa-closed-captioning", person.subject, handleText)}
      {getInputForm("message", "Message", "fa-solid fa-comment", person.message, handleText)}
      <div className={"text-center mt-5 " + clasname}
      >
        <div className="p-3"
          onMouseEnter={handelHover}>
          <Button
            variant="contained" color="primary" type="submit">
            {"Submit"}
          </Button>
        </div>

      </div>

    </form>
  );
}




const getInputForm = (name, label, icon, value, change) => {

  return <div className="mt-4">
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <i className={`${icon} fa-lg text-white mx-4`}></i>
      <TextField
        id={name}
        fullWidth
        value={value}
        name={name}
        label={label}
        onChange={change}
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
