import React from "react";
import { withKnobs, text, color, number } from "@storybook/addon-knobs";

export default {
  title: "Test story 2",
  decorators: [withKnobs],
};

export function Story2() {
  const t = text("Text", "Test story 2");
  const c = color("Color", "#000");
  const bg = color("Background", "#fff");
  const n = number("Number", 1);
  return (
    <div style={{ backgroundColor: bg }}>
      {new Array(n).fill(null).map((_, i) => (
        <h1 key={i} style={{ color: c }}>
          {t}
          <img
            src={require("~/images/tiger.svg")}
            style={{
              height: "4rem",
              verticalAlign: "middle",
              paddingLeft: "2rem",
            }}
          />
        </h1>
      ))}
    </div>
  );
}
