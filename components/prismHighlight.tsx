"use client";

import Prism from "prismjs";
import { useEffect } from "react";

// Runs Prism over the rendered markdown once the post is in the DOM.
const PrismHighlight = () => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return null;
};

export default PrismHighlight;
