import { browser } from "$app/environment";
import { writable } from "svelte/store"

const DEFAULT_VALUE = 0
const INITIAL_VALUE = browser ? window.localStorage.getItem('theme') ?? DEFAULT_VALUE : DEFAULT_VALUE;

export const theme = writable(INITIAL_VALUE)

theme.subscribe((value) => {
    if (browser) {
        window.localStorage.setItem('theme',value)
    }
})

export {theme as default}
