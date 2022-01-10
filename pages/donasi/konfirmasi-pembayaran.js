import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { logo_bsi, thanks } from '../../assets';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import styles from '../../styles/Home.module.css'

function Konfirmasi(props) {
    return (
        <div>
            <Navbar donasi />
            <div style={{ paddingBottom: 50 }}>
                <div className='container'>
                    <div style={{ paddingTop: 20 }}>
                        <Link href={"/donasi/pembayaran"}>
                            <button className='btn btn-outline-danger'>Kembali</button>
                        </Link>
                    </div>
                    <h2 style={{ fontWeight: 'bold', marginTop: 20, textAlign: 'center' }}><u>DONASI</u></h2>
                    <div>
                        <h5>Transfer Bank Syariah Indonesia (BSI)</h5>
                        <div className={styles.flexImg}>
                            <Image src={logo_bsi} className={styles.centerImg} height={150} width={390} />
                        </div>
                        <h5 style={{ textAlign: 'center' }}>No Rekening : 555666777809 <br /> a.n Ikhlas Bantu</h5>
                        <div className='container'>
                            <div className='row'>
                                <div className='col'>
                                    <p style={{ fontWeight: 'bold' }}>Cara Pembayaran di ATM BSI :</p>
                                    <p className='container'>
                                        1. Klik transfer<br />
                                        2. Klik ke rekening BSI<br />
                                        3. Masukkan no rekening Ikhlas Bantu<br />
                                        4. Masukkan nominal jumlah uang
                                    </p>

                                    <p style={{ fontWeight: 'bold' }}>Cara Pembayaran di M-Banking BSI :</p>
                                    <p className='container'>
                                        1. Login ke menu m-banking BSI<br />
                                        2. Pilih menu transfer<br />
                                        3. Di kategori daftar transfer pilih antar rekening<br />
                                        4. Masukkan no rekening Ikhlas Bantu<br />
                                        5. Di kategori transfer pilih antar rekening<br />
                                        6. Pilih rekening atas nama Ikhlas Bantu<br />
                                        7. Masukkan nominal jumlah uang<br />
                                        8. Pilih send dan masukkan pin atm BSI
                                    </p>
                                    <div>
                                        <a className='btn btn-outline-success' style={{width:'100%'}}>Konfirmasi Pembayaran</a>
                                    </div>
                                </div>
                                <div className='col'>
                                    <Image src={thanks} height={326} width={600}/>
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

export default Konfirmasi;