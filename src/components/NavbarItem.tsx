"use client"
import React from 'react';
import Link from "next/link";
import {useParams, useSearchParams} from "next/navigation";

type NavbarItemProps = {
    children?: React.ReactNode
    title: string
    param: string
    className: string
}

const NavbarItem:React.FC<NavbarItemProps> = (props) => {
    const searchParams = useSearchParams();
    const genre = searchParams.get("genre");
    return (
        <div className={props.className}>
            <Link className={`m-4 hover:text-amber-600 font-semibold 
                  ${genre && genre === props.param 
                          && "underline underline-offset-8 decoration-4 decoration-amber-500 rounded-lg"}`}
                  href={`/?genre=${props.param}`} >
                {props.title}
            </Link>
        </div>
    );
};

export default NavbarItem;