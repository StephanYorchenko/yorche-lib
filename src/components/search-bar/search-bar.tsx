import {Search} from "../icon";

export const SearchBar = ({children}: React.PropsWithChildren<{}>) => {
  return (
    <>
      <Search/>
      {children}
    </>
  )
}
