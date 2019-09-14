import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import SubscribeStyles from "../../styles/components/home/SubscribeStyles";

const useStyles = makeStyles(SubscribeStyles);
const Subscribe = () => {
    const classes = useStyles();

    return (
        <section className={classes.subscribe}>
            <Container>
                <Paper elevation={24} className={classes.paper}>
                    <Typography
                        className={classes.title}
                        variant="h3"
                        gutterBottom
                    >
                        Keep In Touch!
                    </Typography>
                    <Typography
                        className={classes.subtitle}
                        variant="body1"
                        gutterBottom
                    >
                        Subscribe to get special offers, free giveaways, and
                        once-in-a-lifetime deals.
                    </Typography>
                    <form id="subscribe-form">
                        <div className={classes.inputArea}>
                            <input
                                className={classes.input}
                                type="email"
                                form="subscribe-form"
                                required
                                placeholder="Please filled in your email."
                            />
                            <button className={classes.submit} type="submit">
                                SUBSCRIBE
                            </button>
                        </div>
                    </form>
                </Paper>
            </Container>
        </section>
    );
};

export default Subscribe;
