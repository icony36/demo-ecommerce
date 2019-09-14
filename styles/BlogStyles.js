export default theme => ({
    container: {
        textAlign: "left",
        paddingBottom: theme.spacing(12)
    },
    title: {
        fontSize: "3em",
        fontWeight: "500",
        margin: "1em auto"
    },
    postTitle: {
        color: "#cc3366",
        cursor: "pointer",
        marginBottom: theme.spacing(1),
        fontWeight: "700"
    },
    postDate: {
        marginBottom: theme.spacing(1)
    }
});
