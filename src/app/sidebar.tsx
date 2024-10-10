import Link from "next/link";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  return (
    <div 
      className={`fixed top-0 left-0 w-64 h-full bg-white shadow-lg z-40 transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-300`}
    >
      <div className="flex justify-end p-4">
        <button onClick={onClose} className="text-gray-700">Close</button>
      </div>
      <ul className="flex flex-col space-y-4 p-8 font-medium">
        <li>
          <Link href="/" className="hover:text-gray-700" onClick={onClose}>
            Home
          </Link>
        </li>
        <li>
          <Link href="/about" className="hover:text-gray-700" onClick={onClose}>
            About
          </Link>
        </li>
        <li>
          <Link href="/menu" className="hover:text-gray-700" onClick={onClose}>
            Menu
          </Link>
        </li>
        <li>
          <Link href="/reservation" className="hover:text-gray-700" onClick={onClose}>
            Reservation
          </Link>
        </li>
        <li>
          <Link href="/contact" className="hover:text-gray-700" onClick={onClose}>
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
