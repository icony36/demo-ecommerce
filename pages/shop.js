import { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActionArea from "@material-ui/core/CardActionArea";
import Link from "next/link";
import ShopStyles from "../styles/ShopStyles";
import { ShopContext } from "../contexts/ShopContext";

const useStyles = makeStyles(ShopStyles);

const Shop = props => {
    const classes = useStyles();
    const { items } = useContext(ShopContext);

    return (
        <Container maxWidth="md" className={classes.container}>
            <Typography
                vairant="display-1"
                component="h1"
                className={classes.title}
            >
                Macarons
            </Typography>
            <Grid
                container
                spacing={6}
                direction="row"
                alignItems="center"
                justify="center"
            >
                {items.map(el => (
                    <Link href={`/shop/[id]`} as={`/shop/${el.id}`} key={el.id}>
                        <Grid item xs={12} sm={6} md={4}>
                            <Card className={classes.card}>
                                <CardActionArea
                                    className={classes.cardActionArea}
                                >
                                    <div className={classes.mediaArea}>
                                        <CardMedia
                                            className={classes.media}
                                            image={el.imgSrc}
                                            title={el.name}
                                            component="img"
                                        />
                                    </div>

                                    <CardContent className={classes.content}>
                                        <Typography
                                            gutterBottom
                                            variant="h5"
                                            component="h2"
                                            className={classes.itemName}
                                        >
                                            {el.name}
                                        </Typography>
                                        <Typography
                                            variant="subtitle1"
                                            color="textSecondary"
                                            className={classes.itemPrice}
                                        >{`$ ${el.price}`}</Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                    </Link>
                ))}
            </Grid>
        </Container>
    );
};

export default Shop;
