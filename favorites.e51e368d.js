function t(t,n,e,o){Object.defineProperty(t,n,{get:e,set:o,enumerable:!0,configurable:!0})}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},e={},o={},r=n.parcelRequire9a4e;null==r&&((r=function(t){if(t in e)return e[t].exports;if(t in o){var n=o[t];delete o[t];var r={id:t,exports:{}};return e[t]=r,n.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+t+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(t,n){o[t]=n},n.parcelRequire9a4e=r),r.register("cDqy2",(function(n,e){t(n.exports,"fetchCocktails",(function(){return i})),t(n.exports,"fetchLetters",(function(){return c})),t(n.exports,"fetchIngredients",(function(){return a})),t(n.exports,"fetchIngredientsId",(function(){return s})),t(n.exports,"fetchById",(function(){return f})),t(n.exports,"fetchRandom",(function(){return u}));const o="https://www.thecocktaildb.com/api/json/v1/1/search.php?",r="https://www.thecocktaildb.com/api/json/v1/1/lookup.php?";async function i(t){const n=await fetch(`${o}s=${t}`);return await n.json()}async function c(t){const n=await fetch(`${o}f=${t}`);return await n.json()}async function a(t){const n=await fetch(`${o}i=${t}`);return await n.json()}async function s(t){const n=await fetch(`${r}iid=${t}`);return await n.json()}async function f(t){const n=await fetch(`${r}i=${t}`);return await n.json()}async function u(){const t=await fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php");return await t.json()}}));
//# sourceMappingURL=favorites.e51e368d.js.map
