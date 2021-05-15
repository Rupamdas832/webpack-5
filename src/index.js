import App from "./App"

const root = document.getElementById("root");
root.innerHTML = `
<h1 class="index-heading">learning web tooling now</h1>
${App({name: "Rupam"})}
`;