import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Link from "next/link";
import FooterStyles from "../styles/components/FooterStyles";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles(FooterStyles);

const Footer = () => {
    const classes = useStyles();

    return (
        <footer className={classes.footer}>
            <Container>
                <Link href="/">
                    <Typography
                        component="span"
                        className={classes.link}
                        variant="subtitle1"
                    >
                        Terms of Service
                    </Typography>
                </Link>
                <br />
                <Link href="/faq">
                    <Typography
                        component="span"
                        className={classes.link}
                        variant="subtitle1"
                        gutterBottom
                    >
                        FAQs
                    </Typography>
                </Link>
                <br />
                <Typography className={classes.copyRight} variant="overline">
                    &copy; 2019 - Two Halves Sucre
                </Typography>
            </Container>
        </footer>
    );
};

export default Footer;
