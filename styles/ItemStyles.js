export default themes => ({
    card: {
        display: "flex",
        flexGrow: 1,
        margin: themes.spacing(10, 0),
        padding: themes.spacing(6),
        [themes.breakpoints.down("xs")]: {
            flexDirection: "column",
            alignItems: "center",
            margin: themes.spacing(5, 0)
        }
    },
    mediaArea: {
        width: "40%",
        margin: "3em 0"
    },
    media: {
        width: "100%"
    },
    details: {
        display: "flex",
        flexDirection: "column",
        marginLeft: themes.spacing(4),
        width: "60%",
        [themes.breakpoints.down("xs")]: {
            textAlign: "Center",
            alignItems: "center",
            marginLeft: "0"
        }
    },
    content: {
        padding: 0
    },
    name: {
        color: "PaleVioletRed",
        marginBottom: themes.spacing(2),
        [themes.breakpoints.down("xs")]: {
            fontSize: "2.5em"
        }
    },
    desc: {
        [themes.breakpoints.down("xs")]: {
            fontSize: "1em"
        }
    },
    priceArea: {
        backgroundColor: "#fafafa",
        marginTop: themes.spacing(2),
        padding: "5%",
        [themes.breakpoints.down("xs")]: {
            padding: "3%"
        }
    },
    price: {
        fontSize: "2em",
        [themes.breakpoints.down("xs")]: {
            fontSize: "1.5em"
        }
    },
    quantityArea: {
        marginTop: themes.spacing(1),
        width: "60%",
        [themes.breakpoints.down("md")]: {
            width: "70%"
        },
        [themes.breakpoints.down("sm")]: {
            width: "100%"
        }
    },
    quantity: {
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
        width: "60%"
    },
    input: {
        "&::-webkit-outer-spin-button, &::-webkit-inner-spin-button": {
            "-webkit-appearance": "none",
            "-moz-appearance": "none",
            margin: 0
        },
        "&[type=number]": {
            "-webkit-appearance": "textfield",
            "-moz-appearance": "textfield"
        }
    },
    incrementer: {
        display: "inline-flex",
        flexGrow: 1,
        flexDirection: "column",
        margin: themes.spacing(1)
    },
    incBtn: {
        color: "PaleVioletRed",
        margin: themes.spacing(1, 0),
        padding: 0
    },
    control: {
        display: "flex",
        marginTop: themes.spacing(1)
    },
    cartBtn: {
        margin: themes.spacing(1),
        color: "PaleVioletRed",
        borderColor: "PaleVioletRed",
        "&:hover": {
            color: "white",
            backgroundColor: "#C52C57 ",
            borderColor: "#C52C57 "
        }
    },
    buyBtn: {
        margin: themes.spacing(1),
        backgroundColor: "PaleVioletRed",
        "&:hover": {
            backgroundColor: "#C52C57 "
        }
    }
});
