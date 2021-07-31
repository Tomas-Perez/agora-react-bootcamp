import {Button, Container, CircularProgress, Grid} from '@material-ui/core';
import {Component} from 'react';
import Post from './Post';


class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      posts: [],
    };
  }

  waitABit() {
    return new Promise((resolve) => {
      setTimeout(() => resolve(), 1000);
    });
  }

  async loadItems() {
    this.setState({
      loading: true,
    });
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    await this.waitABit();
    this.setState({
      posts: await response.json(),
      loading: false,
    });
  }

  async addItem() {
    this.setState({
      loading: true,
    });
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({
        title: 'foo',
        body: 'bar',
        userId: 1,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    await this.waitABit();
    const newPost = await response.json();
    this.setState((state) => ({
      posts: [newPost, ...state.posts],
      loading: false,
    }));
  }

  async deleteItem(idx) {
    this.setState({
      loading: true,
    });
    const postId = this.state.posts[idx].id;
    await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
      method: 'DELETE',
    });
    await this.waitABit();
    this.setState((state) => ({
      posts: state.posts.filter((post) => post.id !== postId),
      loading: false,
    }));
  }

  render() {
    return (
      <Container style={{display: "flex", flexDirection: "column"}}>
        <h1>Example app</h1>
        <Container style={{maxWidth: "600px"}}>
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <Button style={{width: "100%"}} variant="contained" color="primary" onClick={() => this.addItem()}>
                Add item
              </Button>
            </Grid>
            <Grid item xs={3}>
              <Button style={{width: "100%"}} variant="contained" color="primary" onClick={() => this.loadItems()}>
                Load items!
              </Button>
            </Grid>
            { 
              this.state.loading? 
                <Grid item xs={12} style={{width: "100%", display: "flex", flexDirection: "column"}}>
                  <CircularProgress style={{alignSelf: "center"}}/> 
                </Grid>
                : null 
            }
            { this.state.posts.map((post, idx) => 
                <Grid key={idx} item xs={12}>
                  <Post post={post} onDelete={() => this.deleteItem(idx)}/>
                </Grid>
              ) 
            }
          </Grid>
        </Container>
      </Container>
    );
  }
}

export default Home;
