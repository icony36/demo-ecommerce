import React, { useState, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import CheckoutCart from "../components/checkout/CheckoutCart";
import Billing from "../components/checkout/Billing";
import Payment from "../components/checkout/Payment";
import Confirm from "../components/checkout/Confirm";
import CheckoutStyles from "../styles/CheckoutStyles";
import { ShopContext } from "../contexts/ShopContext";
import useInputState from "../hooks/useInputState";
import {
    formatCreditCardNumber,
    formatCVC,
    formatExpirationDate
} from "../components/checkout/CardFormat";
import axios from "axios";

const useStyles = makeStyles(CheckoutStyles);

const initCheckout = {
    country: "",
    city: "",
    zipcode: "",
    address: "",
    name: "",
    companyName: "",
    phone: "",
    email: "",
    cardType: "",
    cardNum: "",
    cardName: "",
    cvc: "",
    expiry: ""
};

const steps = [
    "Shopping Cart",
    "Billing & Shipping Method",
    "Payment Method",
    "Confirm Order"
];

const Checkout = () => {
    const classes = useStyles();

    const { cart, removeFromCart } = useContext(ShopContext);

    const [activeStep, setActiveStep] = useState(0);
    const [selected, setSelected] = useState(
        cart.length > 0 ? cart.map(el => el.id) : []
    );

    const selectedItems = cart.filter(el => selected.includes(el.id));

    const [checkoutInput, setCheckoutInput] = useInputState(initCheckout);

    // Stepper function
    const handleNext = () => {
        setActiveStep(prevActiveStep => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep(prevActiveStep => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    //CheckoutCart function
    const handleSelectAllClick = event => {
        if (event.target.checked) {
            setSelected(cart.map(el => el.id));
            return;
        }
        setSelected([]);
    };

    const handleClick = (event, id) => {
        const selectedIndex = selected.indexOf(id);

        let newSelected = [];

        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, id);
        } else if (selectedIndex === 0) {
            newSelected = newSelected.concat(selected.slice(1));
        } else if (selectedIndex === selected.length - 1) {
            newSelected = newSelected.concat(selected.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(
                selected.slice(0, selectedIndex),
                selected.slice(selectedIndex + 1)
            );
        }

        setSelected(newSelected);
        console.log(selected);
    };

    const removeFromSelected = id => {
        let index = selected.findIndex(el => el == id);
        selected.splice(index, 1);
        setSelected(selected);
    };

    const handleRemove = id => {
        removeFromCart(id);
        removeFromSelected(id);
    };

    const handleRemoveBundle = idArr => {
        idArr.forEach(el => {
            removeFromCart(el);
            removeFromSelected(el);
        });
    };

    const sumSelectedAmounts = () => {
        let total = 0;
        for (var i = 0; i < selectedItems.length; i++) {
            total +=
                selectedItems[i].price * parseInt(selectedItems[i].quantity);
        }

        return Number(Math.round(parseFloat(total + "e" + 2)) + "e-" + 2);
    };

    // Payment function
    const handleCardInput = evt => {
        if (evt.target.name === "cardNum") {
            evt.target.value = formatCreditCardNumber(evt.target.value);
            setCheckoutInput(evt);
        } else if (evt.target.name === "expiry") {
            evt.target.value = formatExpirationDate(evt.target.value);
            setCheckoutInput(evt);
        } else if (evt.target.name === "cvc") {
            evt.target.value = formatCVC(evt.target.value);
            setCheckoutInput(evt);
        }
    };

    // Place Order
    const handleSubmit = evt => {
        evt.preventDefault();

        const {
            country,
            city,
            zipcode,
            address,
            name,
            companyName,
            phone,
            email,
            cardNum
        } = checkoutInput;

        const last4CardNum = cardNum.toString().substr(-4);

        // axios
        //     .post("/checkout", {
        //         country,
        //         city,
        //         zipcode,
        //         address,
        //         name,
        //         companyName,
        //         phone,
        //         email,
        //         last4CardNum,
        //         selectedItems
        //     })
        //     .then(res => {
        //         console.log("Order is sent!: " + res.status);
        //     })
        //     .catch(err => {
        //         console.log(err, "Can't submit order!");
        //     });
        alert(
            `${country},
            ${city},
            ${zipcode},
            ${address},
            ${name},
            ${companyName},
            ${phone},
            ${email},
            ${cardNum}`
        );
        handleNext();
    };

    const getStepContent = step => {
        switch (step) {
            case 0:
                return (
                    <CheckoutCart
                        selected={selected}
                        handleSelectAllClick={handleSelectAllClick}
                        handleClick={handleClick}
                        handleRemove={handleRemove}
                        sumSelectedAmounts={sumSelectedAmounts}
                    />
                );
            case 1:
                return (
                    <Billing
                        checkoutInput={checkoutInput}
                        setCheckoutInput={setCheckoutInput}
                    />
                );
            case 2:
                return (
                    <Payment
                        checkoutInput={checkoutInput}
                        setCheckoutInput={setCheckoutInput}
                        handleCardInput={handleCardInput}
                    />
                );
            case 3:
                return (
                    <Confirm
                        checkoutInput={checkoutInput}
                        selected={selected}
                        isPaid={false}
                        selectedItems={selectedItems}
                        handleReset={handleReset}
                        sumSelectedAmounts={sumSelectedAmounts}
                    />
                );
            default:
                return "Unknown step";
        }
    };

    return (
        <React.Fragment>
            <Container>
                <Typography className={classes.title} variant="h5">
                    Checkout
                </Typography>
                <Stepper activeStep={activeStep}>
                    {steps.map((label, index) => (
                        <Step key={index}>
                            <StepLabel
                                StepIconProps={{
                                    classes: {
                                        completed: classes.icon,
                                        active: classes.icon
                                    }
                                }}
                            >
                                {label}
                            </StepLabel>
                        </Step>
                    ))}
                </Stepper>
                <Paper elevation={0} className={classes.paper}>
                    {activeStep === steps.length ? (
                        <Confirm
                            checkoutInput={checkoutInput}
                            selected={selected}
                            isPaid={true}
                            handleReset={handleReset}
                            selectedItems={selectedItems}
                            sumSelectedAmounts={sumSelectedAmounts}
                        />
                    ) : (
                        <React.Fragment>
                            {getStepContent(activeStep)}
                            <div>
                                {activeStep === steps.length - 1 ? (
                                    <Button
                                        variant="contained"
                                        color="secondary"
                                        className={classes.btnNext}
                                        onClick={handleSubmit}
                                    >
                                        Place Order
                                    </Button>
                                ) : (
                                    <Button
                                        variant="contained"
                                        color="secondary"
                                        onClick={handleNext}
                                        className={classes.btnNext}
                                    >
                                        Next
                                    </Button>
                                )}

                                <Button
                                    disabled={activeStep === 0}
                                    onClick={handleBack}
                                    className={classes.btnBack}
                                >
                                    Back
                                </Button>
                            </div>
                        </React.Fragment>
                    )}
                </Paper>
            </Container>
        </React.Fragment>
    );
};

export default Checkout;
