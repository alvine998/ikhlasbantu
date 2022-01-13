import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import styles from '../../styles/Home.module.css'
import Image from 'next/image';
import { default_profile } from '../../assets';

index.title = "Your Profile"

function index(props) {
    return (
        <div>
            <Navbar />
            <div style={{ paddingBottom: 50 }}>
                <div className='container'>
                    <div className={styles.boxImgProfile}>
                        <div style={{width:180, height:180, borderRadius:100}}>
                            <Image src={default_profile} />
                        </div>
                    </div>
                    <div className={styles.btnCenter}>
                        <button className={'btn btn-outline-primary'}>Ganti Foto Profil</button>
                    </div>
                    <hr />
                    <div className={styles.btnCenter}>
                        <div className='row'>
                            <div className='col'>
                                <div className={styles.boxProfile}>

                                </div>
                            </div>
                            <div className='col'>
                                <div className={styles.boxDonasiProfile}>
                                    <p>Total Donasimu : <br />Rp. 0,-</p>
                                </div>
                            </div>
                            <div className='col'>
                                <div className={styles.boxProfile}>

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