import { Box, Paper, TextField, useMediaQuery } from "@mui/material";
import React from "react";

const Home = () => {

  const search = (e) => {
    if (e.key === "Enter")
    console.log(e.target.value);
  }

  const isNonMobile = useMediaQuery('(min-width:600px)')


  return (
      <Paper>
        <Box height="100vh" width="100vw" display="flex" alignItems="center" justifyContent="center" flexDirection="column" paddingTop="125px" >
          <Box  width={isNonMobile ? "40%" : "80%"} display="flex" justifyContent="center" sm={{width: "100%"}}>
            <TextField id="search" label="Type your movie name and press enter to search ..." fullWidth onKeyDown={(e) => search(e)} />
          </Box>


        </Box>
      </Paper>
  );
};

export default Home;
