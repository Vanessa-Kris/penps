import React from "react";
import { Box, Typography, Grid } from "@mui/material";

export default function Events() {
  return (
    <Box sx={{ m: 15 }}>
      <Typography align="center" variant="h3" sx={{ fontWeight: 500 }}>
        Upcoming Events
      </Typography>
      <Grid
        container
        alignItems="center"
        justifyContent="space-evenly"
        sx={{ mt: 7 }}
        columnSpacing={7}
      >
        <Grid item md={6} sm={6} xs={12}>
          <Box
            component="img"
            sx={{ width: "100%" }}
            src="https://img.freepik.com/free-photo/junior-football-team-stacking-hands-before-match_53876-139584.jpg?size=626&ext=jpg&ga=GA1.2.1563347392.1696364341&semt=ais"
          />
        </Grid>
        <Grid item md={6} sm={6} xs={12}>
          <Typography variant="h4" sx={{ pb: 3, fontWeight: 500 }}>
            Inter house sports
          </Typography>
          <Typography variant="p">
            We kindly request the participation of all students in our upcoming
            annual interhouse sports event, scheduled for July 27, 2024. We
            extend a warm invitation to all parents and guardians to join us on
            this exciting day.
          </Typography>

          <Typography variant="p">
            As for the sports fee, we are currently in the process of finalizing
            the details. Rest assured, we will communicate the exact fee to all
            participants as soon as it is determined. Your support and
            attendance at this event will greatly contribute to its success, and
            we look forward to sharing this memorable day with you and your
            loved ones.
          </Typography>
        </Grid>
      </Grid>
      {/*  */}
      <Grid
        container
        alignItems="center"
        justifyContent="space-evenly"
        sx={{ mt: 7 }}
        columnSpacing={7}
      >
        <Grid item md={6} sm={6} xs={12}>
          <Typography variant="h4" sx={{ pb: 3, fontWeight: 500 }}>
            Graduation Ceremony
          </Typography>
          <Typography variant="p">
            We kindly request the participation of all students in our upcoming
            annual interhouse sports event, scheduled for July 27, 2024. We
            extend a warm invitation to all parents and guardians to join us on
            this exciting day.
          </Typography>

          <Typography variant="p">
            As for the sports fee, we are currently in the process of finalizing
            the details. Rest assured, we will communicate the exact fee to all
            participants as soon as it is determined. Your support and
            attendance at this event will greatly contribute to its success, and
            we look forward to sharing this memorable day with you and your
            loved ones.
          </Typography>
        </Grid>
        <Grid item md={6} sm={6} xs={12}>
          <Box
            component="img"
            sx={{ width: "100%" }}
            src="https://img.freepik.com/free-photo/junior-football-team-stacking-hands-before-match_53876-139584.jpg?size=626&ext=jpg&ga=GA1.2.1563347392.1696364341&semt=ais"
          />
        </Grid>
      </Grid>
    </Box>
  );
}
