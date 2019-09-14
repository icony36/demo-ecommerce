import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import HomeSlideShowStyles from "../../styles/components/home/SlideShowStyles";

const imagesPath = "/static/images/home/";
const slide1Src = `${imagesPath}slide1.jpeg`;

const useStyles = makeStyles(HomeSlideShowStyles);

const HomeSlideShow = () => {
    const classes = useStyles();

    return (
        <section className={classes.slideShow}>
            <img className={classes.img} src={slide1Src} />
            <Typography variant="h2" className={classes.wording}>
                Treat yourself or someone you love with some macarons!
            </Typography>
        </section>
    );
};

export default HomeSlideShow;
