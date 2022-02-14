import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import swal from 'sweetalert';
import { logo } from '../../assets';

function Navbar(props) {
    const [key, setKey] = useState('');
    const [poin, setPoin] = useState('');
    const [freq, setFreq] = useState('');
    const [statususer, setStatususer] = useState('');

    const getDataUsers = () => {
        var key = localStorage.getItem('loginKey');
        console.log(key)
        setKey(key)

        axios.get(`http://localhost:4000/users/mail/${key}`).then(
            res => {
                const result = res.data;
                setPoin(result.poin); setFreq(result.frekuensi_donasi);
                setStatususer(result.statususer)
                console.log(result)
            }
        ) .catch(err => {
            console.log(err)
        })
    }

    const deleteDataLogin = () => {
        localStorage.removeItem('loginKey')
        console.log("Success remove keys")
    }

    useEffect(() => {
        getDataUsers();
    }, [])
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: '#752C8B' }}>
                <div class="container-fluid">
                    <a class="navbar-brand" style={{ paddingLeft: 20 }} href="/"><Image src={logo} width={50} height={50} /></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a style={{ color: 'white' }} className={'nav-link ' + (props.beranda ? 'active' : '')} aria-current="page" href="/">Beranda</a>
                            </li>
                            <li class="nav-item">
                                <a style={{ color: 'white' }} className={'nav-link ' + (props.donasi ? 'active' : '')} href="/donasi">Donasi</a>
                            </li>
                            <li class="nav-item">
                                <a style={{ color: 'white' }} className={'nav-link ' + (props.tentang ? 'active' : '')} href="/tentang-kami">Tentang Kami</a>
                            </li>
                            <li class="nav-item">
                                <a style={{ color: 'white' }} className={'nav-link ' + (props.hubungi ? 'active' : '')} href="/hubungi-kami">Hubungi Kami</a>
                            </li>
                        </ul>
                        <form class="d-flex" style={{ paddingRight: 20 }}>
                            {
                                key !== null ? (
                                    <div class="dropdown">
                                        <a class="nav-link dropdown-toggle" style={{ color: 'white', paddingRight: 70 }} href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Akun
                                        </a>
                                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <li>
                                                <Link href={"/profile"}>
                                                    <a class="dropdown-item">Profil</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href={ statususer == 'verified' ? "/buat-donasi-dashboard" : "/profile"}>
                                                    <a onClick={()=>{statususer === 'verified' ? null : swal("Silahkan Lengkapi Data Diri Dahulu!", {icon:"warning"})}} class="dropdown-item">+ Buat Donasi</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href={"/donasimu"}>
                                                    <a class="dropdown-item">Donasimu</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href={"#"}>
                                                    <a class="dropdown-item" onClick={()=>swal("Coming Soon")}>Cek Reward</a>
                                                </Link>
                                            </li>
                                            <li><hr class="dropdown-divider" /></li>
                                            <li>
                                                <Link href={"/login"}>
                                                    <a class="dropdown-item" onClick={() => deleteDataLogin()} href="#">Logout</a>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                ) : (
                                    <Link href={"/login"}>
                                        <a href='#' style={{ color: 'white', textDecoration: 'none' }}>Login</a>
                                    </Link>
                                )
                            }

                        </form>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;