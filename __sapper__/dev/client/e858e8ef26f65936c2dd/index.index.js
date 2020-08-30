(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["index"],{

/***/ "./src/routes/index.svelte":
/*!*********************************!*\
  !*** ./src/routes/index.svelte ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/internal/index.mjs");
/* harmony import */ var svelte__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! svelte */ "./node_modules/svelte/index.mjs");
/* src/routes/index.svelte generated by Svelte v3.24.1 */



const file = "src/routes/index.svelte";

function create_fragment(ctx) {
	let t;
	let section;

	const block = {
		c: function create() {
			t = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			section = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("section");
			this.h();
		},
		l: function claim(nodes) {
			const head_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["query_selector_all"])("[data-svelte=\"svelte-1fov8ar\"]", document.head);
			head_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			t = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_space"])(nodes);
			section = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(nodes, "SECTION", {});
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(section).forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			this.h();
		},
		h: function hydrate() {
			document.title = "SNKR KPR | Home";
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(section, file, 16, 0, 257);
		},
		m: function mount(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert_dev"])(target, t, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert_dev"])(target, section, anchor);
		},
		p: svelte_internal__WEBPACK_IMPORTED_MODULE_0__["noop"],
		i: svelte_internal__WEBPACK_IMPORTED_MODULE_0__["noop"],
		o: svelte_internal__WEBPACK_IMPORTED_MODULE_0__["noop"],
		d: function destroy(detaching) {
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"])(t);
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"])(section);
		}
	};

	Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["dispatch_dev"])("SvelteRegisterBlock", {
		block,
		id: create_fragment.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance($$self, $$props, $$invalidate) {
	let isAuthorized = false;

	Object(svelte__WEBPACK_IMPORTED_MODULE_1__["onMount"])(() => {
		if (!isAuthorized) {
			location.href = "login";
		}

		return;
	});

	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Routes> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["validate_slots"])("Routes", $$slots, []);
	$$self.$capture_state = () => ({ onMount: svelte__WEBPACK_IMPORTED_MODULE_1__["onMount"], onDestroy: svelte__WEBPACK_IMPORTED_MODULE_1__["onDestroy"], isAuthorized });

	$$self.$inject_state = $$props => {
		if ("isAuthorized" in $$props) isAuthorized = $$props.isAuthorized;
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [];
}

class Routes extends svelte_internal__WEBPACK_IMPORTED_MODULE_0__["SvelteComponentDev"] {
	constructor(options) {
		super(options);
		Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["init"])(this, options, instance, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__["safe_not_equal"], {});

		Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["dispatch_dev"])("SvelteRegisterComponent", {
			component: this,
			tagName: "Routes",
			options,
			id: create_fragment.name
		});
	}
}

/* harmony default export */ __webpack_exports__["default"] = (Routes);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy4vc3JjL3JvdXRlcy9pbmRleC5zdmVsdGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUM4Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0FDeEMsWUFBWSxHQUFHLEtBQUs7O0NBRXhCLHNEQUFPO09BQ0EsWUFBWTtHQUNmLFFBQVEsQ0FBQyxJQUFJLEdBQUcsT0FBTyIsImZpbGUiOiJlODU4ZThlZjI2ZjY1OTM2YzJkZC9pbmRleC5pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQ+XG4gIGltcG9ydCB7IG9uTW91bnQsIG9uRGVzdHJveSB9IGZyb20gXCJzdmVsdGVcIjtcbiAgbGV0IGlzQXV0aG9yaXplZCA9IGZhbHNlO1xuXG4gIG9uTW91bnQoKCkgPT4ge1xuICAgIGlmICghaXNBdXRob3JpemVkKSB7XG4gICAgICBsb2NhdGlvbi5ocmVmID0gXCJsb2dpblwiO1xuICAgIH1cbiAgICByZXR1cm47XG4gIH0pO1xuPC9zY3JpcHQ+XG5cbjxzdmVsdGU6aGVhZD5cbiAgPHRpdGxlPlNOS1IgS1BSIHwgSG9tZTwvdGl0bGU+XG48L3N2ZWx0ZTpoZWFkPlxuXG48c2VjdGlvbiAvPlxuIl0sInNvdXJjZVJvb3QiOiIifQ==