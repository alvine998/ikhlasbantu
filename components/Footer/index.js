import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { logo } from '../../assets';
import styles from '../../styles/Home.module.css'

function Footer(props) {
    return (
        <div>
            <div className={styles.boxFooter}>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md'>
                            <Image src={logo} width={80} height={80}/>
                            <p style={{color:'white'}}>D'Kranji Residence 1 <br/>No.67, Kranji, Bekasi Barat, 17134</p>
                        </div>
                        <div className='col-md'>
                            <h5 style={{color:'white'}}>Sosial Media</h5>
                            <ul className='list-unstyled text-muted'>
                                <li>
                                    <a href='#' style={{color:'white', textDecoration:'none'}}>Instagram : @ikhlas_bantu</a>
                                </li>
                                <li>
                                    <a href='#' style={{color:'white', textDecoration:'none'}}>Facebook : Ikhlas Bantu</a>
                                </li>
                                <li>
                                    <a href='#' style={{color:'white', textDecoration:'none'}}>Youtube : Semestaku TV</a>
                                </li>
                            </ul>
                        </div>
                        <div className='col-md'>
                            <h5 style={{color:'white'}}>Menu Navigasi</h5>
                            <ul className='list-unstyled text-muted'>
                                <li>
                                    <a href='/donasi' style={{color:'white', textDecoration:'none'}}>Donasi</a>
                                </li>
                                <li>
                                    <a href='/tentang-kami' style={{color:'white', textDecoration:'none'}}>Tentang Kami</a>
                                </li>
                                <li>
                                    <a href='/hubungi-kami' style={{color:'white', textDecoration:'none'}}>Hubungi Kami</a>
                                </li>
                                <li>
                                    <a href='#' style={{color:'white', textDecoration:'none'}}>Syarat & Ketentuan</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;