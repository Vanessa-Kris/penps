import { Check } from "@mui/icons-material";
import { Box, Button, Grid, Link, Typography } from "@mui/material";
import React from "react";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function Landing() {
  const defaultProps = {
    center: {
      lat: 4.8145,
      lng: 7.0243,
    },
    zoom: 11,
  };
  return (
    <Box>
      {/* Banner */}
      <Grid container sx={{ bgcolor: "#F7F9FD" }}>
        <Grid
          item
          md={6}
          sm={6}
          xs={12}
          my="auto"
          sx={{ p: { md: 15, sm: 10, xs: 1 } }}
        >
          <Typography
            variant="h3"
            sx={{ fontWeight: 500, pb: 4, mt: { md: 0, sm: 0, xs: 10 } }}
          >
            Empowering Minds, Building Futures
          </Typography>
          <Typography variant="p">
            Empower your child to become brilliant and God-fearing at Power and
            Excellence Nursery and Primary School (PENPS) where champions are
            nurtured.
          </Typography>
          <br />
          <Button
            sx={{ mt: 4, mb: { md: 0, sm: 0, xs: 4 }, p: 2 }}
            variant="contained"
          >
            Learn More
          </Button>
        </Grid>
        <Grid item md={6} sm={6} xs={12}>
          <Box
            component="img"
            src="/banner.jpg"
            sx={{ width: "100%", mt: { md: 0, sm: 12, xs: 0 } }}
          />
        </Grid>
      </Grid>
      {/* About */}

      {/* Values */}
      <Box sx={{ mx: { md: 18, xs: 3, sm: 3 }, my: { md: 18, xs: 7, sm: 7 } }}>
        <Grid
          container
          spacing={5}
          alignItems="center"
          justifyContent="space-evenly"
        >
          <Grid item md={6} sm={6} xs={12}>
            <Box
              component="img"
              src="https://img.freepik.com/free-photo/front-view-stacked-books-graduation-cap-diploma-education-day_23-2149241011.jpg?size=626&ext=jpg&ga=GA1.2.1563347392.1696364341&semt=sph"
              sx={{ width: { md: "80%", sm: "80%", xs: "100%" } }}
            />
          </Grid>
          <Grid item md={6} sm={6} xs={12}>
            <Grid container>
              <Grid
                item
                md={6}
                sm={12}
                xs={12}
                sx={{
                  px: { md: 3, sm: 2, xs: 3 },
                  py: { md: 3, sm: 2, xs: 3 },
                }}
              >
                <Typography variant="h5" sx={{ fontWeight: 500 }}>
                  <Check sx={{ fontSize: "15px", fontWeight: 800 }} /> Holistic
                  Education
                </Typography>
                <Typography variant="body1">
                  Well-rounded education that focuses not only on academic
                  excellence but also on character development.
                </Typography>
              </Grid>
              <Grid
                item
                md={6}
                sm={12}
                xs={12}
                sx={{
                  px: { md: 3, sm: 2, xs: 3 },
                  py: { md: 3, sm: 2, xs: 3 },
                }}
              >
                <Typography variant="h5" sx={{ fontWeight: 500 }}>
                  <Check sx={{ fontSize: "15px", fontWeight: 800 }} /> Dedicated
                  Staff
                </Typography>
                <Typography variant="body1">
                  Experienced educators who are passionate about teaching and
                  care for the well-being of your children.
                </Typography>
              </Grid>
              <Grid
                item
                md={6}
                sm={12}
                xs={12}
                sx={{
                  px: { md: 3, sm: 2, xs: 3 },
                  py: { md: 3, sm: 2, xs: 3 },
                }}
              >
                <Typography variant="h5" sx={{ fontWeight: 500 }}>
                  <Check sx={{ fontSize: "15px", fontWeight: 800 }} /> Strong
                  Values
                </Typography>
                <Typography variant="body1">
                  committed to instilling strong values and ethics in our
                  students.
                </Typography>
              </Grid>
              <Grid
                item
                md={6}
                sm={12}
                xs={12}
                sx={{
                  px: { md: 3, sm: 2, xs: 3 },
                  py: { md: 3, sm: 2, xs: 3 },
                }}
              >
                <Typography variant="h5" sx={{ fontWeight: 500 }}>
                  <Check sx={{ fontSize: "15px", fontWeight: 800 }} />
                  Excellence
                </Typography>
                <Typography variant="body1">
                  We take pride in our rigorous academic programs that are
                  designed to challenge and inspire young minds.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
      {/* Gallery */}
      <Box
        sx={{
          bgcolor: "#F7F9FD",
          pb: 1,
        }}
      >
        <Box
          sx={{
            mx: { md: 18, xs: 3, sm: 3 },
            my: { md: 18, xs: 7, sm: 7 },
          }}
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
                src="https://img.freepik.com/free-photo/girl-writing-notebook-studio_23-2147851838.jpg?size=626&ext=jpg&ga=GA1.2.1563347392.1696364341&semt=ais"
                sx={{ width: "100%" }}
              />
            </Grid>
            <Grid item md={6} sm={6} xs={12}>
              <Grid container spacing={8}>
                <Grid item md={6} sm={6} xs={12}>
                  <Box
                    component="img"
                    src="/teacher.jpg"
                    sx={{ width: "100%", height: "100%" }}
                  />
                </Grid>
                <Grid item md={6} sm={6} xs={12}>
                  <Box
                    component="img"
                    src="/ball2.jpg"
                    sx={{ width: "100%", height: "100%" }}
                  />
                </Grid>
                <Grid item md={6} sm={6} xs={12}>
                  <Box
                    component="img"
                    src="/smile.jpg"
                    sx={{ width: "100%", height: "100%" }}
                  />
                </Grid>
                <Grid item md={6} sm={6} xs={12}>
                  <Box
                    component="img"
                    src="/ball1.jpg"
                    sx={{ width: "100%", height: "100%" }}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Box>
      {/* Register */}
      <Box
        align="center"
        sx={{ mx: { md: 18, xs: 3, sm: 3 }, my: { md: 18, xs: 7, sm: 7 } }}
      >
        <Typography variant="p">Interested?</Typography>
        <Typography variant="h3">Register a child</Typography>
        <Button variant="contained" sx={{ mt: 3, p: 2 }}>
          Get Started
        </Button>
      </Box>
      {/* Visit */}
      <Box sx={{ my: { md: 18, xs: 7, sm: 7 } }}>
        <Grid
          container
          columnSpacing={7}
          alignItems="center"
          justifyContent="space-evenly"
        >
          <Grid item md={7} sm={7} xs={12}>
            <div style={{ height: "90vh", width: "100%" }}>
              <GoogleMapReact
                bootstrapURLKeys={{ key: "" }}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
              >
                <AnyReactComponent
                  lat={59.955413}
                  lng={30.337844}
                  text="My Marker"
                />
              </GoogleMapReact>
            </div>
          </Grid>
          <Grid item md={5} sm={5} xs={12}>
            <Typography variant="h3" sx={{ pb: 3 }}>
              Visit our school
            </Typography>
            <Typography variant="p">
              1 Chief owhor Street, Port Harcourt, Nigeria
            </Typography>

            <Box sx={{ mt: 3 }}>
              <Typography variant="p">Monday – Friday 7am – 3pm</Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
