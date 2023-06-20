import logo from '../../assets/logo.svg'

const Header = () => {
  return (
    <header className="bg-gray-800 py-4">
      <nav className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg sm:text-xl">
          <img src={logo} alt="logo" className="w-20 h-auto inline-block text-blue-500 sm:w-40" />
          Jc Society
        </div>
        <ul className="flex space-x-4 sm:space-x-6">
          <li>
            <a className="text-white hover:text-gray-300" href="#">
              Início
            </a>
          </li>
          <li>
            <a className="text-white hover:text-gray-300" href="#">
              Sobre
            </a>
          </li>
          <li>
            <a className="text-white hover:text-gray-300" href="#">
              Contato
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
