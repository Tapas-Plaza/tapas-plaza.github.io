(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab1-tab1-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/tab1.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/tab1.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\" [hidden]=\"devWidth > 992\">\n  <ion-toolbar>\n    <ion-title style=\"text-align: center;\">\n      <img src=\"../../assets/icon/tp-logo.png\" style=\"padding: 1rem;\">\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <div style=\"background-color: #eaf5f7 !important;\">\n\n    <!-- INTRO -->\n    <!-- Desktop only -->\n    <section class=\"headerimg\" [hidden]=\"devWidth < 992\">\n      <div>\n        <ion-text color=\"light\">\n          <h1 class=\"logo\">\n            tapas plaza\n          </h1>\n          <br>\n          <h3>Vestibulum eleifend lorem nec neque interdum varius.</h3>\n          <br><br>\n          <ion-button size=\"large\" color=\"secondary\" (click)=\"openModal()\">See menu & order now!</ion-button>\n        </ion-text>\n      </div>\n    </section>\n\n    <ion-grid fixed class=\"content\">\n\n      <!-- OUR RESTAURANT -->\n      <ion-grid class=\"section\">\n        <h1>Our Restaurant</h1>\n\n        <!-- Desktop -->\n        <ion-row>\n          <ion-col size-lg=\"4\" *ngFor=\"let imageurl of imageLinks\" [hidden]=\"devWidth < 992\">\n            <img src={{imageurl}} />\n          </ion-col>\n          <!-- Mobile -->\n          <ion-col [hidden]=\"devWidth > 992\">\n            <div class=\"carrousel-photos\">\n              <ion-slides pager=\"true\" [options]=\"slideOptions\" class=\"carrousel-photos\">\n                <ion-slide *ngFor=\"let imageurl of imageLinks\">\n                  <img src={{imageurl}} />\n                </ion-slide>\n              </ion-slides>\n            </div>\n          </ion-col>\n          <div style=\"text-align: center\">\n            <p>\n              Sharing and tasting, that's how to enjoy tapas. Plates go around the table. You have a little bit(e) of\n              this, a little taste of that. It's fun. Brings people together. Feels more like having a party, rather\n              than just a meal.\n            </p>\n            <!-- ORDER NOW -->\n            <div class=\"ion-padding\" [hidden]=\"devWidth > 992\">\n              <ion-button expand=\"block\" (click)=\"order()\">See menu & order now!</ion-button>\n            </div>\n            <p>\n              The popularity of our Tapas Plates show that people love it. Each Plate comes with a\n              nice selection of bites. You can go for Spanish, Asian, Vegetarian or even Gluten-free!\n            </p>\n            <p>\n              Our famous Thai\n              and Indonesian food is also best eaten tapa-style. Like our Indonesian 'Rice Table'! Absolutely lovely,\n              all this delish right in front of you to pick from, yummie!\n            </p>\n          </div>\n        </ion-row>\n      </ion-grid>\n\n      <!-- ORDER ONLINE -->\n      <!-- Desktop & mobile -->\n      <ion-grid class=\"section bg-color\" style=\"align-items: center; display: flex; justify-content: center;\">\n        <div style=\"text-align: center;\">\n          <h1>You can now order online & get real-time confirmation!</h1>\n          <ion-button size=\"large\" color=\"secondary\" (click)=\"openModal()\">See menu & order now!</ion-button>\n          <h2>For take-away & home delivery!</h2>\n        </div>\n      </ion-grid>\n\n      <!-- OUR FOOD -->\n      <!-- Desktop & mobile -->\n      <ion-grid class=\"section\">\n        <h1>Our Tapas = Your Party</h1>\n        <ion-row *ngFor=\"let foodItem of foodImages\">\n          <ion-col size-lg=\"7\" size-xs=\"12\"\n            style=\"align-items: center; display: flex; justify-content: center; text-align: center;\">\n            <div>\n              <h2>{{foodItem[1]}}</h2>\n              <p> {{foodItem[2]}}</p>\n            </div>\n          </ion-col>\n          <ion-col size-lg=\"5\" size-xs=\"12\" style=\"margin-bottom: 2rem;\">\n            <div class=\"foodImageItem\">\n              <div style=\"align-items: center; display: flex; justify-content: center;\">\n                <img src=\"{{foodItem[0]}}\" class=\"foodimage\">\n                <div class=\"overlay\" [hidden]=\"devWidth < 992\">\n                  <h3>{{foodItem[3]}}</h3>\n                </div>\n              </div>\n            </div>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n\n      <!-- Review -->\n      <!-- Desktop & mobile -->\n      <ion-grid class=\"section\" style=\"text-align: center;\">\n        <i>\"So glad to have found you, at last something different!\"</i><br><br>\n        Many times we've heard this relief. Must have something to do with:\n        Our tapas are fresh from sratch. They're healthy & light. They're international. We have vegetarian options and\n        many options for people with allergies and intolerances. Our tapas are your party!\n      </ion-grid>\n\n      <!-- ABOUT US -->\n      <!-- Desktop & mobile -->\n      <ion-grid class=\"section\">\n        <h1>Encantado</h1>\n        <ion-row>\n          <ion-col size-md=\"6\" size-xs=\"12\" style=\"align-items: center; display: flex; justify-content: center;\">\n            <img src=\"../../assets/images/aboutus.jpg\" class=\"about-us-img\">\n          </ion-col>\n          <ion-col size-md=\"6\" size-xs=\"12\"\n            style=\"align-items: center; display: flex; justify-content: center; text-align: center;\">\n            <div>\n              <p>\n                We are Jeannette and Johan. Nice to meet you!\n                With our children Giovanni, Rosa and Jaume we left Holland to open our eatery in Nerja in 2006.\n                Previously known as 'Sabor de Amor'́.\n              </p>\n              <p>\n                Where Jeannette has a magic touch with people, Johan has with the Wok.\n                As a heartwarming hostess and a qualified and passionate chef, we'd love to welcome you into what we\n                call our Home!\n              </p>\n              <p>\n                Before we had children, we traveled a lot. And we lived in Thailand. The food we picked up from all\n                these travels, we now bring to your table.\n                So there you are, on our always sunny terrace overlooking the Mediterranean. Jeannette makes you feel at\n                home. You guys chat away as if you've known eachother for years. Your food arrives. You inmediately\n                taste the love chef Johan put in it...\n              </p>\n            </div>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n\n      <!-- HOURS -->\n      <ion-grid class=\"section\" style=\"background-color: transparent;\">\n        <div style=\"text-align: center; position: relative;\">\n          <img src=\"../../assets/images/sign.png\" class=\"opening-sign\">\n        </div>\n      </ion-grid>\n\n      <!-- WHERE TO FIND US -->\n      <!-- Desktop & mobile -->\n      <ion-grid class=\"section bg-color\">\n        <ion-row>\n          <!-- Map -->\n          <ion-col size-lg=\"6\" size-xs=\"12\" style=\"text-align: center;\" class=\"whereto-col\">\n            <h1 class=\"whereto-title\">Where to find us</h1>\n            <p>\n              Paseo Burriana, Nerja <br>\n              Come visit us or order online:\n            </p>\n            <ion-button color=\"secondary\" (click)=\"openModal()\">See menu & order now!</ion-button>\n            <h2>Contact us</h2>\n\n            <h5>Order or booking info:</h5>\n\n            <a href=\"tel:+34621011056\" class=\"phone-link\">+34 621011056</a>\n\n            <h5> Business inquiries:</h5>\n\n            <a href=\"tel:+34665454431\" class=\"phone-link\">+34 665454431</a>\n\n          </ion-col>\n          <ion-col size-lg=\"6\" size-xs=\"12\">\n            <iframe width=\"100%\" height=\"350px\" frameborder=\"0\" style=\"border:0\" class=\"map-frame\"\n              src=\"https://www.google.com/maps/embed/v1/place?q=place_id:ChIJV7BGigglcg0Rvd4o9UOhzG8&key=AIzaSyAWfbOmJcSmbBXAExmsdwQKAchR2tBJb4k\"\n              allowfullscreen></iframe>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n\n      <!-- THANK YOU -->\n      <!-- Desktop & mobile -->\n      <ion-grid class=\"section\" style=\"text-align: center;\">\n        <h1>Muchísimas Gracias</h1>\n        <ion-row>\n          <p>\n            Dear guests, we so much appreciate your loyalty. Some of you have even been with us since the day we\n            opened in 2006!!!\n            Without your support we would never have been where we are now!\n            A popular spot well known for our fresh home cooking.\n        </ion-row>\n      </ion-grid>\n\n    </ion-grid>\n\n    <!-- Footer  -->\n    <!-- SOCIAL MEDIA -->\n\n    <ion-footer class=\"ion-no-border\">\n      <ion-toolbar color=\"medium\"\n        style=\"align-items: center; display: flex; justify-content: center; text-align: center;\">\n        <br>\n        <ion-button href=\"https://www.facebook.com/TapasPlazaNerja/\" fill=\"clear\" color=\"light\">\n          <ion-icon name=\"logo-facebook\"></ion-icon>\n        </ion-button>\n        <ion-button\n          href=\"https://www.google.com/maps/place/Tapas+Plaza/@36.7506407,-3.8698905,17z/data=!3m1!4b1!4m5!3m4!1s0xd7225088a46b057:0x6fcca143f528debd!8m2!3d36.7506407!4d-3.8677018\"\n          fill=\"clear\" color=\"light\">\n          <ion-icon name=\"logo-google\"></ion-icon>\n        </ion-button>\n        <ion-button\n          href=\"https://www.tripadvisor.com/Restaurant_Review-g315917-d1477947-Reviews-Tapas_Plaza-Nerja_Costa_del_Sol_Province_of_Malaga_Andalucia.html\"\n          fill=\"clear\" color=\"light\">\n          <img height=\"32\" width=\"32\" src=\"../../assets/icon/tripadvisor.svg\" />\n        </ion-button>\n        <ion-button color=\"secondary\" (click)=\"openModal()\">See menu & order now!</ion-button>\n        <p>\n          Est. 2006\n        </p>\n      </ion-toolbar>\n    </ion-footer>\n  </div>\n\n</ion-content>");

/***/ }),

/***/ "./src/app/tab1/tab1.module.ts":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.module.ts ***!
  \*************************************/
/*! exports provided: Tab1PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1PageModule", function() { return Tab1PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab1.page */ "./src/app/tab1/tab1.page.ts");
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../explore-container/explore-container.module */ "./src/app/explore-container/explore-container.module.ts");








let Tab1PageModule = class Tab1PageModule {
};
Tab1PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_7__["ExploreContainerComponentModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _tab1_page__WEBPACK_IMPORTED_MODULE_6__["Tab1Page"] }])
        ],
        declarations: [_tab1_page__WEBPACK_IMPORTED_MODULE_6__["Tab1Page"]]
    })
], Tab1PageModule);



/***/ }),

/***/ "./src/app/tab1/tab1.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content ion-toolbar {\n  --background: translucent;\n}\n\n.headerimg {\n  --background: none;\n  background-image: url('header.jpg');\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center top;\n  height: 50vh;\n  align-items: center;\n  justify-content: center;\n  display: flex;\n  margin-bottom: 3rem;\n}\n\n.section {\n  padding: 1rem;\n  margin: 0.5rem;\n  margin-top: 1rem;\n  margin-bottom: 1rem;\n  background-color: var(--ion-color-light);\n}\n\n.headerimg div {\n  text-align: center;\n}\n\nh1 {\n  text-align: center;\n  margin-bottom: 1rem;\n}\n\n.bg-color {\n  background-color: var(--ion-color-medium);\n}\n\n.opening-sign {\n  width: 100%;\n}\n\n.phone-link {\n  color: var(--ion-color-light);\n}\n\n.foodimage {\n  width: 100%;\n  height: auto;\n}\n\n@media (min-width: 992px) {\n  ion-content {\n    background-size: cover;\n  }\n\n  .content {\n    padding: 0;\n  }\n\n  .section {\n    padding: 2rem;\n    margin-bottom: 3rem;\n    background-color: var(--ion-color-light);\n  }\n\n  .about-us-img {\n    max-width: 70%;\n    height: auto;\n  }\n\n  .overlay {\n    width: 70%;\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    background: rgba(0, 128, 148, 0.5);\n    color: white;\n    visibility: hidden;\n    opacity: 0;\n    /* transition effect. not necessary */\n    transition: opacity 0.2s, visibility 0.2s;\n    text-align: center;\n    align-items: center;\n    justify-content: center;\n    display: flex;\n  }\n\n  .overlay h3 {\n    padding: 3rem;\n  }\n\n  .foodimage {\n    width: 70%;\n    height: auto;\n  }\n\n  .foodImageItem:hover .overlay {\n    visibility: visible;\n    opacity: 1;\n  }\n\n  .opening-sign {\n    width: 50%;\n  }\n\n  .logo {\n    font-size: 7rem;\n  }\n\n  .whereto-col {\n    margin-top: 3rem;\n    margin-bottom: 3rem;\n  }\n\n  .whereto-title {\n    margin-bottom: 2rem;\n  }\n\n  .map-frame {\n    height: 100%;\n  }\n\n  .bg-color {\n    background-color: var(--ion-color-medium);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yb3VzYWgvZ2l0L1RhcGFzUGxhemEvVGFwYXNQbGF6YS9zcmMvYXBwL3RhYjEvdGFiMS5wYWdlLnNjc3MiLCJzcmMvYXBwL3RhYjEvdGFiMS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7RUFDQSxtQ0FBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSwrQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FDQ0Y7O0FERUE7RUFDRSxhQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSx3Q0FBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7QUNDRjs7QURFQTtFQUNFLHlDQUFBO0FDQ0Y7O0FER0E7RUFDRSxXQUFBO0FDQUY7O0FER0E7RUFDRSw2QkFBQTtBQ0FGOztBREdBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUNBRjs7QURHQTtFQUNFO0lBQ0Usc0JBQUE7RUNBRjs7RURHQTtJQUNFLFVBQUE7RUNBRjs7RURHQTtJQUNFLGFBQUE7SUFDQSxtQkFBQTtJQUNBLHdDQUFBO0VDQUY7O0VER0E7SUFDRSxjQUFBO0lBQ0EsWUFBQTtFQ0FGOztFREdBO0lBQ0UsVUFBQTtJQUNBLGtCQUFBO0lBQ0EsTUFBQTtJQUNBLFNBQUE7SUFDQSxrQ0FBQTtJQUNBLFlBQUE7SUFDQSxrQkFBQTtJQUNBLFVBQUE7SUFFQSxxQ0FBQTtJQUNBLHlDQUFBO0lBRUEsa0JBQUE7SUFDQSxtQkFBQTtJQUNBLHVCQUFBO0lBQ0EsYUFBQTtFQ0ZGOztFREtBO0lBQ0UsYUFBQTtFQ0ZGOztFREtBO0lBQ0UsVUFBQTtJQUNBLFlBQUE7RUNGRjs7RURLQTtJQUNFLG1CQUFBO0lBQ0EsVUFBQTtFQ0ZGOztFREtBO0lBQ0UsVUFBQTtFQ0ZGOztFREtBO0lBQ0UsZUFBQTtFQ0ZGOztFREtBO0lBQ0UsZ0JBQUE7SUFDQSxtQkFBQTtFQ0ZGOztFREtBO0lBQ0UsbUJBQUE7RUNGRjs7RURLQTtJQUNFLFlBQUE7RUNGRjs7RURLQTtJQUNFLHlDQUFBO0VDRkY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3RhYjEvdGFiMS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCBpb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNsdWNlbnQ7XG59XG5cbi5oZWFkZXJpbWcge1xuICAtLWJhY2tncm91bmQ6IG5vbmU7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy9pbWFnZXMvaGVhZGVyLmpwZ1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIHRvcDtcbiAgaGVpZ2h0OiA1MHZoO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luLWJvdHRvbTogM3JlbTtcbn1cblxuLnNlY3Rpb24ge1xuICBwYWRkaW5nOiAxcmVtO1xuICBtYXJnaW46IDAuNXJlbTtcbiAgbWFyZ2luLXRvcDogMXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbn1cblxuLmhlYWRlcmltZyBkaXYge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmgxIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xufVxuXG4uYmctY29sb3Ige1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbiAgLy9ib3JkZXI6IHNvbGlkIDJweCB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbn1cblxuLm9wZW5pbmctc2lnbiB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ucGhvbmUtbGluayB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xufVxuXG4uZm9vZGltYWdlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XG4gIGlvbi1jb250ZW50IHtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICB9XG5cbiAgLmNvbnRlbnQge1xuICAgIHBhZGRpbmc6IDA7XG4gIH1cblxuICAuc2VjdGlvbiB7XG4gICAgcGFkZGluZzogMnJlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAzcmVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gIH1cblxuICAuYWJvdXQtdXMtaW1nIHtcbiAgICBtYXgtd2lkdGg6IDcwJTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gIH1cblxuICAub3ZlcmxheSB7XG4gICAgd2lkdGg6IDcwJTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDEyOCwgMTQ4LCAwLjUpO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgb3BhY2l0eTogMDtcblxuICAgIC8qIHRyYW5zaXRpb24gZWZmZWN0LiBub3QgbmVjZXNzYXJ5ICovXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzLCB2aXNpYmlsaXR5IDAuMnM7XG5cbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICB9XG5cbiAgLm92ZXJsYXkgaDMge1xuICAgIHBhZGRpbmc6IDNyZW07XG4gIH1cblxuICAuZm9vZGltYWdlIHtcbiAgICB3aWR0aDogNzAlO1xuICAgIGhlaWdodDogYXV0bztcbiAgfVxuXG4gIC5mb29kSW1hZ2VJdGVtOmhvdmVyIC5vdmVybGF5IHtcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cblxuICAub3BlbmluZy1zaWduIHtcbiAgICB3aWR0aDogNTAlO1xuICB9XG5cbiAgLmxvZ28ge1xuICAgIGZvbnQtc2l6ZTogN3JlbTtcbiAgfVxuXG4gIC53aGVyZXRvLWNvbCB7XG4gICAgbWFyZ2luLXRvcDogM3JlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAzcmVtO1xuICB9XG5cbiAgLndoZXJldG8tdGl0bGUge1xuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XG4gIH1cblxuICAubWFwLWZyYW1lIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gIH1cblxuICAuYmctY29sb3Ige1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICAgIC8vYm9yZGVyOiBzb2xpZCAycHggdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG4gIH1cbn1cbiIsImlvbi1jb250ZW50IGlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc2x1Y2VudDtcbn1cblxuLmhlYWRlcmltZyB7XG4gIC0tYmFja2dyb3VuZDogbm9uZTtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL2ltYWdlcy9oZWFkZXIuanBnXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgdG9wO1xuICBoZWlnaHQ6IDUwdmg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW4tYm90dG9tOiAzcmVtO1xufVxuXG4uc2VjdGlvbiB7XG4gIHBhZGRpbmc6IDFyZW07XG4gIG1hcmdpbjogMC41cmVtO1xuICBtYXJnaW4tdG9wOiAxcmVtO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xufVxuXG4uaGVhZGVyaW1nIGRpdiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuaDEge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG59XG5cbi5iZy1jb2xvciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xufVxuXG4ub3BlbmluZy1zaWduIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5waG9uZS1saW5rIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG59XG5cbi5mb29kaW1hZ2Uge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgaW9uLWNvbnRlbnQge1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIH1cblxuICAuY29udGVudCB7XG4gICAgcGFkZGluZzogMDtcbiAgfVxuXG4gIC5zZWN0aW9uIHtcbiAgICBwYWRkaW5nOiAycmVtO1xuICAgIG1hcmdpbi1ib3R0b206IDNyZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbiAgfVxuXG4gIC5hYm91dC11cy1pbWcge1xuICAgIG1heC13aWR0aDogNzAlO1xuICAgIGhlaWdodDogYXV0bztcbiAgfVxuXG4gIC5vdmVybGF5IHtcbiAgICB3aWR0aDogNzAlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMTI4LCAxNDgsIDAuNSk7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICBvcGFjaXR5OiAwO1xuICAgIC8qIHRyYW5zaXRpb24gZWZmZWN0LiBub3QgbmVjZXNzYXJ5ICovXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzLCB2aXNpYmlsaXR5IDAuMnM7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgfVxuXG4gIC5vdmVybGF5IGgzIHtcbiAgICBwYWRkaW5nOiAzcmVtO1xuICB9XG5cbiAgLmZvb2RpbWFnZSB7XG4gICAgd2lkdGg6IDcwJTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gIH1cblxuICAuZm9vZEltYWdlSXRlbTpob3ZlciAub3ZlcmxheSB7XG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG5cbiAgLm9wZW5pbmctc2lnbiB7XG4gICAgd2lkdGg6IDUwJTtcbiAgfVxuXG4gIC5sb2dvIHtcbiAgICBmb250LXNpemU6IDdyZW07XG4gIH1cblxuICAud2hlcmV0by1jb2wge1xuICAgIG1hcmdpbi10b3A6IDNyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogM3JlbTtcbiAgfVxuXG4gIC53aGVyZXRvLXRpdGxlIHtcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xuICB9XG5cbiAgLm1hcC1mcmFtZSB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICB9XG5cbiAgLmJnLWNvbG9yIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbiAgfVxufSJdfQ== */");

/***/ }),

/***/ "./src/app/tab1/tab1.page.ts":
/*!***********************************!*\
  !*** ./src/app/tab1/tab1.page.ts ***!
  \***********************************/
/*! exports provided: Tab1Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1Page", function() { return Tab1Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _tab2_tab2_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../tab2/tab2.page */ "./src/app/tab2/tab2.page.ts");






let Tab1Page = class Tab1Page {
    constructor(navctrl, platform, modalController) {
        this.navctrl = navctrl;
        this.platform = platform;
        this.modalController = modalController;
        this.devWidth = this.platform.width();
        this.imageLinks = [
            "./assets/images/slides/slide1.jpg",
            "./assets/images/slides/slide2.jpg",
            "./assets/images/slides/slide3.jpg",
        ];
        this.foodImages = [["./assets/images/food/salads.JPG",
                "Salads",
                "A salad is a dish consisting of a mixture of small pieces of food, usually vegetables or fruit. The sauce used to flavor a salad is commonly called a salad dressing; most salad dressings are based on either a mixture of oil and vinegar or a fermented milk product like kefir.",
                "Feta Salad"
            ],
            ["./assets/images/food/asian.JPG",
                "Our Asian Touch",
                "“You being Dutch, how come your Thai tastes better than my local at home!?” People ask this all the time. All we can say is this. When we lived in Thailand, Thai chefs taught us their secrets. How they juggle all flavours, textures and colours the Thai cuisine is so famous for. That's our reference. Ever since we cook till it tastes exactly like how it did back there. That's how we got here. So when our food brings you back to Thailand And you find yourself on this Tropical Beach And you ask yourself: “How did I get here?” Then our mission is accomplished...",
                "Nasi Goreng Special"
            ],
            ["./assets/images/food/breakfast.JPG",
                "Breakfast",
                "The definition of breakfast is a morning meal, or the first meal of the day. Eggs and bacon that you eat first thing in the morning for your first meal is an example of breakfast.",
                "Fresh OJ & homemade waffles"
            ],
            ["./assets/images/food/sweets.JPG",
                "Sweets",
                "Candy, also called sweets (British English) or lollies (Australian English, New Zealand English), is a confection that features sugar as a principal ingredient. The category, called sugar confectionery, encompasses any sweet confection, including chocolate, chewing gum, and sugar candy.",
                "Homemade chocolate muffins"
            ],
        ];
        this.slideOptions = {
            initialSlide: 0,
            speed: 400,
            autoplay: true,
            loop: true,
            setWrapperSize: true
        };
        console.log("Home tab created");
    }
    slidesDidLoad(slides) {
        slides.startAutoplay();
    }
    order() {
        this.navctrl.navigateForward('/tabs/tab2');
    }
    openModal() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (this.devWidth > 992) {
                const modal = yield this.modalController.create({
                    component: _tab2_tab2_page__WEBPACK_IMPORTED_MODULE_3__["Tab2Page"],
                    cssClass: 'my-custom-modal'
                });
                return yield modal.present();
            }
            else
                this.order();
        });
    }
};
Tab1Page.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] }
];
Tab1Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tab1',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./tab1.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/tab1.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./tab1.page.scss */ "./src/app/tab1/tab1.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])
], Tab1Page);



/***/ })

}]);
//# sourceMappingURL=tab1-tab1-module-es2015.js.map