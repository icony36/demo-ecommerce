import { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import Typography from "@material-ui/core/Typography";
import Link from "next/link";
import FeaturedBlogStyles from "../../styles/components/home/FeaturedBlogStyles";
import { BlogContext } from "../../contexts/BlogContext";

const useStyles = makeStyles(FeaturedBlogStyles);

const FeaturedBlog = () => {
    const classes = useStyles();
    const posts = useContext(BlogContext);
    const featuredPosts = posts.filter((el, i) => i < 4);
    featuredPosts.forEach((el, i) => (i === 0 || i === 3 ? (el.col = 2) : el));

    return (
        <section className={classes.root}>
            <Container maxWidth="lg">
                <Typography className={classes.title} variant="h3">
                    Featured Blog
                </Typography>
                <div className={classes.gridArea}>
                    <GridList cellHeight={250} cols={3}>
                        {featuredPosts.map(el => (
                            <GridListTile key={el.image} cols={el.col || 1}>
                                <Link href={`/blog/[id]`} as={`/blog/${el.id}`}>
                                    <div className={classes.gridItem}>
                                        <img
                                            className={classes.img}
                                            src={el.image}
                                            alt={el.title}
                                        />
                                        <GridListTileBar
                                            title={el.title}
                                            className={classes.blogTitle}
                                        />
                                    </div>
                                </Link>
                            </GridListTile>
                        ))}
                    </GridList>
                </div>
            </Container>
        </section>
    );
};

export default FeaturedBlog;
