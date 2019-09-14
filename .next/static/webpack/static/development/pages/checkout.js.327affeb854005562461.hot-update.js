webpackHotUpdate("static/development/pages/checkout.js",{

/***/ "./components/checkout/Confirm.js":
/*!****************************************!*\
  !*** ./components/checkout/Confirm.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Toolbar */ "./node_modules/@material-ui/core/esm/Toolbar/index.js");
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Card */ "./node_modules/@material-ui/core/esm/Card/index.js");
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/CardContent */ "./node_modules/@material-ui/core/esm/CardContent/index.js");
/* harmony import */ var _material_ui_core_Table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Table */ "./node_modules/@material-ui/core/esm/Table/index.js");
/* harmony import */ var _material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/TableBody */ "./node_modules/@material-ui/core/esm/TableBody/index.js");
/* harmony import */ var _material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/TableCell */ "./node_modules/@material-ui/core/esm/TableCell/index.js");
/* harmony import */ var _material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/TableHead */ "./node_modules/@material-ui/core/esm/TableHead/index.js");
/* harmony import */ var _material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/TableRow */ "./node_modules/@material-ui/core/esm/TableRow/index.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _contexts_ShopContext__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../contexts/ShopContext */ "./contexts/ShopContext.js");

















var styles = function styles(theme) {
  return {
    paper: {
      padding: theme.spacing(2),
      marginBottom: theme.spacing(6)
    },
    toolbar: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(1),
      color: theme.palette.secondary.main,
      backgroundColor: Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["lighten"])(theme.palette.secondary.light, 0.85)
    },
    item: {
      display: "flex",
      alignItems: "center"
    },
    img: Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({
      width: "40%",
      verticalAlign: "center"
    }, theme.breakpoints.down("xs"), {
      display: "none"
    }),
    name: {
      marginLeft: theme.spacing(4),
      cursor: "pointer"
    },
    numberCell: {
      width: "20%"
    },
    cardArea: {
      marginTop: theme.spacing(2)
    },
    total: {
      marginTop: theme.spacing(2),
      padding: theme.spacing(1),
      textAlign: "right"
    },
    totalWord: {
      fontWeight: 500,
      color: "#C52C57"
    },
    subtotal: {
      color: "#C52C57"
    }
  };
};

var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(styles);
var tableHead = ["Unit Price", "Quantity", "Total Price"];
var shippingFee = 0;

var Confirm = function Confirm(props) {
  var classes = useStyles();

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_contexts_ShopContext__WEBPACK_IMPORTED_MODULE_14__["ShopContext"]),
      cart = _useContext.cart,
      totalAmounts = _useContext.totalAmounts;

  var checkoutInput = props.checkoutInput,
      isPaid = props.isPaid,
      handleReset = props.handleReset,
      selectedItems = props.selectedItems;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_11__["default"], {
    elevation: 0,
    className: classes.paper
  }, isPaid ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: classes.toolbar
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_12__["default"], {
    color: "inherit",
    variant: "subtitle1"
  }, "Thank you for your order! Your invoice has been sent to your email, please check it.")) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_12__["default"], {
    variant: "h5"
  }, "Confirm Order"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Table__WEBPACK_IMPORTED_MODULE_6__["default"], {
    className: classes.table
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_9__["default"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_10__["default"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_8__["default"], null, "Items"), tableHead.map(function (el, i) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_8__["default"], {
      key: i,
      align: "right"
    }, el);
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_7__["default"], null, cart.map(function (el, i) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_10__["default"], {
      key: i
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_8__["default"], {
      className: classes.itemCell,
      component: "th",
      scope: "row"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: classes.item
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      className: classes.img,
      src: el.imgSrc
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_12__["default"], {
      className: classes.name
    }, el.name))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_8__["default"], {
      align: "right",
      className: classes.numberCell
    }, "$ ", el.price), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_8__["default"], {
      align: "right",
      className: classes.numberCell
    }, el.quantity), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_8__["default"], {
      align: "right",
      className: classes.numberCell
    }, "$ ", el.price * el.quantity));
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.cardArea
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: classes.card,
    elevation: 0
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_5__["default"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_12__["default"], {
    variant: "h6",
    component: "h2"
  }, "ShippingAddress"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_12__["default"], {
    variant: "body2",
    component: "p"
  }, checkoutInput.name), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_12__["default"], {
    variant: "body2",
    component: "p"
  }, checkoutInput.address), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_12__["default"], {
    variant: "body2",
    component: "p"
  }, checkoutInput.zipcode), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_12__["default"], {
    variant: "body2",
    component: "p"
  }, checkoutInput.city), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_12__["default"], {
    variant: "body2",
    component: "p"
  }, checkoutInput.country))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: classes.card,
    elevation: 0
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_5__["default"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_12__["default"], {
    variant: "h6",
    component: "h2"
  }, "Payment Info"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_12__["default"], {
    variant: "body2",
    component: "p"
  }, "Name on card: ", checkoutInput.cardName), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_12__["default"], {
    variant: "body2",
    component: "p"
  }, "Card type: ", checkoutInput.cardType), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_12__["default"], {
    variant: "body2",
    component: "p"
  }, "Card number (last four digit):", " ", checkoutInput.cardNum.toString().substr(-4))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.total
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_12__["default"], {
    className: classes.subtotal
  }, "Subtotal: $ ", totalAmounts), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_12__["default"], {
    className: classes.subtotal
  }, "Shipping Fee: $ ", shippingFee), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_12__["default"], {
    className: classes.totalWord
  }, isPaid ? "TOTAL PAID" : "TOTAL", ": $", " ", totalAmounts + shippingFee)), isPaid ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_13__["default"], {
    onClick: handleReset
  }, "Reset") : null);
};

/* harmony default export */ __webpack_exports__["default"] = (Confirm);

/***/ })

})
//# sourceMappingURL=checkout.js.327affeb854005562461.hot-update.js.map