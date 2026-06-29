import "./SearchArea.css";

interface SearchAreaProps {
  children: React.ReactNode;
}

const SearchArea = ({ children }: SearchAreaProps) => {
  return (
    <div className="search-area">
      {children}
    </div>
  );
};

export default SearchArea;