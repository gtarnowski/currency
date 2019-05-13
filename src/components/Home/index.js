import React from 'react'
import { Grid, Header, Icon } from 'semantic-ui-react'

const Home = () => (
  <Grid centered>
    <Header as='h2' icon>
      <Icon name='connectdevelop' size="huge" color="black" />
      Currency App
      <Header.Subheader>Switch between options to convert or compare currencies</Header.Subheader>
    </Header>
  </Grid>
)

export default Home
