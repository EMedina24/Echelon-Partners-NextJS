import { useState } from "react";
import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { isMobile, MobileView, BrowserView } from "react-device-detect";
import { faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-regular-svg-icons';
import Link from 'next/link'


const  NavBar = ({ menus, location }) => {


    const [navbarOpen, setNavbarOpen] = React.useState(false);



return(
<header class=" newNav w-full bg-white z-10  fixed text-gray-600 body-font">
  <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a  href="/"class=" w-40  lg:w-40 sm:w-20 flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
    
    </a>
    <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
      <a class=" w-8 border-solid  border-2   mr-5 rounded-full hover:text-gray-900"><img  class="w-full"src ="//cdn.shopify.com/s/files/1/2422/9487/t/276/assets/us.svg?v=13197759167292498047"/></a>
      <Link href="/"><div class="w-8 h-8 flex justify-center  border-solid  border-2   border-red-500 mr-5 rounded-full hover:text-gray-900"><a><FontAwesomeIcon   className="pt-1" color="#d22d35" icon={faUser} /></a></div></Link>
      <div class="w-8 h-8  flex justify-center  border-solid  border-2   border-red-500 mr-5 rounded-full hover:text-gray-900"><a><FontAwesomeIcon className="pt-1" color="#d22d35" icon={faShoppingCart} /></a></div>
    </nav>
   
  </div>
</header>
 
);
};

export default NavBar;