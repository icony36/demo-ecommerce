import React, { useState, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import Badge from "@material-ui/core/Badge";
import MenuList from "@material-ui/core/MenuList";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MoreIcon from "@material-ui/icons/MoreVert";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import NavbarStyles from "../styles/components/NavbarStyles";
import Link from "next/link";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import useToggle from "../hooks/useToggle";
import Cart from "./Cart";
import { ShopContext } from "../contexts/ShopContext";

const useStyles = makeStyles(NavbarStyles);

const links = [
    { name: "Shop", href: "/shop" },
    { name: "Blog", href: "/blog" },
    { name: "About Us", href: "/about" },
    { name: "Contact Us", href: "/contact" },
    { name: "FAQs", href: "/faq" }
];

function Navbar() {
    const classes = useStyles();
    const { totalItems } = useContext(ShopContext);

    const [isMobileLinksOpen, toggleMobileLinks] = useToggle(false);
    const [mobileMenuAnchorEl, setMobileMenuAnchorEl] = useState(null);
    const [cartAnchorEl, setCartAnchorEl] = useState(null);

    const isMobileMenuOpen = Boolean(mobileMenuAnchorEl);
    const isCartOpen = Boolean(cartAnchorEl);

    const handleMobileMenuOpen = event => {
        setMobileMenuAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMenuAnchorEl(null);
    };

    const handleCartClick = event => {
        setCartAnchorEl(prev => (prev ? null : event.currentTarget));
    };

    const renderMobileLinks = (
        <Drawer open={isMobileLinksOpen} onClose={toggleMobileLinks}>
            <div
                className={classes.mobileList}
                onClick={toggleMobileLinks}
                onKeyDown={toggleMobileLinks}
            >
                <List>
                    {links.map(el => (
                        <Link href={el.href} key={`mobile-${el.name}`}>
                            <ListItem button>{el.name}</ListItem>
                        </Link>
                    ))}
                </List>
            </div>
        </Drawer>
    );

    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMenuAnchorEl}
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
            keepMounted
            transformOrigin={{ vertical: "top", horizontal: "right" }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
            className={classes.mobileMenu}
        >
            <MenuItem onClick={handleCartClick}>
                <IconButton aria-label="show shopping cart" color="inherit">
                    <Badge badgeContent={totalItems} color="secondary">
                        <ShoppingCartIcon />
                    </Badge>
                </IconButton>
                <p>Shopping Cart</p>
            </MenuItem>

            <MenuItem>
                <IconButton
                    aria-label="account of current user"
                    color="inherit"
                >
                    <AccountCircle />
                </IconButton>
                <p>Profile</p>
            </MenuItem>
        </Menu>
    );

    const renderCart = (
        <Cart
            cartAnchorEl={cartAnchorEl}
            isCartOpen={isCartOpen}
            handleCartClick={handleCartClick}
        />
    );

    return (
        <div className={classes.grow}>
            <AppBar position="static">
                <Toolbar className={classes.toolbar}>
                    {renderMobileLinks}
                    <div className={classes.sectionMobileLinks}>
                        <IconButton
                            aria-label="show links"
                            color="inherit"
                            onClick={toggleMobileLinks}
                        >
                            <MenuIcon />
                        </IconButton>
                    </div>

                    <Link href="/">
                        <IconButton
                            className={classes.menuButton}
                            color="inherit"
                        >
                            <Typography variant="h6">
                                TWO HALVES SUCRE
                            </Typography>
                        </IconButton>
                    </Link>

                    <div className={classes.sectionDesktopLinks}>
                        {/* <MenuList> */}
                        {links.map(el => (
                            <Link href={el.href} key={`links-${el.name}`}>
                                <MenuItem>
                                    <Typography>{el.name}</Typography>
                                </MenuItem>
                            </Link>
                        ))}
                        {/* </MenuList> */}
                    </div>

                    <div className={classes.grow} />
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon />
                        </div>
                        <InputBase
                            placeholder="Search…"
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput
                            }}
                            inputProps={{ "aria-label": "search" }}
                        />
                    </div>

                    <div className={classes.sectionDesktopMenu}>
                        <IconButton
                            aria-label="show shopping cart"
                            color="inherit"
                            onClick={handleCartClick}
                        >
                            <Badge badgeContent={totalItems} color="secondary">
                                <ShoppingCartIcon />
                            </Badge>
                        </IconButton>

                        <IconButton
                            edge="end"
                            aria-label="account of current user"
                            color="inherit"
                        >
                            <AccountCircle />
                        </IconButton>
                    </div>
                    <div className={classes.sectionMobileMenu}>
                        <IconButton
                            aria-label="show more"
                            aria-haspopup="true"
                            color="inherit"
                            onClick={handleMobileMenuOpen}
                        >
                            <MoreIcon />
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
            {renderCart}
            {renderMobileMenu}
        </div>
    );
}

export default Navbar;
