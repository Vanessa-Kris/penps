import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import {
  FaFacebook,
  FaLinkedin,
  FaTiktok,
  FaYoutube,
  FaInstagram,
  FaXTwitter,
  FaRegEnvelope,
} from "react-icons/fa6";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "#C70039",
        color: "#fff",
        p: { md: 15, sm: 8, xs: 5 },
      }}
    >
      <Grid
        container
        spacing={8}
        alignItems="center"
        justifyContent="space-evenly"
      >
        <Grid item md={6}>
          <Typography variant="h4">PENPS International</Typography>
          <Box sx={{ pt: 3 }}>
            <Typography variant="body">
              1 Chief owhor Street, Port Harcourt, Nigeria.
            </Typography>
            <br />
            <Typography variant="body">+234 803 482 6689</Typography>
          </Box>
        </Grid>
        <Grid item md={6} justifyContent="flex-end" display="flex">
          <Box>
            <FaFacebook style={{ fontSize: "30px", marginRight: 20 }} />
            <FaInstagram style={{ fontSize: "30px", marginRight: 20 }} />
            <FaLinkedin style={{ fontSize: "30px", marginRight: 20 }} />
            <FaTiktok style={{ fontSize: "30px", marginRight: 20 }} />
            <FaXTwitter style={{ fontSize: "30px", marginRight: 20 }} />
            <FaYoutube style={{ fontSize: "30px", marginRight: 20 }} />
            <FaRegEnvelope style={{ fontSize: "30px", marginRight: 20 }} />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
