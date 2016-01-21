import React from 'react';
import {Grid, Row} from 'react-flexbox-grid/lib';

import Box from '../box';

const Home = () => (
  <Grid fluid>
    <Row>
      <Box type="row" xs={12} sm={3} md={2} lg={1} />
      <Box type="row" xs={6} sm={6} md={8} lg={10} />
      <Box type="row" xs={6} sm={3} md={2} lg={1} />
    </Row>
    <Row>
      <Box type="row" xs={12} sm={3} md={2} lg={1} />
      <Box type="row" xs={12} sm={9} md={10} lg={11} />
    </Row>
    <Row>
      <Box type="row" xs={10} sm={6} md={8} lg={10} />
      <Box type="row" xs={2} sm={6} md={4} lg={2} />
    </Row>
  </Grid>
);

export default Home;
