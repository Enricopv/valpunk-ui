import { withInfo } from "@storybook/addon-info";
import { storiesOf } from "@storybook/react";
import * as React from "react";
import ClickModal from "./index";
import { CenteredForStories } from "~/components/compositions";
(storiesOf("Modal", module) as any)
  .addDecorator(withInfo({ text: `Description!`, inline: true }))
  .add("Click Modal", () => <Example />);

const Example = () => {
  const [open, setOpen] = React.useState(false);
  const handleClick = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <CenteredForStories>
      <button onClick={handleClick}>Click to open</button>
      <ClickModal openModal={open} handleClose={handleClose}>
        {({ modalStyle }) => (
          <div style={{ ...modalStyle, backgroundColor: "white" }}>YOHOHO</div>
        )}
      </ClickModal>
    </CenteredForStories>
  );
};
