import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

const ManagementView: React.FC = () => {
  return (
    <div>
      <h1>Publicar nuevo video</h1>
      <form>
        <Stack spacing={1} sx={{ width: 300 }}>
          <TextField id="outlined-title-input" label="Titulo" />
          <TextField id="outlined-link-input" label="Link" />
          <TextField  id="outlined-multiline"
          label="Descripción"
          multiline
          rows={5}/>
          <Button variant="contained" disableElevation>
            Publicar video
          </Button>
          <Button variant="contained" color="error">
            Cancelar
          </Button>
        </Stack>
      </form>
    </div>
  );
};

export default ManagementView;
