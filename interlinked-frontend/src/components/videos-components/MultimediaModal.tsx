import React from 'react';
import { Box, Button, Modal, Typography } from '@mui/material';

const style = {
  '@keyframes appear': {
    '0%': {
      opacity: '0%',
    },
    '100%': {
      opacity: '100%',
    },
  },

  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90vw',
  height: '80vh',
  margin: '10vh auto',
  bgcolor: 'background.black',
  border: '2px solid #000',
  boxShadow: 24,
  color: 'white',
  p: 4,
  animation: '0.25s ease-out 0s 1 appear',
};

interface MultimediaModalProps {
  data: {
    video_id: string;
    title: string;
    description: string;
  };
  open: boolean;
  handleClose: () => void;
}

const MultimediaModal: React.FC<MultimediaModalProps> = ({
  data,
  open,
  handleClose,
}) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <div>
        <Box sx={style}>
          <iframe
            width="853"
            height="480"
            src={`https://www.youtube.com/embed/KYxsNJYgrgI`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
          />
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {data.title}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {data.description}
          </Typography>
          <Button id="close" onClick={() => handleClose()}>
            Close
          </Button>
        </Box>
      </div>
    </Modal>
  );
};

export default MultimediaModal;
