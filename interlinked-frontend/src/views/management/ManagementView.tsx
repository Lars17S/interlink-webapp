import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import UploadIcon from "@mui/icons-material/Upload";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import MenuItem from '@mui/material/MenuItem';

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



export default function SignIn() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  const [currency, setCurrency] = React.useState('Shooters');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrency(event.target.value);
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
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              fullWidth
              required
              id="Titulo"
              label="Título"
              name="Titulo"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="Link"
              label="Link"
              id="Link"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="Descripcion"
              label="Descripción"
              id="Descripcion"
              multiline
              maxRows={4}
            />
            <TextField
              id="outlined-select-Category"
              select
              fullWidth
              label="Categoría"
              sx={{ mt: 3, mb: 2 }}
              value={currency}
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
        </Box>
      </Container>
    </ThemeProvider>
  );
}
