import React, { useEffect, useState } from 'react';
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

const ListVideos: React.FC<ListVideosProps> = () => {
  const limit = 4;
  let totalVideos = 10;

  const [pageNum, setPageNum] = useState(0);
  const [loadingFlag, setLoadingFlag] = useState(true);
  const [open, setOpen] = useState(false);
  const [dataVideos, setDataVideos] = useState<IData[]>([]);
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

  useEffect(() => {
    const fetchData = async () => {
      const tempListVideos: IData[] = [
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
        {
          video_id: 'Video 3',
          title: 'Video 3',
          description: 'PEPEX DIAMANTE FLEX III POR FIN SE CUMPLIO ',
        },
        {
          video_id: 'Video 4',
          title: 'Video 4',
          description: 'PEPEX DIAMANTE FLEX III POR FIN SE CUMPLIO ',
        },
        {
          video_id: 'Video 5',
          title: 'Video 5',
          description: 'PEPEX DIAMANTE FLEX III POR FIN SE CUMPLIO ',
        },
        {
          video_id: 'Video 6',
          title: 'Video 6',
          description: 'PEPEX DIAMANTE FLEX III POR FIN SE CUMPLIO ',
        },
        {
          video_id: 'Video 7',
          title: 'Video 7',
          description: 'PEPEX DIAMANTE FLEX III POR FIN SE CUMPLIO ',
        },
        {
          video_id: 'Video 8',
          title: 'Video 8',
          description: 'PEPEX DIAMANTE FLEX III POR FIN SE CUMPLIO ',
        },
        {
          video_id: 'Video 9',
          title: 'Video 9',
          description: 'PEPEX DIAMANTE FLEX III POR FIN SE CUMPLIO ',
        },
        {
          video_id: 'Video 10',
          title: 'Video 10',
          description: 'PEPEX DIAMANTE FLEX III POR FIN SE CUMPLIO ',
        },
      ];
      const skip = pageNum * limit;
      const sliceData = tempListVideos.slice(skip, skip + limit);
      setDataVideos(sliceData);
      setLoadingFlag(false);
    };
    fetchData();
  }, [pageNum]);

  return (
    <div css={ViewStyle}>
      <div css={ListStyle}>
        {loadingFlag ? (
          <CircularProgress />
        ) : (
          dataVideos.map((element) => (
            <div key={element.video_id}>
              <img
                src="https://i.redd.it/rn3wqkxoic961.jpg"
                alt="new"
                width="300"
                height="200"
              />
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
        {pageNum < Math.floor(totalVideos / limit) && (
          <Button id="next" onClick={() => changePageNum(1)}>
            Next
          </Button>
        )}
      </div>
    </div>
  );
};

export default ListVideos;
