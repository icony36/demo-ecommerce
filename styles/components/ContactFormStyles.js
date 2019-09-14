export default theme => ({
    paper: {
        margin: theme.spacing(2, 0, 12),
        padding: theme.spacing(10)
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
    submit: {
        float: "right",
        backgroundColor: "PaleVioletRed"
    }
});
