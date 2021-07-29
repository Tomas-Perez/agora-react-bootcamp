import {Card, CardActionArea, CardContent, Typography, Button, CardActions} from '@material-ui/core';


import { Component } from "react";

class Post extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Card>
        <CardActionArea>
          {/* <CardMedia
            component="img"
            alt="Contemplative Reptile"
            height="140"
            image="/static/images/cards/contemplative-reptile.jpg"
            title="Contemplative Reptile"
          /> */}
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