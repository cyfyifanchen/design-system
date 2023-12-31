import { createGlobalTheme } from "@vanilla-extract/css"

export const vars = createGlobalTheme(":root", {
    color: {
        background: "#fffff",
        headerBackground: "#222",
        headerText: "#fff",
        accent: "#080",
    }
})