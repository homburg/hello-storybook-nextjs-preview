import { configure } from "@storybook/react";
import * as Test from "../components/Test.stories";
import * as Test2 from "../components/Test2.stories";

configure(() => [Test, Test2], module);
