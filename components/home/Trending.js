import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Link from "next/link";
import TrendingStyles from "../../styles/components/home/TrendingStyles";

const useStyles = makeStyles(TrendingStyles);

const Trending = ({ items }) => {
    const classes = useStyles();
    const trendingItems = items.filter((el, i) => i < 3);

    return (
        <section className={classes.trending}>
            <Container maxWidth="lg">
                <Typography className={classes.title} variant="h3">
                    Trending Now
                </Typography>
                <Grid
                    container
                    spacing={10}
                    direction="row"
                    alignItems="flex-start"
                    justify="space-around"
                >
                    {trendingItems.map(el => (
                        <Grid
                            item
                            xs={4}
                            md={3}
                            key={el.id}
                            className={classes.item}
                        >
                            <Link href={`/shop/[id]`} as={`/shop/${el.id}`}>
                                <img className={classes.img} src={el.imgSrc} />
                            </Link>

                            <Typography gutterBottom variant="body1">
                                {el.name}
                            </Typography>
                            <Typography
                                variant="subtitle1"
                                color="textSecondary"
                            >{`$ ${el.price}`}</Typography>
                        </Grid>
                    ))}
                </Grid>
                <Link href="/shop">
                    <Button
                        variant="outlined"
                        className={classes.btn}
                        size="large"
                    >
                        SEE MORE
                    </Button>
                </Link>
            </Container>
        </section>
    );
};

export default Trending;
