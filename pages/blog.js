import { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import BlogStyles from "../styles/BlogStyles";
import Link from "next/link";
import { BlogContext } from "../contexts/BlogContext";

const useStyles = makeStyles(BlogStyles);

const Blog = () => {
    const classes = useStyles();
    const posts = useContext(BlogContext);

    return (
        <Container maxWidth="sm" className={classes.container}>
            <Typography
                vairant="display-1"
                component="h1"
                className={classes.title}
            >
                Blog
            </Typography>
            <Grid container spacing={6} direction="row" alignItems="center">
                {posts.map(el => (
                    <Grid item key={el.id} className={classes.post}>
                        <Link href={`/blog/[id]`} as={`/blog/${el.id}`}>
                            <Typography
                                variant="h4"
                                className={classes.postTitle}
                            >
                                {el.title}
                            </Typography>
                        </Link>
                        <Typography
                            variant="subtitle1"
                            color="textSecondary"
                            className={classes.postDate}
                        >
                            {el.date}
                        </Typography>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default Blog;
