import { writable } from 'svelte/store';

const isAuthenticated = writable({
  isAuth: false,
});

export default isAuthenticated;
