(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login"],{

/***/ "./src/routes/login.svelte":
/*!*********************************!*\
  !*** ./src/routes/login.svelte ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/internal/index.mjs");
/* harmony import */ var _stores_auth_store_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../stores/auth-store.js */ "./src/stores/auth-store.js");
/* src/routes/login.svelte generated by Svelte v3.24.1 */


const { console: console_1 } = svelte_internal__WEBPACK_IMPORTED_MODULE_0__["globals"];

const file = "src/routes/login.svelte";

function add_css() {
	var style = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("style");
	style.id = "svelte-yss79k-style";
	style.textContent = "@import url(\"https://fonts.googleapis.com/css2?family=Orbitron&display=swap\");section.svelte-yss79k{margin-top:7rem;font-family:\"Orbitron\", sans-serif}input.svelte-yss79k{display:block;width:80%;border:none;border-bottom:2px solid #ccc;border-radius:3px 3px 0 0;background:white;padding:0.15rem 0.25rem;transition:border-color 0.1s ease-out;margin-bottom:0.8rem}input.svelte-yss79k:focus{border-color:#ff2247;outline:none}label.svelte-yss79k{display:block;margin-bottom:0.5rem;width:100%;font-family:\"Orbitron\", sans-serif}button.svelte-yss79k{background-color:#ff2247;border-radius:10px;border:1px solid #ff2247;display:inline-block;cursor:pointer;color:#ffffff;font-family:Arial;font-size:17px;padding:16px 31px;text-decoration:none}button.svelte-yss79k:hover{background-color:#ceff00;color:black;border:1px solid #ceff00}.login-card-container.svelte-yss79k{margin:auto;width:23rem;height:30rem;background-color:rgb(0, 173, 223);border:3px solid #737d84;border-radius:25px;color:white}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uc3ZlbHRlIiwic291cmNlcyI6WyJsb2dpbi5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiPHNjcmlwdD5cbiAgaW1wb3J0IGF1dGhTdG9yZSBmcm9tIFwiLi4vc3RvcmVzL2F1dGgtc3RvcmUuanNcIjtcbiAgbGV0IGlzQXV0aGVudGljYXRlZDtcbiAgbGV0IGVycm9yO1xuICBsZXQgdXNlcm5hbWU7XG4gIGxldCBwYXNzd29yZDtcblxuICBjb25zdCB1bnN1YnNjcmliZUF1dGggPSBhdXRoU3RvcmUuc3Vic2NyaWJlKGlzQXV0aCA9PiB7XG4gICAgaXNBdXRoZW50aWNhdGVkID0gaXNBdXRoO1xuICB9KTtcblxuICBmdW5jdGlvbiBhdXRoZW50aWNhdGVVc2VyKHVzZXJuYW1lLCBwYXNzd29yZCkge1xuICAgIGlmICh1c2VybmFtZSA9PT0gXCJqZGFha2VcIiAmJiBwYXNzd29yZCA9PT0gXCJwYXNzd29yZFwiKSB7XG4gICAgICBhdXRoU3RvcmUudXBkYXRlKCgpID0+IHtcbiAgICAgICAgcmV0dXJuIHsgaXNBdXRoZW50aWNhdGVkOiB0cnVlIH07XG4gICAgICB9KTtcbiAgICAgIHVuc3Vic2NyaWJlQXV0aCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBlcnJvciA9IFwiVXNlcm5hbWUgb3IgUGFzc3dvcmQgaXMgaW5jb3JyZWN0LiBQbGVhc2UgdHJ5IGFnYWluLlwiO1xuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgIH1cbiAgfVxuPC9zY3JpcHQ+XG5cbjxzdHlsZT5cbiAgQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU9yYml0cm9uJmRpc3BsYXk9c3dhcFwiKTtcblxuICBzZWN0aW9uIHtcbiAgICBtYXJnaW4tdG9wOiA3cmVtO1xuICAgIGZvbnQtZmFtaWx5OiBcIk9yYml0cm9uXCIsIHNhbnMtc2VyaWY7XG4gIH1cbiAgaW5wdXQge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiA4MCU7XG5cbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNjY2M7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4IDNweCAwIDA7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgcGFkZGluZzogMC4xNXJlbSAwLjI1cmVtO1xuICAgIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAwLjFzIGVhc2Utb3V0O1xuICAgIG1hcmdpbi1ib3R0b206IDAuOHJlbTtcbiAgfVxuXG4gIGlucHV0OmZvY3VzIHtcbiAgICBib3JkZXItY29sb3I6ICNmZjIyNDc7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgfVxuICBsYWJlbCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGZvbnQtZmFtaWx5OiBcIk9yYml0cm9uXCIsIHNhbnMtc2VyaWY7XG4gIH1cbiAgYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmYyMjQ3O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2ZmMjI0NztcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIGZvbnQtZmFtaWx5OiBBcmlhbDtcbiAgICBmb250LXNpemU6IDE3cHg7XG4gICAgcGFkZGluZzogMTZweCAzMXB4O1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgfVxuICBidXR0b246aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNjZWZmMDA7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjZWZmMDA7XG4gIH1cblxuICAubG9naW4tY2FyZC1jb250YWluZXIge1xuICAgIG1hcmdpbjogYXV0bztcbiAgICB3aWR0aDogMjNyZW07XG4gICAgaGVpZ2h0OiAzMHJlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMTczLCAyMjMpO1xuICAgIGJvcmRlcjogM3B4IHNvbGlkICM3MzdkODQ7XG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgICBjb2xvcjogd2hpdGU7XG4gIH1cbjwvc3R5bGU+XG5cbjxzdmVsdGU6aGVhZD5cbiAgPHRpdGxlPlNOS1IgS1BSIHwgTG9naW48L3RpdGxlPlxuPC9zdmVsdGU6aGVhZD5cblxuPHNlY3Rpb24+XG4gIDxkaXYgY2xhc3M9XCJsb2dpbi1jYXJkLWNvbnRhaW5lclwiPlxuICAgIDxkaXYgY2xhc3M9XCJsb2dpbi1oZWFkZXJcIj5cbiAgICAgIDxoMj5Mb2dpbjwvaDI+XG4gICAgICA8cD5QbGVhc2UgZW50ZXIgeW91ciB1c2VybmFtZSBhbmQgcGFzc3dvcmQ8L3A+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImxvZ2luLXVzZXJuYW1lXCI+XG4gICAgICA8bGFiZWwgZm9yPVwidXNlcm5hbWVcIj5Vc2VybmFtZTo8L2xhYmVsPlxuICAgICAgPGlucHV0XG4gICAgICAgIGlkPVwidXNlcm5hbWVcIlxuICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgIHBsYWNlaG9sZGVyPVwiVXNlcm5hbWVcIlxuICAgICAgICBiaW5kOnZhbHVlPXt1c2VybmFtZX0gLz5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwibG9naW4tcGFzc3dvcmRcIj5cbiAgICAgIDxsYWJlbCBmb3I9XCJwYXNzd29yZFwiPlBhc3N3b3JkOjwvbGFiZWw+XG4gICAgICA8aW5wdXRcbiAgICAgICAgaWQ9XCJwYXNzd29yZFwiXG4gICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgIHBsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIlxuICAgICAgICBiaW5kOnZhbHVlPXtwYXNzd29yZH0gLz5cbiAgICA8L2Rpdj5cbiAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBvbjpjbGljaz17YXV0aGVudGljYXRlVXNlcih1c2VybmFtZSwgcGFzc3dvcmQpfT5cbiAgICAgIFN1Ym1pdFxuICAgIDwvYnV0dG9uPlxuICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiPlNpZ24gVXAhPC9idXR0b24+XG4gIDwvZGl2PlxuPC9zZWN0aW9uPlxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlCRSxRQUFRLElBQUksZ0VBQWdFLENBQUMsQ0FBQyxBQUU5RSxPQUFPLGNBQUMsQ0FBQyxBQUNQLFVBQVUsQ0FBRSxJQUFJLENBQ2hCLFdBQVcsQ0FBRSxVQUFVLENBQUMsQ0FBQyxVQUFVLEFBQ3JDLENBQUMsQUFDRCxLQUFLLGNBQUMsQ0FBQyxBQUNMLE9BQU8sQ0FBRSxLQUFLLENBQ2QsS0FBSyxDQUFFLEdBQUcsQ0FFVixNQUFNLENBQUUsSUFBSSxDQUNaLGFBQWEsQ0FBRSxHQUFHLENBQUMsS0FBSyxDQUFDLElBQUksQ0FDN0IsYUFBYSxDQUFFLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FDMUIsVUFBVSxDQUFFLEtBQUssQ0FDakIsT0FBTyxDQUFFLE9BQU8sQ0FBQyxPQUFPLENBQ3hCLFVBQVUsQ0FBRSxZQUFZLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FDdEMsYUFBYSxDQUFFLE1BQU0sQUFDdkIsQ0FBQyxBQUVELG1CQUFLLE1BQU0sQUFBQyxDQUFDLEFBQ1gsWUFBWSxDQUFFLE9BQU8sQ0FDckIsT0FBTyxDQUFFLElBQUksQUFDZixDQUFDLEFBQ0QsS0FBSyxjQUFDLENBQUMsQUFDTCxPQUFPLENBQUUsS0FBSyxDQUNkLGFBQWEsQ0FBRSxNQUFNLENBQ3JCLEtBQUssQ0FBRSxJQUFJLENBQ1gsV0FBVyxDQUFFLFVBQVUsQ0FBQyxDQUFDLFVBQVUsQUFDckMsQ0FBQyxBQUNELE1BQU0sY0FBQyxDQUFDLEFBQ04sZ0JBQWdCLENBQUUsT0FBTyxDQUN6QixhQUFhLENBQUUsSUFBSSxDQUNuQixNQUFNLENBQUUsR0FBRyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQ3pCLE9BQU8sQ0FBRSxZQUFZLENBQ3JCLE1BQU0sQ0FBRSxPQUFPLENBQ2YsS0FBSyxDQUFFLE9BQU8sQ0FDZCxXQUFXLENBQUUsS0FBSyxDQUNsQixTQUFTLENBQUUsSUFBSSxDQUNmLE9BQU8sQ0FBRSxJQUFJLENBQUMsSUFBSSxDQUNsQixlQUFlLENBQUUsSUFBSSxBQUN2QixDQUFDLEFBQ0Qsb0JBQU0sTUFBTSxBQUFDLENBQUMsQUFDWixnQkFBZ0IsQ0FBRSxPQUFPLENBQ3pCLEtBQUssQ0FBRSxLQUFLLENBQ1osTUFBTSxDQUFFLEdBQUcsQ0FBQyxLQUFLLENBQUMsT0FBTyxBQUMzQixDQUFDLEFBRUQscUJBQXFCLGNBQUMsQ0FBQyxBQUNyQixNQUFNLENBQUUsSUFBSSxDQUNaLEtBQUssQ0FBRSxLQUFLLENBQ1osTUFBTSxDQUFFLEtBQUssQ0FDYixnQkFBZ0IsQ0FBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUNsQyxNQUFNLENBQUUsR0FBRyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQ3pCLGFBQWEsQ0FBRSxJQUFJLENBQ25CLEtBQUssQ0FBRSxLQUFLLEFBQ2QsQ0FBQyJ9 */";
	Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(document.head, style);
}

function create_fragment(ctx) {
	let t0;
	let section;
	let div3;
	let div0;
	let h2;
	let t1;
	let t2;
	let p;
	let t3;
	let t4;
	let div1;
	let label0;
	let t5;
	let t6;
	let input0;
	let t7;
	let div2;
	let label1;
	let t8;
	let t9;
	let input1;
	let t10;
	let button0;
	let t11;
	let t12;
	let button1;
	let t13;
	let mounted;
	let dispose;

	const block = {
		c: function create() {
			t0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			section = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("section");
			div3 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");
			div0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");
			h2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("h2");
			t1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])("Login");
			t2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			p = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("p");
			t3 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])("Please enter your username and password");
			t4 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			div1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");
			label0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("label");
			t5 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])("Username:");
			t6 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			input0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("input");
			t7 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			div2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");
			label1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("label");
			t8 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])("Password:");
			t9 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			input1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("input");
			t10 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			button0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("button");
			t11 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])("Submit");
			t12 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			button1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("button");
			t13 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])("Sign Up!");
			this.h();
		},
		l: function claim(nodes) {
			const head_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["query_selector_all"])("[data-svelte=\"svelte-129upzn\"]", document.head);
			head_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			t0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_space"])(nodes);
			section = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(nodes, "SECTION", { class: true });
			var section_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(section);
			div3 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(section_nodes, "DIV", { class: true });
			var div3_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(div3);
			div0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(div3_nodes, "DIV", { class: true });
			var div0_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(div0);
			h2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(div0_nodes, "H2", {});
			var h2_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(h2);
			t1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(h2_nodes, "Login");
			h2_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			t2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_space"])(div0_nodes);
			p = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(div0_nodes, "P", {});
			var p_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(p);
			t3 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(p_nodes, "Please enter your username and password");
			p_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			div0_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			t4 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_space"])(div3_nodes);
			div1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(div3_nodes, "DIV", { class: true });
			var div1_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(div1);
			label0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(div1_nodes, "LABEL", { for: true, class: true });
			var label0_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(label0);
			t5 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(label0_nodes, "Username:");
			label0_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			t6 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_space"])(div1_nodes);

			input0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(div1_nodes, "INPUT", {
				id: true,
				type: true,
				placeholder: true,
				class: true
			});

			div1_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			t7 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_space"])(div3_nodes);
			div2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(div3_nodes, "DIV", { class: true });
			var div2_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(div2);
			label1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(div2_nodes, "LABEL", { for: true, class: true });
			var label1_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(label1);
			t8 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(label1_nodes, "Password:");
			label1_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			t9 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_space"])(div2_nodes);

			input1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(div2_nodes, "INPUT", {
				id: true,
				type: true,
				placeholder: true,
				class: true
			});

			div2_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			t10 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_space"])(div3_nodes);
			button0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(div3_nodes, "BUTTON", { type: true, class: true });
			var button0_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(button0);
			t11 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(button0_nodes, "Submit");
			button0_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			t12 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_space"])(div3_nodes);
			button1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(div3_nodes, "BUTTON", { type: true, class: true });
			var button1_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(button1);
			t13 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(button1_nodes, "Sign Up!");
			button1_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			div3_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			section_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			this.h();
		},
		h: function hydrate() {
			document.title = "SNKR KPR | Login";
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(h2, file, 90, 6, 1912);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(p, file, 91, 6, 1933);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(div0, "class", "login-header");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(div0, file, 89, 4, 1879);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(label0, "for", "username");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(label0, "class", "svelte-yss79k");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(label0, file, 94, 6, 2030);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(input0, "id", "username");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(input0, "type", "text");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(input0, "placeholder", "Username");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(input0, "class", "svelte-yss79k");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(input0, file, 95, 6, 2076);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(div1, "class", "login-username");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(div1, file, 93, 4, 1995);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(label1, "for", "password");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(label1, "class", "svelte-yss79k");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(label1, file, 102, 6, 2239);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(input1, "id", "password");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(input1, "type", "password");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(input1, "placeholder", "Password");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(input1, "class", "svelte-yss79k");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(input1, file, 103, 6, 2285);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(div2, "class", "login-password");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(div2, file, 101, 4, 2204);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(button0, "type", "submit");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(button0, "class", "svelte-yss79k");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(button0, file, 109, 4, 2417);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(button1, "type", "button");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(button1, "class", "svelte-yss79k");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(button1, file, 112, 4, 2519);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(div3, "class", "login-card-container svelte-yss79k");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(div3, file, 88, 2, 1840);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(section, "class", "svelte-yss79k");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(section, file, 87, 0, 1828);
		},
		m: function mount(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert_dev"])(target, t0, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert_dev"])(target, section, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(section, div3);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(div3, div0);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(div0, h2);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(h2, t1);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(div0, t2);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(div0, p);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(p, t3);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(div3, t4);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(div3, div1);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(div1, label0);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(label0, t5);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(div1, t6);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(div1, input0);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["set_input_value"])(input0, /*username*/ ctx[0]);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(div3, t7);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(div3, div2);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(div2, label1);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(label1, t8);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(div2, t9);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(div2, input1);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["set_input_value"])(input1, /*password*/ ctx[1]);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(div3, t10);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(div3, button0);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(button0, t11);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(div3, t12);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(div3, button1);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(button1, t13);

			if (!mounted) {
				dispose = [
					Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["listen_dev"])(input0, "input", /*input0_input_handler*/ ctx[3]),
					Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["listen_dev"])(input1, "input", /*input1_input_handler*/ ctx[4]),
					Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["listen_dev"])(
						button0,
						"click",
						function () {
							if (Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["is_function"])(/*authenticateUser*/ ctx[2](/*username*/ ctx[0], /*password*/ ctx[1]))) /*authenticateUser*/ ctx[2](/*username*/ ctx[0], /*password*/ ctx[1]).apply(this, arguments);
						},
						false,
						false,
						false
					)
				];

				mounted = true;
			}
		},
		p: function update(new_ctx, [dirty]) {
			ctx = new_ctx;

			if (dirty & /*username*/ 1 && input0.value !== /*username*/ ctx[0]) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["set_input_value"])(input0, /*username*/ ctx[0]);
			}

			if (dirty & /*password*/ 2 && input1.value !== /*password*/ ctx[1]) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["set_input_value"])(input1, /*password*/ ctx[1]);
			}
		},
		i: svelte_internal__WEBPACK_IMPORTED_MODULE_0__["noop"],
		o: svelte_internal__WEBPACK_IMPORTED_MODULE_0__["noop"],
		d: function destroy(detaching) {
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"])(t0);
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"])(section);
			mounted = false;
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["run_all"])(dispose);
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
	let isAuthenticated;
	let error;
	let username;
	let password;

	const unsubscribeAuth = _stores_auth_store_js__WEBPACK_IMPORTED_MODULE_1__["default"].subscribe(isAuth => {
		isAuthenticated = isAuth;
	});

	function authenticateUser(username, password) {
		if (username === "jdaake" && password === "password") {
			_stores_auth_store_js__WEBPACK_IMPORTED_MODULE_1__["default"].update(() => {
				return { isAuthenticated: true };
			});

			unsubscribeAuth();
		} else {
			error = "Username or Password is incorrect. Please try again.";
			console.log(error);
		}
	}

	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console_1.warn(`<Login> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["validate_slots"])("Login", $$slots, []);

	function input0_input_handler() {
		username = this.value;
		$$invalidate(0, username);
	}

	function input1_input_handler() {
		password = this.value;
		$$invalidate(1, password);
	}

	$$self.$capture_state = () => ({
		authStore: _stores_auth_store_js__WEBPACK_IMPORTED_MODULE_1__["default"],
		isAuthenticated,
		error,
		username,
		password,
		unsubscribeAuth,
		authenticateUser
	});

	$$self.$inject_state = $$props => {
		if ("isAuthenticated" in $$props) isAuthenticated = $$props.isAuthenticated;
		if ("error" in $$props) error = $$props.error;
		if ("username" in $$props) $$invalidate(0, username = $$props.username);
		if ("password" in $$props) $$invalidate(1, password = $$props.password);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [
		username,
		password,
		authenticateUser,
		input0_input_handler,
		input1_input_handler
	];
}

class Login extends svelte_internal__WEBPACK_IMPORTED_MODULE_0__["SvelteComponentDev"] {
	constructor(options) {
		super(options);
		if (!document.getElementById("svelte-yss79k-style")) add_css();
		Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["init"])(this, options, instance, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__["safe_not_equal"], {});

		Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["dispatch_dev"])("SvelteRegisterComponent", {
			component: this,
			tagName: "Login",
			options,
			id: create_fragment.name
		});
	}
}

/* harmony default export */ __webpack_exports__["default"] = (Login);

/***/ }),

/***/ "./src/stores/auth-store.js":
/*!**********************************!*\
  !*** ./src/stores/auth-store.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var svelte_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/store */ "./node_modules/svelte/store/index.mjs");


const isAuthenticated = Object(svelte_store__WEBPACK_IMPORTED_MODULE_0__["writable"])({
  isAuth: false,
});

/* harmony default export */ __webpack_exports__["default"] = (isAuthenticated);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcm91dGVzL2xvZ2luLnN2ZWx0ZSIsIndlYnBhY2s6Ly8vLi9zcmMvc3RvcmVzL2F1dGgtc3RvcmUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDa0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Z0dBa0c5QixHQUFROzs7Ozs7O2dHQVFSLEdBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7b0dBRVEsR0FBZ0IsaUJBQUMsR0FBUSxrQkFBRSxHQUFRLDRCQUFuQyxHQUFnQixpQkFBQyxHQUFRLGtCQUFFLEdBQVE7Ozs7Ozs7Ozs7Ozs7OytEQVZuRCxHQUFRO2lHQUFSLEdBQVE7OzsrREFRUixHQUFRO2lHQUFSLEdBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0F6R3RCLGVBQWU7S0FDZixLQUFLO0tBQ0wsUUFBUTtLQUNSLFFBQVE7O09BRU4sZUFBZSxHQUFHLDZEQUFTLENBQUMsU0FBUyxDQUFDLE1BQU07RUFDaEQsZUFBZSxHQUFHLE1BQU07OztVQUdqQixnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsUUFBUTtNQUN0QyxRQUFRLEtBQUssUUFBUSxJQUFJLFFBQVEsS0FBSyxVQUFVO0dBQ2xELDZEQUFTLENBQUMsTUFBTTthQUNMLGVBQWUsRUFBRSxJQUFJOzs7R0FFaEMsZUFBZTs7R0FFZixLQUFLLEdBQUcsc0RBQXNEO0dBQzlELE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSzs7Ozs7Ozs7Ozs7Ozs7RUFnRkgsUUFBUTs7Ozs7RUFRUixRQUFROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0c1QjtBQUFBO0FBQXdDOztBQUV4Qyx3QkFBd0IsNkRBQVE7QUFDaEM7QUFDQSxDQUFDOztBQUVjLDhFQUFlLEVBQUMiLCJmaWxlIjoiNzA3MWZiODJjZjMxNjZhMjUwZDkvbG9naW4ubG9naW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyI8c2NyaXB0PlxuICBpbXBvcnQgYXV0aFN0b3JlIGZyb20gXCIuLi9zdG9yZXMvYXV0aC1zdG9yZS5qc1wiO1xuICBsZXQgaXNBdXRoZW50aWNhdGVkO1xuICBsZXQgZXJyb3I7XG4gIGxldCB1c2VybmFtZTtcbiAgbGV0IHBhc3N3b3JkO1xuXG4gIGNvbnN0IHVuc3Vic2NyaWJlQXV0aCA9IGF1dGhTdG9yZS5zdWJzY3JpYmUoaXNBdXRoID0+IHtcbiAgICBpc0F1dGhlbnRpY2F0ZWQgPSBpc0F1dGg7XG4gIH0pO1xuXG4gIGZ1bmN0aW9uIGF1dGhlbnRpY2F0ZVVzZXIodXNlcm5hbWUsIHBhc3N3b3JkKSB7XG4gICAgaWYgKHVzZXJuYW1lID09PSBcImpkYWFrZVwiICYmIHBhc3N3b3JkID09PSBcInBhc3N3b3JkXCIpIHtcbiAgICAgIGF1dGhTdG9yZS51cGRhdGUoKCkgPT4ge1xuICAgICAgICByZXR1cm4geyBpc0F1dGhlbnRpY2F0ZWQ6IHRydWUgfTtcbiAgICAgIH0pO1xuICAgICAgdW5zdWJzY3JpYmVBdXRoKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGVycm9yID0gXCJVc2VybmFtZSBvciBQYXNzd29yZCBpcyBpbmNvcnJlY3QuIFBsZWFzZSB0cnkgYWdhaW4uXCI7XG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgfVxuICB9XG48L3NjcmlwdD5cblxuPHN0eWxlPlxuICBAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9T3JiaXRyb24mZGlzcGxheT1zd2FwXCIpO1xuXG4gIHNlY3Rpb24ge1xuICAgIG1hcmdpbi10b3A6IDdyZW07XG4gICAgZm9udC1mYW1pbHk6IFwiT3JiaXRyb25cIiwgc2Fucy1zZXJpZjtcbiAgfVxuICBpbnB1dCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDgwJTtcblxuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2NjYztcbiAgICBib3JkZXItcmFkaXVzOiAzcHggM3B4IDAgMDtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICBwYWRkaW5nOiAwLjE1cmVtIDAuMjVyZW07XG4gICAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDAuMXMgZWFzZS1vdXQ7XG4gICAgbWFyZ2luLWJvdHRvbTogMC44cmVtO1xuICB9XG5cbiAgaW5wdXQ6Zm9jdXMge1xuICAgIGJvcmRlci1jb2xvcjogI2ZmMjI0NztcbiAgICBvdXRsaW5lOiBub25lO1xuICB9XG4gIGxhYmVsIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZm9udC1mYW1pbHk6IFwiT3JiaXRyb25cIiwgc2Fucy1zZXJpZjtcbiAgfVxuICBidXR0b24ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjIyNDc7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZmYyMjQ3O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgZm9udC1mYW1pbHk6IEFyaWFsO1xuICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICBwYWRkaW5nOiAxNnB4IDMxcHg7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB9XG4gIGJ1dHRvbjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NlZmYwMDtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NlZmYwMDtcbiAgfVxuXG4gIC5sb2dpbi1jYXJkLWNvbnRhaW5lciB7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHdpZHRoOiAyM3JlbTtcbiAgICBoZWlnaHQ6IDMwcmVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAxNzMsIDIyMyk7XG4gICAgYm9yZGVyOiAzcHggc29saWQgIzczN2Q4NDtcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgfVxuPC9zdHlsZT5cblxuPHN2ZWx0ZTpoZWFkPlxuICA8dGl0bGU+U05LUiBLUFIgfCBMb2dpbjwvdGl0bGU+XG48L3N2ZWx0ZTpoZWFkPlxuXG48c2VjdGlvbj5cbiAgPGRpdiBjbGFzcz1cImxvZ2luLWNhcmQtY29udGFpbmVyXCI+XG4gICAgPGRpdiBjbGFzcz1cImxvZ2luLWhlYWRlclwiPlxuICAgICAgPGgyPkxvZ2luPC9oMj5cbiAgICAgIDxwPlBsZWFzZSBlbnRlciB5b3VyIHVzZXJuYW1lIGFuZCBwYXNzd29yZDwvcD5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwibG9naW4tdXNlcm5hbWVcIj5cbiAgICAgIDxsYWJlbCBmb3I9XCJ1c2VybmFtZVwiPlVzZXJuYW1lOjwvbGFiZWw+XG4gICAgICA8aW5wdXRcbiAgICAgICAgaWQ9XCJ1c2VybmFtZVwiXG4gICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJVc2VybmFtZVwiXG4gICAgICAgIGJpbmQ6dmFsdWU9e3VzZXJuYW1lfSAvPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJsb2dpbi1wYXNzd29yZFwiPlxuICAgICAgPGxhYmVsIGZvcj1cInBhc3N3b3JkXCI+UGFzc3dvcmQ6PC9sYWJlbD5cbiAgICAgIDxpbnB1dFxuICAgICAgICBpZD1cInBhc3N3b3JkXCJcbiAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJQYXNzd29yZFwiXG4gICAgICAgIGJpbmQ6dmFsdWU9e3Bhc3N3b3JkfSAvPlxuICAgIDwvZGl2PlxuICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIG9uOmNsaWNrPXthdXRoZW50aWNhdGVVc2VyKHVzZXJuYW1lLCBwYXNzd29yZCl9PlxuICAgICAgU3VibWl0XG4gICAgPC9idXR0b24+XG4gICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCI+U2lnbiBVcCE8L2J1dHRvbj5cbiAgPC9kaXY+XG48L3NlY3Rpb24+XG4iLCJpbXBvcnQgeyB3cml0YWJsZSB9IGZyb20gJ3N2ZWx0ZS9zdG9yZSc7XG5cbmNvbnN0IGlzQXV0aGVudGljYXRlZCA9IHdyaXRhYmxlKHtcbiAgaXNBdXRoOiBmYWxzZSxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBpc0F1dGhlbnRpY2F0ZWQ7XG4iXSwic291cmNlUm9vdCI6IiJ9