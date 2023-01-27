import { useEffect } from "react";

import ScratchBlocks from "scratch-blocks";
import "./App.css";
import makeToolboxXML from "./make-toolbox-xml";

function App() {
  useEffect(() => {
    const workspaceConfiguration = {
      toolbox: makeToolboxXML(true),
      media: "/blocks-media/",
      collapse: false,
      zoom: {
        controls: false,
        wheel: true,
        startScale: 0.8,
        maxScale: 3,
        minScale: 0.3,
        scaleSpeed: 1.2,
      },
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
