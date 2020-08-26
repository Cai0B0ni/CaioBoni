import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: 'rgb(255,255,255,0.9)'
  },
  media: {
    height: 0,
    maxHeight: "200px",
    paddingTop: '10.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function RecipeReviewCard(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [liked, setLike] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const { blog } = props
  console.log(blog)
  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            C
          </Avatar>
        }

        title={blog.name}
        subheader={blog.date}
      />
      <CardMedia
        className={classes.media}
        image={blog.imgSrc}
        title=""
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {blog.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton onClick={() => (setLike(!liked))} aria-label="add to favorites">
          <FavoriteIcon style={liked ? { color: 'red' } : {}} />
        </IconButton>
        <IconButton aria-label="share">
          {/* <ShareIcon /> */}
        </IconButton>

        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <Typography component='h6' className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,})}
          >
            {expanded ? "Show Less" : "Show more"}
          </Typography>
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Summary:</Typography>
          <div dangerouslySetInnerHTML={{ __html: blog.content }} />
          <Typography paragraph>
            
          </Typography>
          <Typography paragraph>
            
          </Typography>
          <Typography paragraph>
            
          </Typography>
          <Typography>
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}