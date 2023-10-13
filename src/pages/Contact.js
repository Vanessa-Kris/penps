import {
  Box,
  Grid,
  Typography,
  Divider,
  TextField,
  Button,
} from "@mui/material";
import React from "react";

export default function Contact() {
  return (
    <Box sx={{ m: { md: 15, sm: 15, xs: 3 }, pt: { xs: 7, sm: 0, md: 0 } }}>
      <Typography variant="h6" sx={{ my: { md: 5, xs: 5 }, fontWeight: 600 }}>
        CONTACT
        <Divider
          flexItem
          sx={{ bgcolor: "#d7d0d7", width: { md: "10%", xs: "40%" } }}
        />
      </Typography>

      <Typography sx={{ pb: 3 }}>We would love to hear from you.</Typography>

      <Grid
        component="form"
        action="https://formspree.io/f/mpzgognj"
        method="POST"
        container
        columnSpacing={2}
      >
        <Grid item md={6} xs={12} sx={{ py: 2 }}>
          Name* <br />
          <TextField
            fullWidth
            name="name"
            id="outlined-basic"
            sx={{ borderRadius: "5px" }}
          />
        </Grid>
        <Grid item md={6} xs={12} sx={{ py: 2 }}>
          Email* <br />
          <TextField
            fullWidth
            name="email"
            id="outlined-basic"
            variant="outlined"
            sx={{ borderRadius: "5px" }}
          />
        </Grid>
        <Grid item md={12} xs={12} sx={{ py: 2 }}>
          Number <br />
          <TextField
            fullWidth
            name="number"
            id="outlined-basic"
            variant="outlined"
            sx={{ borderRadius: "5px" }}
          />
        </Grid>
        <Grid item md={12} xs={12} sx={{ py: 2 }}>
          Message* <br />
          <TextField
            fullWidth
            name="message"
            multiline
            rows={4}
            id="outlined-basic"
            variant="outlined"
            className="input"
            sx={{
              borderRadius: "5px",
            }}
          />
        </Grid>

        <Grid item md={12} xs={12} sx={{ py: 2 }}>
          <Button
            type="submit"
            variant="contained"
            sx={{ width: "100%", p: 2, fontWeight: 900 }}
          >
            Send Message
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}
