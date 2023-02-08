import React, { useEffect } from "react";

import ScratchBlocks from "scratch-blocks";
import "./App.css";
import makeToolboxXML from "./make-toolbox-xml";

function Scratch3() {
  useEffect(() => {
    const workspaceConfiguration = {
      toolbox: makeToolboxXML(true),
      media: "/blocks-media/",
    };

    ScratchBlocks.inject("scratch", {
      ...workspaceConfiguration,
    });
  }, []);

  return <div id="scratch" className="scratch" />;
}

export default Scratch3;
