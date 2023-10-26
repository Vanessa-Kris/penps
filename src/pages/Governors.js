import React from "react";
import { Box, Typography, Grid } from "@mui/material";

export default function Governors() {
  return (
    <Box sx={{ mx: { md: 15, sm: 10, xs: 2 }, my: { md: 15, sm: 13, xs: 13 } }}>
      <Typography variant="h2">Governors</Typography>

      <Grid
        container
        columnSpacing={4}
        sx={{ mt: { md: 7, xs: 5 }, mb: { md: 15, xs: 7 } }}
      >
        <Grid item md={3} sm={3} xs={12} sx={{ pt: { md: 0, sm: 0, xs: 2 } }}>
          <Box component="img" src="/Igwe.JPG" sx={{ width: "100%" }} />
          <Typography variant="p">Proprietress / Founder </Typography>
          <Typography variant="h5">Pastor Mrs Blessing Igwe</Typography>
        </Grid>
        <Grid item md={3} sm={3} xs={12} sx={{ pt: { md: 0, sm: 0, xs: 5 } }}>
          <Box component="img" src="/bishop.jpg" sx={{ width: "100%" }} />
          <Typography variant="p">Proprietor /Co-Founder </Typography>
          <Typography variant="h5">Bishop James Igwe</Typography>
        </Grid>
        <Grid item md={3} sm={3} xs={12} sx={{ pt: { md: 0, sm: 0, xs: 5 } }}>
          <Box component="img" src="/principal.JPG" sx={{ width: "100%" }} />
          <Typography variant="p">Heah Mistress</Typography>
          <Typography variant="h5">Mrs Eunice Ogumba</Typography>
        </Grid>
        <Grid item md={3} sm={3} xs={12} sx={{ pt: { md: 0, sm: 0, xs: 5 } }}>
          <Box component="img" src="/Igwe.JPG" sx={{ width: "100%" }} />
          <Typography variant="p">PTA Chairman</Typography>
          <Typography variant="h5">Somebody</Typography>
        </Grid>
      </Grid>

      <Typography>
        We are dedicated to lorem ipsum Power and Excellent Nursery and Primary
        School was established in the year 2000 and has been thriving ever
        since. Over the years, we have consistently nurtured and developed
        outstanding young minds, and we continue to do so with unwavering
        dedication. Our commitment to excellence remains our driving force, and
        we take immense pride in the remarkable achievements of our students. As
        we look towards the future, we aspire to further elevate the standards
        of education, shaping the leaders of tomorrow with our unparalleled
        educational approach.
      </Typography>
    </Box>
  );
}
