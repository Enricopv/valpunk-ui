import { configure, setAddon, addDecorator } from "@storybook/react";
import JSXAddon from "storybook-addon-jsx";
import { withKnobs } from "@storybook/addon-knobs/react";
import { withInfo } from "@storybook/addon-info";
addDecorator(withKnobs);
addDecorator(withInfo);
setAddon(JSXAddon);

const path = require("path");

// const PATH = path.resolve("..", "components");
// const req = require.context("../components", true, /.stories.tsx$/)
// const req = require("../components" + name + '/.stories.js$/')
const req = require.context("../src/components", true, /\.stories\.tsx$/);

function loadStories() {
  require("./welcomeStory");
  req.keys().forEach(file => req(file));

  // require('../components/basic/Button/Button.stories.js');
  // You can require as many stories as you need.
}

// function loadStories() {
//   require('../stories/index.js');
//   // You can require as many stories as you need.
// }

configure(loadStories, module);
