import React from "react";
import { TextField, Button, Grid } from "@mui/material";

function ContactForm() {
  const lightTextStyles = {
    color: "#fff", // Set the desired light text color
  };

  return (
    <form>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Name"
            variant="outlined"
            required
            InputLabelProps={{ style: lightTextStyles }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Email"
            variant="outlined"
            required
            InputLabelProps={{ style: lightTextStyles }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Message"
            multiline
            rows={4}
            variant="outlined"
            required
            InputLabelProps={{ style: lightTextStyles }}
          />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" color="primary" type="submit">
            Submit
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}

export default ContactForm;
