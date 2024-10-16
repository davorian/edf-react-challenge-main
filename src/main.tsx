import ReactDOM from "react-dom/client"
import App from "./App.tsx"
import React from "react"
import {ChakraProvider, extendTheme} from "@chakra-ui/react"
import {CountryProvider} from "./context/CountryContext.tsx"
import {onCLS, onINP, onLCP, onTTFB, onFCP} from 'web-vitals'

//core
onCLS(console.log)
onINP(console.log)
onLCP(console.log)
// non-core
onFCP(console.log)
onTTFB(console.log)


const theme = extendTheme({
    textStyles: {
        h1: {
            fontSize: "24px",
            fontWeight: "bold",
            lineHeight: "110%",
            letterSpacing: "-2%",
        },
    },
    layerStyles: {
        card: {
            borderColor: "gray.200",
            borderRadius: "md",
            boxShadow: "md",
            borderWidth: "thin",
            bg: "white",
            padding: 4,
        },
    },
})
const app = (<ChakraProvider theme={theme}>
    <CountryProvider>
        <App />
    </CountryProvider>
</ChakraProvider>)
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
      {app}
  </React.StrictMode>
)
