"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/stats";
exports.ids = ["pages/api/stats"];
exports.modules = {

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "(api)/./pages/api/stats.ts":
/*!****************************!*\
  !*** ./pages/api/stats.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\nconst ghAccounts = {\n    bleonab: 1,\n    bhalitiubt: 1,\n    pixendrit: 1,\n    endritubt: 1,\n    Shqiperim: 1,\n    ArditShef: 1\n};\nconst ghAuthUsername = process.env[\"GITHUB_USERNAME\"] || \"\";\nconst ghAuthToken = process.env[\"GITHUB_PERSONAL_ACCESS_TOKEN\"] || \"\";\nasync function getNumberOfCommits() {\n    try {\n        const baseUrl = `https://api.github.com/repos/endritubt/landingpageubt/commits`;\n        let num = 0;\n        await Promise.all(Object.keys(ghAccounts).map(async (username)=>{\n            const perPage = 100;\n            const startPage = ghAccounts[username];\n            num += (startPage - 1) * perPage;\n            for(let page = startPage; page < 100; ++page){\n                const { data: commits  } = await axios__WEBPACK_IMPORTED_MODULE_0___default().get(baseUrl, {\n                    params: {\n                        author: username,\n                        since: \"2022-01-01\",\n                        per_page: perPage,\n                        page\n                    },\n                    auth: {\n                        username: ghAuthUsername,\n                        password: ghAuthToken\n                    }\n                });\n                num += commits.length;\n                if (commits.length < perPage) break;\n            }\n        }));\n        return num;\n    } catch (e) {\n        console.error(e);\n        return 0;\n    }\n}\nasync function handler(_req, res) {\n    const commits = await getNumberOfCommits();\n    // cach it for a day \n    res.setHeader(\"Cache-Control\", \"s-maxage=86400\");\n    res.status(200).json({\n        commits\n    });\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvc3RhdHMudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQTBCO0FBTzFCLE1BQU1DLFVBQVUsR0FBNEM7SUFDMURDLE9BQU8sRUFBRSxDQUFDO0lBQ1ZDLFVBQVUsRUFBRSxDQUFDO0lBQ2JDLFNBQVMsRUFBRSxDQUFDO0lBQ1pDLFNBQVMsRUFBRSxDQUFDO0lBQ1pDLFNBQVMsRUFBRSxDQUFDO0lBQ1pDLFNBQVMsRUFBRSxDQUFDO0NBQ2I7QUFFRCxNQUFNQyxjQUFjLEdBQUdDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLGlCQUFpQixDQUFDLElBQUksRUFBRTtBQUMzRCxNQUFNQyxXQUFXLEdBQUdGLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLDhCQUE4QixDQUFDLElBQUksRUFBRTtBQUVyRSxlQUFlRSxrQkFBa0IsR0FBRztJQUNsQyxJQUFJO1FBQ0YsTUFBTUMsT0FBTyxHQUFHLENBQUMsNkRBQTZELENBQUM7UUFDL0UsSUFBSUMsR0FBRyxHQUFHLENBQUM7UUFDWCxNQUFNQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsTUFBTSxDQUFDQyxJQUFJLENBQUNqQixVQUFVLENBQUMsQ0FBQ2tCLEdBQUcsQ0FBQyxPQUFNQyxRQUFRLEdBQUk7WUFDOUQsTUFBTUMsT0FBTyxHQUFHLEdBQUc7WUFDbkIsTUFBTUMsU0FBUyxHQUFHckIsVUFBVSxDQUFDbUIsUUFBUSxDQUFDO1lBQ3RDTixHQUFHLElBQUksQ0FBQ1EsU0FBUyxHQUFHLENBQUMsQ0FBQyxHQUFHRCxPQUFPO1lBQ2hDLElBQUssSUFBSUUsSUFBSSxHQUFHRCxTQUFTLEVBQUVDLElBQUksR0FBRyxHQUFHLEVBQUUsRUFBRUEsSUFBSSxDQUFFO2dCQUM3QyxNQUFNLEVBQUVDLElBQUksRUFBRUMsT0FBTyxHQUFFLEdBQUcsTUFBTXpCLGdEQUFTLENBQUNhLE9BQU8sRUFBRTtvQkFDakRjLE1BQU0sRUFBRTt3QkFDTkMsTUFBTSxFQUFFUixRQUFRO3dCQUNoQlMsS0FBSyxFQUFFLFlBQVk7d0JBQ25CQyxRQUFRLEVBQUVULE9BQU87d0JBQ2pCRSxJQUFJO3FCQUNMO29CQUNEUSxJQUFJLEVBQUU7d0JBQ0pYLFFBQVEsRUFBRVosY0FBYzt3QkFDeEJ3QixRQUFRLEVBQUVyQixXQUFXO3FCQUN0QjtpQkFDRixDQUFDO2dCQUNGRyxHQUFHLElBQUlXLE9BQU8sQ0FBQ1EsTUFBTTtnQkFDckIsSUFBSVIsT0FBTyxDQUFDUSxNQUFNLEdBQUdaLE9BQU8sRUFBRSxNQUFLO2FBQ3BDO1NBQ0YsQ0FBQyxDQUFDO1FBQ0gsT0FBT1AsR0FBRztLQUNYLENBQUMsT0FBT29CLENBQUMsRUFBRTtRQUNWQyxPQUFPLENBQUNDLEtBQUssQ0FBQ0YsQ0FBQyxDQUFDO1FBQ2hCLE9BQU8sQ0FBQztLQUNUO0NBQ0Y7QUFFYyxlQUFlRyxPQUFPLENBQ25DQyxJQUFvQixFQUNwQkMsR0FBMEIsRUFDMUI7SUFDQSxNQUFNZCxPQUFPLEdBQUcsTUFBTWIsa0JBQWtCLEVBQUU7SUFDMUMscUJBQXFCO0lBQ3JCMkIsR0FBRyxDQUFDQyxTQUFTLENBQUMsZUFBZSxFQUFFLGdCQUFnQixDQUFDO0lBQ2hERCxHQUFHLENBQUNFLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO1FBQ25CakIsT0FBTztLQUNSLENBQUM7Q0FDSCIsInNvdXJjZXMiOlsid2VicGFjazovL3VidGFnZW5jeS8uL3BhZ2VzL2FwaS9zdGF0cy50cz80YmU0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gXCJuZXh0XCI7XHJcblxyXG50eXBlIERhdGEgPSB7XHJcbiAgY29tbWl0czogbnVtYmVyO1xyXG59O1xyXG5cclxuY29uc3QgZ2hBY2NvdW50czogeyByZWFkb25seSBbdXNlcm5hbWU6IHN0cmluZ106IG51bWJlciB9ID0ge1xyXG4gIGJsZW9uYWI6IDEsXHJcbiAgYmhhbGl0aXVidDogMSxcclxuICBwaXhlbmRyaXQ6IDEsXHJcbiAgZW5kcml0dWJ0OiAxLFxyXG4gIFNocWlwZXJpbTogMSxcclxuICBBcmRpdFNoZWY6IDEsXHJcbn07XHJcblxyXG5jb25zdCBnaEF1dGhVc2VybmFtZSA9IHByb2Nlc3MuZW52WydHSVRIVUJfVVNFUk5BTUUnXSB8fCAnJ1xyXG5jb25zdCBnaEF1dGhUb2tlbiA9IHByb2Nlc3MuZW52WydHSVRIVUJfUEVSU09OQUxfQUNDRVNTX1RPS0VOJ10gfHwgJydcclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGdldE51bWJlck9mQ29tbWl0cygpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgYmFzZVVybCA9IGBodHRwczovL2FwaS5naXRodWIuY29tL3JlcG9zL2VuZHJpdHVidC9sYW5kaW5ncGFnZXVidC9jb21taXRzYFxyXG4gICAgbGV0IG51bSA9IDBcclxuICAgIGF3YWl0IFByb21pc2UuYWxsKE9iamVjdC5rZXlzKGdoQWNjb3VudHMpLm1hcChhc3luYyB1c2VybmFtZSA9PiB7XHJcbiAgICAgIGNvbnN0IHBlclBhZ2UgPSAxMDBcclxuICAgICAgY29uc3Qgc3RhcnRQYWdlID0gZ2hBY2NvdW50c1t1c2VybmFtZV1cclxuICAgICAgbnVtICs9IChzdGFydFBhZ2UgLSAxKSAqIHBlclBhZ2VcclxuICAgICAgZm9yIChsZXQgcGFnZSA9IHN0YXJ0UGFnZTsgcGFnZSA8IDEwMDsgKytwYWdlKSB7XHJcbiAgICAgICAgY29uc3QgeyBkYXRhOiBjb21taXRzIH0gPSBhd2FpdCBheGlvcy5nZXQoYmFzZVVybCwge1xyXG4gICAgICAgICAgcGFyYW1zOiB7XHJcbiAgICAgICAgICAgIGF1dGhvcjogdXNlcm5hbWUsXHJcbiAgICAgICAgICAgIHNpbmNlOiAnMjAyMi0wMS0wMScsXHJcbiAgICAgICAgICAgIHBlcl9wYWdlOiBwZXJQYWdlLFxyXG4gICAgICAgICAgICBwYWdlXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgYXV0aDoge1xyXG4gICAgICAgICAgICB1c2VybmFtZTogZ2hBdXRoVXNlcm5hbWUsXHJcbiAgICAgICAgICAgIHBhc3N3b3JkOiBnaEF1dGhUb2tlbixcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIG51bSArPSBjb21taXRzLmxlbmd0aFxyXG4gICAgICAgIGlmIChjb21taXRzLmxlbmd0aCA8IHBlclBhZ2UpIGJyZWFrXHJcbiAgICAgIH1cclxuICAgIH0pKVxyXG4gICAgcmV0dXJuIG51bVxyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoZSlcclxuICAgIHJldHVybiAwXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKFxyXG4gIF9yZXE6IE5leHRBcGlSZXF1ZXN0LFxyXG4gIHJlczogTmV4dEFwaVJlc3BvbnNlPERhdGE+XHJcbikge1xyXG4gIGNvbnN0IGNvbW1pdHMgPSBhd2FpdCBnZXROdW1iZXJPZkNvbW1pdHMoKVxyXG4gIC8vIGNhY2ggaXQgZm9yIGEgZGF5IFxyXG4gIHJlcy5zZXRIZWFkZXIoJ0NhY2hlLUNvbnRyb2wnLCAncy1tYXhhZ2U9ODY0MDAnKVxyXG4gIHJlcy5zdGF0dXMoMjAwKS5qc29uKHtcclxuICAgIGNvbW1pdHNcclxuICB9KVxyXG59XHJcbiJdLCJuYW1lcyI6WyJheGlvcyIsImdoQWNjb3VudHMiLCJibGVvbmFiIiwiYmhhbGl0aXVidCIsInBpeGVuZHJpdCIsImVuZHJpdHVidCIsIlNocWlwZXJpbSIsIkFyZGl0U2hlZiIsImdoQXV0aFVzZXJuYW1lIiwicHJvY2VzcyIsImVudiIsImdoQXV0aFRva2VuIiwiZ2V0TnVtYmVyT2ZDb21taXRzIiwiYmFzZVVybCIsIm51bSIsIlByb21pc2UiLCJhbGwiLCJPYmplY3QiLCJrZXlzIiwibWFwIiwidXNlcm5hbWUiLCJwZXJQYWdlIiwic3RhcnRQYWdlIiwicGFnZSIsImRhdGEiLCJjb21taXRzIiwiZ2V0IiwicGFyYW1zIiwiYXV0aG9yIiwic2luY2UiLCJwZXJfcGFnZSIsImF1dGgiLCJwYXNzd29yZCIsImxlbmd0aCIsImUiLCJjb25zb2xlIiwiZXJyb3IiLCJoYW5kbGVyIiwiX3JlcSIsInJlcyIsInNldEhlYWRlciIsInN0YXR1cyIsImpzb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/stats.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/stats.ts"));
module.exports = __webpack_exports__;

})();