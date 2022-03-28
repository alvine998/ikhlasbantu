import axios from 'axios';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import NumberFormat from 'react-number-format';
import Footer from '../../components/Footer';
import useMediaQuery from '../../components/MediaQuery';
import Navbar from '../../components/Navbar';
import styles from '../../styles/Home.module.css'

DetailDonasi.title = "Detail-Donasi"

function DetailDonasi(props) {
    // State
    const [key, setkey] = useState('');
    const [foto, setFoto] = useState('');
    const [judul, setJudul] = useState('');
    const [nama, setNama] = useState('');
    const [deskripsi, setDeskripsi] = useState('');
    const [terkumpul, setTerkumpul] = useState('');
    const [target, setTarget] = useState('');
    const [ids, setIds] = useState('');

    // Function
    const getDataDonasi = () => {
        var key = localStorage.getItem('donasiKey');

        axios.get(`https://ikhlasbantu.herokuapp.com/donasis/${key}`).then(
            res => {
                console.log(res.data);
                const result = res.data;
                setJudul(result.judul); setDeskripsi(result.deskripsi);
                setFoto(result.foto); setIds(result.iduser); setTerkumpul(result.terkumpul);
                setTarget(result.target);
            }
        )
    }

    const getDataUser = () => {
        axios.get(`https://ikhlasbantu.herokuapp.com/users/${ids}`).then(
            res => {
                const result = res.data;
                console.log(result);
                setNama(result.nama)
            }
        )
    }

    useEffect(() => {
        getDataDonasi();
        getDataUser();
    }, [])

    const isBreakpoint = useMediaQuery(768);

    return (
        <div>
            <Navbar donasi />
            <div style={{ paddingBottom: 50 }}>
                <h2 style={{ fontWeight: 'bold', marginTop: 20, textAlign: 'center' }}><u>DONASI</u></h2>
                <div className='container'>
                    {
                        isBreakpoint ? (
                            <img src={`https://ikhlasbantu.herokuapp.com/resources/uploads/${foto}`} className={styles.imgDetailDonasi2} alt='musibah' />
                        ) : (
                            <img src={`https://ikhlasbantu.herokuapp.com/resources/uploads/${foto}`} className={styles.imgDetailDonasi} alt='musibah' />
                        )
                    }
                    <div>
                        <h2 style={{ fontWeight: 'bold', marginTop: 10 }}>{judul}</h2>
                        <h5>Penggalang Dana : {nama}</h5>
                        <div className='container'>
                            <p style={{ textAlign: 'justify' }}>
                                {deskripsi}
                            </p>

                            <div className='row' style={{ marginTop: 20 }}>
                                {
                                    isBreakpoint ? (
                                        <div>
                                            <h5 >Dana Terkumpul : <NumberFormat value={terkumpul} displayType='text' thousandSeparator prefix='Rp ' />,-</h5>
                                            <h5>Target : <NumberFormat value={target} displayType='text' thousandSeparator prefix='Rp ' />,-</h5>
                                            <div className={styles.btnDetailDonasi}>
                                                <Link href={"/donasi/pembayaran"}>
                                                    <button className={'btn btn-outline-success ' + styles.btnDetailDonasi}>Donasi Sekarang</button>
                                                </Link>
                                            </div>
                                        </div>
                                    ) : (
                                        <div>
                                            <div className='col-md'>
                                                <h5 >Dana Terkumpul : <NumberFormat value={terkumpul} displayType='text' thousandSeparator prefix='Rp ' />,-</h5>
                                                <div className={styles.btnDetailDonasi}>
                                                    <Link href={"/donasi/pembayaran"}>
                                                        <button className={'btn btn-outline-success ' + styles.btnDetailDonasi}>Donasi Sekarang</button>
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className='col-md'>
                                                <h5 style={{ textAlign: 'right' }}>Target : <NumberFormat value={target} displayType='text' thousandSeparator prefix='Rp ' />,-</h5>
                                            </div>
                                        </div>
                                    )
                                }

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