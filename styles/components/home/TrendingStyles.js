export default themes => ({
    trending: {
        backgroundColor: themes.palette.background.paper,
        padding: themes.spacing(10, 0),
        textAlign: "center"
    },

    title: {
        fontWeight: "500",
        marginBottom: themes.spacing(6)
    },
    item: {
        textAlign: "center"
    },
    img: {
        width: "100%",
        marginBottom: themes.spacing(2),
        cursor: "pointer"
    },
    btn: {
        margin: themes.spacing(4, 0, 4),
        borderRadius: "0",
        color: "black",
        fontSize: "130%",
        fontWeight: "700",
        border: "4px solid black",
        "&:hover": {
            color: "white",
            backgroundColor: "PaleVioletRed ",
            borderColor: "PaleVioletRed "
        }
    }
});
