import {Card, CardActionArea, CardContent, Typography, Button, CardActions} from '@material-ui/core';


import { Component } from "react";

class Post extends Component {

  render() {
    return (
      <Card>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {this.props.post.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {this.props.post.body}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary" onClick={() => this.props.onDelete()}>
            Delete
          </Button>
        </CardActions>
      </Card>
    );
  }
}

export default Post;