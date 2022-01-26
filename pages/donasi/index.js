import axios from 'axios';
import { Head } from 'next/document';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import NumberFormat from 'react-number-format';
import { dokter } from '../../assets';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import styles from '../../styles/Home.module.css'

index.title = 'Donasi';
function index(props) {
    // State
    const [collection, setCollection] = useState([]);
    const [collection2, setCollection2] = useState([]);
    const [collection3, setCollection3] = useState([]);
    const [collection4, setCollection4] = useState([]);

    // Function
    const getDataBencana = () => {
        axios.get(`http://localhost:4000/donasis/valid/bencana`).then(
            res => {
                const collection = res.data;
                setCollection(collection);
                console.log(collection);
            }
        )
    }

    const getDataKesehatan = () => {
        axios.get(`http://localhost:4000/donasis/valid/kesehatan`).then(
            res => {
                const collection2 = res.data;
                setCollection2(collection2);
                console.log(collection2);
            }
        )
    }

    const getDataSedekah = () => {
        axios.get(`http://localhost:4000/donasis/valid/sedekah`).then(
            res => {
                const collection3 = res.data;
                setCollection3(collection3);
                console.log(collection3);
            }
        )
    }

    const getDataLain = () => {
        axios.get(`http://localhost:4000/donasis/valid/lain-lain`).then(
            res => {
                const collection4 = res.data;
                setCollection4(collection4);
                console.log(collection4);
            }
        )
    }

    const SendIdDonasi = (id) => {
        localStorage.setItem('donasiKey', id);
    }

    useEffect(() => {
        getDataBencana();
        getDataKesehatan();
        getDataLain();
        getDataSedekah();
    }, [])

    return (
        <div>
            <Navbar donasi />
            <div style={{ paddingBottom: 50 }}>
                <h2 style={{ fontFamily: 'quicksand', fontWeight: 'bold', textAlign: 'center', paddingTop: 20 }}><u>DONASI</u></h2>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md'>
                            <div className={styles.imgDonasi}>
                                <Image src={dokter} layout="responsive" objectFit='cover' />
                            </div>
                        </div>
                        <div className='col-md'>
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
                                    {
                                        collection.reverse().map((res, i) => i < 3 ? (
                                            <div key={i} className='col-md-4'>
                                                <div className={styles.boxDonasi}>
                                                    <img src={`http://localhost:4000/resources/uploads/${res.foto}`} className={styles.imgPosition} />
                                                    <h5>{res.judul}</h5>
                                                    <div>
                                                        <p>Dana Terkumpul : </p>
                                                        <p><NumberFormat value={res.terkumpul} displayType='text' thousandSeparator prefix='Rp ' />,-</p>
                                                    </div>
                                                    <div className={styles.btnWidth}>
                                                        <Link href={`/donasi/detail-donasi?id=${res._id}`}>
                                                            <button onClick={() => SendIdDonasi(res._id)} className={'btn btn-outline-success ' + styles.btnWidth}>Donasi</button>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        ) : null)
                                    }
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
                                    {
                                        collection2.reverse().map((res, i) => i < 3 ? (
                                            <div key={i} className='col-md-4'>
                                                <div className={styles.boxDonasi}>
                                                    <img src={`http://localhost:4000/resources/uploads/${res.foto}`} className={styles.imgPosition} />
                                                    <h5>{res.judul}</h5>
                                                    <div>
                                                        <p>Dana Terkumpul : </p>
                                                        <p><NumberFormat value={res.terkumpul} displayType='text' thousandSeparator prefix='Rp ' />,-</p>
                                                    </div>
                                                    <div className={styles.btnWidth}>
                                                        <Link href={`/donasi/detail-donasi?id=${res._id}`}>
                                                            <button onClick={() => SendIdDonasi(res._id)} className={'btn btn-outline-success ' + styles.btnWidth}>Donasi</button>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        ) : null)
                                    }
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
                                    {
                                        collection3.reverse().map((res, i) => i < 3 ? (
                                            <div key={i} className='col-md-4'>
                                                <div className={styles.boxDonasi}>
                                                    <img src={`http://localhost:4000/resources/uploads/${res.foto}`} className={styles.imgPosition} />
                                                    <h5>{res.judul}</h5>
                                                    <div>
                                                        <p>Dana Terkumpul : </p>
                                                        <p><NumberFormat value={res.terkumpul} displayType='text' thousandSeparator prefix='Rp ' />,-</p>
                                                    </div>
                                                    <div className={styles.btnWidth}>
                                                        <Link href={`/donasi/detail-donasi?id=${res._id}`}>
                                                            <button onClick={() => SendIdDonasi(res._id)} className={'btn btn-outline-success ' + styles.btnWidth}>Donasi</button>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        ) : null)
                                    }
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Donasi Lainnya */}
                    <div>
                        <h2 style={{ fontFamily: 'quicksand', fontWeight: 'bold', paddingTop: 20 }}><u>DONASI LAINNYA</u></h2>
                        <div>
                            <div className='container'>
                                <div className={styles.rightSide}>
                                    <a href='#' style={{ textDecoration: 'none', color: 'black' }}>Lihat lainnya</a>
                                </div>
                                <div className='row'>
                                    {
                                        collection4.reverse().map((res, i) => i < 3 ? (
                                            <div key={i} className='col-md-4'>
                                                <div className={styles.boxDonasi}>
                                                    <img src={`http://localhost:4000/resources/uploads/${res.foto}`} className={styles.imgPosition} />
                                                    <h5>{res.judul}</h5>
                                                    <div>
                                                        <p>Dana Terkumpul : </p>
                                                        <p><NumberFormat value={res.terkumpul} displayType='text' thousandSeparator prefix='Rp ' />,-</p>
                                                    </div>
                                                    <div className={styles.btnWidth}>
                                                        <Link href={`/donasi/detail-donasi?id=${res._id}`}>
                                                            <button onClick={() => SendIdDonasi(res._id)} className={'btn btn-outline-success ' + styles.btnWidth}>Donasi</button>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        ) : null)
                                    }
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