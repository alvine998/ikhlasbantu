import { Head } from 'next/document';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { dokter } from '../../assets';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import styles from '../../styles/Home.module.css'

index.title = 'Donasi';
function index(props) {
    return (
        <div>
            <Navbar donasi />
            <div style={{ paddingBottom: 50 }}>
                <h2 style={{ fontFamily: 'quicksand', fontWeight: 'bold', textAlign: 'center', paddingTop: 20 }}><u>DONASI</u></h2>
                <div className='container'>
                    <div className='row'>
                        <div className='col'>
                            <div className={styles.imgDonasi}>
                                <Image src={dokter} layout="responsive" objectFit='cover' />
                            </div>
                        </div>
                        <div className='col'>
                            <div className={styles.textPad}>
                                <p>
                                    Mari kita mulai bantu orang-orang sekitar, karena
                                    masih banyak dari mereka yang membutuhkan
                                    uluran tangan dari kita. Dengan niat  yang ikhlas
                                    mari kita bantu mereka.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Donasi Musibah Bencana Alam */}
                    <div>
                        <h2 style={{ fontFamily: 'quicksand', fontWeight: 'bold', paddingTop: 20 }}><u>DONASI MUSIBAH BENCANA ALAM</u></h2>
                        <div>
                            <div className='container'>
                                <div className={styles.rightSide}>
                                    <a href='#' style={{ textDecoration: 'none', color: 'black' }}>Lihat lainnya</a>
                                </div>
                                <div className='row'>
                                    <div className='col-4'>
                                        <div className={styles.boxDonasi}>
                                            <img className={styles.imgPosition} />
                                            <h5>Bantuan Erupsi Gunung Semeru</h5>
                                            <div>
                                                <p>Dana Terkumpul : </p>
                                                <p>Rp. 101.500.000</p>
                                            </div>
                                            <div className={styles.btnWidth}>
                                                <Link href={"/donasi/detail-donasi"}>
                                                    <button className={'btn btn-outline-success ' + styles.btnWidth}>Donasi</button>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-4'>
                                        <div className={styles.boxDonasi}>
                                            <img className={styles.imgPosition} />
                                            <h5>Sedekah Spesial Jum'at</h5>
                                            <div>
                                                <p>Dana Terkumpul : </p>
                                                <p>Rp. 101.500.000</p>
                                            </div>
                                            <div className={styles.btnWidth}>
                                                <button className={'btn btn-outline-success ' + styles.btnWidth}>Donasi</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-4'>
                                        <div className={styles.boxDonasi}>
                                            <img className={styles.imgPosition} />
                                            <h5>Bantu Kanker Ibu Siti</h5>
                                            <div>
                                                <p>Dana Terkumpul : </p>
                                                <p>Rp. 101.500.000</p>
                                            </div>
                                            <div className={styles.btnWidth}>
                                                <button className={'btn btn-outline-success ' + styles.btnWidth}>Donasi</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Donasi Kesehatan */}
                    <div>
                        <h2 style={{ fontFamily: 'quicksand', fontWeight: 'bold', paddingTop: 20 }}><u>DONASI KESEHATAN</u></h2>
                        <div>
                            <div className='container'>
                                <div className={styles.rightSide}>
                                    <a href='#' style={{ textDecoration: 'none', color: 'black' }}>Lihat lainnya</a>
                                </div>
                                <div className='row'>
                                    <div className='col-4'>
                                        <div className={styles.boxDonasi}>
                                            <img className={styles.imgPosition} />
                                            <h5>Bantuan Erupsi Gunung Semeru</h5>
                                            <div>
                                                <p>Dana Terkumpul : </p>
                                                <p>Rp. 101.500.000</p>
                                            </div>
                                            <div className={styles.btnWidth}>
                                                <button className={'btn btn-outline-success ' + styles.btnWidth}>Donasi</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-4'>
                                        <div className={styles.boxDonasi}>
                                            <img className={styles.imgPosition} />
                                            <h5>Sedekah Spesial Jum'at</h5>
                                            <div>
                                                <p>Dana Terkumpul : </p>
                                                <p>Rp. 101.500.000</p>
                                            </div>
                                            <div className={styles.btnWidth}>
                                                <button className={'btn btn-outline-success ' + styles.btnWidth}>Donasi</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-4'>
                                        <div className={styles.boxDonasi}>
                                            <img className={styles.imgPosition} />
                                            <h5>Bantu Kanker Ibu Siti</h5>
                                            <div>
                                                <p>Dana Terkumpul : </p>
                                                <p>Rp. 101.500.000</p>
                                            </div>
                                            <div className={styles.btnWidth}>
                                                <button className={'btn btn-outline-success ' + styles.btnWidth}>Donasi</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Sedekah Ikhlas Bantu */}
                    <div>
                        <h2 style={{ fontFamily: 'quicksand', fontWeight: 'bold', paddingTop: 20 }}><u>SEDEKAH IKHLAS BANTU</u></h2>
                        <div>
                            <div className='container'>
                                <div className={styles.rightSide}>
                                    <a href='#' style={{ textDecoration: 'none', color: 'black' }}>Lihat lainnya</a>
                                </div>
                                <div className='row'>
                                    <div className='col-4'>
                                        <div className={styles.boxDonasi}>
                                            <img className={styles.imgPosition} />
                                            <h5>Bantuan Erupsi Gunung Semeru</h5>
                                            <div>
                                                <p>Dana Terkumpul : </p>
                                                <p>Rp. 101.500.000</p>
                                            </div>
                                            <div className={styles.btnWidth}>
                                                <button className={'btn btn-outline-success ' + styles.btnWidth}>Donasi</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-4'>
                                        <div className={styles.boxDonasi}>
                                            <img className={styles.imgPosition} />
                                            <h5>Sedekah Spesial Jum'at</h5>
                                            <div>
                                                <p>Dana Terkumpul : </p>
                                                <p>Rp. 101.500.000</p>
                                            </div>
                                            <div className={styles.btnWidth}>
                                                <button className={'btn btn-outline-success ' + styles.btnWidth}>Donasi</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-4'>
                                        <div className={styles.boxDonasi}>
                                            <img className={styles.imgPosition} />
                                            <h5>Bantu Kanker Ibu Siti</h5>
                                            <div>
                                                <p>Dana Terkumpul : </p>
                                                <p>Rp. 101.500.000</p>
                                            </div>
                                            <div className={styles.btnWidth}>
                                                <button className={'btn btn-outline-success ' + styles.btnWidth}>Donasi</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default index;