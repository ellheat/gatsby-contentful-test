import React from 'react';
import Typography from '@material-ui/core/Typography';

import useWelcome from './useWelcome';

const Welcome = () => {
  const { allContentfulPage } = useWelcome();
  const data = allContentfulPage.edges[0].node;

  console.log('data', data);

  return (
    <>
      <Typography variant='h1' color='textPrimary'>
        {data.title}
      </Typography>
      <Typography variant='h3' color='textPrimary'>
        {data.description.description}
      </Typography>
    </>
  )
};

export default Welcome;
