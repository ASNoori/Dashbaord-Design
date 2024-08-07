import HomeIcon from "@mui/icons-material/Home";
import InsertChartOutlinedRoundedIcon from "@mui/icons-material/InsertChartOutlinedRounded";
import ContentPasteOutlinedIcon from "@mui/icons-material/ContentPasteOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import "./Sidebar.css";
import { AiOutlineLogout } from "react-icons/ai";

export default function Sidebar() {
  return (
    // <div className={`sidebar ${isOpen ? "open" : ""}`}>
    <div className="sidebar">
      <ul>
        <li className="active">
          <a href='/'>
            <HomeIcon />
          </a>
        </li>
        <li>
          <a href='/'>
            <InsertChartOutlinedRoundedIcon />
          </a>
        </li>
        <li>
          <a href='/'>
            <ContentPasteOutlinedIcon />
          </a>
        </li>
        <li>
          <a href='/'>
            <AccountBalanceWalletOutlinedIcon />
          </a>
        </li>
        <li>
          <a href='/'>
            <ShoppingBagOutlinedIcon />
          </a>
        </li>
        <li><AiOutlineLogout className="logout-icon"/></li>
      </ul>

    </div>
  );
}
