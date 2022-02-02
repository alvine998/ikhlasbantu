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
                                <img style={{width:'100%', height:300, paddingTop:20, paddingBottom:10}} alt='Logo Ikhlas Bantu' src="/dokter.jpeg" />
                            ) : (
                                <img className='imgTentang' alt='Logo Ikhlas Bantu' src="/dokter.jpeg" />
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
                                            Accordion Item #1
                                        </button>
                                    </h2>
                                    <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                                        <div class="accordion-body">
                                            <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                                            Accordion Item #2
                                        </button>
                                    </h2>
                                    <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                                        <div class="accordion-body">
                                            <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="panelsStayOpen-headingThree">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                                            Accordion Item #3
                                        </button>
                                    </h2>
                                    <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                                        <div class="accordion-body">
                                            <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
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