"use client"
import { useState, useEffect } from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import Link from "next/link";
import { cartIcon, downArrowIcon, searchIcon } from "../utils/icons";
import Logo from "../assets/shiikha.jpeg"
import Image from "next/image";

function Navbars() {

    const [openNav, setOpenNav] = useState<boolean>(false);

    useEffect(() => {
        window.addEventListener(
          "resize",
          () => window.innerWidth >= 960 && setOpenNav(false)
        );
      }, []);

      const navList:any = (

        <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 z-20" >
          <Typography
            as="li"
            variant="small"
            color="blue-gray"
            className="p-1 font-normal text-black"
          >
            <Link href="/" className="flex items-center">
              Home
            </Link>
          </Typography>
          <Typography
            as="li"
            variant="small"
            color="blue-gray"
            className="p-1 font-normal text-black"
          >
            <Link href="#" className="flex items-center text-black">
              Courses <span>{downArrowIcon}</span>

            </Link>
          </Typography>
          <Typography
            as="li"
            variant="small"
            color="blue-gray"
            className="p-1 font-normal text-black"
          >
            <Link href="#" className="flex items-center text-black">
            Cart
            </Link>
          </Typography>
          <Typography
            as="li"
            variant="small"
            color="blue-gray"
            className="p-1 font-normal text-black"
          >
            <Link href="#" className="flex items-center">
            Chat
            </Link>
          </Typography>

          <Typography
            as="li"
            variant="small"
            color="blue-gray"
            className="p-1 font-normal text-black"
          >
            <Link href="#" className="flex items-center">
            Notification
            </Link>
          </Typography>
          <Typography
            as="li"
            variant="small"
            color="blue-gray"
            className="p-1 font-normal text-black"
          >
            <Link href="#" className="flex items-center">
            Blog
            </Link>
          </Typography>
          <Typography
            as="li"
            variant="small"
            color="blue-gray"
            className="p-1 font-normal text-black"
          >
            <Link href="#" className="flex items-center">
            {searchIcon}
            </Link>
          </Typography>
        </ul>
      );

  return (
        <Navbar className="mx-auto max-w-screen-xl py-2 px-4 lg:px-8 lg:py-4 bg-white">
        <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
            <Typography
            as="a"
            href="#"
            variant="small"
            className="mr-4 cursor-pointer py-1.5 font-normal text-black"
            >
            <Image src={Logo} height={41} width={143} alt="logo"/>
            </Typography>

            <div className="hidden lg:block">{navList}</div>

            <div className="hidden lg:block">
              <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 text-black lg:flex-row lg:items-center lg:gap-6">
              <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal text-black"
              >
                <Link href="/" className="flex items-center">
                My Account{downArrowIcon}
                </Link>
              </Typography>
              <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal"
              >
                <Link href="/" className="flex items-center">
                {cartIcon}
                </Link>
              </Typography>

              <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 ml-16 font-normal"
              >
                <Link href="/" className="flex items-center">
                EN/BN
                </Link>
              </Typography>

              </ul>
            </div>

            {/* <div className="hidden lg:inline-block">
                <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal"
              >
                <Link href="/" className="flex items-center">
                My Account
                </Link>
              </Typography>
            </div> */}
            <IconButton
            variant="text"
            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
            >
            {openNav ? (
                <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                />
                </svg>
            ) : (
                <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                />
                </svg>
            )}
            </IconButton>
        </div>
        <MobileNav open={openNav}>
            <div className="container mx-auto">
            {navList}
            <Button variant="gradient" size="sm" fullWidth className="mb-2">
                <span>Buy Now</span>
            </Button>
        </div>
      </MobileNav>
    </Navbar>
  )
}

export default Navbars
