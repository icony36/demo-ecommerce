import { lighten } from "@material-ui/core/styles";

export default theme => ({
    container: {
        textAlign: "left"
    },
    title: {
        fontSize: "3em",
        margin: theme.spacing(6, 0),
        fontWeight: 500
    },
    paper: {
        padding: theme.spacing(2, 6),
        marginBottom: theme.spacing(12)
    },
    btnNext: {
        float: "right",
        backgroundColor: "PaleVioletRed"
    },
    icon: {
        color: "#C52C57 !important"
    }
});
