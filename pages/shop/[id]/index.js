import { useContext, useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import CloseIcon from "@material-ui/icons/Close";
import Snackbar from "@material-ui/core/Snackbar";
import SnackbarContent from "@material-ui/core/SnackbarContent";
import Link from "next/link";
import ItemStyles from "../../../styles/ItemStyles";
import { ShopContext } from "../../../contexts/ShopContext";

const useStyles = makeStyles(ItemStyles);
const stockLeft = 50;

const Item = ({ id }) => {
    const classes = useStyles();
    const { items, quantity, addToCart, updateQuantity } = useContext(
        ShopContext
    );
    const [isQtyValid, setIsQtyValid] = useState(true);
    const [isAdded, setIsAdded] = useState(false);

    const item = items.filter(el => el.id === Number(id))[0];

    const handleAddToCart = (imgSrc, name, id, price, quantity) => {
        if (quantity > 0) {
            setIsQtyValid(true);
            addToCart({ imgSrc, name, id, price, quantity });
            setIsAdded(true);
        } else {
            setIsQtyValid(false);
        }
    };

    const handleInc = evt => {
        evt.preventDefault();
        if (quantity >= 0 && quantity < stockLeft) {
            updateQuantity(quantity + 1);
        }
    };

    const handleDec = evt => {
        evt.preventDefault();
        if (quantity > 1 && quantity <= stockLeft) {
            updateQuantity(quantity - 1);
        }
    };

    const handleInputChange = evt => {
        if (Number(evt.target.value) > stockLeft) {
            updateQuantity(stockLeft);
        } else {
            updateQuantity(Number(evt.target.value));
        }
    };

    const checkQuantity = () => {
        if (quantity && quantity > 0) {
            return quantity;
        } else {
            return "";
        }
    };

    const handleIsAddedClose = () => {
        setIsAdded(false);
    };

    const renderIsAdded = (
        <div>
            <Snackbar
                anchorOrigin={{
                    vertical: "top",
                    horizontal: "center"
                }}
                open={isAdded}
                onClose={handleIsAddedClose}
                ContentProps={{
                    "aria-describedby": "message-id"
                }}
                autoHideDuration={2000}
            >
                <SnackbarContent
                    className={classes.snackBar}
                    message={<span id="message-id">Added to cart!</span>}
                    action={
                        <IconButton
                            key="close"
                            aria-label="close"
                            color="inherit"
                            onClick={handleIsAddedClose}
                        >
                            <CloseIcon />
                        </IconButton>
                    }
                />
            </Snackbar>
        </div>
    );

    return (
        <Container maxWidth="md">
            <Card className={classes.card}>
                <div className={classes.mediaArea}>
                    <CardMedia
                        className={classes.media}
                        image={item.imgSrc}
                        title={item.name}
                        component="img"
                    />
                </div>
                <div className={classes.details}>
                    <CardContent className={classes.content}>
                        <div className={classes.nameArea}>
                            <Typography className={classes.name} variant="h3">
                                {item.name}
                            </Typography>
                            <Typography
                                variant="body2"
                                color="textSecondary"
                                component="p"
                                className={classes.desc}
                            >
                                {item.desc}
                            </Typography>
                        </div>
                        <div className={classes.priceArea}>
                            <Typography
                                variant="h6"
                                className={classes.price}
                            >{`$ ${item.price}`}</Typography>
                        </div>
                    </CardContent>
                    <div className={classes.quantityArea}>
                        <TextField
                            id="item-quantity"
                            label="Quantity"
                            value={checkQuantity()}
                            type="number"
                            className={classes.quantity}
                            InputLabelProps={{
                                shrink: true
                            }}
                            inputProps={{
                                className: classes.input
                            }}
                            margin="normal"
                            variant="outlined"
                            onChange={handleInputChange}
                        />
                        <div className={classes.incrementer}>
                            <IconButton
                                className={classes.incBtn}
                                aria-label="add quantity"
                                onClick={handleInc}
                            >
                                <AddIcon fontSize="small" />
                            </IconButton>
                            <IconButton
                                className={classes.incBtn}
                                aria-label="reduce quantity"
                                onClick={handleDec}
                            >
                                <RemoveIcon fontSize="small" />
                            </IconButton>
                        </div>
                    </div>

                    {!isQtyValid && (
                        <Typography
                            color="error"
                            variant="overline"
                            component="p"
                        >
                            Please enter valid number
                        </Typography>
                    )}

                    <div className={classes.controlArea}>
                        <Button
                            variant="outlined"
                            className={classes.cartBtn}
                            onClick={() => {
                                handleAddToCart(
                                    item.imgSrc,
                                    item.name,
                                    item.id,
                                    item.price,
                                    quantity
                                );
                            }}
                        >
                            Add To Cart
                        </Button>
                        <Link href="/checkout">
                            <Button
                                color="secondary"
                                variant="contained"
                                className={classes.buyBtn}
                                onClick={() => {
                                    handleAddToCart(
                                        item.imgSrc,
                                        item.name,
                                        item.id,
                                        item.price,
                                        quantity
                                    );
                                }}
                            >
                                Buy Now
                            </Button>
                        </Link>
                    </div>
                </div>
            </Card>
            {renderIsAdded}
        </Container>
    );
};

Item.getInitialProps = ({ query }) => {
    return query;
};

export default Item;
