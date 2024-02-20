import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <>
      <nav className="bg-[#9dc3cc] flex">
        <ul className="flex flex-col ">
          <Link>
            <li>Requested leave</li>
          </Link>
          <Link>
            <li>Agents</li>
          </Link>
          <Link>
            <li>Agent on leave</li>
          </Link>
          <Link>
            <li>Accepted leave</li>
          </Link>
        </ul>
      </nav>
    </>
  );
}
