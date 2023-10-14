import React from "react";
import { Box, Typography, Grid } from "@mui/material";

export default function Staffs() {
  return (
    <Box sx={{ m: 15 }}>
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
    </Box>
  );
}
