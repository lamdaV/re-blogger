import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

import postMapping from "./posts.json";

ReactDOM.render(<App postMapping={postMapping}/>, document.getElementById("root"));
registerServiceWorker();
