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

/***/ "./src/js/modules/callback.js":
/*!************************************!*\
  !*** ./src/js/modules/callback.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"callback\": () => (/* binding */ callback)\n/* harmony export */ });\n/** \r\n * При клике открывается модальное окно id=\"callback_form\"\r\n * При нажатии на крестик или подложку - исчезать.\r\n */\r\nfunction callback() {\r\n\r\n    const callbackBtn = document.querySelectorAll(\".callback-btn\");\r\n    const callbackForm = document.querySelector(\"#callback_form\");\r\n\r\n\r\n\r\n    callbackBtn.forEach(btn => {\r\n        btn.addEventListener(\"click\", () => {\r\n            callbackForm.classList.add(\"display-block\");\r\n        })\r\n    })\r\n}\n\n//# sourceURL=webpack://src/./src/js/modules/callback.js?");

/***/ }),

/***/ "./src/js/modules/forms.js":
/*!*********************************!*\
  !*** ./src/js/modules/forms.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"forms\": () => (/* binding */ forms)\n/* harmony export */ });\nfunction forms() {\r\n    /** \r\n     * Все формы на странице и в модальных окнах должны отправляться посредством ajax(без перезагрузки страницы) и захватывать все введенные данные. \r\n     * Также необходимо оповестить пользователя о состоянии отправки (идет отправка, отправлено, ошибка). \r\n     * В последних двух состояниях необходимо заменить сам контент модального окна на оповещение. \r\n     * Необходима маска или валидация номера телефона (нужное кол-во чисел, код). \r\n     * Заполнение имени и комментария - только на русском языке.\r\n     */\r\n\r\n\r\n\r\n    // const sendForm = (form) => {\r\n    //     form.addEventListener(\"submit\", (e) => {\r\n    //         e.preventDefault();\r\n    //         mess.textContent = message.loading;\r\n    //         const formData = new FormData(form);\r\n    //         fetch(\"server.php\", {\r\n    //             method: \"POST\",\r\n    //             body: formData,\r\n    //         })\r\n    //             .then((response) => {\r\n\r\n    //                 return(response.text())\r\n    //             })\r\n    //             .then((text) => console.log(text))\r\n    //             .catch((error) =>\r\n    //             {\r\n    //                 mess.textContent = message.failure;\r\n    //             })    \r\n    //     mess.textContent = message.success;\r\n    // })\r\n    // }\r\n\r\n    // forms.forEach((form) => sendForm(form));\r\n\r\n\r\n\r\n\r\n\r\n\r\n    // bannerForm.addEventListener(\"submit\", (e) => {\r\n    //     e.preventDefault();\r\n\r\n    //     fetch(\"https://jsonplaceholder.typicode.com/posts\", {\r\n    //         method: \"POST\",\r\n    //         body: JSON.stringify({\r\n    //             name: \"AP\",\r\n    //             body: 'andrey',\r\n    //         }),\r\n    //         headers: {\r\n    //             'Content-type': 'application/json; charset=UTF-8',\r\n    //         }\r\n    //     }).then((response) => response.json())\r\n    //         .then((json) => console.log(json));\r\n\r\n\r\n\r\n\r\n    // })\r\n\r\n\r\n    // const sendFormData = (form) => {\r\n    //     form.addEventListener(\"submit\", (e) => {\r\n    //         e.preventDefault;\r\n    //         const formData = new FormData(form);\r\n    //         console.log(formData);\r\n    //     })\r\n\r\n\r\n    //     // fetch(\"https://jsonplaceholder.typicode.com/posts\", {\r\n    //     //     method: \"POST\",\r\n    //     //     headers: {'Content-type': 'application/json; charset=UTF-8'},\r\n    //     //     body: formData,  \r\n    //     // })\r\n    //     //     .then(response =>  response.json())\r\n    //     //     .then(json => console.log(json))\r\n    // }\r\n\r\n\r\n\r\n    /** \r\n     * Форма отправки данных, запретить отправку если не стоит галочка согласен на обработку данных и \r\n     * сообщить пользователю что необходимо подтвердить согласие.\r\n     * После отправки данных вывести модальное окно c id=\"thanks\" \r\n     * в котором сообщение об успешной отправки или об ошибке если отправка не удалась\r\n     */\r\n\r\n\r\n    const thanksModal = document.querySelector(\"#thanks\");\r\n    const bannerForm = document.querySelector(\"#banner-form\");\r\n    const check1 = document.querySelector(\"#check1\");\r\n    const message1 = document.createElement(\"div\")\r\n    message1.style.fontSize = \"24px\";\r\n    message1.style.marginTop = \"20px\";\r\n    bannerForm.append(message1)\r\n\r\n    bannerForm.addEventListener(\"submit\", (e) => {\r\n        e.preventDefault();\r\n        message1.textContent = \"Данные отправляются\";\r\n        if (check1.checked) {\r\n            message1.textContent = \"\";\r\n            const formData = new FormData(bannerForm);\r\n            fetch(\"server.php\", {\r\n                    method: \"POST\",\r\n                    body: formData\r\n                })\r\n                .then((response) => {\r\n                    return response.text()\r\n                })\r\n                .then((text) => {\r\n                    console.log(text)\r\n                    message1.textContent = \"Данные отправлены!\"\r\n                    thanksModal.classList.add(\"display-block\")\r\n                    setTimeout(() => {\r\n                        thanksModal.classList.remove(\"display-block\")\r\n                    }, 3000)\r\n                })\r\n                .catch((error) => {\r\n                    message1.textContent = \"Отправка не удалась\";\r\n                    thanksModalFormContent.textContent = \"НЕ УДАЧА!\"\r\n                    thanksModalFormContentP.textContent = \"Что то случилось не так, Ваша форма не отправлена\"\r\n                    thanksModal.classList.add(\"display-block\");\r\n                    setTimeout(() => {\r\n                        thanksModal.classList.remove(\"display-block\")\r\n                    }, 3000)\r\n                    console.log(error)\r\n\r\n                })\r\n        } else {\r\n            message1.textContent = \"Не стоит галочка согласен на обработку данных, необходимо подтвердить согласие\";\r\n        }\r\n    })\r\n\r\n    const removeDisplayBlock = (element) => {\r\n        element.classList.remove(\"display-block\");\r\n    }\r\n\r\n    const thanksModalOverlay = thanksModal.querySelector(\".overlay\");\r\n    const thanksModalClose = thanksModal.querySelector(\".close-form img\");\r\n    const thanksModalCloseBtn = thanksModal.querySelector(\".close-btn\");\r\n    const thanksModalFormContent = thanksModal.querySelector(\".form-content h4\")\r\n    const thanksModalFormContentP = thanksModal.querySelector(\".form-content p\")\r\n\r\n    thanksModalOverlay.addEventListener(\"click\", () => {\r\n        removeDisplayBlock(thanksModal);\r\n    });\r\n    thanksModalClose.addEventListener(\"click\", () => {\r\n        removeDisplayBlock(thanksModal);\r\n    });\r\n    thanksModalCloseBtn.addEventListener(\"click\", () => {\r\n        removeDisplayBlock(thanksModal);\r\n    })\r\n\r\n\r\n    /** \r\n     * Отправка формы должна передать данные по выбраному клубу и номер телефона, маска или валидация обязательна, \r\n     * после отправки открыть модальное окно с id=\"thanks\" и если отправка была неудачной сообщить в модальном окне о неудачной отправке\r\n     */\r\n\r\n    const footerForm = document.querySelector(\"#footer_form\");\r\n\r\n    footerForm.addEventListener(\"submit\", (e) => {\r\n        e.preventDefault();\r\n        const formData = new FormData(footerForm);\r\n        fetch(\"server.php\", {\r\n                method: \"POST\",\r\n                body: formData\r\n            })\r\n            .then((response) => {\r\n                return response.text()\r\n            })\r\n            .then((text) => {\r\n                console.log(text)\r\n                thanksModal.classList.add(\"display-block\")\r\n                setTimeout(() => {\r\n                    thanksModal.classList.remove(\"display-block\")\r\n                }, 3000)\r\n            })\r\n            .catch((error) => {\r\n                thanksModalFormContent.textContent = \"НЕ УДАЧА!\"\r\n                thanksModalFormContentP.textContent = \"Что то случилось не так, Ваша форма не отправлена\"\r\n                thanksModal.classList.add(\"display-block\");\r\n                setTimeout(() => {\r\n                    thanksModal.classList.remove(\"display-block\")\r\n                }, 3000)\r\n                console.log(error)\r\n\r\n            })\r\n\r\n    })\r\n}\n\n//# sourceURL=webpack://src/./src/js/modules/forms.js?");

/***/ }),

/***/ "./src/js/modules/gift.js":
/*!********************************!*\
  !*** ./src/js/modules/gift.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"gift\": () => (/* binding */ gift)\n/* harmony export */ });\n/** \r\n * При клике на подарок должно появляться модальное окно (id=\"gift\") и сам подарок полностью исчезает со страницы. \r\n * При нажатии на крестик или подложку окно исчезает.\r\n */\r\n\r\nfunction gift() {\r\n    const gift = document.querySelector(\".fixed-gift\");\r\n    const giftModal = document.querySelector(\"#gift\");\r\n\r\n    gift.addEventListener(\"click\", (e) => {\r\n        giftModal.classList.add(\"display-block\");\r\n        e.target.classList.add(\"display-none\");\r\n    })\r\n}\n\n//# sourceURL=webpack://src/./src/js/modules/gift.js?");

/***/ }),

/***/ "./src/js/modules/popup.js":
/*!*********************************!*\
  !*** ./src/js/modules/popup.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"popup\": () => (/* binding */ popup)\n/* harmony export */ });\n/** \r\n * При клике на кнопку “Выбрать клуб”\r\n * открывается выпадающее меню (есть в верстке)\r\n */\r\n\r\nfunction popup() {\r\n    const clubSelect = document.querySelector(\".club-select\");\r\n    const clubSelectList = document.querySelector(\".clubs-list ul\");\r\n\r\n    clubSelect.addEventListener(\"click\", () => {\r\n        if (clubSelectList.classList.contains(\"display-block\")) {\r\n            clubSelectList.classList.add(\"display-none\");\r\n            clubSelectList.classList.remove(\"display-block\");\r\n        } else {\r\n            clubSelectList.classList.add(\"display-block\");\r\n            clubSelectList.classList.remove(\"display-remove\");\r\n        }\r\n    })\r\n}\n\n//# sourceURL=webpack://src/./src/js/modules/popup.js?");

/***/ }),

/***/ "./src/js/modules/sliders.js":
/*!***********************************!*\
  !*** ./src/js/modules/sliders.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"sliders\": () => (/* binding */ sliders)\n/* harmony export */ });\nfunction sliders() {\r\n    /**\r\n     * На первой странице реализовать слайдер\r\n     */\r\n    let count = 0;\r\n    const mainSlider = document.querySelectorAll(\".main-slider .slide\");\r\n    setInterval(() => {\r\n        if (count == 5) count = 0;\r\n        mainSlider[count].classList.add(\"slide-active\");\r\n        mainSlider[mainSlider.length - 1].classList.remove(\"slide-active\");\r\n        if (count > 0) {\r\n            mainSlider[count].classList.add(\"slide-active\");\r\n            mainSlider[count - 1].classList.remove(\"slide-active\");\r\n        }\r\n        count++;\r\n    }, 3000)\r\n\r\n\r\n\r\n    /** \r\n     * Реализовать сладер #2\r\n     */\r\n\r\n    const arrowLeft = document.querySelector(\"#arrow-left\");\r\n    const arrowRight = document.querySelector(\"#arrow-right\");\r\n    const servicesSlider = document.querySelector(\".services-slider\");\r\n    const servicesSlides = servicesSlider.querySelectorAll(\".slide\");\r\n    const overlayWidth = parseInt(window.getComputedStyle(servicesSlider).width);\r\n    let offset = 0;\r\n\r\n    arrowLeft.addEventListener(\"click\", (e) => {\r\n        e.preventDefault();\r\n        offset += 225;\r\n        if (offset > overlayWidth) {\r\n            offset = 0;\r\n        }\r\n        servicesSlides.forEach(slide => {\r\n            slide.style.transform = `translateX(-${offset}px)`;\r\n        })\r\n        console.log(offset);\r\n    })\r\n\r\n    arrowRight.addEventListener(\"click\", (e) => {\r\n        e.preventDefault();\r\n        offset -= 225;\r\n        if (offset < 0) {\r\n            offset = overlayWidth;\r\n        }\r\n        servicesSlides.forEach(slide => {\r\n            slide.style.transform = `translateX(-${offset}px)`;\r\n        })\r\n        console.log(offset);\r\n    })\r\n\r\n    /** \r\n     * Реализовать слайдер #3\r\n     */\r\n\r\n    const gallerySlider = document.querySelector(\".gallery-slider\");\r\n    const gallerySlides = gallerySlider.querySelectorAll(\".slide\")\r\n    const galleryBtnRight = gallerySlider.querySelector(\"#arrow-right\");\r\n    const galleryBtnLeft = gallerySlider.querySelector(\"#arrow-left\");\r\n    const galleryDots = document.querySelectorAll(\".portfolio-dots li\");\r\n\r\n    let galleryIndex = 0\r\n\r\n    galleryBtnRight.addEventListener(\"click\", (e) => {\r\n        e.preventDefault();\r\n        galleryIndex++;\r\n        if (galleryIndex == 5) galleryIndex = 0;\r\n        if (galleryIndex == 0) {\r\n            gallerySlides[galleryIndex].classList.add(\"slide-active\");\r\n            gallerySlides[gallerySlides.length - 1].classList.remove(\"slide-active\");\r\n            galleryDots[galleryIndex].classList.add(\"dot-active\");\r\n            galleryDots[galleryDots.length - 1].classList.remove(\"dot-active\");\r\n        }\r\n        if (galleryIndex > 0) {\r\n            gallerySlides[galleryIndex].classList.add(\"slide-active\");\r\n            gallerySlides[galleryIndex - 1].classList.remove(\"slide-active\");\r\n            galleryDots[galleryIndex].classList.add(\"dot-active\");\r\n            galleryDots[galleryIndex - 1].classList.remove(\"dot-active\");\r\n        }\r\n    })\r\n\r\n    galleryBtnLeft.addEventListener(\"click\", (e) => {\r\n        e.preventDefault();\r\n        galleryIndex--;\r\n        if (galleryIndex < 0) galleryIndex = 4;\r\n\r\n        if (galleryIndex == 4) {\r\n            gallerySlides[galleryIndex].classList.add(\"slide-active\");\r\n            gallerySlides[0].classList.remove(\"slide-active\");\r\n            galleryDots[galleryIndex].classList.add(\"dot-active\");\r\n            galleryDots[0].classList.remove(\"dot-active\");\r\n        }\r\n        if (galleryIndex < 4) {\r\n            gallerySlides[galleryIndex].classList.add(\"slide-active\");\r\n            gallerySlides[galleryIndex + 1].classList.remove(\"slide-active\");\r\n            galleryDots[galleryIndex].classList.add(\"dot-active\");\r\n            galleryDots[galleryIndex + 1].classList.remove(\"dot-active\");\r\n        }\r\n    })\r\n\r\n}\n\n//# sourceURL=webpack://src/./src/js/modules/sliders.js?");

/***/ }),

/***/ "./src/js/modules/visit.js":
/*!*********************************!*\
  !*** ./src/js/modules/visit.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"visit\": () => (/* binding */ visit)\n/* harmony export */ });\n/** \r\n * При клике на эту надпись открывается модальное окно id=’free_visit_form’\r\n * При нажатии на крестик или подложку - исчезать.\r\n */\r\n\r\nfunction visit() {\r\n    const freeVisit = document.querySelector(\".free-visit p a\");\r\n    const freeVisitForm = document.querySelector(\"#free_visit_form\");\r\n    const formCloseImg = document.querySelectorAll(\".close-form\");\r\n    const formOverlay = document.querySelectorAll(\".overlay\");\r\n\r\n    freeVisit.addEventListener(\"click\", () => {\r\n        freeVisitForm.classList.add(\"display-block\");\r\n    })\r\n\r\n    formCloseImg.forEach(item => {\r\n        item.addEventListener(\"click\", (e) => {\r\n            freeVisitForm.classList.remove(\"display-block\");\r\n            callbackForm.classList.remove(\"display-block\");\r\n            giftModal.classList.remove(\"display-block\");\r\n        })\r\n    })\r\n\r\n    formOverlay.forEach(item => {\r\n        item.addEventListener(\"click\", () => {\r\n            freeVisitForm.classList.remove(\"display-block\");\r\n            callbackForm.classList.remove(\"display-block\");\r\n            giftModal.classList.remove(\"display-block\");\r\n        })\r\n    })\r\n}\n\n//# sourceURL=webpack://src/./src/js/modules/visit.js?");

/***/ }),

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_popup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/popup */ \"./src/js/modules/popup.js\");\n/* harmony import */ var _modules_visit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/visit */ \"./src/js/modules/visit.js\");\n/* harmony import */ var _modules_callback__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/callback */ \"./src/js/modules/callback.js\");\n/* harmony import */ var _modules_gift__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/gift */ \"./src/js/modules/gift.js\");\n/* harmony import */ var _modules_sliders__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/sliders */ \"./src/js/modules/sliders.js\");\n/* harmony import */ var _modules_calc__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/calc */ \"./src/js/modules/calc.js\");\n/* harmony import */ var _modules_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/forms */ \"./src/js/modules/forms.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_modules_popup__WEBPACK_IMPORTED_MODULE_0__.popup)();\r\n(0,_modules_visit__WEBPACK_IMPORTED_MODULE_1__.visit)();\r\n(0,_modules_callback__WEBPACK_IMPORTED_MODULE_2__.callback)();\r\n(0,_modules_gift__WEBPACK_IMPORTED_MODULE_3__.gift)();\r\n(0,_modules_sliders__WEBPACK_IMPORTED_MODULE_4__.sliders)();\r\n(0,_modules_calc__WEBPACK_IMPORTED_MODULE_5__.calc)();\r\n(0,_modules_forms__WEBPACK_IMPORTED_MODULE_6__.forms)();\r\n\r\n\r\n\n\n//# sourceURL=webpack://src/./src/js/script.js?");

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