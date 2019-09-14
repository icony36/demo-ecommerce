import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";

const styles = theme => ({
    paper: {
        padding: theme.spacing(1),
        marginBottom: theme.spacing(6)
    },
    title: {
        marginBottom: theme.spacing(4)
    },
    input: {
        "& label": {
            color: "PaleVioletRed"
        },
        "& label.Mui-focused": {
            color: "#C52C57  "
        },
        "&:hover label": {
            color: "#C52C57 "
        },
        "& .MuiOutlinedInput-root": {
            "& fieldset": {
                borderColor: "PaleVioletRed "
            },
            "&:hover fieldset": {
                borderColor: "#C52C57 "
            },
            "&.Mui-focused fieldset": {
                borderColor: "#C52C57  "
            }
        },
        marginBottom: theme.spacing(4)
    },
    num: {
        "&::-webkit-outer-spin-button, &::-webkit-inner-spin-button": {
            "-webkit-appearance": "none",
            "-moz-appearance": "none",
            margin: 0
        },
        "&[type=number]": {
            "-webkit-appearance": "textfield",
            "-moz-appearance": "textfield"
        }
    }
});

const useStyles = makeStyles(styles);

const cardTypes = [
    {
        label: "Visa"
    },
    {
        label: "Master"
    },
    {
        label: "American Express"
    }
];

const Payment = props => {
    const { checkoutInput, setCheckoutInput, handleCardInput } = props;

    const classes = useStyles();

    return (
        <Paper elevation={0} className={classes.paper}>
            <Typography variant="h5" className={classes.title}>
                Card Info
            </Typography>
            <Grid
                container
                spacing={6}
                direction="row"
                alignItems="flex-start"
                justify="space-between"
                className={classes.grid}
            >
                <Grid
                    container
                    item
                    xs={4}
                    direction="column"
                    alignItems="stretch"
                    justify="center"
                    className={classes.gridItem}
                >
                    <Grid item xs={12}>
                        <TextField
                            required
                            name="cardType"
                            id="payment-card-type"
                            label="Card Type"
                            className={classes.input}
                            variant="outlined"
                            InputLabelProps={{
                                shrink: true
                            }}
                            select
                            SelectProps={{
                                MenuProps: {
                                    className: classes.menu
                                }
                            }}
                            value={checkoutInput.cardType}
                            fullWidth
                            onChange={setCheckoutInput}
                        >
                            {cardTypes.map(option => (
                                <MenuItem
                                    key={option.label}
                                    value={option.label}
                                >
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            required
                            name="cardName"
                            id="payment-card-name"
                            label="Name On Card"
                            className={classes.input}
                            variant="outlined"
                            InputLabelProps={{
                                shrink: true
                            }}
                            fullWidth
                            onChange={setCheckoutInput}
                        />
                    </Grid>
                </Grid>

                <Grid
                    container
                    item
                    xs={4}
                    direction="column"
                    alignItems="stretch"
                    justify="center"
                    className={classes.gridItem}
                >
                    <Grid item xs={12}>
                        <TextField
                            required
                            type="tel"
                            name="cardNum"
                            id="payment-card-num"
                            label="Card Number"
                            className={classes.input}
                            variant="outlined"
                            InputLabelProps={{
                                shrink: true
                            }}
                            inputProps={{
                                className: classes.num
                            }}
                            fullWidth
                            onChange={handleCardInput}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            required
                            type="tel"
                            name="cvc"
                            id="payment-cvc"
                            label="CVC"
                            className={classes.input}
                            variant="outlined"
                            InputLabelProps={{
                                shrink: true
                            }}
                            inputProps={{
                                className: classes.num
                            }}
                            fullWidth
                            onChange={handleCardInput}
                        />
                    </Grid>
                </Grid>

                <Grid
                    container
                    item
                    xs={4}
                    direction="column"
                    alignItems="stretch"
                    justify="center"
                    className={classes.gridItem}
                >
                    <Grid item xs={12}>
                        <TextField
                            required
                            type="tel"
                            name="expiry"
                            id="payment-expiry"
                            label="Valid Thru"
                            className={classes.input}
                            variant="outlined"
                            InputLabelProps={{
                                shrink: true
                            }}
                            inputProps={{
                                className: classes.num,
                                pattern: `\d\d/\d\d`
                            }}
                            fullWidth
                            onChange={handleCardInput}
                        />
                    </Grid>
                </Grid>
            </Grid>
        </Paper>
    );
};

export default Payment;
