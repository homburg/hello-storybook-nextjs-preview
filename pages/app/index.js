import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    require("~/libs/stories");
  }, []);
  return <div id="root" />;
}
