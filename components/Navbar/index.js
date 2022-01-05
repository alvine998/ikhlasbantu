import Link from 'next/link';
import React from 'react';

function Navbar(props) {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: '#98D97A' }}>
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Ikhlasbantu.com</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Beranda</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Donasi</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Tentang Kami</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Hubungi Kami</a>
                            </li>
                        </ul>
                        <form class="d-flex">
                            <Link href={"/login"}>
                                <button class="btn btn-outline-success">Login</button>
                            </Link>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;