export default themes => ({
    root: {
        padding: themes.spacing(4, 0),
        backgroundColor: themes.palette.background.paper
    },
    title: {
        fontWeight: 500
    },
    gridArea: {
        margin: themes.spacing(6),
        marginLeft: "auto",
        marginRight: "auto",
        width: "80%"
    },
    gridItem: {
        cursor: "pointer",
        width: "100%",
        height: "100%",
        "&:hover img": {
            transform: "scale(1.1)"
        }
    },
    img: {
        width: "inherit",
        height: "inherit",
        objectFit: "cover",
        objectPosition: "50% 50%",
        transition: "1s ease"
    }
});
