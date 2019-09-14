import { makeStyles } from "@material-ui/core/styles";
import Breakpoint from "react-socks";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Link from "next/link";
import Button from "@material-ui/core/Button";
import FavouriteStyles from "../../styles/components/home/FavouriteStyles";

const useStyles = makeStyles(FavouriteStyles);

const Favourite = ({ items }) => {
    const classes = useStyles();
    const showItems = items.filter((el, i) => i < 8);

    return (
        <Breakpoint medium up>
            <section className={classes.favourite}>
                <Container maxWidth="lg">
                    <Grid container justify="space-around">
                        <Grid item>
                            <Typography className={classes.title} variant="h4">
                                Pick your
                                <Typography
                                    className={classes.title2}
                                    variant="h2"
                                    component="p"
                                >
                                    Favourite
                                </Typography>
                            </Typography>
                        </Grid>
                        <Grid
                            item
                            container
                            spacing={8}
                            direction="row"
                            alignItems="flex-start"
                            justify="center"
                            className={classes.items}
                        >
                            {showItems.map(el => (
                                <Grid
                                    item
                                    xs={3}
                                    key={el.id}
                                    className={classes.item}
                                >
                                    <Link
                                        href={`/shop/[id]`}
                                        as={`/shop/${el.id}`}
                                        key={el.id}
                                    >
                                        <img
                                            className={classes.img}
                                            src={el.imgSrc}
                                        />
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
        </Breakpoint>
    );
};

export default Favourite;
