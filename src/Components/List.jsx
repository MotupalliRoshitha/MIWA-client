import { Box, IconButton, Paper, Switch, Typography } from '@mui/material'
import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';

const ListHolder = ({id,name, isPublic, changeisPublic, deleteList}) => {
  return (
  <Paper elevation={3}> 
    <Box display='flex' padding='15px' flexDirection='row' alignItems='center' justifyContent='space-between' >
      <Typography variant='h6'>{name}</Typography>
      <Switch  onClick={(e) => changeisPublic(id)} defaultChecked ={isPublic} />
      <IconButton onClick={(e) => deleteList(id)}>
        <DeleteIcon color='danger'/>
      </IconButton>
    </Box>
  </Paper>
  )
}

export default ListHolder