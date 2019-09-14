export default themes => ({
    subscribe: {
        backgroundColor: themes.palette.background.paper,
        padding: themes.spacing(10, 0)
    },
    paper: {
        backgroundColor: themes.palette.background.paper,
        border: "4px solid black",
        width: "80%",
        // margin: themes.spacing(10),
        marginLeft: "auto",
        marginRight: "auto",
        padding: themes.spacing(8)
    },
    title: {
        fontWeight: 500
    },
    subtitle: {
        fontWeight: 300
    },
    inputArea: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "60%",
        margin: themes.spacing(6),
        marginLeft: "auto",
        marginRight: "auto",
        [themes.breakpoints.down("sm")]: {
            width: "80%"
        }
    },
    input: {
        flexGrow: 1,
        fontFamily: "Roboto",
        fontSize: "1rem",
        lineHeight: "2.4rem",
        borderStyle: "solid",
        borderWidth: "4px",
        borderColor: "black",
        padding: "8px 16px",
        outline: "none",
        [themes.breakpoints.down("sm")]: {
            fontSize: "0.8rem"
        }
    },
    submit: {
        fontFamily: "Roboto",
        fontWeight: "500",
        lineHeight: "2.4rem",
        fontSize: "1rem",
        color: "white",
        backgroundColor: "black",
        borderStyle: "solid",
        borderWidth: "4px 4px 4px 0px",
        borderColor: "black",
        padding: "8px 16px",
        "&:hover": {
            backgroundColor: "#C52C57",
            borderColor: "#C52C57"
        },
        outline: "none",
        cursor: "pointer"
    }
});
