import {Search} from "../icon";
import React from "react";
import {StyledSearchBar} from "./search-bar.style"

export const SearchBar = ({children}: React.PropsWithChildren<{}>) => {
  return (
    <>
      <Search/>
      {children}
    </>
  )
}
