import { Box, Paper, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieCard from "../Components/MovieCard";

const WatchList = ({ user }) => {
  const { listId } = useParams();
  const [nameList, setNameList] = useState({});
  const [fullList, setFullList] = useState([]);
  useEffect(() => {
    const getList = async () => {
      const resp = await fetch(
        `${process.env.REACT_APP_SERVER_URL}/api/v1/watchlist/${listId}`,
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
      if (resp.ok) {
        const data = await resp.json();
        setNameList(data);
      }
    };

    getList();
  }, []);

  useEffect(() => {
    const getFullList = async () => {
      if (!nameList.movies) {
        console.log(nameList);
        return;
      }

      const mFullList = await Promise.all(
        nameList.movies.map(async (item) => {
          const resp = await fetch(
            `${process.env.REACT_APP_OMDB_URL}&i=${item}`
          );
          if (resp.ok) {
            const data = await resp.json();
            return data;
          }
          return null;
        })
      );
      console.log(mFullList);
      setFullList(mFullList)
    };
    getFullList()
  }, [nameList]);

  const deleteMovie = async (listId,movieId) => {
  
    const resp = await fetch(
      `${process.env.REACT_APP_SERVER_URL}/${listId}/${movieId}`, {
        method: "DELETE",
        headers: {
          "Authorization": `Bearer ${user.token}`
        }
      }
    )

    if(resp.ok) {
      const data = await resp.json()
      setNameList(data)
    }

  }

  return (
    <>
      <Paper>
      <Box width="100vw" height="100vh" padding="50px">
        <Box display="flex" width="100%" alignItems="center" justifyContent="center">
          <Typography variant="h4">{nameList.name}</Typography>
        </Box>
        <Box>
          {fullList.length > 0 ? (
            <Box display="flex" flexWrap="wrap" width="100%" gap="15px" alignItems="center" justifyContent="space-evenly">
              {
                fullList.map(
                  (item) => <MovieCard title={item.imdbID} image={item.Poster} head={item.Title} willDelete={true} deleteMovie={(movieId) => deleteMovie(nameList._id,movieId)} />
                )
              }
            </Box>
          ) : (
            <Typography variant="h4">No Movies</Typography>
          )}
        </Box>
      </Box>
      </Paper>
    </>
  );
};

export default WatchList;
