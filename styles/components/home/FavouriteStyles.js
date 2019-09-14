export default themes => ({
    favourite: {
        paddingTop: themes.spacing(12),
        paddingBottom: themes.spacing(6),
        textAlign: "center",
        backgroundColor: themes.palette.background.paper
    },
    titleArea: {
        marginLeft: themes.spacing(10)
    },
    title: {
        display: "inline-block",
        verticalAlign: "text-top",
        writingMode: "vertical-rl",
        transform: "rotate(180deg)",
        fontWeight: "500",
        textTransform: "uppercase",
        textAlign: "right"
    },
    title2: {
        fontWeight: "700",
        textTransform: "uppercase"
    },
    items: {
        width: "80%"
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
        marginTop: themes.spacing(8),
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
