import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import React from "react";
import RightAlignedButtons from "./RightAlignedButtons";
import Wordmark from "./Wordmark";
import SearchBar from "./Searchbar";

const withNavbar = (Component: React.FC): React.FC => () => {
  return (
    <>
      <AppBar position="sticky" color="primary">
        <Toolbar>
          <Wordmark/>
          <SearchBar/>
          <RightAlignedButtons />
        </Toolbar>
      </AppBar>
      <Component />
    </>
  );
};

export { withNavbar };
