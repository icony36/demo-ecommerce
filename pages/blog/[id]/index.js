import { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import PostStyles from "../../../styles/PostStyles";
import { BlogContext } from "../../../contexts/BlogContext";

const useStyles = makeStyles(PostStyles);

const Post = ({ id }) => {
    const posts = useContext(BlogContext);

    const post = posts.filter(el => el.id === Number(id))[0];
    const classes = useStyles();

    return (
        <Container maxWidth="md">
            <Paper className={classes.paper}>
                <Typography variant="h4" className={classes.postTitle}>
                    {post.title}
                </Typography>
                <Typography
                    variant="subtitle1"
                    color="textSecondary"
                    className={classes.postDate}
                >
                    {post.date}
                </Typography>
                <img src={post.image} className={classes.postImage} />
                <Typography variant="subtitle1" className={classes.postContent}>
                    {post.content}
                </Typography>
            </Paper>
        </Container>
    );
};

Post.getInitialProps = ({ query }) => {
    return query;
};

export default Post;
