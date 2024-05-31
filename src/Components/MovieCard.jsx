import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import React, { useState } from "react";

const MovieCard = ({
  image,
  title,
  head,
  movieList,
  addMovie,
  willDelete = false,
  deleteMovie,
}) => {
  const [list, setList] = useState(null);

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
        {willDelete ? (
          <Box>
            <IconButton onClick={(e) => deleteMovie(title)}>
              <DeleteIcon />
            </IconButton>
          </Box>
        ) : (
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            flexDirection="row"
            width="100%"
          >
            <Select fullWidth onChange={(e) => setList(e.target.value)}>
              {movieList.map((item) => (
                <MenuItem value={item}>{item.name}</MenuItem>
              ))}
            </Select>
            <Button size="small" onClick={(e) => list && addMovie(list._id)}>
              {" "}
              Add to Playlist{" "}
            </Button>
          </Box>
        )}
      </CardActions>
    </Card>
  );
};

export default MovieCard;
