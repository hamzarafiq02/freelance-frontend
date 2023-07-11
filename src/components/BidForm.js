import React, { useState } from "react";
import {
  TextField,
  Button,
  Typography,
  Box,
  FormControl,
  Grid,
  Paper,
} from "@mui/material";

const BidForm = () => {
  const [dateTime, setDateTime] = useState("");
  const [decimal, setDecimal] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Date Time: ${dateTime} - Decimal: ${decimal}`);
  };

  return (
    <div className="form_bid">
      <Box borderBottom={1} sx={{ marginBottom: 2 }}>
        <Typography variant="h5" align="center">
          Bid on project
        </Typography>
      </Box>
      <Grid container spacing={2} sx={{ marginBottom: 2 }}>
        <Grid item xs={6}>
          <Typography variant="body2" component="p">
            **select the Price in which you propose to complete the project
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="body2" component="p">
            **select the Date & Time when you propose to complete the project
          </Typography>
        </Grid>
      </Grid>

      <form onSubmit={handleSubmit}>
        <FormControl fullWidth sx={{ marginBottom: 2 }}>
          <TextField
            label="Date Time"
            type="datetime-local"
            value={dateTime}
            onChange={(e) => setDateTime(e.target.value)}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </FormControl>

        <FormControl fullWidth>
          <TextField
            label="Price"
            type="number"
            value={decimal}
            onChange={(e) => setDecimal(e.target.value)}
          />
        </FormControl>

        <Button variant="contained" type="submit" sx={{ marginTop: 2 }}>
          Add Bid
        </Button>
      </form>
    </div>
  );
};

export default BidForm;
