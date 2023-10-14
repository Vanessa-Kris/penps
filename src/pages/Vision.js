import { Box, Grid, Typography, Button } from "@mui/material";
import React from "react";

export default function Vision() {
  return (
    <>
      <Box sx={{ m: { md: 15, sm: 15, xs: 3 }, pt: { xs: 7, sm: 0, md: 0 } }}>
        <Box
          align="center"
          sx={{ mx: { md: 18, xs: 3, sm: 3 }, my: { md: 18, xs: 7, sm: 7 } }}
        >
          <Typography variant="h3" sx={{ mb: 7, fontWeight: 500 }}>
            Our History
          </Typography>

          <Typography variant="p">
            Power and Excellent Nursery and Primary School was established in
            the year 2000 and has been thriving ever since. Over the years, we
            have consistently nurtured and developed outstanding young minds,
            and we continue to do so with unwavering dedication. Our commitment
            to excellence remains our driving force, and we take immense pride
            in the remarkable achievements of our students. As we look towards
            the future, we aspire to further elevate the standards of education,
            shaping the leaders of tomorrow with our unparalleled educational
            approach.
          </Typography>
        </Box>

        <Typography align="center" variant="h3" sx={{ fontWeight: 500 }}>
          Meet The Team
        </Typography>

        <Grid container columnSpacing={4} sx={{ mt: 7, mb: 15 }}>
          <Grid item md={3} sm={3} xs={12} sx={{ pt: { md: 0, sm: 0, xs: 5 } }}>
            <Box component="img" src="/Igwe.JPG" sx={{ width: "100%" }} />
            <Typography variant="p">Proprietress / Founder </Typography>
            <Typography variant="h5">Pastor Mrs Blessing Igwe</Typography>
          </Grid>
          <Grid item md={3} sm={3} xs={12} sx={{ pt: { md: 0, sm: 0, xs: 5 } }}>
            <Box component="img" src="/principal.JPG" sx={{ width: "100%" }} />
            <Typography variant="p">Heah Mistress</Typography>
            <Typography variant="h5">Mrs Eunice Ogumba</Typography>
          </Grid>
          <Grid item md={3} sm={3} xs={12} sx={{ pt: { md: 0, sm: 0, xs: 5 } }}>
            <Box component="img" src="/Igwe.JPG" sx={{ width: "100%" }} />
            <Typography variant="p">Ast. Head Mistress</Typography>
            <Typography variant="h5">Mrs Mercy Akan</Typography>
          </Grid>
          <Grid item md={3} sm={3} xs={12} sx={{ pt: { md: 0, sm: 0, xs: 5 } }}>
            <Box component="img" src="/Igwe.JPG" sx={{ width: "100%" }} />
            <Typography variant="p">Secetary</Typography>
            <Typography variant="h5">Somebody</Typography>
          </Grid>
        </Grid>

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
              We kindly request the participation of all students in our
              upcoming annual interhouse sports event, scheduled for July 27,
              2024. We extend a warm invitation to all parents and guardians to
              join us on this exciting day.
            </Typography>

            <Typography variant="p">
              As for the sports fee, we are currently in the process of
              finalizing the details. Rest assured, we will communicate the
              exact fee to all participants as soon as it is determined. Your
              support and attendance at this event will greatly contribute to
              its success, and we look forward to sharing this memorable day
              with you and your loved ones.
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
              We kindly request the participation of all students in our
              upcoming annual interhouse sports event, scheduled for July 27,
              2024. We extend a warm invitation to all parents and guardians to
              join us on this exciting day.
            </Typography>

            <Typography variant="p">
              As for the sports fee, we are currently in the process of
              finalizing the details. Rest assured, we will communicate the
              exact fee to all participants as soon as it is determined. Your
              support and attendance at this event will greatly contribute to
              its success, and we look forward to sharing this memorable day
              with you and your loved ones.
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
      >
        <Box
          align="center"
          sx={{
            mx: { md: 18, xs: 3, sm: 3 },
            my: { md: 18, xs: 7, sm: 7 },
          }}
        >
          <Typography variant="p">Interested?</Typography>
          <Typography variant="h3">Register a child</Typography>
          <Button variant="contained" sx={{ mt: 3, p: 2 }}>
            Get Started
          </Button>
        </Box>
      </Box>
    </>
  );
}
