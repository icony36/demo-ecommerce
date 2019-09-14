import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import { CountryRegionData } from "react-country-region-selector";

const styles = theme => ({
    paper: {
        padding: theme.spacing(2),
        marginBottom: theme.spacing(6)
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

const Billing = props => {
    const { checkoutInput, setCheckoutInput } = props;

    const classes = useStyles();

    return (
        <Paper elevation={0} className={classes.paper}>
            <Grid
                container
                spacing={4}
                direction="row"
                alignItems="flex-start"
                justify="space-evenly"
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
                            name="name"
                            id="billing-name"
                            label="Name"
                            className={classes.input}
                            variant="outlined"
                            InputLabelProps={{
                                shrink: true
                            }}
                            fullWidth
                            onChange={setCheckoutInput}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            name="companyName"
                            id="billing-company-name"
                            label="Company Name"
                            className={classes.input}
                            variant="outlined"
                            InputLabelProps={{
                                shrink: true
                            }}
                            fullWidth
                            onChange={setCheckoutInput}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            required
                            name="address"
                            id="billing-address"
                            label="Address"
                            multiline
                            rows="6"
                            className={classes.input}
                            variant="outlined"
                            InputLabelProps={{
                                shrink: true
                            }}
                            margin="dense"
                            fullWidth
                            onChange={setCheckoutInput}
                        />
                    </Grid>
                </Grid>

                <Grid
                    container
                    item
                    direction="column"
                    alignItems="stretch"
                    justify="center"
                    className={classes.gridItem}
                    xs={4}
                >
                    <Grid item xs={12}>
                        <TextField
                            required
                            name="country"
                            id="billing-country"
                            label="Country"
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
                            value={checkoutInput.country}
                            fullWidth
                            onChange={setCheckoutInput}
                        >
                            {CountryRegionData.map(
                                ([countryName, countrySlug]) => (
                                    <MenuItem
                                        value={countryName}
                                        key={countrySlug}
                                    >
                                        {countryName}
                                    </MenuItem>
                                )
                            )}
                        </TextField>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            required
                            name="state"
                            id="billing-state"
                            label="State/Province"
                            className={classes.input}
                            variant="outlined"
                            InputLabelProps={{
                                shrink: true
                            }}
                            fullWidth
                            onChange={setCheckoutInput}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            required
                            name="city"
                            id="billing-City"
                            label="City"
                            className={classes.input}
                            variant="outlined"
                            InputLabelProps={{
                                shrink: true
                            }}
                            fullWidth
                            onChange={setCheckoutInput}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            required
                            type="number"
                            name="zipcode"
                            id="billing-zipcode"
                            label="Zip/Postal Code"
                            className={classes.input}
                            variant="outlined"
                            InputLabelProps={{
                                shrink: true
                            }}
                            inputProps={{
                                className: classes.num
                            }}
                            fullWidth
                            onChange={setCheckoutInput}
                        />
                    </Grid>
                </Grid>

                <Grid
                    container
                    item
                    direction="column"
                    alignItems="stretch"
                    justify="center"
                    xs={4}
                >
                    <Grid item xs={12}>
                        <TextField
                            required
                            type="tel"
                            name="phone"
                            id="billing-phone"
                            label="Phone"
                            className={classes.input}
                            variant="outlined"
                            InputLabelProps={{
                                shrink: true
                            }}
                            inputProps={{
                                className: classes.num
                            }}
                            fullWidth
                            onChange={setCheckoutInput}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            required
                            type="email"
                            name="email"
                            id="billing-email"
                            label="Email"
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
            </Grid>
        </Paper>
    );
};

export default Billing;
