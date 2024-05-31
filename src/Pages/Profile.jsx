import { Box, Paper, TextField, useMediaQuery } from "@mui/material";
import React, { useEffect, useState } from "react";
import ListHolder from "../Components/List";
import { useNavigate } from "react-router-dom";

const Profile = ({ user }) => {
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const [list, setList] = useState([])
  const navigate = useNavigate()

  const toList = (listId) => {
    navigate(`/watchlist/${listId}`)
  }

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
          data.result && setList(data.result)
        }
      } catch (e) {
        console.log(e);
      }
    };
    getData();
  }, [user]);

  const addList = async (listName) => {
    try {
      const resp = await fetch(
        `http://localhost:3001/api/v1/watchlist/create?name=${listName}`,
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
      if (resp.ok) {
        const data = await resp.json();
        data.result && setList(data.result)
      }
    } catch (e) {
      console.log(e);
    }
  };

  const search = (e) => {
    if (e.key === "Enter") {

      addList(e.target.value)
      e.target.value = ""
    }
  }

  const changeisPublic = async (id, method) => {
    console.log('changing', id);
    try {
     const resp = await fetch(
        `http://localhost:3001/api/v1/watchlist/${id}`, {
          method: method,
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
     ) 
     if(resp.ok) {
        const data = await resp.json()
        data.result && setList(data.result)
     }
    } catch (error) {
     console.log(error); 
    }
  }

  return (
    <>
      <Paper>
        <Box
          height="100vh"
          width="100vw"
          display="flex"
          alignItems="center"
          paddingTop="50px"
          flexDirection="column"
        >
          <Paper>
            <Box
              padding="15px"
              width="50vw"
              display="flex"
              flexDirection={!isNonMobile ? "column" : "row"}
              gap="95px"
            >
              <TextField fullWidth label="Create new List" onKeyDown={(e) => search(e)} />
            </Box>
          </Paper>
          <br /><br />
          <Paper>
            <Box display='flex' alignItems='center' justifyContent='center' width='60vw'>
            <Box display='flex' flexDirection='column' margin='50px' width='100%' gap='24px' >
              {
                list.map(
                  (item) => <ListHolder key = {item.id} name={item.name} isPublic = {item.isPublic} changeisPublic = {(e) => changeisPublic(e,"PUT")} id={item._id} deleteList = {(e) => changeisPublic(e,"DELETE")} onClick = {(id) => toList(id) }  />
                )
              }
            </Box>
            </Box>
          </Paper>
        </Box>
      </Paper>
    </>
  );
};

export default Profile;
