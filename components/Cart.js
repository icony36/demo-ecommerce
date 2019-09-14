import React, { useContext, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Button from "@material-ui/core/Button";
import Link from "next/link";
import ScrollBar from "../components/ScrollBar";
import { ShopContext } from "../contexts/ShopContext";

const styles = theme => ({
    popper: {
        zIndex: 1300,
        '&[x-placement*="bottom"] $arrow': {
            top: 0,
            left: 0,
            marginTop: "-0.9em",
            width: "3em",
            height: "1em",
            "&::before": {
                borderWidth: "0 1em 1em 1em",
                borderColor: `transparent transparent ${theme.palette.common.white} transparent`
            }
        }
    },
    arrow: {
        position: "absolute",
        fontSize: 7,
        width: "3em",
        height: "3em",
        "&::before": {
            content: '""',
            margin: "auto",
            display: "block",
            width: 0,
            height: 0,
            borderStyle: "solid"
        }
    },
    closeBtn: {
        margin: theme.spacing(1),
        textTransform: "uppercase"
    },
    cart: {
        height: "300px",
        width: "500px",
        textAlign: "center"
    },
    menuItem: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        cursor: "text"
    },
    link: {
        display: "flex",
        cursor: "pointer"
    },
    itemContent: {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start"
    },
    img: {
        width: "30%",
        padding: theme.spacing(1)
    },
    price: {
        margin: theme.spacing(1),
        fontWeight: 500
    },
    qty: {
        margin: theme.spacing(1)
    },
    removeBtn: {
        zIndex: 99
    },
    total: {
        display: "flex",
        padding: theme.spacing(1),
        alignItems: "center",
        justifyContent: "space-around"
    },
    totalWord: {
        fontWeight: 500,
        color: "#C52C57",
        textTransform: "uppercase"
    },
    checkoutArea: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    checkoutBtn: {
        backgroundColor: "PaleVioletRed",
        margin: theme.spacing(2)
    }
});

const useStyles = makeStyles(styles);

const Cart = props => {
    const classes = useStyles();
    const [arrowRef, useArrowRef] = useState(null);
    const { cart, totalItems, totalAmounts, removeFromCart } = useContext(
        ShopContext
    );

    const handleArrowRef = node => {
        useArrowRef(node);
    };

    return (
        <Popper
            className={classes.popper}
            anchorEl={props.cartAnchorEl}
            open={props.isCartOpen}
            placement="bottom"
            modifiers={{
                arrow: {
                    enabled: true,
                    element: arrowRef
                }
            }}
        >
            <span className={classes.arrow} ref={handleArrowRef} />
            <ClickAwayListener onClickAway={props.handleCartClick}>
                <Paper>
                    <Button
                        onClick={props.handleCartClick}
                        className={classes.closeBtn}
                    >
                        Close
                    </Button>
                    {cart.length > 0 ? (
                        <div>
                            <div className={classes.cart}>
                                <ScrollBar width="500px" height="300px">
                                    <MenuList>
                                        {cart.map((el, i) => (
                                            <MenuItem
                                                key={i}
                                                className={classes.menuItem}
                                            >
                                                <Link
                                                    href={`/shop/[id]`}
                                                    as={`/shop/${el.id}`}
                                                    key={i}
                                                >
                                                    <div
                                                        className={classes.link}
                                                    >
                                                        <div
                                                            className={
                                                                classes.itemContent
                                                            }
                                                        >
                                                            <img
                                                                className={
                                                                    classes.img
                                                                }
                                                                src={el.imgSrc}
                                                            />
                                                            <Typography
                                                                variant="h6"
                                                                className={
                                                                    classes.word
                                                                }
                                                            >
                                                                {el.name}
                                                            </Typography>
                                                        </div>

                                                        <div>
                                                            <Typography
                                                                variant="body1"
                                                                className={
                                                                    classes.price
                                                                }
                                                            >
                                                                $ {el.price}
                                                            </Typography>
                                                            <Typography
                                                                variant="subtitle2"
                                                                color="textSecondary"
                                                                className={
                                                                    classes.qty
                                                                }
                                                            >
                                                                Qty:{" "}
                                                                {el.quantity}
                                                            </Typography>
                                                        </div>
                                                    </div>
                                                </Link>
                                                <IconButton
                                                    className={
                                                        classes.removeBtn
                                                    }
                                                    key="close"
                                                    aria-label="close"
                                                    color="inherit"
                                                    onClick={() =>
                                                        removeFromCart(el.id)
                                                    }
                                                >
                                                    <CloseIcon />
                                                </IconButton>
                                            </MenuItem>
                                        ))}
                                    </MenuList>
                                </ScrollBar>
                            </div>
                            <div className={classes.total}>
                                <Typography className={classes.totalWord}>
                                    Items in cart: {totalItems}
                                </Typography>
                                <Typography className={classes.totalWord}>
                                    Subtotal: $ {totalAmounts}
                                </Typography>
                            </div>
                        </div>
                    ) : (
                        <div className={classes.cart}>
                            <img src={"/static/images/empty-cart.png"} />
                            <Typography>Cart is empty!</Typography>
                        </div>
                    )}
                    <div className={classes.checkoutArea}>
                        <Link href="/checkout">
                            <Button
                                color="secondary"
                                variant="contained"
                                className={classes.checkoutBtn}
                                onClick={props.handleCartClick}
                                disabled={cart.length > 0 ? false : true}
                            >
                                Proceed to Checkout
                            </Button>
                        </Link>
                    </div>
                </Paper>
            </ClickAwayListener>
        </Popper>
    );
};

export default Cart;
