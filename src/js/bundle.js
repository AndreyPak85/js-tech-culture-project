/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/modules/calc.js":
/*!********************************!*\
  !*** ./src/js/modules/calc.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"calc\": () => (/* binding */ calc)\n/* harmony export */ });\nfunction calc() {\r\n    /** \r\n     * Реализовать калькулятор цены взять со страниц клубов\r\n     * \r\n     */\r\n\r\n    const price = document.querySelector(\"#price-total\");\r\n    const inputMozaika = document.querySelector(\"#card_leto_mozaika\");\r\n    const inputShelkovo = document.querySelector(\"#card_leto_schelkovo\");\r\n    const priceBtns = document.querySelectorAll(\".time label\");\r\n    const cardOrder = document.querySelector(\"#card_order\");\r\n    const promoCode = document.querySelector(\".price-message input\")\r\n\r\n    let secretCode = \"ТЕЛО2019\"\r\n    let chkWord = '';\r\n\r\n    promoCode.addEventListener(\"input\", (e) => {\r\n        chkWord = e.target.value;\r\n    })\r\n\r\n    let formBtn = ''\r\n    const getPrice = (btn) => {\r\n        if (btn == \"card_leto_schelkovo\") btn = formBtn;\r\n        if (btn == \"card_leto_mozaika\") btn = formBtn;\r\n\r\n        switch (btn) {\r\n            case \"m1\": {\r\n                if (inputMozaika.checked) {\r\n                    price.textContent = \"1990\";\r\n                } else {\r\n                    price.textContent = \"2990\"\r\n                }\r\n                formBtn = \"m1\";\r\n                break;\r\n            }\r\n            case \"m2\": {\r\n                if (inputMozaika.checked) {\r\n                    price.textContent = \"9900\"\r\n\r\n                } else {\r\n                    price.textContent = \"14990\"\r\n                }\r\n                formBtn = \"m2\";\r\n                break;\r\n            }\r\n            case \"m3\": {\r\n                if (inputMozaika.checked) {\r\n                    price.textContent = \"13900\"\r\n                } else {\r\n                    price.textContent = \"21990\"\r\n                }\r\n                formBtn = \"m3\";\r\n                break;\r\n            }\r\n            case \"m4\": {\r\n                if (inputMozaika.checked) {\r\n                    price.textContent = \"19900\"\r\n                } else {\r\n                    price.textContent = \"24990\"\r\n                }\r\n                formBtn = \"m4\";\r\n                break;\r\n            }\r\n        }\r\n    }\r\n\r\n    const checkPromo = (word) => {\r\n        if (word.value.toLowerCase() == secretCode.toLowerCase()) {\r\n            price.textContent = Math.round(parseInt(price.textContent) * 0.7)\r\n        }\r\n    }\r\n\r\n    cardOrder.addEventListener(\"change\", (e) => {\r\n        getPrice(e.target.id);\r\n        checkPromo(e.target);\r\n    });\r\n\r\n\r\n\r\n}\n\n//# sourceURL=webpack://src/./src/js/modules/calc.js?");

/***/ }),

/***/ "./src/js/modules/checkRu.js":
/*!***********************************!*\
  !*** ./src/js/modules/checkRu.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"checkTextInputs\": () => (/* binding */ checkTextInputs)\n/* harmony export */ });\n/**\r\n * Заполнение имени и комментария - только на русском языке. \r\n */\r\n\r\nconst checkTextInputs = (selector) => {\r\n    const txtInputs = document.querySelectorAll(selector);\r\n\r\n    txtInputs.forEach(input => {\r\n        input.addEventListener('keypress', function (e) {\r\n            if (e.key.match(/[^а-я 0-9]/ig)) {\r\n                e.preventDefault();\r\n            }\r\n        });\r\n    });\r\n};\n\n//# sourceURL=webpack://src/./src/js/modules/checkRu.js?");

/***/ }),

/***/ "./src/js/modules/close-modal.js":
/*!***************************************!*\
  !*** ./src/js/modules/close-modal.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"closeModal\": () => (/* binding */ closeModal)\n/* harmony export */ });\nfunction closeModal(selector) {\r\n\r\n    const closeElement = document.querySelectorAll(selector);\r\n\r\n    closeElement.forEach(item => {\r\n        item.addEventListener(\"click\", () => {\r\n            document.querySelectorAll('.popup').forEach(item => {\r\n                item.classList.remove('display-block');\r\n            })\r\n        })\r\n\r\n    })\r\n}\n\n//# sourceURL=webpack://src/./src/js/modules/close-modal.js?");

/***/ }),

/***/ "./src/js/modules/favicon.js":
/*!***********************************!*\
  !*** ./src/js/modules/favicon.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"favicon\": () => (/* binding */ favicon)\n/* harmony export */ });\n/**\r\n * Устанавливаем favicon\r\n */\r\n\r\nfunction favicon() {\r\n    let link = document.querySelector(\"link[rel~='icon']\");\r\n    if (!link) {\r\n        link = document.createElement('link');\r\n        link.rel = 'icon';\r\n        document.getElementsByTagName('head')[0].appendChild(link);\r\n    }\r\n    link.href = './images/favicon-16x16.png';\r\n\r\n}\n\n//# sourceURL=webpack://src/./src/js/modules/favicon.js?");

/***/ }),

/***/ "./src/js/modules/forms.js":
/*!*********************************!*\
  !*** ./src/js/modules/forms.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"forms\": () => (/* binding */ forms)\n/* harmony export */ });\nfunction forms() {\r\n    /** \r\n     * Все формы на странице и в модальных окнах должны отправляться посредством \r\n     * ajax(без перезагрузки страницы) и захватывать все введенные данные. \r\n     * Также необходимо оповестить пользователя о состоянии отправки (идет отправка, отправлено, ошибка). \r\n     * В последних двух состояниях необходимо заменить сам контент модального окна на оповещение. \r\n     * Необходима маска или валидация номера телефона (нужное кол-во чисел, код). \r\n     * Заполнение имени и комментария - только на русском языке.\r\n     */\r\n\r\n    // Callback form    \r\n    const form1 = document.querySelector(\"#form1\")\r\n    const check = document.querySelector(\"#check\");\r\n    const divMessage1 = document.createElement(\"div\")\r\n    divMessage1.style.color = \"white\";\r\n    divMessage1.style.fontSize = \"18px\";\r\n    form1.append(divMessage1);\r\n\r\n    form1.addEventListener(\"submit\", (e) => {\r\n        e.preventDefault();\r\n        thanksModal.classList.add(\"display-block\")\r\n        divMessage1.textContent = \"Идет отправка \";\r\n        const formData = new FormData(form1);\r\n        if (check.checked) {\r\n            fetch(\"server.php\", {\r\n                    method: \"POST\",\r\n                    body: formData\r\n                })\r\n                .then((response) => {\r\n                    return response.text()\r\n                })\r\n                .then((text) => {\r\n                    divMessage1.textContent = \"Данные отправлены\";\r\n                    console.log(text)\r\n                })\r\n                .catch((error) => {\r\n                    divMessage1.textContent = \"Возникла ошибка\";\r\n                    thanksModalFormContent.textContent = \"НЕ УДАЧА!\"\r\n                    thanksModalFormContentP.textContent = \"Что то случилось не так, Ваша форма не отправлена\"\r\n                    thanksModal.classList.add(\"display-block\");\r\n                    setTimeout(() => {\r\n                        thanksModal.classList.remove(\"display-block\")\r\n                    }, 3000)\r\n                    console.log(error)\r\n                })\r\n        } else {\r\n            divMessage1.textContent = \"Не стоит галочка согласен на обработку данных, необходимо подтвердить согласие\";\r\n        }\r\n    })\r\n\r\n    //Visit form\r\n    const form2 = document.querySelector(\"#form2\");\r\n    const check2 = document.querySelector(\"#check2\");\r\n    const divMessage2 = document.createElement(\"div\")\r\n    divMessage2.style.color = \"white\";\r\n    divMessage2.style.fontSize = \"18px\";\r\n    form2.append(divMessage2);\r\n\r\n    form2.addEventListener(\"submit\", (e) => {\r\n        e.preventDefault();\r\n        thanksModal.classList.add(\"display-block\")\r\n        thanksModalFormContent.textContent = \"Отправка!\"\r\n        thanksModalFormContentP.textContent = \"Данные отправляются\"\r\n        divMessage2.textContent = \"Идет отправка\";\r\n        const formData = new FormData(form2);\r\n        if (check2.checked) {\r\n            fetch(\"server.php\", {\r\n                    method: \"POST\",\r\n                    body: formData\r\n                })\r\n                .then((response) => {\r\n                    return response.text()\r\n                })\r\n                .then((text) => {\r\n                    console.log(text)\r\n                    thanksModalFormContent.textContent = \"УДАЧА\"\r\n                    thanksModalFormContentP.textContent = \"Данные отправлены\"\r\n                    setTimeout(() => {\r\n\r\n                        thanksModal.classList.remove(\"display-block\")\r\n                    }, 3000)\r\n                    divMessage2.textContent = \"Данные отправлены\";\r\n                })\r\n                .catch((error) => {\r\n                    divMessage2.textContent = \"Возникла ошибка\"\r\n                    thanksModalFormContent.textContent = \"НЕ УДАЧА!\"\r\n                    thanksModalFormContentP.textContent = \"Что то случилось не так, Ваша форма не отправлена\"\r\n                    thanksModal.classList.add(\"display-block\");\r\n                    setTimeout(() => {\r\n                        thanksModal.classList.remove(\"display-block\")\r\n                    }, 3000)\r\n                    console.log(error)\r\n                })\r\n        } else {\r\n            divMessage2.textContent = \"Не стоит галочка согласен на обработку данных, необходимо подтвердить согласие\";\r\n        }\r\n    })\r\n\r\n    //Card order\r\n\r\n    const cardForm = document.querySelector(\"#card_order\");\r\n    const cardMessage = document.createElement(\"div\");\r\n    const cardCheck = document.querySelector(\"#card_check\");\r\n    cardMessage.style.fontSize = \"18px\";\r\n    cardForm.append(cardMessage);\r\n    cardForm.addEventListener(\"submit\", (e) => {\r\n        e.preventDefault();\r\n        thanksModal.classList.add(\"display-block\")\r\n        thanksModalFormContent.textContent = \"Отправка!\"\r\n        thanksModalFormContentP.textContent = \"Данные отправляются\"\r\n        cardMessage.textContent = \"Идет отправка\";\r\n        const formData = new FormData(cardForm);\r\n        if (cardCheck.checked) {\r\n            fetch(\"server.php\", {\r\n                    method: \"POST\",\r\n                    body: formData\r\n                })\r\n                .then((response) => {\r\n                    return response.text()\r\n                })\r\n                .then((text) => {\r\n                    console.log(text)\r\n                    thanksModalFormContent.textContent = \"УДАЧА\"\r\n                    thanksModalFormContentP.textContent = \"Данные отправлены\"\r\n                    setTimeout(() => {\r\n\r\n                        thanksModal.classList.remove(\"display-block\")\r\n                    }, 3000)\r\n                    cardMessage.textContent = \"Данные отправлены\"\r\n                })\r\n                .catch((error) => {\r\n                    cardMessage.textContent = \"Возникла ошибка\"\r\n                    thanksModalFormContent.textContent = \"НЕ УДАЧА!\"\r\n                    thanksModalFormContentP.textContent = \"Что то случилось не так, Ваша форма не отправлена\"\r\n                    thanksModal.classList.add(\"display-block\");\r\n                    setTimeout(() => {\r\n                        thanksModal.classList.remove(\"display-block\")\r\n                    }, 3000)\r\n                    console.log(error)\r\n                })\r\n        } else {\r\n            cardMessage.textContent = \"Не стоит галочка согласен на обработку данных, необходимо подтвердить согласие\";\r\n        }\r\n    })\r\n\r\n    // Необходима маска или валидация номера телефона (нужное кол-во чисел, код). \r\n    // Mask\r\n\r\n\r\n\r\n    /** \r\n     * Форма отправки данных, запретить отправку если не стоит галочка согласен на обработку данных и \r\n     * сообщить пользователю что необходимо подтвердить согласие.\r\n     * После отправки данных вывести модальное окно c id=\"thanks\" \r\n     * в котором сообщение об успешной отправки или об ошибке если отправка не удалась\r\n     * \r\n\r\n     */\r\n\r\n\r\n    const thanksModal = document.querySelector(\"#thanks\");\r\n    const bannerForm = document.querySelector(\"#banner-form\");\r\n    const check1 = document.querySelector(\"#check1\");\r\n    const message1 = document.createElement(\"div\")\r\n    message1.style.fontSize = \"24px\";\r\n    message1.style.marginTop = \"20px\";\r\n    bannerForm.append(message1)\r\n\r\n    bannerForm.addEventListener(\"submit\", (e) => {\r\n        e.preventDefault();\r\n        message1.textContent = \"Данные отправляются\";\r\n        if (check1.checked) {\r\n            message1.textContent = \"\";\r\n            const formData = new FormData(bannerForm);\r\n            fetch(\"server.php\", {\r\n                    method: \"POST\",\r\n                    body: formData\r\n                })\r\n                .then((response) => {\r\n                    return response.text()\r\n                })\r\n                .then((text) => {\r\n                    console.log(text)\r\n                    message1.textContent = \"Данные отправлены!\"\r\n                    thanksModal.classList.add(\"display-block\")\r\n                    setTimeout(() => {\r\n                        thanksModal.classList.remove(\"display-block\")\r\n                    }, 3000)\r\n                })\r\n                .catch((error) => {\r\n                    message1.textContent = \"Отправка не удалась\";\r\n                    thanksModalFormContent.textContent = \"НЕ УДАЧА!\"\r\n                    thanksModalFormContentP.textContent = \"Что то случилось не так, Ваша форма не отправлена\"\r\n                    thanksModal.classList.add(\"display-block\");\r\n                    setTimeout(() => {\r\n                        thanksModal.classList.remove(\"display-block\")\r\n                    }, 3000)\r\n                    console.log(error)\r\n\r\n                })\r\n        } else {\r\n            message1.textContent = \"Не стоит галочка согласен на обработку данных, необходимо подтвердить согласие\";\r\n        }\r\n    })\r\n\r\n    const removeDisplayBlock = (element) => {\r\n        element.classList.remove(\"display-block\");\r\n    }\r\n\r\n    const thanksModalOverlay = thanksModal.querySelector(\".overlay\");\r\n    const thanksModalClose = thanksModal.querySelector(\".close-form img\");\r\n    const thanksModalCloseBtn = thanksModal.querySelector(\".close-btn\");\r\n    const thanksModalFormContent = thanksModal.querySelector(\".form-content h4\")\r\n    const thanksModalFormContentP = thanksModal.querySelector(\".form-content p\")\r\n\r\n    thanksModalOverlay.addEventListener(\"click\", () => {\r\n        removeDisplayBlock(thanksModal);\r\n    });\r\n    thanksModalClose.addEventListener(\"click\", () => {\r\n        removeDisplayBlock(thanksModal);\r\n    });\r\n    thanksModalCloseBtn.addEventListener(\"click\", () => {\r\n        removeDisplayBlock(thanksModal);\r\n    })\r\n\r\n\r\n    /** \r\n     * Отправка формы должна передать данные по выбраному клубу и номер телефона, маска или валидация обязательна, \r\n     * после отправки открыть модальное окно с id=\"thanks\" и если отправка была неудачной сообщить в модальном окне о неудачной отправке\r\n     */\r\n\r\n    const footerForm = document.querySelector(\"#footer_form\");\r\n\r\n    footerForm.addEventListener(\"submit\", (e) => {\r\n        e.preventDefault();\r\n        thanksModal.classList.add(\"display-block\")\r\n\r\n        const formData = new FormData(footerForm);\r\n        fetch(\"server.php\", {\r\n                method: \"POST\",\r\n                body: formData\r\n            })\r\n            .then((response) => {\r\n                return response.text()\r\n            })\r\n            .then((text) => {\r\n                console.log(text)\r\n                setTimeout(() => {\r\n                    thanksModal.classList.remove(\"display-block\")\r\n                }, 3000)\r\n            })\r\n            .catch((error) => {\r\n                thanksModalFormContent.textContent = \"НЕ УДАЧА!\"\r\n                thanksModalFormContentP.textContent = \"Что то случилось не так, Ваша форма не отправлена\"\r\n                thanksModal.classList.add(\"display-block\");\r\n                setTimeout(() => {\r\n                    thanksModal.classList.remove(\"display-block\")\r\n                }, 3000)\r\n                console.log(error)\r\n\r\n            })\r\n\r\n    })\r\n}\n\n//# sourceURL=webpack://src/./src/js/modules/forms.js?");

/***/ }),

/***/ "./src/js/modules/gift.js":
/*!********************************!*\
  !*** ./src/js/modules/gift.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"gift\": () => (/* binding */ gift)\n/* harmony export */ });\n/* harmony import */ var _show_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./show-modal */ \"./src/js/modules/show-modal.js\");\n/** \r\n * При клике на подарок должно появляться модальное окно (id=\"gift\") и сам подарок полностью исчезает со страницы. \r\n * При нажатии на крестик или подложку окно исчезает.\r\n */\r\n\r\n\r\n\r\nfunction gift(selector, showElement) {\r\n\r\n    (0,_show_modal__WEBPACK_IMPORTED_MODULE_0__.showModal)(selector, showElement)\r\n    document.querySelector(selector).addEventListener('click', (e) => {\r\n        e.target.remove();\r\n    })\r\n}\n\n//# sourceURL=webpack://src/./src/js/modules/gift.js?");

/***/ }),

/***/ "./src/js/modules/mask.js":
/*!********************************!*\
  !*** ./src/js/modules/mask.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"mask\": () => (/* binding */ mask)\n/* harmony export */ });\n/**\r\n * Необходима маска или валидация номера телефона (нужное кол-во чисел, код). \r\n */\r\n\r\nfunction mask(selector, masked = '+7 (___) ___-__-__') {\r\n    const elems = document.querySelectorAll(selector);\r\n\r\n    function createMask(event) {\r\n        const keyCode = event.keyCode;\r\n        const template = masked,\r\n            def = template.replace(/\\D/g, \"\"),\r\n            val = this.value.replace(/\\D/g, \"\");\r\n        let i = 0,\r\n            newValue = template.replace(/[_\\d]/g, function (a) {\r\n                return i < val.length ? val.charAt(i++) || def.charAt(i) : a;\r\n            });\r\n        i = newValue.indexOf(\"_\");\r\n        if (i !== -1) {\r\n            newValue = newValue.slice(0, i);\r\n        }\r\n        let reg = template.substr(0, this.value.length).replace(/_+/g,\r\n            function (a) {\r\n                return \"\\\\d{1,\" + a.length + \"}\";\r\n            }).replace(/[+()]/g, \"\\\\$&\");\r\n        reg = new RegExp(\"^\" + reg + \"$\");\r\n        if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) {\r\n            this.value = newValue;\r\n        }\r\n        if (event.type === \"blur\" && this.value.length < 5) {\r\n            this.value = \"\";\r\n        }\r\n\r\n    }\r\n\r\n    for (const elem of elems) {\r\n        elem.addEventListener(\"input\", createMask);\r\n        elem.addEventListener(\"focus\", createMask);\r\n        elem.addEventListener(\"blur\", createMask);\r\n    }\r\n\r\n}\n\n//# sourceURL=webpack://src/./src/js/modules/mask.js?");

/***/ }),

/***/ "./src/js/modules/popup.js":
/*!*********************************!*\
  !*** ./src/js/modules/popup.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"popup\": () => (/* binding */ popup)\n/* harmony export */ });\n/** \r\n * При клике на кнопку “Выбрать клуб”\r\n * открывается выпадающее меню (есть в верстке)\r\n */\r\n\r\nfunction popup(selector, selectorDisplay) {\r\n\r\n    const popupClick = document.querySelector(selector);\r\n    const popupDisplay = document.querySelector(selectorDisplay)\r\n\r\n\r\n    popupClick.addEventListener(\"click\", (e) => {\r\n        popupDisplay.classList.toggle('display-block');\r\n    })\r\n\r\n}\n\n//# sourceURL=webpack://src/./src/js/modules/popup.js?");

/***/ }),

/***/ "./src/js/modules/show-modal.js":
/*!**************************************!*\
  !*** ./src/js/modules/show-modal.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"showModal\": () => (/* binding */ showModal)\n/* harmony export */ });\nfunction showModal(selector, showElement) {\r\n\r\n    const clickModal = document.querySelector(selector);\r\n    const showModal = document.querySelector(showElement);\r\n\r\n    clickModal.addEventListener('click', () => {\r\n        showModal.classList.add('display-block');\r\n    })\r\n}\n\n//# sourceURL=webpack://src/./src/js/modules/show-modal.js?");

/***/ }),

/***/ "./src/js/modules/sliders.js":
/*!***********************************!*\
  !*** ./src/js/modules/sliders.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"sliderMain\": () => (/* binding */ sliderMain),\n/* harmony export */   \"sliderPortfolio\": () => (/* binding */ sliderPortfolio),\n/* harmony export */   \"sliderService\": () => (/* binding */ sliderService)\n/* harmony export */ });\nfunction sliderMain(selector) {\r\n\r\n    let count = 0;\r\n    const mainSlider = document.querySelectorAll(selector);\r\n    setInterval(() => {\r\n        if (count == 5) count = 0;\r\n        mainSlider[count].classList.add(\"slide-active\");\r\n        mainSlider[mainSlider.length - 1].classList.remove(\"slide-active\");\r\n        if (count > 0) {\r\n            mainSlider[count].classList.add(\"slide-active\");\r\n            mainSlider[count - 1].classList.remove(\"slide-active\");\r\n        }\r\n        count++;\r\n    }, 1000)\r\n\r\n}\r\n\r\n\r\nfunction sliderPortfolio(selector) {\r\n    const portfolioSlider = document.querySelector(selector);\r\n    const portfolioRight = portfolioSlider.querySelector('#arrow-right');\r\n    const portfolioLeft = portfolioSlider.querySelector('#arrow-left');\r\n    const portfolioSlides = portfolioSlider.querySelectorAll('.slide');\r\n    const portfolioDots = portfolioSlider.querySelectorAll('.dot');\r\n\r\n    let portfolioIndex = 0;\r\n\r\n    portfolioRight.addEventListener('click', (e) => {\r\n        e.preventDefault();\r\n        portfolioIndex++;\r\n        if (portfolioIndex == 5) portfolioIndex = 0;\r\n        if (portfolioIndex == 0) {\r\n            portfolioSlides[portfolioIndex].classList.add(\"slide-active\");\r\n            portfolioSlides[portfolioSlides.length - 1].classList.remove(\"slide-active\");\r\n            portfolioDots[portfolioIndex].classList.add(\"dot-active\");\r\n            portfolioDots[(portfolioDots.length - 1)].classList.remove('dot-active');\r\n        }\r\n\r\n        if (portfolioIndex > 0) {\r\n            portfolioSlides[portfolioIndex].classList.add(\"slide-active\");\r\n            portfolioSlides[portfolioIndex - 1].classList.remove(\"slide-active\");\r\n            portfolioDots[portfolioIndex].classList.add(\"dot-active\");\r\n            portfolioDots[portfolioIndex - 1].classList.remove(\"dot-active\");\r\n        }\r\n    })\r\n\r\n    portfolioLeft.addEventListener('click', (e) => {\r\n        e.preventDefault();\r\n        portfolioIndex--;\r\n        if (portfolioIndex < 0) portfolioIndex = 4;\r\n        if (portfolioIndex == 4) {\r\n            portfolioSlides[portfolioIndex].classList.add(\"slide-active\");\r\n            portfolioSlides[0].classList.remove(\"slide-active\");\r\n            portfolioDots[portfolioIndex].classList.add(\"dot-active\");\r\n            portfolioDots[0].classList.remove(\"dot-active\");\r\n        }\r\n        if (portfolioIndex < 4) {\r\n            portfolioSlides[portfolioIndex].classList.add(\"slide-active\");\r\n            portfolioSlides[portfolioIndex + 1].classList.remove(\"slide-active\");\r\n            portfolioDots[portfolioIndex].classList.add(\"dot-active\");\r\n            galleryDots[portfolioIndex + 1].classList.remove(\"dot-active\");\r\n        }\r\n    })\r\n}\r\n\r\n\r\nfunction sliderService(selector) {\r\n    const servicesSlider = document.querySelector(selector);\r\n    const arrowLeft = servicesSlider.querySelector(\"#arrow-left\");\r\n    const arrowRight = servicesSlider.querySelector(\"#arrow-right\");\r\n    const servicesSlides = servicesSlider.querySelectorAll(\".slide\");\r\n    const overlayWidth = parseInt(window.getComputedStyle(servicesSlider).width);\r\n    let offset = 0;\r\n\r\n    arrowLeft.addEventListener(\"click\", (e) => {\r\n        e.preventDefault();\r\n        offset += 225;\r\n        if (offset > overlayWidth) {\r\n            offset = 0;\r\n        }\r\n        servicesSlides.forEach(slide => {\r\n            slide.style.transform = `translateX(-${offset}px)`;\r\n        })\r\n    })\r\n\r\n    arrowRight.addEventListener(\"click\", (e) => {\r\n        e.preventDefault();\r\n        offset -= 225;\r\n        if (offset < 0) {\r\n            offset = overlayWidth;\r\n        }\r\n        servicesSlides.forEach(slide => {\r\n            slide.style.transform = `translateX(-${offset}px)`;\r\n        })\r\n    })\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://src/./src/js/modules/sliders.js?");

/***/ }),

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_popup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/popup */ \"./src/js/modules/popup.js\");\n/* harmony import */ var _modules_show_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/show-modal */ \"./src/js/modules/show-modal.js\");\n/* harmony import */ var _modules_calc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/calc */ \"./src/js/modules/calc.js\");\n/* harmony import */ var _modules_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/forms */ \"./src/js/modules/forms.js\");\n/* harmony import */ var _modules_favicon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/favicon */ \"./src/js/modules/favicon.js\");\n/* harmony import */ var _modules_mask__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/mask */ \"./src/js/modules/mask.js\");\n/* harmony import */ var _modules_checkRu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/checkRu */ \"./src/js/modules/checkRu.js\");\n/* harmony import */ var _modules_close_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/close-modal */ \"./src/js/modules/close-modal.js\");\n/* harmony import */ var _modules_gift__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/gift */ \"./src/js/modules/gift.js\");\n/* harmony import */ var _modules_sliders__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/sliders */ \"./src/js/modules/sliders.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_modules_popup__WEBPACK_IMPORTED_MODULE_0__.popup)('.clubs-list', '.clubs-list ul');\r\n\r\n\r\n\r\n//sliders();\r\n(0,_modules_sliders__WEBPACK_IMPORTED_MODULE_9__.sliderMain)('.main-slider .slide')\r\n;(0,_modules_sliders__WEBPACK_IMPORTED_MODULE_9__.sliderPortfolio)('.gallery-slider')\r\n;(0,_modules_sliders__WEBPACK_IMPORTED_MODULE_9__.sliderService)('.services-slider')\r\n\r\n\r\n;(0,_modules_calc__WEBPACK_IMPORTED_MODULE_2__.calc)();\r\n(0,_modules_forms__WEBPACK_IMPORTED_MODULE_3__.forms)();\r\n(0,_modules_favicon__WEBPACK_IMPORTED_MODULE_4__.favicon)();\r\n(0,_modules_mask__WEBPACK_IMPORTED_MODULE_5__.mask)('[name=\"phone\"]')\r\n;(0,_modules_checkRu__WEBPACK_IMPORTED_MODULE_6__.checkTextInputs)('[name=\"name\"]');\r\n\r\n\r\n(0,_modules_show_modal__WEBPACK_IMPORTED_MODULE_1__.showModal)('[data-popup=\"#free_visit_form\"]', '#free_visit_form');\r\n(0,_modules_show_modal__WEBPACK_IMPORTED_MODULE_1__.showModal)('[data-popup=\"#callback_form\"]', '#callback_form');\r\n(0,_modules_gift__WEBPACK_IMPORTED_MODULE_8__.gift)('.fixed-gift', '#gift');\r\n\r\n(0,_modules_close_modal__WEBPACK_IMPORTED_MODULE_7__.closeModal)('.overlay')\r\n;(0,_modules_close_modal__WEBPACK_IMPORTED_MODULE_7__.closeModal)('.close-form')\r\n;(0,_modules_close_modal__WEBPACK_IMPORTED_MODULE_7__.closeModal)('.close-btn')\n\n//# sourceURL=webpack://src/./src/js/script.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/script.js");
/******/ 	
/******/ })()
;