import Image from 'next/image';
import React from 'react';
import { facebook, instagram, youtube } from '../../assets';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import styles from '../../styles/Home.module.css'

index.title = 'Hubungi Kami';

function index(props) {
    return (
        <div>
            <Navbar hubungi />
            <div className='container' style={{ paddingBottom: 50 }}>
                <div>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7932.345393775506!2d106.96399137418736!3d-6.240956781929802!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e698dfe84a78543%3A0x837c1873680a77fb!2sMRC%20Ruqyah%20Center%20Bekasi%20Therapy%20Keluarga%20sehat!5e0!3m2!1sid!2sid!4v1637911383593!5m2!1sid!2sid" className={styles.maps} allowfullscreen="" loading="lazy" />
                    <div className='container'>
                        <div className='row'>
                            <div className='col'>
                                <h2 style={{ fontWeight: 'bold' }}>Alamat Kantor</h2>
                                <p>
                                    Jl. Taman Cendana 16D (My Dentist Lt. 2)<br />
                                    Galaxy, Bekasi Selatan, Kota Bekasi <br />
                                    17134
                                </p>

                                <h2 style={{ fontWeight: 'bold' }}>Email</h2>
                                <p>
                                    info@ikhlasbantu.com
                                </p>

                                <h2 style={{ fontWeight: 'bold' }}>No Telepon</h2>
                                <p>
                                    +62 878-6339-7900
                                </p>
                            </div>

                            <div className={'col ' + styles.hubTop}>
                                <h2 style={{ fontWeight: 'bold', textAlign: 'center'}}>Sosial Media</h2>
                                <div className='container'>
                                    <div className='row'>
                                        <div className='col'>
                                            <div className={styles.imgSosmed}>
                                                <Image src={facebook} alt='facebook logo' />
                                            </div>
                                            <h5 style={{textAlign:'center'}}>Ikhlas Bantu</h5>
                                        </div>
                                        <div className='col'>
                                            <div className={styles.imgSosmed}>
                                                <Image src={instagram} alt='instagram logo' />
                                            </div>
                                            <h5 style={{textAlign:'center'}}>@ikhlas_bantu</h5>
                                        </div>
                                        <div className='col'>
                                            <div className={styles.imgSosmed}>
                                                <Image src={youtube} alt='youtube logo' />
                                            </div>
                                            <h5 style={{textAlign:'center'}}>Semestaku TV</h5>
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