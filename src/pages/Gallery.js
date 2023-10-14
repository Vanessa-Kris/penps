import React from "react";
import { Box, Typography, Grid } from "@mui/material";

export default function Gallery() {
  return (
    <>
      <Box sx={{ m: 15 }}>
        <Typography
          align="center"
          variant="h3"
          sx={{ mt: 15, fontWeight: 500 }}
        >
          Meet Our Alumnus
        </Typography>

        <Grid container columnSpacing={4} sx={{ mt: 7, mb: 15 }}>
          <Grid item md={3} sm={3} xs={12} sx={{ pt: { md: 0, sm: 0, xs: 5 } }}>
            <Box
              component="img"
              src="https://img.freepik.com/free-photo/businesswoman-executive-professional-success-concept_53876-137644.jpg?size=626&ext=jpg&ga=GA1.2.1563347392.1696364341&semt=ais"
              sx={{ width: "100%" }}
            />
            <Typography variant="p">Civil Engineer</Typography>
            <Typography variant="h5">Lorem Ipsum</Typography>
          </Grid>
          <Grid item md={3} sm={3} xs={12} sx={{ pt: { md: 0, sm: 0, xs: 5 } }}>
            <Box
              component="img"
              src="https://img.freepik.com/free-photo/stylish-black-girl_1157-15554.jpg?size=626&ext=jpg&ga=GA1.2.1563347392.1696364341&semt=ais"
              sx={{ width: "100%" }}
            />
            <Typography variant="p">Journalist</Typography>
            <Typography variant="h5">Lorem Ipsum</Typography>
          </Grid>
          <Grid item md={3} sm={3} xs={12} sx={{ pt: { md: 0, sm: 0, xs: 5 } }}>
            <Box
              component="img"
              src="https://img.freepik.com/free-photo/african-american-business-man_1303-10337.jpg?size=626&ext=jpg&ga=GA1.2.1563347392.1696364341&semt=ais"
              sx={{ width: "100%" }}
            />
            <Typography variant="p">Banker</Typography>
            <Typography variant="h5">Lorem Ipsum</Typography>
          </Grid>
          <Grid item md={3} sm={3} xs={12} sx={{ pt: { md: 0, sm: 0, xs: 5 } }}>
            <Box
              component="img"
              src="https://img.freepik.com/free-photo/confident-african-businesswoman-smiling-closeup-portrait-jobs-career-campaign_53876-143280.jpg?size=626&ext=jpg&ga=GA1.2.1563347392.1696364341&semt=ais"
              sx={{ width: "100%" }}
            />
            <Typography variant="p">Doctor</Typography>
            <Typography variant="h5">Lorem Ipsum</Typography>
          </Grid>
        </Grid>
      </Box>
      <Box
        sx={{
          bgcolor: "#F7F9FD",
          p: { md: 1, sm: 1, xs: 2 },
        }}
      ></Box>
    </>
  );
}
