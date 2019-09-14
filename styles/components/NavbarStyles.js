import { fade } from "@material-ui/core/styles/colorManipulator";

export default theme => ({
    grow: {
        flexGrow: 1
    },
    logo: {
        width: 50,
        height: 50
    },
    toolbar: {
        backgroundColor: "#C52C57"
    },
    title: {
        display: "none",
        [theme.breakpoints.up("sm")]: {
            display: "block"
        }
    },
    mobileList: {
        width: 250,
        padding: 25
    },
    mobileMenu: {
        zIndex: 0
    },
    links: {
        margin: theme.spacing(1),
        cursor: "pointer",
        "&:hover": {
            backgroundColor: fade(theme.palette.common.black, 0.25)
        }
    },
    search: {
        position: "relative",
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        "&:hover": {
            backgroundColor: fade(theme.palette.common.white, 0.25)
        },
        marginLeft: 0,
        width: "100%",
        [theme.breakpoints.up("sm")]: {
            marginLeft: theme.spacing(3),
            width: "auto"
        }
    },
    searchIcon: {
        width: theme.spacing(9),
        height: "100%",
        position: "absolute",
        pointerEvents: "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    inputRoot: {
        color: "inherit",
        wdith: "100%"
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 7),
        transition: theme.transitions.create("width"),
        // width: "100%",
        [theme.breakpoints.up("md")]: {
            width: 120,
            "&:focus": {
                width: 200
            }
        }
    },

    sectionDesktopLinks: {
        display: "none",
        [theme.breakpoints.up("md")]: {
            display: "flex"
        }
    },
    sectionMobileLinks: {
        display: "flex",
        [theme.breakpoints.up("md")]: {
            display: "none"
        }
    },

    sectionDesktopMenu: {
        display: "none",
        [theme.breakpoints.up("sm")]: {
            display: "flex"
        }
    },
    sectionMobileMenu: {
        display: "flex",
        [theme.breakpoints.up("sm")]: {
            display: "none"
        }
    }
});
