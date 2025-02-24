import Nav from "./Nav/Nav";
const Header: React.FC = () => {
  return (
    <header className={`grid justify-items-center shadow-md`}>
      <Nav></Nav>
    </header>
  );
};
export default Header;
