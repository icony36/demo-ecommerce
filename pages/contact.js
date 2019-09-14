import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import ContactStyles from "../styles/ContactStyles";
import ContactForm from "../components/ContactForm";

const useStyles = makeStyles(ContactStyles);

const Contact = () => {
    const classes = useStyles();

    return (
        <Container maxWidth="md" className={classes.container}>
            <Typography
                vairant="display-1"
                component="h1"
                className={classes.title}
            >
                Contact Us
            </Typography>
            <ContactForm />
        </Container>
    );
};

export default Contact;
