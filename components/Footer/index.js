import Link from 'next/link';
import React from 'react';
import styles from '../../styles/Home.module.css'

function Footer(props) {
    return (
        <div>
            <div className={styles.boxFooter}>
                <div className='container'>
                    <div className='row'>
                        <div className='col'>
                            <h5>Ikhlas Bantu</h5>
                            <p>D'Kranji Residence 1 <br/>No.67, Kranji, Bekasi Barat, 17134</p>
                        </div>
                        <div className='col'>
                            <h5>Sosial Media</h5>
                            <ul className='list-unstyled text-muted'>
                                <li>
                                    <a href='#' style={{color:'black', textDecoration:'none'}}>Instagram : @ikhlas_bantu</a>
                                </li>
                                <li>
                                    <a href='#' style={{color:'black', textDecoration:'none'}}>Facebook : Ikhlas Bantu</a>
                                </li>
                                <li>
                                    <a href='#' style={{color:'black', textDecoration:'none'}}>Youtube : Semesta TV</a>
                                </li>
                            </ul>
                        </div>
                        <div className='col'>
                            <h5>Menu Navigasi</h5>
                            <ul className='list-unstyled text-muted'>
                                <li>
                                    <a href='#' style={{color:'black', textDecoration:'none'}}>Donasi</a>
                                </li>
                                <li>
                                    <a href='#' style={{color:'black', textDecoration:'none'}}>Tentang Kami</a>
                                </li>
                                <li>
                                    <a href='#' style={{color:'black', textDecoration:'none'}}>Hubungi Kami</a>
                                </li>
                                <li>
                                    <a href='#' style={{color:'black', textDecoration:'none'}}>Syarat & Ketentuan</a>
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