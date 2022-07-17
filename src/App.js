import React from "react";
import "./App.css";
import LeftPane from "./components/LeftPane";
import RightPane from "./components/RightPane";

import MainLayout from "./components/MainLayout";
function App() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className="flex justify-between bg-[#f2f2f2]">
      <LeftPane />
      <MainLayout
        open={open}
        handleClose={handleClose}
        handleClickOpen={handleClickOpen}
      />
      <RightPane handleClickOpen={handleClickOpen} />
    </div>
  );
}

export default App;
