export default theme => ({
    paper: {
        margin: theme.spacing(4, 0),
        padding: theme.spacing(8)
    },
    postTitle: {
        color: "#cc3366",
        fontWeight: 500,
        marginBottom: theme.spacing(2)
    },
    postDate: {
        marginBottom: theme.spacing(2)
    },
    postImage: {
        width: "100%",
        marginBottom: theme.spacing(2)
    },
    postContent: {
        textAlign: "justify",
        whiteSpace: "pre-wrap",
        fontWeight: 400
    }
});
