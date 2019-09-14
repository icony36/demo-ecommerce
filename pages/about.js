import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import AboutStyles from "../styles/AboutStyles";

const useStyles = makeStyles(AboutStyles);

const createContents = (num, classSubtitle, classBody) => {
    let contents = [];

    for (let i = 0; i < num; i++) {
        contents.push(
            <React.Fragment key={i}>
                <Typography className={classSubtitle} variant="h5" gutterBottom>
                    Lorem ipsum dolor sit amet
                </Typography>
                <Typography className={classBody} variant="body1" gutterBottom>
                    Donec et odio pellentesque diam volutpat commodo sed. Non
                    consectetur a erat nam. Sit amet aliquam id diam. Adipiscing
                    at in tellus integer feugiat scelerisque varius morbi enim.
                    Sed lectus vestibulum mattis ullamcorper velit sed
                    ullamcorper morbi. Feugiat pretium nibh ipsum consequat
                    nisl. In fermentum et sollicitudin ac orci. Commodo elit at
                    imperdiet dui accumsan sit amet nulla. Faucibus pulvinar
                    elementum integer enim neque. Suspendisse ultrices gravida
                    dictum fusce ut placerat orci nulla pellentesque. Egestas
                    erat imperdiet sed euismod nisi porta.
                </Typography>
            </React.Fragment>
        );
    }
    return contents;
};

const About = () => {
    const classes = useStyles();

    return (
        <Container maxWidth="md" className={classes.container}>
            <Typography
                vairant="display-1"
                component="h1"
                className={classes.title}
            >
                About Us
            </Typography>
            <div className={classes.content}>
                {createContents(2, classes.subtitle, classes.body)}
            </div>
        </Container>
    );
};

export default About;
