import { useContext, useState } from "react";
import { makeStyles, lighten } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import clsx from "clsx";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import MenuItem from "@material-ui/core/MenuItem";
import TableSortLabel from "@material-ui/core/TableSortLabel";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import DeleteIcon from "@material-ui/icons/Delete";
import FilterListIcon from "@material-ui/icons/FilterList";
import CloseIcon from "@material-ui/icons/Close";
import Link from "next/link";
import { ShopContext } from "../../contexts/ShopContext";
import { Icon } from "@material-ui/core";

const ToolbarStyles = theme => ({
    toolbar: {
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(1),
        color: theme.palette.secondary.main,
        backgroundColor: lighten(theme.palette.secondary.light, 0.85)
    },
    spacer: {
        flex: "1 1 100%"
    },
    actions: {
        color: theme.palette.text.secondary
    },
    title: {
        flex: "0 0 auto"
    }
});

const useToolbarStyles = makeStyles(ToolbarStyles);

const EnhancedToolbar = props => {
    const classes = useToolbarStyles();
    const { numSelected, removeAll } = props;

    return (
        <Toolbar className={classes.toolbar}>
            <div className={classes.title}>
                <Typography color="inherit" variant="subtitle1">
                    {numSelected} {numSelected > 1 ? "items" : "item"} selected
                </Typography>
            </div>
            <div className={classes.spacer} />
            {/* <div className={classes.actions}>
                <Tooltip title="Delete">
                    <IconButton aria-label="delete" onClick={removeAll}>
                        <DeleteIcon />
                    </IconButton>
                </Tooltip>
            </div> */}
        </Toolbar>
    );
};

const styles = theme => ({
    paper: {
        marginBottom: theme.spacing(6),
        overflowX: "auto"
    },
    item: {
        display: "flex",
        alignItems: "center"
    },
    img: {
        width: "60%",
        verticalAlign: "center",
        [theme.breakpoints.down("xs")]: {
            display: "none"
        }
    },
    name: {
        marginLeft: theme.spacing(4),
        cursor: "pointer"
    },
    numberCell: {
        width: "20%"
    },
    total: {
        marginTop: theme.spacing(2),
        padding: theme.spacing(1),
        textAlign: "right"
    },
    totalWord: {
        fontWeight: 500,
        color: "#C52C57"
    }
});

const useStyles = makeStyles(styles);

const tableHead = ["Unit Price", "Quantity", "Total Price", "Actions"];

const CheckoutCart = props => {
    const classes = useStyles();
    const { cart } = useContext(ShopContext);

    const {
        selected,
        handleSelectAllClick,
        handleClick,
        handleRemove,
        sumSelectedAmounts
    } = props;

    const isSelected = id => selected.indexOf(id) !== -1;

    return (
        <Paper elevation={0} className={classes.paper}>
            {selected.length > 0 ? (
                <EnhancedToolbar
                    numSelected={selected.length}
                    removeAll={() => handleRemoveBundle(selected)}
                />
            ) : (
                ""
            )}
            <Table className={classes.table}>
                <TableHead>
                    <TableRow>
                        <TableCell padding="checkbox">
                            <Checkbox
                                checked={
                                    cart.length > 0
                                        ? selected.length === cart.length
                                        : false
                                }
                                onChange={handleSelectAllClick}
                            />
                        </TableCell>
                        <TableCell>Items</TableCell>
                        {tableHead.map((el, i) => (
                            <TableCell key={i} align="right">
                                {el}
                            </TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {cart.map((el, i) => (
                        <TableRow key={i}>
                            <TableCell padding="checkbox">
                                <Checkbox
                                    checked={isSelected(el.id)}
                                    onChange={event =>
                                        handleClick(event, el.id)
                                    }
                                />
                            </TableCell>
                            <TableCell
                                className={classes.itemCell}
                                component="th"
                                scope="row"
                            >
                                <div className={classes.item}>
                                    <img
                                        className={classes.img}
                                        src={el.imgSrc}
                                    />
                                    <Link
                                        href={`/shop/[id]`}
                                        as={`/shop/${el.id}`}
                                    >
                                        <Typography className={classes.name}>
                                            {el.name}
                                        </Typography>
                                    </Link>
                                </div>
                            </TableCell>
                            <TableCell
                                align="right"
                                className={classes.numberCell}
                            >
                                $ {el.price}
                            </TableCell>
                            <TableCell
                                align="right"
                                className={classes.numberCell}
                            >
                                {el.quantity}
                            </TableCell>
                            <TableCell
                                align="right"
                                className={classes.numberCell}
                            >
                                $ {el.price * el.quantity}
                            </TableCell>
                            <TableCell
                                align="right"
                                className={classes.actionCell}
                            >
                                <IconButton onClick={handleRemove}>
                                    <CloseIcon />
                                </IconButton>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>

            <div className={classes.total}>
                <Typography className={classes.totalWord}>
                    TOTAL ({selected.length}{" "}
                    {selected.length > 1 ? "items" : "item"}
                    ): $ {sumSelectedAmounts()}
                </Typography>
            </div>
        </Paper>
    );
};

export default CheckoutCart;
