import {Search} from "../icon";
import React from "react";
import {StyledSearchBar} from "./search-bar.style"

export const SearchBar = (props: React.InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <StyledSearchBar>
        <Search/>
      <input className="form__field" {...props}/>
    </StyledSearchBar>
  )
}
