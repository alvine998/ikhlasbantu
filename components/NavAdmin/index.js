import Image from 'next/image';
import React from 'react';
import { logo } from '../../assets';

function Navadmin(props) {
    return (
        <div className='row'>
            <div className='col-2'>
                <div className='d-flex flex-column flex-shrink-0 p-3 bg-light' style={{ width: 280 }}>
                    <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
                        <span class="" style={{marginLeft:20, paddingRight:20}}><Image src={logo} height={50} width={50} /></span>
                        <p style={{fontWeight:'bold', textAlign:'left'}}>Admin Console ikhlasbantu.com</p>
                    </a>
                    <hr style={{marginTop:-10}}/>
                    <ul class="nav nav-pills flex-column mb-auto">
                        <li class="nav-item">
                            <a href="/admin" className={"nav-link " + (props.home ? "active" : "link-dark")} aria-current="page">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="#" className={"nav-link " + (props.banners ? "active" : "link-dark")}>
                                Dashboard
                            </a>
                        </li>
                        <li>
                            <a href="#" className={"nav-link " + (props.profil ? "active" : "link-dark")}>
                                Orders
                            </a>
                        </li>
                        <li>
                            <a href="#" class="nav-link link-dark">
                                Products
                            </a>
                        </li>
                        <li>
                            <a href="#" class="nav-link link-dark">
                                Customers
                            </a>
                        </li>
                    </ul>
                    <hr/>
                </div>
            </div>

            <div className='col'>
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
                                <button class="btn btn-outline-danger" type="submit">Logout</button>
                            </form>
                        </div>
                    </div>
                </nav>
            </div>

        </div>
    );
}

export default Navadmin;