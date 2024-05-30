import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'

const MovieCard = ({image,title,head}) => {

  if (image === undefined || image === "" || image === "N/A")
      image = "https://as2.ftcdn.net/v2/jpg/02/12/52/91/1000_F_212529193_YRhcQCaJB9ugv5dFzqK25Uo9Ivm7B9Ca.jpg"
  return (
    <Card sx={{width: 345,
      margin: '15px'
    }}>
      <CardMedia
        sx={{
          height: 340
        }}
        image={image}
        title={title}
        />
        <CardContent>
          <Typography gutterBottom variant='h6' component='div'>
            {head}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size='small'> Add to Playlist </Button>
        </CardActions>
    </Card>
  )
}

export default MovieCard