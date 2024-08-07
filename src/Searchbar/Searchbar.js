import './Searchbar.css';
import { FaMagnifyingGlass } from "react-icons/fa6";

export default function Searchbar() {
  return (
  <form className="search-container">
      <FaMagnifyingGlass className='search-icon'/>
      <input type="text" placeholder='Search' />
  </form>
  );
}
