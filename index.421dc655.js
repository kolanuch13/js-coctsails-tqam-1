!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},a=e.parcelRequire9a4e;null==a&&((a=function(e){if(e in t)return t[e].exports;if(e in n){var a=n[e];delete n[e];var l={id:e,exports:{}};return t[e]=l,a.call(l.exports,l,l.exports),l.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){n[e]=t},e.parcelRequire9a4e=a),a.register("57y1b",(function(e,t){var n,l,o,r;n=e.exports,l="default",o=function(){return s},Object.defineProperty(n,l,{get:o,set:r,enumerable:!0,configurable:!0});var i=a("g0jhG"),c=a("3jBIP"),d=a("keUzR"),s=modalCards=()=>{const e={openModalBtn:document.querySelectorAll("[data-modal-win-open]"),closeModalBtn:document.querySelectorAll(".js-modal-close"),backdrop:document.querySelector("[data-modal-win]"),backdropCocktails:document.querySelector(".js-backdrop-cocktails"),addCocktail:document.querySelectorAll("[data-add-new-coctail]"),addIngredient:document.querySelectorAll("[data-add-new-ingredient]")};function t(t){e.backdrop.classList.remove("is-win-hidden");let n=t.currentTarget.dataset.id;(0,i.fetchById)(n).then((t=>{e.backdropCocktails.innerHTML=(0,c.default)(t.drinks),(0,d.default)()}))}e.openModalBtn.forEach((e=>{e.addEventListener("click",t)})),e.backdrop.addEventListener("click",(function(t){t.target.closest(".modal")||e.backdrop.classList.add("is-win-hidden")}));let n=[];null!==localStorage.getItem("favoriteCocktails")&&(n=localStorage.getItem("favoriteCocktails").split(","),e.addCocktail.forEach((e=>{const t=e.dataset.id;n.includes(t)?e.innerHTML='<span>Remove</span>\n        <svg class="icon icon-heart-stroked" width="21" height="19" viewBox="0 0 35 32">\n          <path style="fill: var(--color1, #fd5103)" d="M17.684 32l-2.564-2.302c-9.107-8.144-15.12-13.515-15.12-20.107 0-5.371 4.28-9.591 9.726-9.591 3.077 0 6.030 1.413 7.958 3.645 1.928-2.232 4.881-3.645 7.958-3.645 5.447 0 9.726 4.22 9.726 9.591 0 6.592-6.013 11.963-15.12 20.124l-2.564 2.284z">\n          </path>\n        </svg>':e.innerHTML='<span>Add to</span>\n          <svg class="icon icon-heart-stroked" width="21" height="19" viewBox="0 0 35 32">\n            <path style="fill: var(--color1, #fd5103)" d="M17.684 32l-2.564-2.302c-9.107-8.144-15.12-13.515-15.12-20.107 0-5.371 4.28-9.591 9.726-9.591 3.077 0 6.030 1.413 7.958 3.645 1.928-2.232 4.881-3.645 7.958-3.645 5.447 0 9.726 4.22 9.726 9.591 0 6.592-6.013 11.963-15.12 20.124l-2.564 2.284z">\n            </path>\n            <path style="fill: var(--color2, #fcfcfc)" d="M17.684 28.632l-2.076-1.817c-7.373-6.429-12.24-10.67-12.24-15.874 0-4.24 3.464-7.572 7.874-7.572 2.491 0 4.882 1.115 6.442 2.877 1.56-1.762 3.951-2.877 6.442-2.877 4.409 0 7.874 3.332 7.874 7.572 0 5.204-4.867 9.444-12.24 15.888l-2.076 1.803z">\n            </path>\n          </svg>'})));let a=[];null!==localStorage.getItem("favoriteIngredients")&&(a=localStorage.getItem("favoriteIngredients").split(","),e.addIngredient.forEach((e=>{const t=e.dataset.id;a.includes(t)?e.innerHTML='<span>Remove</span>\n        <svg class="icon icon-heart-stroked" width="21" height="19" viewBox="0 0 35 32">\n          <path style="fill: var(--color1, #fd5103)" d="M17.684 32l-2.564-2.302c-9.107-8.144-15.12-13.515-15.12-20.107 0-5.371 4.28-9.591 9.726-9.591 3.077 0 6.030 1.413 7.958 3.645 1.928-2.232 4.881-3.645 7.958-3.645 5.447 0 9.726 4.22 9.726 9.591 0 6.592-6.013 11.963-15.12 20.124l-2.564 2.284z">\n          </path>\n        </svg>':e.innerHTML='<span>Add to</span>\n          <svg class="icon icon-heart-stroked" width="21" height="19" viewBox="0 0 35 32">\n            <path style="fill: var(--color1, #fd5103)" d="M17.684 32l-2.564-2.302c-9.107-8.144-15.12-13.515-15.12-20.107 0-5.371 4.28-9.591 9.726-9.591 3.077 0 6.030 1.413 7.958 3.645 1.928-2.232 4.881-3.645 7.958-3.645 5.447 0 9.726 4.22 9.726 9.591 0 6.592-6.013 11.963-15.12 20.124l-2.564 2.284z">\n            </path>\n            <path style="fill: var(--color2, #fcfcfc)" d="M17.684 28.632l-2.076-1.817c-7.373-6.429-12.24-10.67-12.24-15.874 0-4.24 3.464-7.572 7.874-7.572 2.491 0 4.882 1.115 6.442 2.877 1.56-1.762 3.951-2.877 6.442-2.877 4.409 0 7.874 3.332 7.874 7.572 0 5.204-4.867 9.444-12.24 15.888l-2.076 1.803z">\n            </path>\n          </svg>'}))),e.addCocktail.forEach((e=>{e.addEventListener("click",(e=>{const t=e.currentTarget.dataset.id;n.includes(t)?(n.splice(n.indexOf(t),1),localStorage.setItem("favoriteCocktails",n)):(n.push(t),localStorage.setItem("favoriteCocktails",n)),localStorage.getItem("favoriteCocktails").includes(t)?e.currentTarget.innerHTML='<span>Remove</span>\n        <svg class="icon icon-heart-stroked" width="21" height="19" viewBox="0 0 35 32">\n                <path style="fill: var(--color1, #fd5103)" d="M17.684 32l-2.564-2.302c-9.107-8.144-15.12-13.515-15.12-20.107 0-5.371 4.28-9.591 9.726-9.591 3.077 0 6.030 1.413 7.958 3.645 1.928-2.232 4.881-3.645 7.958-3.645 5.447 0 9.726 4.22 9.726 9.591 0 6.592-6.013 11.963-15.12 20.124l-2.564 2.284z">\n                </path>\n            </svg>':e.currentTarget.innerHTML='<span>Add to</span>\n        <svg class="icon icon-heart-stroked" width="21" height="19" viewBox="0 0 35 32">\n                <path style="fill: var(--color1, #fd5103)" d="M17.684 32l-2.564-2.302c-9.107-8.144-15.12-13.515-15.12-20.107 0-5.371 4.28-9.591 9.726-9.591 3.077 0 6.030 1.413 7.958 3.645 1.928-2.232 4.881-3.645 7.958-3.645 5.447 0 9.726 4.22 9.726 9.591 0 6.592-6.013 11.963-15.12 20.124l-2.564 2.284z">\n                </path>\n                <path style="fill: var(--color2, #fcfcfc)" d="M17.684 28.632l-2.076-1.817c-7.373-6.429-12.24-10.67-12.24-15.874 0-4.24 3.464-7.572 7.874-7.572 2.491 0 4.882 1.115 6.442 2.877 1.56-1.762 3.951-2.877 6.442-2.877 4.409 0 7.874 3.332 7.874 7.572 0 5.204-4.867 9.444-12.24 15.888l-2.076 1.803z">\n                </path>\n            </svg>'}))})),e.addIngredient.forEach((e=>{e.addEventListener("click",(e=>{const t=e.currentTarget.dataset.id;a.includes(t)?(a.splice(a.indexOf(t),1),localStorage.setItem("favoriteIngredients",a)):(a.push(t),localStorage.setItem("favoriteIngredients",a)),localStorage.getItem("favoriteIngredients").includes(t)?e.currentTarget.innerHTML='<span>Remove</span>\n        <svg class="icon icon-heart-stroked" width="21" height="19" viewBox="0 0 35 32">\n                <path style="fill: var(--color1, #fd5103)" d="M17.684 32l-2.564-2.302c-9.107-8.144-15.12-13.515-15.12-20.107 0-5.371 4.28-9.591 9.726-9.591 3.077 0 6.030 1.413 7.958 3.645 1.928-2.232 4.881-3.645 7.958-3.645 5.447 0 9.726 4.22 9.726 9.591 0 6.592-6.013 11.963-15.12 20.124l-2.564 2.284z">\n                </path>\n            </svg>':e.currentTarget.innerHTML='<span>Add to</span>\n        <svg class="icon icon-heart-stroked" width="21" height="19" viewBox="0 0 35 32">\n                <path style="fill: var(--color1, #fd5103)" d="M17.684 32l-2.564-2.302c-9.107-8.144-15.12-13.515-15.12-20.107 0-5.371 4.28-9.591 9.726-9.591 3.077 0 6.030 1.413 7.958 3.645 1.928-2.232 4.881-3.645 7.958-3.645 5.447 0 9.726 4.22 9.726 9.591 0 6.592-6.013 11.963-15.12 20.124l-2.564 2.284z">\n                </path>\n                <path style="fill: var(--color2, #fcfcfc)" d="M17.684 28.632l-2.076-1.817c-7.373-6.429-12.24-10.67-12.24-15.874 0-4.24 3.464-7.572 7.874-7.572 2.491 0 4.882 1.115 6.442 2.877 1.56-1.762 3.951-2.877 6.442-2.877 4.409 0 7.874 3.332 7.874 7.572 0 5.204-4.867 9.444-12.24 15.888l-2.076 1.803z">\n                </path>\n            </svg>'}))}))}}))}();
//# sourceMappingURL=index.421dc655.js.map
