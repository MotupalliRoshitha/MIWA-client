import { Box, Paper, TextField, useMediaQuery } from "@mui/material";
import React, { useState } from "react";
import MovieCard from "../Components/MovieCard";

const Home = () => {

  const [searchItems, setFirst] = useState([])

  const getResults = async (search) => {
    try {
    const resp = await fetch(`${process.env.REACT_APP_OMDB_URL}&s=${search}`)
    if (resp.ok ) {
      const rest = await resp.json()
      if (rest.Response === 'False')
        return
      console.log(rest);
      setFirst(rest.Search)
    }
    } catch (e) {
      console.log(e)
    }
  }

  const search = (e) => {
    if (e.key === "Enter")
      getResults(e.target.value)
  }

  const isNonMobile = useMediaQuery('(min-width:600px)')


  return (
      <Paper>
        <Box height="100vh" width="100vw" display="flex" alignItems="center"  flexDirection="column" paddingTop="125px" >
          <Box  width={isNonMobile ? "40%" : "80%"} display="flex" justifyContent="center" sm={{width: "100%"}}>
            <TextField id="search" label="Type your movie name and press enter to search ..." fullWidth onKeyDown={(e) => search(e)} />
          </Box>
          <Paper>
          <Box
            display='flex'
            flexDirection={!isNonMobile ? 'column' : 'row'}
            flexWrap='wrap' 
            alignItems='flex-start'
            justifyContent='space-around'
            padding="60px"
          >
            {
              searchItems.map(
                (item) => {
                  return <MovieCard image={item.Poster} title={item.imdbID} head={item.Title} id={item.imdbID} />
                }
              )
            }
          </Box>

          </Paper>
        </Box>
      </Paper>
  );
};

export default Home;
