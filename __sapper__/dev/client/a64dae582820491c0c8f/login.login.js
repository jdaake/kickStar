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
	style.id = "svelte-1vi86nt-style";
	style.textContent = "@import url(\"https://fonts.googleapis.com/css2?family=Orbitron&display=swap\");section.svelte-1vi86nt{margin-top:12rem;font-family:\"Orbitron\", sans-serif}input.svelte-1vi86nt{display:block;width:90%;font:inherit;border:none;border-bottom:2px solid #ccc;border-radius:3px 3px 0 0;background:white;padding:0.15rem 0.25rem;transition:border-color 0.1s ease-out;margin-bottom:0.8rem}input.svelte-1vi86nt:focus{border-color:#ff2247;outline:none}label.svelte-1vi86nt{display:block;margin-bottom:0.5rem;width:100%;font-family:\"Orbitron\", sans-serif}button.svelte-1vi86nt{background-color:#ff2247;border-radius:10px;border:1px solid #ff2247;display:inline-block;cursor:pointer;color:#ffffff;font-size:17px;padding:16px 31px;text-decoration:none;margin:0.5rem}button.svelte-1vi86nt:hover{background-color:#ceff00;color:black;border:1px solid #ceff00}.login-card-container.svelte-1vi86nt{display:flex;margin:auto;width:30rem;height:auto;background-color:rgb(0, 173, 223);border:3px solid #737d84;border-radius:25px;color:white;padding:1rem}.login-card.svelte-1vi86nt{width:90%;align-content:center;justify-content:center;align-items:center;margin:auto}.login-header.svelte-1vi86nt{text-align:center}.login-username.svelte-1vi86nt,.login-password.svelte-1vi86nt{margin-left:2rem}.button-container.svelte-1vi86nt{align-items:center}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uc3ZlbHRlIiwic291cmNlcyI6WyJsb2dpbi5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiPHNjcmlwdD5cbiAgaW1wb3J0IGF1dGhTdG9yZSBmcm9tIFwiLi4vc3RvcmVzL2F1dGgtc3RvcmUuanNcIjtcbiAgbGV0IGlzQXV0aGVudGljYXRlZDtcbiAgbGV0IGVycm9yO1xuICBsZXQgdXNlcm5hbWU7XG4gIGxldCBwYXNzd29yZDtcblxuICBjb25zdCB1bnN1YnNjcmliZUF1dGggPSBhdXRoU3RvcmUuc3Vic2NyaWJlKGlzQXV0aCA9PiB7XG4gICAgaXNBdXRoZW50aWNhdGVkID0gaXNBdXRoO1xuICB9KTtcblxuICBmdW5jdGlvbiBhdXRoZW50aWNhdGVVc2VyKHVzZXJuYW1lLCBwYXNzd29yZCkge1xuICAgIGlmICh1c2VybmFtZSA9PT0gXCJqZGFha2VcIiAmJiBwYXNzd29yZCA9PT0gXCJwYXNzd29yZFwiKSB7XG4gICAgICBhdXRoU3RvcmUudXBkYXRlKCgpID0+IHtcbiAgICAgICAgcmV0dXJuIHsgaXNBdXRoZW50aWNhdGVkOiB0cnVlIH07XG4gICAgICB9KTtcbiAgICAgIHVuc3Vic2NyaWJlQXV0aCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBlcnJvciA9IFwiVXNlcm5hbWUgb3IgUGFzc3dvcmQgaXMgaW5jb3JyZWN0LiBQbGVhc2UgdHJ5IGFnYWluLlwiO1xuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgIH1cbiAgfVxuPC9zY3JpcHQ+XG5cbjxzdHlsZT5cbiAgQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU9yYml0cm9uJmRpc3BsYXk9c3dhcFwiKTtcblxuICBzZWN0aW9uIHtcbiAgICBtYXJnaW4tdG9wOiAxMnJlbTtcbiAgICBmb250LWZhbWlseTogXCJPcmJpdHJvblwiLCBzYW5zLXNlcmlmO1xuICB9XG4gIGlucHV0IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogOTAlO1xuICAgIGZvbnQ6IGluaGVyaXQ7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjY2NjO1xuICAgIGJvcmRlci1yYWRpdXM6IDNweCAzcHggMCAwO1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIHBhZGRpbmc6IDAuMTVyZW0gMC4yNXJlbTtcbiAgICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgMC4xcyBlYXNlLW91dDtcbiAgICBtYXJnaW4tYm90dG9tOiAwLjhyZW07XG4gIH1cblxuICBpbnB1dDpmb2N1cyB7XG4gICAgYm9yZGVyLWNvbG9yOiAjZmYyMjQ3O1xuICAgIG91dGxpbmU6IG5vbmU7XG4gIH1cbiAgbGFiZWwge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBmb250LWZhbWlseTogXCJPcmJpdHJvblwiLCBzYW5zLXNlcmlmO1xuICB9XG4gIGJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmMjI0NztcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZjIyNDc7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICBmb250LXNpemU6IDE3cHg7XG4gICAgcGFkZGluZzogMTZweCAzMXB4O1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBtYXJnaW46IDAuNXJlbTtcbiAgfVxuICBidXR0b246aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNjZWZmMDA7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjZWZmMDA7XG4gIH1cblxuICAubG9naW4tY2FyZC1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHdpZHRoOiAzMHJlbTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDE3MywgMjIzKTtcbiAgICBib3JkZXI6IDNweCBzb2xpZCAjNzM3ZDg0O1xuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHBhZGRpbmc6IDFyZW07XG4gIH1cbiAgLmxvZ2luLWNhcmQge1xuICAgIHdpZHRoOiA5MCU7XG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICBtYXJnaW46IGF1dG87XG4gIH1cblxuICAubG9naW4taGVhZGVyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgLmxvZ2luLXVzZXJuYW1lLFxuICAubG9naW4tcGFzc3dvcmQge1xuICAgIG1hcmdpbi1sZWZ0OiAycmVtO1xuICB9XG5cbiAgLmJ1dHRvbi1jb250YWluZXIge1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cbjwvc3R5bGU+XG5cbjxzdmVsdGU6aGVhZD5cbiAgPHRpdGxlPlNOS1IgS1BSIHwgTG9naW48L3RpdGxlPlxuPC9zdmVsdGU6aGVhZD5cblxuPHNlY3Rpb24+XG4gIDxkaXYgY2xhc3M9XCJsb2dpbi1jYXJkLWNvbnRhaW5lclwiPlxuICAgIDxkaXYgY2xhc3M9XCJsb2dpbi1jYXJkXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwibG9naW4taGVhZGVyXCI+XG4gICAgICAgIDxoMj5Mb2dpbjwvaDI+XG4gICAgICAgIDxoND5QbGVhc2UgZW50ZXIgeW91ciB1c2VybmFtZSBhbmQgcGFzc3dvcmQ8L2g0PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwibG9naW4tdXNlcm5hbWVcIj5cbiAgICAgICAgPGxhYmVsIGZvcj1cInVzZXJuYW1lXCI+VXNlcm5hbWU6PC9sYWJlbD5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgaWQ9XCJ1c2VybmFtZVwiXG4gICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVXNlcm5hbWVcIlxuICAgICAgICAgIGJpbmQ6dmFsdWU9e3VzZXJuYW1lfSAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwibG9naW4tcGFzc3dvcmRcIj5cbiAgICAgICAgPGxhYmVsIGZvcj1cInBhc3N3b3JkXCI+UGFzc3dvcmQ6PC9sYWJlbD5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgaWQ9XCJwYXNzd29yZFwiXG4gICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIlBhc3N3b3JkXCJcbiAgICAgICAgICBiaW5kOnZhbHVlPXtwYXNzd29yZH0gLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImJ1dHRvbi1jb250YWluZXJcIj5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgb246Y2xpY2s9e2F1dGhlbnRpY2F0ZVVzZXIodXNlcm5hbWUsIHBhc3N3b3JkKX0+XG4gICAgICAgICAgU3VibWl0XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIj5TaWduIFVwITwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC9zZWN0aW9uPlxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlCRSxRQUFRLElBQUksZ0VBQWdFLENBQUMsQ0FBQyxBQUU5RSxPQUFPLGVBQUMsQ0FBQyxBQUNQLFVBQVUsQ0FBRSxLQUFLLENBQ2pCLFdBQVcsQ0FBRSxVQUFVLENBQUMsQ0FBQyxVQUFVLEFBQ3JDLENBQUMsQUFDRCxLQUFLLGVBQUMsQ0FBQyxBQUNMLE9BQU8sQ0FBRSxLQUFLLENBQ2QsS0FBSyxDQUFFLEdBQUcsQ0FDVixJQUFJLENBQUUsT0FBTyxDQUNiLE1BQU0sQ0FBRSxJQUFJLENBQ1osYUFBYSxDQUFFLEdBQUcsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUM3QixhQUFhLENBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUMxQixVQUFVLENBQUUsS0FBSyxDQUNqQixPQUFPLENBQUUsT0FBTyxDQUFDLE9BQU8sQ0FDeEIsVUFBVSxDQUFFLFlBQVksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUN0QyxhQUFhLENBQUUsTUFBTSxBQUN2QixDQUFDLEFBRUQsb0JBQUssTUFBTSxBQUFDLENBQUMsQUFDWCxZQUFZLENBQUUsT0FBTyxDQUNyQixPQUFPLENBQUUsSUFBSSxBQUNmLENBQUMsQUFDRCxLQUFLLGVBQUMsQ0FBQyxBQUNMLE9BQU8sQ0FBRSxLQUFLLENBQ2QsYUFBYSxDQUFFLE1BQU0sQ0FDckIsS0FBSyxDQUFFLElBQUksQ0FDWCxXQUFXLENBQUUsVUFBVSxDQUFDLENBQUMsVUFBVSxBQUNyQyxDQUFDLEFBQ0QsTUFBTSxlQUFDLENBQUMsQUFDTixnQkFBZ0IsQ0FBRSxPQUFPLENBQ3pCLGFBQWEsQ0FBRSxJQUFJLENBQ25CLE1BQU0sQ0FBRSxHQUFHLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FDekIsT0FBTyxDQUFFLFlBQVksQ0FDckIsTUFBTSxDQUFFLE9BQU8sQ0FDZixLQUFLLENBQUUsT0FBTyxDQUNkLFNBQVMsQ0FBRSxJQUFJLENBQ2YsT0FBTyxDQUFFLElBQUksQ0FBQyxJQUFJLENBQ2xCLGVBQWUsQ0FBRSxJQUFJLENBQ3JCLE1BQU0sQ0FBRSxNQUFNLEFBQ2hCLENBQUMsQUFDRCxxQkFBTSxNQUFNLEFBQUMsQ0FBQyxBQUNaLGdCQUFnQixDQUFFLE9BQU8sQ0FDekIsS0FBSyxDQUFFLEtBQUssQ0FDWixNQUFNLENBQUUsR0FBRyxDQUFDLEtBQUssQ0FBQyxPQUFPLEFBQzNCLENBQUMsQUFFRCxxQkFBcUIsZUFBQyxDQUFDLEFBQ3JCLE9BQU8sQ0FBRSxJQUFJLENBQ2IsTUFBTSxDQUFFLElBQUksQ0FDWixLQUFLLENBQUUsS0FBSyxDQUNaLE1BQU0sQ0FBRSxJQUFJLENBQ1osZ0JBQWdCLENBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FDbEMsTUFBTSxDQUFFLEdBQUcsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUN6QixhQUFhLENBQUUsSUFBSSxDQUNuQixLQUFLLENBQUUsS0FBSyxDQUNaLE9BQU8sQ0FBRSxJQUFJLEFBQ2YsQ0FBQyxBQUNELFdBQVcsZUFBQyxDQUFDLEFBQ1gsS0FBSyxDQUFFLEdBQUcsQ0FDVixhQUFhLENBQUUsTUFBTSxDQUNyQixlQUFlLENBQUUsTUFBTSxDQUN2QixXQUFXLENBQUUsTUFBTSxDQUVuQixNQUFNLENBQUUsSUFBSSxBQUNkLENBQUMsQUFFRCxhQUFhLGVBQUMsQ0FBQyxBQUNiLFVBQVUsQ0FBRSxNQUFNLEFBQ3BCLENBQUMsQUFDRCw4QkFBZSxDQUNmLGVBQWUsZUFBQyxDQUFDLEFBQ2YsV0FBVyxDQUFFLElBQUksQUFDbkIsQ0FBQyxBQUVELGlCQUFpQixlQUFDLENBQUMsQUFDakIsV0FBVyxDQUFFLE1BQU0sQUFDckIsQ0FBQyJ9 */";
	Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(document.head, style);
}

function create_fragment(ctx) {
	let t0;
	let section;
	let div5;
	let div4;
	let div0;
	let h2;
	let t1;
	let t2;
	let h4;
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
	let div3;
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
			div5 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");
			div4 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");
			div0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");
			h2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("h2");
			t1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])("Login");
			t2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			h4 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("h4");
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
			div3 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");
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
			div5 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(section_nodes, "DIV", { class: true });
			var div5_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(div5);
			div4 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(div5_nodes, "DIV", { class: true });
			var div4_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(div4);
			div0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(div4_nodes, "DIV", { class: true });
			var div0_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(div0);
			h2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(div0_nodes, "H2", {});
			var h2_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(h2);
			t1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(h2_nodes, "Login");
			h2_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			t2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_space"])(div0_nodes);
			h4 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(div0_nodes, "H4", {});
			var h4_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(h4);
			t3 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(h4_nodes, "Please enter your username and password");
			h4_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			div0_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			t4 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_space"])(div4_nodes);
			div1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(div4_nodes, "DIV", { class: true });
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
			t7 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_space"])(div4_nodes);
			div2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(div4_nodes, "DIV", { class: true });
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
			t10 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_space"])(div4_nodes);
			div3 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(div4_nodes, "DIV", { class: true });
			var div3_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(div3);
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
			div4_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			div5_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			section_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			this.h();
		},
		h: function hydrate() {
			document.title = "SNKR KPR | Login";
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(h2, file, 113, 8, 2298);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(h4, file, 114, 8, 2321);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(div0, "class", "login-header svelte-1vi86nt");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(div0, file, 112, 6, 2263);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(label0, "for", "username");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(label0, "class", "svelte-1vi86nt");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(label0, file, 117, 8, 2426);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(input0, "id", "username");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(input0, "type", "text");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(input0, "placeholder", "Username");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(input0, "class", "svelte-1vi86nt");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(input0, file, 118, 8, 2474);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(div1, "class", "login-username svelte-1vi86nt");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(div1, file, 116, 6, 2389);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(label1, "for", "password");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(label1, "class", "svelte-1vi86nt");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(label1, file, 125, 8, 2651);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(input1, "id", "password");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(input1, "type", "password");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(input1, "placeholder", "Password");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(input1, "class", "svelte-1vi86nt");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(input1, file, 126, 8, 2699);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(div2, "class", "login-password svelte-1vi86nt");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(div2, file, 124, 6, 2614);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(button0, "type", "submit");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(button0, "class", "svelte-1vi86nt");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(button0, file, 133, 8, 2882);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(button1, "type", "button");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(button1, "class", "svelte-1vi86nt");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(button1, file, 136, 8, 2996);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(div3, "class", "button-container svelte-1vi86nt");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(div3, file, 132, 6, 2843);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(div4, "class", "login-card svelte-1vi86nt");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(div4, file, 111, 4, 2232);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(div5, "class", "login-card-container svelte-1vi86nt");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(div5, file, 110, 2, 2193);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(section, "class", "svelte-1vi86nt");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(section, file, 109, 0, 2181);
		},
		m: function mount(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert_dev"])(target, t0, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert_dev"])(target, section, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(section, div5);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(div5, div4);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(div4, div0);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(div0, h2);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(h2, t1);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(div0, t2);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(div0, h4);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(h4, t3);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(div4, t4);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(div4, div1);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(div1, label0);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(label0, t5);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(div1, t6);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(div1, input0);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["set_input_value"])(input0, /*username*/ ctx[0]);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(div4, t7);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(div4, div2);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(div2, label1);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(label1, t8);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(div2, t9);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(div2, input1);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["set_input_value"])(input1, /*password*/ ctx[1]);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(div4, t10);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(div4, div3);
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
		if (!document.getElementById("svelte-1vi86nt-style")) add_css();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLy4vc3JjL3JvdXRlcy9sb2dpbi5zdmVsdGUiLCJ3ZWJwYWNrOi8vLy8uL3NyYy9zdG9yZXMvYXV0aC1zdG9yZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUNrRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztnR0F5SDVCLEdBQVE7Ozs7Ozs7Z0dBUVIsR0FBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7b0dBR1UsR0FBZ0IsaUJBQUMsR0FBUSxrQkFBRSxHQUFRLDRCQUFuQyxHQUFnQixpQkFBQyxHQUFRLGtCQUFFLEdBQVE7Ozs7Ozs7Ozs7Ozs7OytEQVhyRCxHQUFRO2lHQUFSLEdBQVE7OzsrREFRUixHQUFRO2lHQUFSLEdBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0FoSXhCLGVBQWU7S0FDZixLQUFLO0tBQ0wsUUFBUTtLQUNSLFFBQVE7O09BRU4sZUFBZSxHQUFHLDZEQUFTLENBQUMsU0FBUyxDQUFDLE1BQU07RUFDaEQsZUFBZSxHQUFHLE1BQU07OztVQUdqQixnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsUUFBUTtNQUN0QyxRQUFRLEtBQUssUUFBUSxJQUFJLFFBQVEsS0FBSyxVQUFVO0dBQ2xELDZEQUFTLENBQUMsTUFBTTthQUNMLGVBQWUsRUFBRSxJQUFJOzs7R0FFaEMsZUFBZTs7R0FFZixLQUFLLEdBQUcsc0RBQXNEO0dBQzlELE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSzs7Ozs7Ozs7Ozs7Ozs7RUF1R0QsUUFBUTs7Ozs7RUFRUixRQUFROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEk5QjtBQUFBO0FBQXdDOztBQUV4Qyx3QkFBd0IsNkRBQVE7QUFDaEM7QUFDQSxDQUFDOztBQUVjLDhFQUFlLEVBQUMiLCJmaWxlIjoiYTY0ZGFlNTgyODIwNDkxYzBjOGYvbG9naW4ubG9naW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyI8c2NyaXB0PlxuICBpbXBvcnQgYXV0aFN0b3JlIGZyb20gXCIuLi9zdG9yZXMvYXV0aC1zdG9yZS5qc1wiO1xuICBsZXQgaXNBdXRoZW50aWNhdGVkO1xuICBsZXQgZXJyb3I7XG4gIGxldCB1c2VybmFtZTtcbiAgbGV0IHBhc3N3b3JkO1xuXG4gIGNvbnN0IHVuc3Vic2NyaWJlQXV0aCA9IGF1dGhTdG9yZS5zdWJzY3JpYmUoaXNBdXRoID0+IHtcbiAgICBpc0F1dGhlbnRpY2F0ZWQgPSBpc0F1dGg7XG4gIH0pO1xuXG4gIGZ1bmN0aW9uIGF1dGhlbnRpY2F0ZVVzZXIodXNlcm5hbWUsIHBhc3N3b3JkKSB7XG4gICAgaWYgKHVzZXJuYW1lID09PSBcImpkYWFrZVwiICYmIHBhc3N3b3JkID09PSBcInBhc3N3b3JkXCIpIHtcbiAgICAgIGF1dGhTdG9yZS51cGRhdGUoKCkgPT4ge1xuICAgICAgICByZXR1cm4geyBpc0F1dGhlbnRpY2F0ZWQ6IHRydWUgfTtcbiAgICAgIH0pO1xuICAgICAgdW5zdWJzY3JpYmVBdXRoKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGVycm9yID0gXCJVc2VybmFtZSBvciBQYXNzd29yZCBpcyBpbmNvcnJlY3QuIFBsZWFzZSB0cnkgYWdhaW4uXCI7XG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgfVxuICB9XG48L3NjcmlwdD5cblxuPHN0eWxlPlxuICBAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9T3JiaXRyb24mZGlzcGxheT1zd2FwXCIpO1xuXG4gIHNlY3Rpb24ge1xuICAgIG1hcmdpbi10b3A6IDEycmVtO1xuICAgIGZvbnQtZmFtaWx5OiBcIk9yYml0cm9uXCIsIHNhbnMtc2VyaWY7XG4gIH1cbiAgaW5wdXQge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiA5MCU7XG4gICAgZm9udDogaW5oZXJpdDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNjY2M7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4IDNweCAwIDA7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgcGFkZGluZzogMC4xNXJlbSAwLjI1cmVtO1xuICAgIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAwLjFzIGVhc2Utb3V0O1xuICAgIG1hcmdpbi1ib3R0b206IDAuOHJlbTtcbiAgfVxuXG4gIGlucHV0OmZvY3VzIHtcbiAgICBib3JkZXItY29sb3I6ICNmZjIyNDc7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgfVxuICBsYWJlbCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGZvbnQtZmFtaWx5OiBcIk9yYml0cm9uXCIsIHNhbnMtc2VyaWY7XG4gIH1cbiAgYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmYyMjQ3O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2ZmMjI0NztcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICBwYWRkaW5nOiAxNnB4IDMxcHg7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIG1hcmdpbjogMC41cmVtO1xuICB9XG4gIGJ1dHRvbjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NlZmYwMDtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NlZmYwMDtcbiAgfVxuXG4gIC5sb2dpbi1jYXJkLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgd2lkdGg6IDMwcmVtO1xuICAgIGhlaWdodDogYXV0bztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMTczLCAyMjMpO1xuICAgIGJvcmRlcjogM3B4IHNvbGlkICM3MzdkODQ7XG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgcGFkZGluZzogMXJlbTtcbiAgfVxuICAubG9naW4tY2FyZCB7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgIG1hcmdpbjogYXV0bztcbiAgfVxuXG4gIC5sb2dpbi1oZWFkZXIge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICAubG9naW4tdXNlcm5hbWUsXG4gIC5sb2dpbi1wYXNzd29yZCB7XG4gICAgbWFyZ2luLWxlZnQ6IDJyZW07XG4gIH1cblxuICAuYnV0dG9uLWNvbnRhaW5lciB7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuPC9zdHlsZT5cblxuPHN2ZWx0ZTpoZWFkPlxuICA8dGl0bGU+U05LUiBLUFIgfCBMb2dpbjwvdGl0bGU+XG48L3N2ZWx0ZTpoZWFkPlxuXG48c2VjdGlvbj5cbiAgPGRpdiBjbGFzcz1cImxvZ2luLWNhcmQtY29udGFpbmVyXCI+XG4gICAgPGRpdiBjbGFzcz1cImxvZ2luLWNhcmRcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJsb2dpbi1oZWFkZXJcIj5cbiAgICAgICAgPGgyPkxvZ2luPC9oMj5cbiAgICAgICAgPGg0PlBsZWFzZSBlbnRlciB5b3VyIHVzZXJuYW1lIGFuZCBwYXNzd29yZDwvaDQ+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJsb2dpbi11c2VybmFtZVwiPlxuICAgICAgICA8bGFiZWwgZm9yPVwidXNlcm5hbWVcIj5Vc2VybmFtZTo8L2xhYmVsPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICBpZD1cInVzZXJuYW1lXCJcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJVc2VybmFtZVwiXG4gICAgICAgICAgYmluZDp2YWx1ZT17dXNlcm5hbWV9IC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJsb2dpbi1wYXNzd29yZFwiPlxuICAgICAgICA8bGFiZWwgZm9yPVwicGFzc3dvcmRcIj5QYXNzd29yZDo8L2xhYmVsPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICBpZD1cInBhc3N3b3JkXCJcbiAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIlxuICAgICAgICAgIGJpbmQ6dmFsdWU9e3Bhc3N3b3JkfSAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiYnV0dG9uLWNvbnRhaW5lclwiPlxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBvbjpjbGljaz17YXV0aGVudGljYXRlVXNlcih1c2VybmFtZSwgcGFzc3dvcmQpfT5cbiAgICAgICAgICBTdWJtaXRcbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiPlNpZ24gVXAhPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L3NlY3Rpb24+XG4iLCJpbXBvcnQgeyB3cml0YWJsZSB9IGZyb20gJ3N2ZWx0ZS9zdG9yZSc7XG5cbmNvbnN0IGlzQXV0aGVudGljYXRlZCA9IHdyaXRhYmxlKHtcbiAgaXNBdXRoOiBmYWxzZSxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBpc0F1dGhlbnRpY2F0ZWQ7XG4iXSwic291cmNlUm9vdCI6IiJ9