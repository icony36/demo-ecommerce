import { makeStyles, lighten } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { ShopContext } from "../../contexts/ShopContext";

const styles = theme => ({
    paper: {
        padding: theme.spacing(2),
        marginBottom: theme.spacing(6)
    },
    toolbar: {
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(1),
        color: theme.palette.secondary.main,
        backgroundColor: lighten(theme.palette.secondary.light, 0.85)
    },
    item: {
        display: "flex",
        alignItems: "center"
    },
    img: {
        width: "40%",
        verticalAlign: "center",
        [theme.breakpoints.down("xs")]: {
            display: "none"
        }
    },
    name: {
        marginLeft: theme.spacing(4),
        cursor: "pointer"
    },
    numberCell: {
        width: "20%"
    },
    cardArea: {
        marginTop: theme.spacing(2)
    },
    total: {
        marginTop: theme.spacing(2),
        padding: theme.spacing(1),
        textAlign: "right"
    },
    totalWord: {
        fontWeight: 500,
        color: "#C52C57"
    },
    subtotal: {
        color: "#C52C57"
    }
});

const useStyles = makeStyles(styles);

const tableHead = ["Unit Price", "Quantity", "Total Price"];

const shippingFee = 0;

const Confirm = props => {
    const classes = useStyles();

    const {
        checkoutInput,
        isPaid,
        handleReset,
        selectedItems,
        sumSelectedAmounts
    } = props;

    const subTotal = sumSelectedAmounts();

    return (
        <Paper elevation={0} className={classes.paper}>
            {isPaid ? (
                <Toolbar className={classes.toolbar}>
                    <Typography color="inherit" variant="subtitle1">
                        Thank you for your order! Your invoice has been sent to
                        your email, please check it.
                    </Typography>
                </Toolbar>
            ) : (
                <Typography variant="h5">Confirm Order</Typography>
            )}

            <Table className={classes.table}>
                <TableHead>
                    <TableRow>
                        <TableCell>Items</TableCell>
                        {tableHead.map((el, i) => (
                            <TableCell key={i} align="right">
                                {el}
                            </TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {selectedItems.map((el, i) => (
                        <TableRow key={i}>
                            <TableCell
                                className={classes.itemCell}
                                component="th"
                                scope="row"
                            >
                                <div className={classes.item}>
                                    <img
                                        className={classes.img}
                                        src={el.imgSrc}
                                    />

                                    <Typography className={classes.name}>
                                        {el.name}
                                    </Typography>
                                </div>
                            </TableCell>
                            <TableCell
                                align="right"
                                className={classes.numberCell}
                            >
                                $ {el.price}
                            </TableCell>
                            <TableCell
                                align="right"
                                className={classes.numberCell}
                            >
                                {el.quantity}
                            </TableCell>
                            <TableCell
                                align="right"
                                className={classes.numberCell}
                            >
                                $ {el.price * el.quantity}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>

            <div className={classes.cardArea}>
                <Card className={classes.card} elevation={0}>
                    <CardContent>
                        <Typography variant="h6" component="h2">
                            ShippingAddress
                        </Typography>
                        <Typography variant="body2" component="p">
                            {checkoutInput.name}
                        </Typography>
                        <Typography variant="body2" component="p">
                            {checkoutInput.address}
                        </Typography>
                        <Typography variant="body2" component="p">
                            {checkoutInput.zipcode}
                        </Typography>
                        <Typography variant="body2" component="p">
                            {checkoutInput.city}
                        </Typography>
                        <Typography variant="body2" component="p">
                            {checkoutInput.country}
                        </Typography>
                    </CardContent>
                </Card>

                <Card className={classes.card} elevation={0}>
                    <CardContent>
                        <Typography variant="h6" component="h2">
                            Payment Info
                        </Typography>
                        <Typography variant="body2" component="p">
                            Name on card: {checkoutInput.cardName}
                        </Typography>
                        <Typography variant="body2" component="p">
                            Card type: {checkoutInput.cardType}
                        </Typography>
                        <Typography variant="body2" component="p">
                            Card number (last four digit):{" "}
                            {checkoutInput.cardNum.toString().substr(-4)}
                        </Typography>
                    </CardContent>
                </Card>
            </div>

            <div className={classes.total}>
                <Typography className={classes.subtotal}>
                    Subtotal: $ {subTotal}
                </Typography>
                <Typography className={classes.subtotal}>
                    Shipping Fee: $ {shippingFee}
                </Typography>
                <Typography className={classes.totalWord}>
                    {isPaid ? "TOTAL PAID" : "TOTAL"}: ${" "}
                    {subTotal + shippingFee}
                </Typography>
            </div>
            {isPaid ? <Button onClick={handleReset}>Reset</Button> : null}
        </Paper>
    );
};

export default Confirm;
