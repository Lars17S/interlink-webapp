import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */ import { css } from '@emotion/react';
import { Button, CircularProgress } from '@mui/material';
import MultimediaModal from './MultimediaModal';

const ViewStyle = css({
  padding: '2rem',
});

const ListStyle = css({
  width: '100%',
  minHeight: 'calc(100vh - 96px)',
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  alignContent: 'center',
});

const ButtonDivStyle = css({
  display: 'flex',
  width: '45%',
  margin: 'auto',
  justifyContent: 'space-around',
  padding: '1rem',
});

interface IData {
  video_id: string;
  title: string;
  description: string;
}

interface ListVideosProps {}

const ListVideos: React.FC<ListVideosProps> = ({}) => {
  const [pageNum, setPageNum] = useState(0);
  const [loadingFlag, setLoadingFlag] = useState(false);
  const [open, setOpen] = useState(false);
  const [dataVideos, setDataVideos] = useState<IData[]>([
    {
      video_id: 'Video 1',
      title: 'Video 1',
      description: 'PONCEPIX CARREANDO NO LO VAS A CREER (tERMINA MAL)',
    },
    {
      video_id: 'Video 2',
      title: 'Video 2',
      description: 'PEPEX DIAMANTE FLEX III POR FIN SE CUMPLIO ',
    },
  ]);
  const [videoElement, setVideoElement] = useState<IData>({
    video_id: '',
    title: '',
    description: '',
  });

  const changePageNum = (offset: number) => {
    setPageNum(pageNum + offset);
    setLoadingFlag(true);
  };

  const handleOpen = (elementData: IData) => {
    setOpen(true);
    setVideoElement(elementData);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div css={ViewStyle}>
      <div css={ListStyle}>
        {loadingFlag ? (
          <CircularProgress />
        ) : (
          dataVideos.map((element) => (
            <div>
              <h1> {element.title} </h1>
              <p> {element.description}</p>
              <Button id={element.video_id} onClick={() => handleOpen(element)}>
                Ver video
              </Button>
            </div>
          ))
        )}
        <MultimediaModal
          data={videoElement}
          open={open}
          handleClose={handleClose}
        />
      </div>
      <div css={ButtonDivStyle}>
        {pageNum !== 0 && (
          <Button id="previous" onClick={() => changePageNum(-1)}>
            Previous
          </Button>
        )}

        <Button id="next" onClick={() => changePageNum(1)}>
          Next
        </Button>
      </div>
    </div>
  );
};

export default ListVideos;
