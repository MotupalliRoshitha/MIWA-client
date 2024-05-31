import { Box, Paper, TextField, useMediaQuery } from "@mui/material";
import React, { useEffect, useState } from "react";
import MovieCard from "../Components/MovieCard";

const Home = ({user}) => {

  const [searchItems, setFirst] = useState([])
  const [list, setList] = useState([])
  
  useEffect(() => {
    const getData = async () => {
      try {
        const resp = await fetch("http://localhost:3001/api/v1/watchlist", {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        });
        if (resp.ok) {
          const data = await resp.json();
          data.result && setList(data.result )
        }
      } catch (e) {
        console.log(e);
      }
    };
    getData();
  }, [user]);


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

  const addMovie = async (listId,movieId) => {
    if (listId === null) return

    try {
      const resp = await fetch(
        `http://localhost:3001/api/v1/watchlist/${listId}/${movieId}`, {
           headers: {
            Authorization: `Bearer ${user.token}`,
          },
          method: "PUT"
       }
      )
      if (resp.ok) {
        alert('movie added to playlist')
      }
    } catch (e) {
      console.log(e);
    }

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
                  return <MovieCard image={item.Poster} key={item.imdbID} title={item.imdbID} head={item.Title} id={item.imdbID} movieList = {list} addMovie= {(listId) => addMovie(listId,item.imdbID)} />
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
