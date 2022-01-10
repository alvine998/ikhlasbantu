import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { logo } from '../../assets';

function Navbar(props) {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: '#752C8B' }}>
                <div class="container-fluid">
                    <a class="navbar-brand" href="#"><Image src={logo} width={50} height={50} /></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a style={{color:'white'}} className={'nav-link ' + (props.beranda?'active':'')} aria-current="page" href="/">Beranda</a>
                            </li>
                            <li class="nav-item">
                                <a style={{color:'white'}} className={'nav-link ' + (props.donasi?'active':'')} href="/donasi">Donasi</a>
                            </li>
                            <li class="nav-item">
                                <a style={{color:'white'}} className={'nav-link ' + (props.tentang?'active':'')} href="/tentang-kami">Tentang Kami</a>
                            </li>
                            <li class="nav-item">
                                <a style={{color:'white'}} className={'nav-link ' + (props.hubungi?'active':'')} href="hubungi-kami">Hubungi Kami</a>
                            </li>
                        </ul>
                        <form class="d-flex">
                            <Link href={"/login"}>
                                <a href='#' style={{color:'white', textDecoration:'none'}}>Login</a>
                            </Link>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;