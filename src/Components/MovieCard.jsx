import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import React from "react";

const MovieCard = ({ image, title, head, movieList }) => {
  if (image === undefined || image === "" || image === "N/A")
    image =
      "https://as2.ftcdn.net/v2/jpg/02/12/52/91/1000_F_212529193_YRhcQCaJB9ugv5dFzqK25Uo9Ivm7B9Ca.jpg";
  return (
    <Card sx={{ width: 345, margin: "15px" }}>
      <CardMedia
        sx={{
          height: 340,
        }}
        image={image}
        title={title}
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {head}
        </Typography>
      </CardContent>
      <CardActions>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          flexDirection="row"
          width="100%"
        >
          <Select fullWidth >
            {movieList.map((item) => (
              <MenuItem value={item}>{item}</MenuItem>
            ))}
          </Select>
          <Button size="small"> Add to Playlist </Button>
        </Box>
      </CardActions>
    </Card>
  );
};

export default MovieCard;
