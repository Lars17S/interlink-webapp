import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */ import { css } from '@emotion/react';
import FilterTitle from '../../components/videos-components/FilterTitle';
import ListVideos from '../../components/videos-components/ListVideos';

const breakpoints = [830, 1200, 1500];

const mq = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);

const pageStyle = css({
  backgroundColor: 'black',
  color: 'white',
  
});
const titleStyle = css({
  fontSize: '2.3em',
  [mq[0]]: {
    //responsive smallest
    fontSize: '1.5em',
  },
  [mq[1]]: {
    //responsive middle size
  },
});

const VideosView: React.FC = () => {
  const [categorySearch, setCategorySearch] = useState('Shooters');
  return (
    <div css={pageStyle}>
      <div css={titleStyle}>
      <FilterTitle
        categorySearch={categorySearch}
        setCategorySearch={setCategorySearch}
      />
      </div>
      <ListVideos categorySearch={categorySearch} />
    </div>
  );
};

export default VideosView;
