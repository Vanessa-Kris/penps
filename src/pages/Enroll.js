// import { Box, Typography, Grid, Button, TextField } from "@mui/material";
// import PropTypes from "prop-types";
// import Tabs from "@mui/material/Tabs";
// import Tab from "@mui/material/Tab";
// import React from "react";

// function CustomTabPanel(props) {
//   const { children, value, index, ...other } = props;

//   return (
//     <div
//       role="tabpanel"
//       hidden={value !== index}
//       id={`simple-tabpanel-${index}`}
//       aria-labelledby={`simple-tab-${index}`}
//       {...other}
//     >
//       {value === index && (
//         <Box sx={{ p: 3 }}>
//           <Typography>{children}</Typography>
//         </Box>
//       )}
//     </div>
//   );
// }

// CustomTabPanel.propTypes = {
//   children: PropTypes.node,
//   index: PropTypes.number.isRequired,
//   value: PropTypes.number.isRequired,
// };

// function a11yProps(index) {
//   return {
//     id: `simple-tab-${index}`,
//     "aria-controls": `simple-tabpanel-${index}`,
//   };
// }

// export default function Enroll() {
//   const [value, setValue] = React.useState(0);

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };
//   return (
//     <Box sx={{ m: { md: 15, sm: 15, xs: 3 }, pt: { xs: 7, sm: 0, md: 0 } }}>
//       <Box
//         align="center"
//         sx={{ mx: { md: 18, xs: 3, sm: 3 }, my: { md: 18, xs: 7, sm: 7 } }}
//       >
//         <Typography variant="h3" sx={{ mb: 7, fontWeight: 500 }}>
//           Welcome
//         </Typography>

//         <Typography variant="p">
//           We are so happy you are joining us. Weather you are returning or new
//           we appreciate you.
//         </Typography>
//       </Box>
//       {/*  */}
//       <Grid
//         component="form"
//         // action="https://formspree.io/f/mpzgognj"
//         // method="POST"
//         container
//         columnSpacing={2}
//       >
//         <Grid item md={6} xs={12} sx={{ py: 2 }}>
//           Guardian Name* <br />
//           <TextField
//             fullWidth
//             name="name"
//             id="outlined-basic"
//             sx={{ borderRadius: "5px" }}
//           />
//         </Grid>
//         <Grid item md={6} xs={12} sx={{ py: 2 }}>
//           Child's name* <br />
//           <TextField
//             fullWidth
//             name="email"
//             id="outlined-basic"
//             variant="outlined"
//             sx={{ borderRadius: "5px" }}
//           />
//         </Grid>
//         <Grid item md={6} xs={12} sx={{ py: 2 }}>
//           Child's name* <br />
//           <TextField
//             fullWidth
//             name="email"
//             id="outlined-basic"
//             variant="outlined"
//             sx={{ borderRadius: "5px" }}
//           />
//         </Grid>
//         <Grid item md={6} xs={12} sx={{ py: 2 }}>
//           Child's name* <br />
//           <TextField
//             fullWidth
//             name="email"
//             id="outlined-basic"
//             variant="outlined"
//             sx={{ borderRadius: "5px" }}
//           />
//         </Grid>
//         <Grid item md={12} xs={12} sx={{ py: 2 }}>
//           Child's name* <br />
//           <TextField
//             fullWidth
//             name="number"
//             id="outlined-basic"
//             variant="outlined"
//             sx={{ borderRadius: "5px" }}
//           />
//         </Grid>
//         <Grid item md={12} xs={12} sx={{ py: 2 }}>
//           Message* <br />
//           <TextField
//             fullWidth
//             name="message"
//             multiline
//             rows={4}
//             id="outlined-basic"
//             variant="outlined"
//             className="input"
//             sx={{
//               borderRadius: "5px",
//             }}
//           />
//         </Grid>

//         <Grid item md={12} xs={12} sx={{ py: 2 }}>
//           <Button
//             type="submit"
//             variant="contained"
//             sx={{ width: "100%", p: 2, fontWeight: 900 }}
//           >
//             Send Message
//           </Button>
//         </Grid>
//       </Grid>
//     </Box>
//   );
// }
