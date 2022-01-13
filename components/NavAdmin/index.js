import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { logo } from '../../assets';

function Navadmin(props) {
    return (
        <div>
            <div>
                <div className='d-flex flex-column flex-shrink-0 p-3 bg-light' style={{ width: 280 }}>
                    <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
                        <span class="" style={{ marginLeft: 20, paddingRight: 20 }}><Image src={logo} height={50} width={50} /></span>
                        <p style={{ fontWeight: 'bold', textAlign: 'left' }}>Admin Console ikhlasbantu.com</p>
                    </a>
                    <hr style={{ marginTop: -10 }} />
                    <ul class="nav nav-pills flex-column mb-auto">
                        <li class="nav-item">
                            <Link href={"/admin"}>
                                <a className={"nav-link " + (props.home ? "active" : "link-dark")} aria-current="page">
                                    Dasboard
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href={"/admin/user-profile"}>
                                <a className={"nav-link " + (props.userprofile ? "active" : "link-dark")}>
                                    User Profile
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href={"/admin/banner"}>
                                <a className={"nav-link " + (props.banner ? "active" : "link-dark")}>
                                    Banner
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href={"/admin/company-profile"}>
                                <a className={"nav-link " + (props.companyprofile ? "active" : "link-dark")}>
                                    Company Profile
                                </a>
                            </Link>
                        </li>
                        <li>
                            <a href="#" class="nav-link link-dark">
                                Promo
                            </a>
                        </li>
                    </ul>
                    <hr />
                </div>
            </div>

        </div>
    );
}

export default Navadmin;