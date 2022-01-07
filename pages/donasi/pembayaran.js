import Link from 'next/link';
import React from 'react';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import styles from '../../styles/Home.module.css'

function Pembayaran(props) {
    return (
        <div>
            <Navbar donasi />
            <div style={{ paddingBottom: 50 }}>
                <h2 style={{ fontWeight: 'bold', marginTop: 20, textAlign: 'center' }}><u>DONASI</u></h2>
                <div className='container'>
                    <h2 style={{ fontWeight: 'bold', marginTop: 10 }}>Pembayaran Donasi</h2>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-4'>
                                <h5>Pilih Metode Pembayaran : </h5>
                            </div>
                            <div className='col-4'>
                                <select className='form-select' aria-label='Default select example'>
                                    <option value={"BSI"} selected>Transfer Bank Syariah Indonesia (BSI)</option>
                                    <option value={"BCA"}>Transfer Bank BCA</option>
                                    <option value={"Muamalat"}>Transfer Bank Muamalat</option>
                                </select>
                            </div>
                        </div>

                        <div style={{ marginTop: 30 }}>
                            <h5>Pilih Jumlah Uang Yang Akan Didonasikan : </h5>
                            <div className='row'>
                                <div className='col-md-3'>
                                    <div className={styles.boxUangDonasi}>
                                        <p style={{ textAlign: 'center', fontSize: 20 }}>Rp. 10.000</p>
                                    </div>
                                </div>

                                <div className='col-md-3'>
                                    <div className={styles.boxUangDonasi}>
                                        <p style={{ textAlign: 'center', fontSize: 20 }}>Rp. 50.000</p>
                                    </div>
                                </div>

                                <div className='col-md-3'>
                                    <div className={styles.boxUangDonasi}>
                                        <p style={{ textAlign: 'center', fontSize: 20 }}>Rp. 100.000</p>
                                    </div>
                                </div>

                                <div className='col-md-3'>
                                    <div className={styles.boxUangDonasi}>
                                        <p style={{ textAlign: 'center', fontSize: 20 }}>Rp. 200.000</p>
                                    </div>
                                </div>
                            </div>

                            <div className='row'>
                                <div className='col-md-3'>
                                    <div className={styles.boxUangDonasi}>
                                        <p style={{ textAlign: 'center', fontSize: 20 }}>Rp. 500.000</p>
                                    </div>
                                </div>

                                <div className='col-md-3'>
                                    <div className={styles.boxUangDonasi}>
                                        <p style={{ textAlign: 'center', fontSize: 20 }}>Rp. 1.000.000</p>
                                    </div>
                                </div>

                                <div className='col-md-3'>
                                    <div className={styles.boxUangDonasi}>
                                        <p style={{ textAlign: 'center', fontSize: 20 }}>Rp. 2.000.000</p>
                                    </div>
                                </div>

                                <div className='col-md-3'>
                                    <div className={styles.boxUangDonasi}>
                                        <input className='form-control' placeholder='Masukkan nominal' style={{ textAlign: 'center', fontSize: 18 }} />
                                    </div>
                                </div>
                            </div>

                            <div className={styles.inputWidthDonasi}>
                                <label>Jumlah Donasi : </label>
                                <input className='form-control' placeholder='Masukkan nominal' />
                            </div>

                            <div className={styles.boxDataDiri}>
                                <h5 className={styles.textUpper}>Isi Data Dibawah Ini</h5>
                                <form >
                                    <div>
                                        <label>Nama Lengkap</label>
                                        <input className='form-control' placeholder='Ketik disini ...' type={"text"} />
                                    </div>
                                    <div style={{ paddingTop: 20 }}>
                                        <label>No Handphone / Email</label>
                                        <input className='form-control' placeholder='Ketik disini ...' type={"text"} />
                                    </div>
                                </form>
                            </div>

                            <div className={styles.widthInputPesan}>
                                <label>Pesan :</label>
                                <textarea className='form-control' rows={4} placeholder='Ketik disini ...' />
                            </div>

                            <div style={{paddingTop:20}}>
                                <Link href={"/donasi/konfirmasi-pembayaran"}>
                                    <button className={'btn btn-outline-success ' + styles.widthInputPesan}>Bayar Sekarang</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Pembayaran;