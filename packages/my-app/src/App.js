import { useEffect } from "react";

import ScratchBlocks from "scratch-blocks";
import "./App.css";
import makeToolboxXML from "./make-toolbox-xml";

function App() {
  useEffect(() => {
    const workspaceConfiguration = {
      toolbox: makeToolboxXML(true),
      media: "/blocks-media/",
    };

    ScratchBlocks.inject("scratch", {
      ...workspaceConfiguration,
    });
  }, []);

  return (
    <div id="App">
      <div id="scratch" className="scratch"></div>
    </div>
  );
}

export default App;
