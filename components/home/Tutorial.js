import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import PersonIcon from "@material-ui/icons/PersonOutlined";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCartOutlined";
import ItemIcon from "@material-ui/icons/CardGiftcardOutlined";
import TutorialStyles from "../../styles/components/home/TutorialStyles";

const useStyles = makeStyles(TutorialStyles);

const Tutorial = () => {
    const classes = useStyles();

    const steps = [
        {
            id: 1,
            title: "Step 1",
            subtitle: "Register",
            caption: "Create/login your own account.",
            icon: <PersonIcon className={classes.icon} />
        },
        {
            id: 2,
            title: "Step 2",
            subtitle: "Shop",
            caption: "Enjoy the shopping!",
            icon: <ShoppingCartIcon className={classes.icon} />
        },
        {
            id: 3,
            title: "Step 3",
            subtitle: "Receive",
            caption: "Receive your items and don't forget to follow us!",
            icon: <ItemIcon className={classes.icon} />
        }
    ];

    return (
        <section className={classes.tutorial}>
            <Container className={classes.container}>
                <Grid
                    container
                    spacing={6}
                    direction="row"
                    alignItems="flex-start"
                    justify="center"
                >
                    {steps.map(el => (
                        <Grid item xs={4} md={3} key={el.id}>
                            <div className={classes.step}>
                                {el.icon}
                                <Typography
                                    variant="h4"
                                    gutterBottom
                                    className={classes.title}
                                >
                                    {el.title}
                                </Typography>
                                <Typography
                                    variant="h6"
                                    className={classes.subtitle}
                                >
                                    {el.subtitle}
                                </Typography>
                                <Typography variant="body2" gutterBottom>
                                    {el.caption}
                                </Typography>
                            </div>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </section>
    );
};

export default Tutorial;
