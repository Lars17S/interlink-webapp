import React from 'react';
/** @jsxImportSource @emotion/react */ import { css } from '@emotion/react';
import FilterTitle from '../../components/videos-components/FilterTitle';

const pageStyle = css({
  backgroundColor: 'black',
  color: 'white',
});

const VideosView: React.FC = () => {
  return (
    <div css={pageStyle}>
      <FilterTitle />
    </div>
  );
};

export default VideosView;
