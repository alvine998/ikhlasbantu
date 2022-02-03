import Head from 'next/head';
import Image from 'next/image';
import React from 'react';
import { dokter } from '../../assets';
import Footer from '../../components/Footer';
import useMediaQuery from '../../components/MediaQuery';
import Navbar from '../../components/Navbar';
import styles from '../../styles/Home.module.css'

index.title = 'Tentang Kami';
function index(props) {
    const isBreakpoint = useMediaQuery(768);
    return (
        <div>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>
            <div style={{ paddingBottom: 50 }}>
                <Navbar tentang />
                <div className='container'>
                    <div className='centering'>
                        {
                            isBreakpoint ? (
                                <img style={{ width: '100%', height: 300, paddingTop: 20, paddingBottom: 10 }} alt='Logo Ikhlas Bantu' src="/dokter.jpeg" />
                            ) : (
                                <div className={styles.flexImg}>
                                    <img className={styles.imgTentang} alt='Logo Ikhlas Bantu' src="/dokter.jpeg" />
                                </div>
                            )
                        }
                    </div>

                    <div>
                        <h2 style={{ fontWeight: 'bold' }}><u>Tentang Ikhlas Bantu</u></h2>
                        <div className={styles.padTextTentang}>
                            <p style={{ textAlign: 'justify' }}>
                                Lembaga ikhlas bantu pertama kali berdiri merupakan gerakan sosial yang mengajak
                                kalangan teman, sahabat untuk membantu orang yang terkena musibah dan tidak memiliki
                                biaya untuk dirawat di Rumah Sakit. Ikhlas bantu kemudian menjadi lembaga sosial berbadan hukum
                                bernama Yayasan Semesta Bertasbih sehingga kegiatan kami menjadi gerakan membantu dengan
                                skala yang lebih luas dan berbadan hukum.
                            </p>
                        </div>
                    </div>

                    <div className='faq-bot'>
                        <h2 style={{ fontWeight: 'bold' }}><u>FAQ</u></h2>
                        <div className='container'>
                            <div class="accordion" id="accordionPanelsStayOpenExample">
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="panelsStayOpen-headingOne">
                                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                                            Sedekah atau donasi ini bisa atas nama keluarga yang telah tiada ? Apa manfaatnya ?
                                        </button>
                                    </h2>
                                    <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                                        <div class="accordion-body">
                                            <p>Bisa ,dan pahalanya terus mengalir menyelamatkan alam kuburnya</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                                            Kemana sedekah ini didonasikan ?
                                        </button>
                                    </h2>
                                    <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                                        <div class="accordion-body">
                                            <p>selama ini kami kirim ke masjid di Kalimantan, Maluku dan Papua. Kalau ke pondok pesantren masih seputar Jawa barat</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="panelsStayOpen-headingThree">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                                            Berapa minimal donasi yang harus dibagikan ?
                                        </button>
                                    </h2>
                                    <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                                        <div class="accordion-body">
                                            <p>Minimal 10 ribu untuk donasi di Ikhlasbantu.com</p>
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