import { createTheme } from "@mui/material";

declare module '@mui/material/styles' {
  interface Palette {
    ochre: Palette["primary"];
  }
  interface PaletteOptions {
    ochre?: PaletteOptions["primary"];
  }
}

export const theme = createTheme({
    typography: {
        fontFamily: "Chakra Petch",
    },
    palette:{
      ochre: {
        main: '#E3D026',
        light: '#E9DB5D',
        dark: '#A29415',
        contrastText: '#242105',
    },
  }
})
 

console.log(theme)