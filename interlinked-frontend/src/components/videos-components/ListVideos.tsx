import React, { useEffect, useState } from 'react';
/** @jsxImportSource @emotion/react */ import { css } from '@emotion/react';
import { Button, CircularProgress } from '@mui/material';
import MultimediaModal from './MultimediaModal';
import { getVideosByCategory } from '../../firebase/firebaseFirestore';

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

const blockValues = css({
  width: '80%',
});

interface ListVideosProps {
  categorySearch: string;
}

const ListVideos: React.FC<ListVideosProps> = ({ categorySearch }) => {
  const limit = 6;
  const [pageNum, setPageNum] = useState(0);
  const [totalVideos, setTotalVideos] = useState(0);
  const [loadingFlag, setLoadingFlag] = useState(true);
  const [open, setOpen] = useState(false);
  const [dataVideos, setDataVideos] = useState<Video[]>([]);
  const [videoElement, setVideoElement] = useState<VideoData>({
    category: '',
    description: '',
    link: '',
    title: '',
  });

  const getVideoThumbnailLink = (link: string): string => {
    const regEx =
      '^(?:https?:)?//[^/]*(?:youtube(?:-nocookie)?.com|youtu.be).*[=/]([-\\w]{11})(?:\\?|=|&|$)';
    const youtubeID = link.match(regEx);
    if (youtubeID) {
      const thumLink =
        'https://img.youtube.com/vi/' + youtubeID[1] + '/hqdefault.jpg';
      return thumLink;
    }
    return '';
  };

  const changePageNum = (offset: number) => {
    setPageNum(pageNum + offset);
    setLoadingFlag(true);
  };

  const handleOpen = (elementData: VideoData) => {
    setOpen(true);
    setVideoElement(elementData);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    setPageNum(0);
  }, [categorySearch]);

  useEffect(() => {
    const fetchData = async () => {
      const listVideos: Video[] = await getVideosByCategory(categorySearch);
      const skip = pageNum * limit;
      const sliceData = listVideos.slice(skip, skip + limit);
      setDataVideos(sliceData);
      setTotalVideos(sliceData.length);
      setLoadingFlag(false);
    };
    fetchData();
  }, [categorySearch, pageNum]);

  return (
    <div css={ViewStyle}>
      <div css={ListStyle}>
        {loadingFlag ? (
          <CircularProgress />
        ) : (
          dataVideos.map((element) => (
            <div key={element.videoID}>
              <img
                src={getVideoThumbnailLink(element.link)}
                alt="new"
                width="300"
                height="200"
              />
              <div css={blockValues}>
                <h1> {element.title} </h1>
                <p> {element.description}</p>
                <Button
                  id={element.videoID}
                  onClick={() => handleOpen(element)}
                >
                  Ver video
                </Button>
              </div>
            </div>
          ))
        )}
        <MultimediaModal
          videoInfo={videoElement}
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
