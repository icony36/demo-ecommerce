export default theme => ({
    container: {
        textAlign: "center",
        paddingBottom: theme.spacing(12)
    },
    title: {
        fontSize: "3em",
        fontWeight: "500",
        margin: "1em auto"
    },
    card: {
        display: "flex",
        textAlign: "center",
        overflow: "visible",
        [theme.breakpoints.up("md")]: {
            height: "320px"
        }
    },
    cardActionArea: {
        flexGrow: 1,
        flexDirection: "column",
        alignItems: "stretch",
        height: "inherit"
    },
    mediaArea: {
        display: "inline-block",
        width: "60%",
        margin: "10%"
    },
    media: {
        width: "100%"
    },
    content: {
        textAlign: "center",
        marginBottom: "1em"
    }
});
