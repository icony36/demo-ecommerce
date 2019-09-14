webpackHotUpdate("static/development/pages/checkout.js",{

/***/ "./components/checkout/CheckoutCart.js":
/*!*********************************************!*\
  !*** ./components/checkout/CheckoutCart.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _material_ui_core_Table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Table */ "./node_modules/@material-ui/core/esm/Table/index.js");
/* harmony import */ var _material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/TableBody */ "./node_modules/@material-ui/core/esm/TableBody/index.js");
/* harmony import */ var _material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/TableCell */ "./node_modules/@material-ui/core/esm/TableCell/index.js");
/* harmony import */ var _material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/TableHead */ "./node_modules/@material-ui/core/esm/TableHead/index.js");
/* harmony import */ var _material_ui_core_TablePagination__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/TablePagination */ "./node_modules/@material-ui/core/esm/TablePagination/index.js");
/* harmony import */ var _material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/TableRow */ "./node_modules/@material-ui/core/esm/TableRow/index.js");
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/MenuItem */ "./node_modules/@material-ui/core/esm/MenuItem/index.js");
/* harmony import */ var _material_ui_core_TableSortLabel__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/TableSortLabel */ "./node_modules/@material-ui/core/esm/TableSortLabel/index.js");
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/Toolbar */ "./node_modules/@material-ui/core/esm/Toolbar/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js");
/* harmony import */ var _material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core/Checkbox */ "./node_modules/@material-ui/core/esm/Checkbox/index.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var _material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @material-ui/core/Tooltip */ "./node_modules/@material-ui/core/esm/Tooltip/index.js");
/* harmony import */ var _material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @material-ui/core/FormControlLabel */ "./node_modules/@material-ui/core/esm/FormControlLabel/index.js");
/* harmony import */ var _material_ui_core_Switch__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @material-ui/core/Switch */ "./node_modules/@material-ui/core/esm/Switch/index.js");
/* harmony import */ var _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @material-ui/icons/Delete */ "./node_modules/@material-ui/icons/Delete.js");
/* harmony import */ var _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _material_ui_icons_FilterList__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @material-ui/icons/FilterList */ "./node_modules/@material-ui/icons/FilterList.js");
/* harmony import */ var _material_ui_icons_FilterList__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_FilterList__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @material-ui/icons/Close */ "./node_modules/@material-ui/icons/Close.js");
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var _contexts_ShopContext__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../contexts/ShopContext */ "./contexts/ShopContext.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");





























var ToolbarStyles = function ToolbarStyles(theme) {
  return {
    toolbar: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(1),
      color: theme.palette.secondary.main,
      backgroundColor: Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["lighten"])(theme.palette.secondary.light, 0.85)
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
  };
};

var useToolbarStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(ToolbarStyles);

var EnhancedToolbar = function EnhancedToolbar(props) {
  var classes = useToolbarStyles();
  var numSelected = props.numSelected,
      removeAll = props.removeAll;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_13__["default"], {
    className: classes.toolbar
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.title
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_14__["default"], {
    color: "inherit",
    variant: "subtitle1"
  }, numSelected, " ", numSelected > 1 ? "items" : "item", " selected")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.spacer
  }));
};

var styles = function styles(theme) {
  return {
    paper: {
      marginBottom: theme.spacing(6),
      overflowX: "auto"
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
      marginLeft: theme.spacing(2),
      cursor: "pointer"
    },
    numberCell: {
      width: "20%"
    },
    total: {
      padding: theme.spacing(1),
      "float": "right",
      textAlign: "right"
    },
    totalWord: {
      fontWeight: 500,
      color: "#C52C57"
    }
  };
};

var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(styles);
var tableHead = ["Unit Price", "Quantity", "Total Price", "Actions"];

var CheckoutCart = function CheckoutCart(props) {
  var classes = useStyles();

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_contexts_ShopContext__WEBPACK_IMPORTED_MODULE_25__["ShopContext"]),
      cart = _useContext.cart,
      totalItems = _useContext.totalItems,
      totalAmounts = _useContext.totalAmounts;

  var selected = props.selected,
      handleSelectAllClick = props.handleSelectAllClick,
      handleClick = props.handleClick,
      handleRemove = props.handleRemove;

  var isSelected = function isSelected(id) {
    return selected.indexOf(id) !== -1;
  };

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_15__["default"], {
    elevation: 0,
    className: classes.paper
  }, selected.length > 0 ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(EnhancedToolbar, {
    numSelected: selected.length,
    removeAll: function removeAll() {
      return handleRemoveBundle(selected);
    }
  }) : "", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Table__WEBPACK_IMPORTED_MODULE_5__["default"], {
    className: classes.table
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_8__["default"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_10__["default"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_7__["default"], {
    padding: "checkbox"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_16__["default"], {
    checked: cart.length > 0 ? selected.length === cart.length : false,
    onChange: handleSelectAllClick
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_7__["default"], null, "Items"), tableHead.map(function (el, i) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_7__["default"], {
      key: i,
      align: "right"
    }, el);
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_6__["default"], null, cart.map(function (el, i) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_10__["default"], {
      key: i
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_7__["default"], {
      padding: "checkbox"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_16__["default"], {
      checked: isSelected(el.id),
      onChange: function onChange(event) {
        return handleClick(event, el.id);
      }
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_7__["default"], {
      className: classes.itemCell,
      component: "th",
      scope: "row"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: classes.item
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      className: classes.img,
      src: el.imgSrc
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_24___default.a, {
      href: "/shop/[id]",
      as: "/shop/".concat(el.id)
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_14__["default"], {
      className: classes.name
    }, el.name)))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_7__["default"], {
      align: "right",
      className: classes.numberCell
    }, "$ ", el.price), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_7__["default"], {
      align: "right",
      className: classes.numberCell
    }, el.quantity), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_7__["default"], {
      align: "right",
      className: classes.numberCell
    }, "$ ", el.price * el.quantity), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_7__["default"], {
      align: "right",
      className: classes.actionCell
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_17__["default"], {
      onClick: handleRemove
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_23___default.a, null))));
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.total
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_14__["default"], {
    className: classes.totalWord
  }, "TOTAL (", totalItems, " ", totalItems > 1 ? "items" : "item", "): $", " ", totalAmounts)));
};

/* harmony default export */ __webpack_exports__["default"] = (CheckoutCart);

/***/ })

})
//# sourceMappingURL=checkout.js.7e074139dc23b80b4581.hot-update.js.map