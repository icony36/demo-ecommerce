webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/Cart.js":
/*!****************************!*\
  !*** ./components/Cart.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js");
/* harmony import */ var _material_ui_core_Popper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Popper */ "./node_modules/@material-ui/core/esm/Popper/index.js");
/* harmony import */ var _material_ui_core_ClickAwayListener__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/ClickAwayListener */ "./node_modules/@material-ui/core/esm/ClickAwayListener/index.js");
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/MenuItem */ "./node_modules/@material-ui/core/esm/MenuItem/index.js");
/* harmony import */ var _material_ui_core_MenuList__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/MenuList */ "./node_modules/@material-ui/core/esm/MenuList/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/icons/Close */ "./node_modules/@material-ui/icons/Close.js");
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _components_ScrollBar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/ScrollBar */ "./components/ScrollBar.js");
/* harmony import */ var _contexts_ShopContext__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../contexts/ShopContext */ "./contexts/ShopContext.js");
















var styles = function styles(theme) {
  return {
    popper: {
      zIndex: 1300,
      '&[x-placement*="bottom"] $arrow': {
        top: 0,
        left: 0,
        marginTop: "-0.9em",
        width: "3em",
        height: "1em",
        "&::before": {
          borderWidth: "0 1em 1em 1em",
          borderColor: "transparent transparent ".concat(theme.palette.common.white, " transparent")
        }
      }
    },
    arrow: {
      position: "absolute",
      fontSize: 7,
      width: "3em",
      height: "3em",
      "&::before": {
        content: '""',
        margin: "auto",
        display: "block",
        width: 0,
        height: 0,
        borderStyle: "solid"
      }
    },
    closeBtn: {
      margin: theme.spacing(1),
      textTransform: "uppercase"
    },
    cart: {
      height: "300px",
      width: "500px",
      textAlign: "center"
    },
    menuItem: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      cursor: "text"
    },
    link: {
      display: "flex",
      cursor: "pointer"
    },
    itemContent: {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-start"
    },
    img: {
      width: "30%",
      padding: theme.spacing(1)
    },
    price: {
      margin: theme.spacing(1),
      fontWeight: 500
    },
    qty: {
      margin: theme.spacing(1)
    },
    removeBtn: {
      zIndex: 99
    },
    total: {
      display: "flex",
      padding: theme.spacing(1),
      alignItems: "center",
      justifyContent: "space-around"
    },
    totalWord: {
      fontWeight: 500,
      color: "#C52C57",
      textTransform: "uppercase"
    },
    checkoutArea: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    },
    checkoutBtn: {
      backgroundColor: "PaleVioletRed",
      margin: theme.spacing(2)
    }
  };
};

var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(styles);

var Cart = function Cart(props) {
  var classes = useStyles();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      arrowRef = _useState2[0],
      useArrowRef = _useState2[1];

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_contexts_ShopContext__WEBPACK_IMPORTED_MODULE_14__["ShopContext"]),
      cart = _useContext.cart,
      totalItems = _useContext.totalItems,
      totalAmounts = _useContext.totalAmounts,
      removeFromCart = _useContext.removeFromCart;

  var handleArrowRef = function handleArrowRef(node) {
    useArrowRef(node);
  };

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Popper__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: classes.popper,
    anchorEl: props.cartAnchorEl,
    open: props.isCartOpen,
    placement: "bottom",
    modifiers: {
      arrow: {
        enabled: true,
        element: arrowRef
      }
    }
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: classes.arrow,
    ref: handleArrowRef
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_ClickAwayListener__WEBPACK_IMPORTED_MODULE_5__["default"], {
    onClickAway: props.handleCartClick
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_3__["default"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_11__["default"], {
    onClick: props.handleCartClick,
    className: classes.closeBtn
  }, "Close"), cart.length > 0 ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.cart
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_ScrollBar__WEBPACK_IMPORTED_MODULE_13__["default"], {
    width: "500px",
    height: "300px"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_MenuList__WEBPACK_IMPORTED_MODULE_7__["default"], null, cart.map(function (el, i) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_6__["default"], {
      key: i,
      className: classes.menuItem
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_12___default.a, {
      href: "/shop/[id]",
      as: "/shop/".concat(el.id),
      key: i
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: classes.link
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: classes.itemContent
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      className: classes.img,
      src: el.imgSrc
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__["default"], {
      variant: "h6",
      className: classes.word
    }, el.name)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__["default"], {
      variant: "body1",
      className: classes.price
    }, "$ ", el.price), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__["default"], {
      variant: "subtitle2",
      color: "textSecondary",
      className: classes.qty
    }, "Qty:", " ", el.quantity)))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_9__["default"], {
      className: classes.removeBtn,
      key: "close",
      "aria-label": "close",
      color: "inherit",
      onClick: function onClick() {
        return removeFromCart(el.id);
      }
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_10___default.a, null)));
  })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.total
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__["default"], {
    className: classes.totalWord
  }, "Items in cart: ", totalItems), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__["default"], {
    className: classes.totalWord
  }, "Subtotal: $ ", totalAmounts))) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.cart
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: "/static/images/empty-cart.png"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__["default"], null, "Cart is empty!")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.checkoutArea
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_12___default.a, {
    href: "/checkout"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_11__["default"], {
    color: "secondary",
    variant: "contained",
    className: classes.checkoutBtn,
    onClick: props.handleCartClick,
    disabled: cart.length > 0 ? false : true
  }, "Proceed to Checkout"))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Cart);

/***/ })

})
//# sourceMappingURL=_app.js.b03d27c1b6e79e8f0784.hot-update.js.map