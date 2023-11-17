import Icon from "../../Atoms/Icon";
import Logo from "../../Atoms/Logo";
import List from "../../Atoms/Navbar/List";
import SearchButton from "../../molecule/NavBar/SearchButton";

const NavBar = () => {
  return (
    <header
      id="top-site-header"
      className=" bg-[#fff] px-5 lg:px-6 sticky h-[48px] xl:h-[56px] "
      role="banner"
    >
      <nav className="h-full w-full flex mx-auto items-center justify-between">
        <ul className="flex w-full h-full items-center">
        <Logo />
        <List redirect="/store" text="Store" title="Store"/>
        <List redirect="/smartphone" text="SmartPhone" isActive="active" title="SmartPhone"/>
        <div className="grow h-full"></div>
        <List redirect="#" text="Discover" title="Discover"/>
        <List redirect="#" text="Support" title="Support"/>
        <SearchButton/>
        <Icon redirect="/cart" classname="shopping-cart"/>
        <Icon redirect="/account" classname="account"/>
      </ul></nav>
    </header>
  );
};

export default NavBar;
