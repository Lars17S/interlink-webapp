import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */ import { css } from '@emotion/react';
import FilterTitle from '../../components/videos-components/FilterTitle';
import ListVideos from '../../components/videos-components/ListVideos';

const pageStyle = css({
  backgroundColor: 'black',
  color: 'white',
});

const VideosView: React.FC = () => {
  const [categorySearch, setCategorySearch] = useState('Shooters');
  return (
    <div css={pageStyle}>
      <FilterTitle
        categorySearch={categorySearch}
        setCategorySearch={setCategorySearch}
      />
      <ListVideos categorySearch={categorySearch} />
    </div>
  );
};

export default VideosView;
