import "./App.css"
import Logo from "./logo.svg"
import _ from "lodash"


const App = ({name}) => {
    return `
    <h2 class="app-heading"> ${_.join(["Welcome", name,". Glad to see you again!"], " ")}</h2>
    <img src=${Logo} alt="loader"/>
    `
}

export default App;