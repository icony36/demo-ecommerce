webpackHotUpdate("static/development/pages/checkout.js",{

/***/ "./pages/checkout.js":
/*!***************************!*\
  !*** ./pages/checkout.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Container */ "./node_modules/@material-ui/core/esm/Container/index.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js");
/* harmony import */ var _material_ui_core_Stepper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Stepper */ "./node_modules/@material-ui/core/esm/Stepper/index.js");
/* harmony import */ var _material_ui_core_Step__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Step */ "./node_modules/@material-ui/core/esm/Step/index.js");
/* harmony import */ var _material_ui_core_StepLabel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/StepLabel */ "./node_modules/@material-ui/core/esm/StepLabel/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _components_checkout_CheckoutCart__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/checkout/CheckoutCart */ "./components/checkout/CheckoutCart.js");
/* harmony import */ var _components_checkout_Billing__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/checkout/Billing */ "./components/checkout/Billing.js");
/* harmony import */ var _components_checkout_Payment__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/checkout/Payment */ "./components/checkout/Payment.js");
/* harmony import */ var _components_checkout_Confirm__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/checkout/Confirm */ "./components/checkout/Confirm.js");
/* harmony import */ var _styles_CheckoutStyles__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../styles/CheckoutStyles */ "./styles/CheckoutStyles.js");
/* harmony import */ var _contexts_ShopContext__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../contexts/ShopContext */ "./contexts/ShopContext.js");
/* harmony import */ var _hooks_useInputState__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../hooks/useInputState */ "./hooks/useInputState.js");
/* harmony import */ var _components_checkout_CardFormat__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../components/checkout/CardFormat */ "./components/checkout/CardFormat.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_18__);



















var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(_styles_CheckoutStyles__WEBPACK_IMPORTED_MODULE_14__["default"]);
var initCheckout = {
  country: "",
  city: "",
  zipcode: "",
  address: "",
  name: "",
  companyName: "",
  phone: "",
  email: "",
  cardType: "",
  cardNum: "",
  cardName: "",
  cvc: "",
  expiry: "",
  items: []
};
var steps = ["Shopping Cart", "Billing & Shipping Method", "Payment Method", "Confirm Order"];

var Checkout = function Checkout() {
  function getStepContent(step) {
    switch (step) {
      case 0:
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_checkout_CheckoutCart__WEBPACK_IMPORTED_MODULE_10__["default"], {
          selected: selected,
          handleSelectAllClick: handleSelectAllClick,
          handleClick: handleClick,
          handleRemove: handleRemove
        });

      case 1:
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_checkout_Billing__WEBPACK_IMPORTED_MODULE_11__["default"], {
          checkoutInput: checkoutInput,
          setCheckoutInput: setCheckoutInput
        });

      case 2:
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_checkout_Payment__WEBPACK_IMPORTED_MODULE_12__["default"], {
          checkoutInput: checkoutInput,
          setCheckoutInput: setCheckoutInput,
          handleCardInput: handleCardInput
        });

      case 3:
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_checkout_Confirm__WEBPACK_IMPORTED_MODULE_13__["default"], null);

      default:
        return "Unknown step";
    }
  }

  var classes = useStyles();

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_contexts_ShopContext__WEBPACK_IMPORTED_MODULE_15__["ShopContext"]),
      cart = _useContext.cart,
      totalItems = _useContext.totalItems,
      totalAmounts = _useContext.totalAmounts,
      removeFromCart = _useContext.removeFromCart;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      activeStep = _useState2[0],
      setActiveStep = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(cart.length > 0 ? cart.map(function (el) {
    return el.id;
  }) : []),
      _useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState3, 2),
      selected = _useState4[0],
      setSelected = _useState4[1];

  var _useInputState = Object(_hooks_useInputState__WEBPACK_IMPORTED_MODULE_16__["default"])(initCheckout),
      _useInputState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useInputState, 2),
      checkoutInput = _useInputState2[0],
      setCheckoutInput = _useInputState2[1]; // Stepper function


  var handleNext = function handleNext() {
    setActiveStep(function (prevActiveStep) {
      return prevActiveStep + 1;
    });
  };

  var handleBack = function handleBack() {
    setActiveStep(function (prevActiveStep) {
      return prevActiveStep - 1;
    });
  };

  var handleReset = function handleReset() {
    setActiveStep(0);
  }; //CheckoutCart function


  var handleSelectAllClick = function handleSelectAllClick(event) {
    if (event.target.checked) {
      setSelected(cart.map(function (el) {
        return el.id;
      }));
      return;
    }

    setSelected([]);
  };

  var handleClick = function handleClick(event, id) {
    var selectedIndex = selected.indexOf(id);
    var newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(selected.slice(0, selectedIndex), selected.slice(selectedIndex + 1));
    }

    setSelected(newSelected);
    console.log(selected);
  };

  var removeFromSelected = function removeFromSelected(id) {
    var index = selected.findIndex(function (el) {
      return el == id;
    });
    selected.splice(index, 1);
    setSelected(selected);
  };

  var handleRemove = function handleRemove(id) {
    removeFromCart(id);
    removeFromSelected(id);
  };

  var handleRemoveBundle = function handleRemoveBundle(idArr) {
    idArr.forEach(function (el) {
      removeFromCart(el);
      removeFromSelected(el);
    });
  }; // Payment function


  var handleCardInput = function handleCardInput(evt) {
    if (evt.target.name === "cardNum") {
      evt.target.value = Object(_components_checkout_CardFormat__WEBPACK_IMPORTED_MODULE_17__["formatCreditCardNumber"])(evt.target.value);
      setCheckoutInput(evt);
    } else if (evt.target.name === "expiry") {
      evt.target.value = Object(_components_checkout_CardFormat__WEBPACK_IMPORTED_MODULE_17__["formatExpirationDate"])(evt.target.value);
      setCheckoutInput(evt);
    } else if (evt.target.name === "cvc") {
      evt.target.value = Object(_components_checkout_CardFormat__WEBPACK_IMPORTED_MODULE_17__["formatCVC"])(evt.target.value);
      setCheckoutInput(evt);
    }
  }; // Submit Checkout


  var handleSubmit = function handleSubmit(evt) {
    evt.preventDefault();
    var country = checkoutInput.country,
        city = checkoutInput.city,
        zipcode = checkoutInput.zipcode,
        address = checkoutInput.address,
        name = checkoutInput.name,
        companyName = checkoutInput.companyName,
        phone = checkoutInput.phone,
        email = checkoutInput.email,
        cardNum = checkoutInput.cardNum,
        items = checkoutInput.items; // axios
    //     .post("/checkout", {
    //         country,
    //         city,
    //         zipcode,
    //         address,
    //         name,
    //         companyName,
    //         phone,
    //         email,
    //         cardNum,
    //         items
    //     })
    //     .then(res => {
    //         console.log("Order is sent!: " + res.status);
    //     })
    //     .catch(err => {
    //         console.log(err, "Can't submit order!");
    //     });

    alert("".concat(country, ",\n            ").concat(city, ",\n            ").concat(zipcode, ",\n            ").concat(address, ",\n            ").concat(name, ",\n            ").concat(companyName, ",\n            ").concat(phone, ",\n            ").concat(email, ",\n            ").concat(cardNum, ",\n            ").concat(items));
    handleNext();
  };

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_3__["default"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__["default"], {
    className: classes.title,
    variant: "h5"
  }, "Checkout"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Stepper__WEBPACK_IMPORTED_MODULE_5__["default"], {
    activeStep: activeStep
  }, steps.map(function (label, index) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Step__WEBPACK_IMPORTED_MODULE_6__["default"], {
      key: index
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_StepLabel__WEBPACK_IMPORTED_MODULE_7__["default"], {
      StepIconProps: {
        classes: {
          completed: classes.icon,
          active: classes.icon
        }
      }
    }, label));
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_4__["default"], {
    elevation: 0,
    className: classes.paper
  }, activeStep === steps.length ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__["default"], {
    className: classes.instructions
  }, "All steps completed - you're finished"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8__["default"], {
    onClick: handleReset,
    className: classes.btnReset
  }, "Reset")) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, getStepContent(activeStep), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, activeStep === steps.length - 1 ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8__["default"], {
    variant: "contained",
    color: "secondary",
    className: classes.btnNext,
    onClick: handleSubmit
  }, "Finish") : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8__["default"], {
    variant: "contained",
    color: "secondary",
    onClick: handleNext,
    className: classes.btnNext
  }, "Next"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8__["default"], {
    disabled: activeStep === 0,
    onClick: handleBack,
    className: classes.btnBack
  }, "Back"))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Checkout);

/***/ })

})
//# sourceMappingURL=checkout.js.508db6d79fdb16cd49d8.hot-update.js.map