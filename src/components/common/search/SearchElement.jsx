import SearchIcon from "@mui/icons-material/Search";

export default function SearchElement(
  Search,
  SearchIconWrapper,
  StyledInputBase
) {
  return (
    <Search>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder="Buscar..."
        inputProps={{ "aria-label": "search" }}
      />
    </Search>
  );
}
