import React, { useState } from "react";
import useInputState from "../hooks/useInputState";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Snackbar from "@material-ui/core/Snackbar";
import SnackbarContent from "@material-ui/core/SnackbarContent";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import ContactFormStyles from "../styles/components/ContactFormStyles";
import axios from "axios";

const useStyles = makeStyles(ContactFormStyles);

const initialState = {
    email: "",
    subject: "",
    message: ""
};

const ContactForm = () => {
    const [input, setInput, inputReset] = useInputState(initialState);
    const [isSent, setIsSent] = useState(false);
    const classes = useStyles();

    const handleSubmit = evt => {
        evt.preventDefault();

        const { email, name, message } = input;
        axios
            .post("/contact", { email, name, message })
            .then(res => {
                console.log(res.status);
                setIsSent(true);
                inputReset();
            })
            .catch(err => {
                console.log(err, "Wrong post route!");
            });
    };

    const handleIsSentClose = (evt, reason) => {
        if (reason === "clickaway") {
            return;
        }
        setIsSent(false);
    };

    const renderIsSent = (
        <div>
            <Snackbar
                anchorOrigin={{
                    vertical: "top",
                    horizontal: "center"
                }}
                open={isSent}
                onClose={handleIsSentClose}
                ContentProps={{
                    "aria-describedby": "message-id"
                }}
                autoHideDuration={3000}
            >
                <SnackbarContent
                    message={
                        <span id="message-id">Your message has been sent!</span>
                    }
                    action={
                        <IconButton
                            key="close"
                            aria-label="close"
                            color="inherit"
                            onClick={handleIsSentClose}
                        >
                            <CloseIcon />
                        </IconButton>
                    }
                />
            </Snackbar>
        </div>
    );

    return (
        <Paper className={classes.paper}>
            <form onSubmit={handleSubmit}>
                <TextField
                    onChange={setInput}
                    value={input.name || ""}
                    name="name"
                    className={classes.input}
                    id="contact-name"
                    label="Name"
                    fullWidth
                    variant="outlined"
                    InputLabelProps={{
                        shrink: true
                    }}
                    required
                />
                <TextField
                    onChange={setInput}
                    value={input.email || ""}
                    name="email"
                    type="email"
                    className={classes.input}
                    id="contact-email"
                    label="Email"
                    placeholder="youremail@gmail.com"
                    fullWidth
                    variant="outlined"
                    InputLabelProps={{
                        shrink: true
                    }}
                    required
                />
                <TextField
                    onChange={setInput}
                    value={input.message || ""}
                    name="message"
                    className={classes.input}
                    id="contact-message"
                    label="Message"
                    helperText="Please enter the details of your request. A member of our support staff will respond as soon as possible."
                    fullWidth
                    variant="outlined"
                    multiline
                    rows="10"
                    InputLabelProps={{
                        shrink: true
                    }}
                    required
                />
                <Button
                    color="secondary"
                    variant="contained"
                    className={classes.submit}
                    type="submit"
                >
                    Submit
                </Button>
            </form>
            {renderIsSent}
        </Paper>
    );
};

export default ContactForm;
