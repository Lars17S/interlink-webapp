import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import UploadIcon from "@mui/icons-material/Upload";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import MenuItem from "@mui/material/MenuItem";
import { createDoc } from "../../firebase/firebaseFirestore";

const theme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#000000",
      paper: "#121212",
    },
  },
});

const categories = [
  {
    value: "Shooters",
    label: "Shooters",
  },
  {
    value: "MOBA",
    label: "MOBA",
  },
  {
    value: "RPG",
    label: "RPG",
  },
  {
    value: "Sports",
    label: "Sports",
  },
];

const ManagementView: React.FC = () => {
  const [category, setCategory] = React.useState("Shooters");
  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");
  const [description, setDescription] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCategory(event.target.value);
  };

  const uploadVideo = (event: React.FormEvent) => {
    event.preventDefault();
    createDoc(category, description, link, title).then((result) => {
      if (result.state === "success") console.log("epic!");
      else console.log(result.error);
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <UploadIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Publicar video
          </Typography>
          <TextField
            margin="normal"
            fullWidth
            required
            id="title"
            label="Título"
            name="title"
            autoFocus
            value={title}
            onChange={(event) => {
              setTitle(event.target.value);
            }}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="link"
            label="Link"
            id="link"
            value={link}
            onChange={(event) => {
              setLink(event.target.value);
            }}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="Description"
            label="Descripción"
            id="Description"
            multiline
            maxRows={4}
            value={description}
            onChange={(event) => {
              setDescription(event.target.value);
            }}
          />
          <TextField
            id="outlined-select-Category"
            select
            fullWidth
            label="Categoría"
            sx={{ mt: 3, mb: 2 }}
            value={category}
            onChange={handleChange}
          >
            {categories.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            onClick={uploadVideo}
            sx={{ mt: 3, mb: 2 }}
          >
            Subir
          </Button>
          <Button
            type="submit"
            fullWidth
            color="error"
            variant="contained"
            sx={{ mt: 0, mb: 2 }}
          >
            Cancelar
          </Button>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default ManagementView;
