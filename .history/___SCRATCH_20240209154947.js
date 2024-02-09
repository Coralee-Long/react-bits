{isOpen && (
  <ul className="absolute z-10 left-0 w-48 mt-2 bg-white shadow-lg rounded-md overflow-hidden">
    {pages.map((page) => (
      <li key={page.name} className="border-b last:border-0">
        <Link
          to={page.path}
          className="block px-4 py-2 hover:bg-gray-100"
          onClick={() => setIsOpen(false)}
        >
          {page.name}
        </Link>
      </li>
    ))}
  </ul>
)}