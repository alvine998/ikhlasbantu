import Link from 'next/link';
import React from 'react';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import styles from '../../styles/Home.module.css'

function DetailDonasi(props) {
    return (
        <div>
            <Navbar donasi />
            <div style={{ paddingBottom: 50 }}>
                <h2 style={{ fontWeight: 'bold', marginTop: 20, textAlign: 'center' }}><u>DONASI</u></h2>
                <div className='container'>
                    <img src='https://dummyimage.com/1200x600/000/fff' className={styles.imgDetailDonasi} alt='musibah' />
                    <div>
                        <h2 style={{ fontWeight: 'bold', marginTop: 10 }}>Bantuan Erupsi Semeru</h2>
                        <h5>Penggalang Dana : Diana Falah</h5>
                        <div className='container'>
                            <p style={{ textAlign: 'justify' }}>
                                Lorem ipsum bundle js porena riot init morena dolor correa makeni dksl siaw rest potrait landsacape
                                Lorem ipsum bundle js porena riot init morena dolor correa makeni dksl siaw rest potrait landsacape
                                Lorem ipsum bundle js porena riot init morena dolor correa makeni dksl siaw rest potrait landsacape
                                Lorem ipsum bundle js porena riot init morena dolor correa makeni dksl siaw rest potrait landsacape
                                Lorem ipsum bundle js porena riot init morena dolor correa makeni dksl siaw rest potrait landsacape
                                Lorem ipsum bundle js porena riot init morena dolor correa makeni dksl siaw rest potrait landsacape
                            </p>

                            <div className='row' style={{ marginTop: 20 }}>
                                <div className='col'>
                                    <h5 >Dana Terkumpul : Rp. 101.500.000,-</h5>
                                    <div className={styles.btnDetailDonasi}>
                                        <Link href={"/donasi/pembayaran"}>
                                            <button className={'btn btn-outline-success ' + styles.btnDetailDonasi}>Donasi Sekarang</button>
                                        </Link>
                                    </div>
                                </div>
                                <div className='col'>
                                    <h5 style={{textAlign:'right'}}>Target : Rp. 500.000.000,-</h5>
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

export default DetailDonasi;