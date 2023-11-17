import Icon from "../../Atoms/Icon";
import Logo from "../../Atoms/Logo";
import List from "../../Atoms/Header/List";
import SearchButton from "../../molecule/Search/SearchButton";
import ThemeSwitch from "../../molecule/ThemeSwitch";

const Navbar = () => {
  return (
    <nav className="h-full w-full flex mx-auto items-center justify-between">
      <ul className="flex w-full h-full items-center">
        <Logo />
        <List redirect="/store" text="Store" title="Store" />
        <List
          redirect="/smartphone"
          text="SmartPhone"
          isActive="active"
          title="SmartPhone"
        />
        <div className="grow h-full"></div>
        <List redirect="#" text="Discover" title="Discover" />
        <List redirect="#" text="Support" title="Support" />
        <SearchButton />
        <Icon redirect="/cart" classname="shopping-cart" />
        <div className="only-medium">
          <Icon redirect="/account" classname="account" />
        </div>
        <ThemeSwitch />
      </ul>
    </nav>
  );
};

export default Navbar;
