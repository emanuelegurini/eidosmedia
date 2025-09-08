import { getEl } from "./dom.js";
import { header } from "./components/header.js";
import { main } from "./components/main.js";

const root = getEl('root')

root.appendChild(header())
root.appendChild(main())


