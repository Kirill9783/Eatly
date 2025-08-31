// let swiper = new Swiper(".mySwiper", {
//     slidesPerView: 1,
//     spaceBetween: 10,
//     pagination: {
//         el: ".swiper-pagination",
//         clickable: true,
//         // type: "progressbar"
//     },
//     breakpoints: {
//         640: {
//             slidesPerView: 1,
//             spaceBetween: 15,
//         },
//         768: {
//             slidesPerView: 1,
//             spaceBetween: 25,
//         },
//         1024: {
//             slidesPerView: 2.2,
//             spaceBetween: 25,
//         },
//     },
// });

import {addSwiper} from "./swiper.js";
import {openBurger} from "./burger.js";

addSwiper();
openBurger();