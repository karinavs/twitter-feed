import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import axios from 'axios';
class App extends Component {
  state = { tweets: [] }
  componentDidMount() {
    axios.get('/api/tweets')
      .then( res => this.setState({ tweets: res.data }))
      .catch( err => console.log(err))
  }
  render() { 
    return(
      <Grid>
        <Grid.Row>
          <Grid.Column mobile={16} tablet={16} computer={6}>
          </Grid.Column>
          <Grid.Column mobile={16} tablet={16} computer={10}>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}
export default App;


