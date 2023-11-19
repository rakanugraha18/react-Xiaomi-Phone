import React, { useState } from 'react';
import Icon from '../../Atoms/Icon';
import Logo from '../../Atoms/Logo';
import List from '../../Atoms/Header/List';
import SearchButton from '../../molecule/Search/SearchButton';
import ThemeSwitch from '../../molecule/ThemeSwitch';

const SiteNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="relative h-full w-full flex mx-auto items-center justify-between">
      <ul className="relative flex w-full h-full items-center">
        <Logo />
        <div className='only-medium'>
        <List redirect="/store" text="Store" className="h-full" title="Store" />
        <List
          redirect="/smartphone"
          text="SmartPhone"
          className="h-full"
          title="SmartPhone"
        /></div>
        <div className="grow h-full"></div>
        <div className='only-medium'>
        <List redirect="#" text="Discover" className="h-full" title="Discover" />
        <List redirect="#" text="Support" className="h-full" title="Support" />
        </div>
        <SearchButton />
        <Icon redirect="/cart" classname="shopping-cart" />
        <div className="only-medium">
          <Icon redirect="/account" classname="account" />
        </div>
        <ThemeSwitch />

        {/* Toggle button for the menu */}
        <button
          className="relative ml-4 text-text p-2 focus:outline-none  flex md:hidden z-[1001]"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <Icon classname="close" /> : <Icon classname="menu" />}
        </button>

        {/* Full-height div with new list items */}
        {isMenuOpen && (
          <div className="only-phone fixed top-0 left-0 w-screen bg-background h-screen z-[80] py-10">
            <div className="relative max-w-full w-full z-[1001] flex flex-col">
              {/* Your new list items */}
              <div className='text-text relative mt-10'>
                <div className='px-[16px]  py-[16px]  flex' >
                  <div className='w-max rounded-lg bg-neutral-300 text-white flex items-center justify-center'>
                <Icon redirect="/account" classname="account" /></div>
                <List className="mr-10 inline-block text-text" redirect="/account" text="Account" title="Login/Register" />
                </div>
                <div className='py-5 border-b-gray-100 border-t-gray-100 border-b-[1px] border-t-[1px]'>
                <List className="text-text" redirect="/store" text="Store" title="Store" />
                <List className="text-text" redirect="/smartphone" text="Smartphone" title="Smartphone" />
                <List redirect="#" text="Discover" title="Discover" />
                <List redirect="#" text="Support" title="Support" />
                </div>
                <List className="text-text p-2" redirect="/about" text="About" title="About" />
               
 

              </div>
              {/* Add more list items as needed */}
            </div>
          </div>
        )}
      </ul>
    </nav>
  );
};

export default SiteNavbar; 