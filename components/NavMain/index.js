import Link from 'next/link';
import React from 'react';

function NavMain(props) {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#" style={{ paddingLeft: 20 }}></a>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            {/* <li class="nav-item">
                                    <a class="nav-link active" aria-current="page" href="#" style={{ fontWeight: 'bold' }}>Admin Console ikhlasbantu.com</a>
                                </li> */}

                        </ul>
                        <form class="d-flex">
                            <Link href={"/login"}>
                                <button class="btn btn-outline-danger" type="submit">Logout</button>
                            </Link>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default NavMain;