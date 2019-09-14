export default themes => ({
    tutorial: {
        backgroundColor: "PaleVioletRed",
        color: "white",
        padding: themes.spacing(12, 0)
    },
    container: {
        maxWidth: "100%",
        textAlign: "center"
    },
    title: {
        fontWeight: "700"
    },
    subtitle: {
        fontWeight: "500"
    },
    icon: {
        fontSize: 120,
        [themes.breakpoints.down("sm")]: {
            fontSize: 100
        },
        [themes.breakpoints.down("xs")]: {
            fontSize: 80
        }
    }
});
