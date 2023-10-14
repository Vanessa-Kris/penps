import { Box, Grid, Typography, Button, Link } from "@mui/material";
import React from "react";

export default function Vision() {
  return (
    <>
      <Box>
        <Box
          sx={{ mx: { md: 18, xs: 3, sm: 3 }, my: { md: 18, xs: 7, sm: 7 } }}
          id="about"
        >
          <Grid
            container
            spacing={8}
            alignItems="center"
            justifyContent="space-evenly"
          >
            <Grid item md={6} sm={6} xs={12}>
              <Box
                component="img"
                src="https://img.freepik.com/free-photo/medium-shot-boy-portrait-with-graduation-background_23-2150293635.jpg?size=626&ext=jpg&ga=GA1.2.1563347392.1696364341&semt=ais"
                sx={{ width: "100%" }}
              />
            </Grid>
            <Grid item md={6} sm={6} xs={12}>
              <Typography variant="h3" sx={{ mb: { md: 4, sm: 4, xs: 3 } }}>
                About us
              </Typography>
              <Typography variant="body1" sx={{ mb: 3 }}>
                At PENPS, we provide a holistic education that fosters academic
                excellence while also nurturing a deep sense of morality and
                spirituality in our students. Our dedicated staff and
                cutting-edge educational programs are designed to empower your
                children to excel in all aspects of their lives.
              </Typography>
              <Link>Learn more</Link>
            </Grid>
          </Grid>
        </Box>
        {/* Vision */}
        <Box
          sx={{ mx: { md: 18, xs: 3, sm: 3 }, my: { md: 18, xs: 7, sm: 7 } }}
        >
          <Grid
            container
            spacing={8}
            alignItems="center"
            justifyContent="space-evenly"
          >
            <Grid item md={6} sm={6} xs={12}>
              <Typography variant="h3" sx={{ mb: { md: 4, sm: 4, xs: 3 } }}>
                Vision
              </Typography>
              <Typography variant="body1" sx={{ mb: 3 }}>
                We are dedicated to nurturing future champions. Our mission is
                to inspire and guide young minds to become brilliant, virtuous,
                and God-fearing individuals. We believe that education is not
                just about academic excellence, but also about instilling strong
                values and character.
              </Typography>
              <Link>Learn more</Link>
            </Grid>
            <Grid item md={6} sm={6} xs={12}>
              <Box
                component="img"
                src="https://img.freepik.com/free-photo/girl-with-globe-books-studio_23-2147851858.jpg?size=626&ext=jpg&ga=GA1.2.1563347392.1696364341&semt=ais"
                sx={{ width: "100%" }}
              />
            </Grid>
          </Grid>
        </Box>
        <Box sx={{ bgcolor: "#F7F9FD", p: 1 }}>
          <Box
            align="center"
            sx={{
              mx: { md: 18, xs: 3, sm: 3 },
              my: { md: 18, xs: 7, sm: 7 },
            }}
          >
            <Typography variant="h3" sx={{ mb: 7, fontWeight: 500 }}>
              Our History
            </Typography>

            <Typography variant="p">
              Power and Excellent Nursery and Primary School was established in
              the year 2000 and has been thriving ever since. Over the years, we
              have consistently nurtured and developed outstanding young minds,
              and we continue to do so with unwavering dedication. Our
              commitment to excellence remains our driving force, and we take
              immense pride in the remarkable achievements of our students. As
              we look towards the future, we aspire to further elevate the
              standards of education, shaping the leaders of tomorrow with our
              unparalleled educational approach.
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
}
