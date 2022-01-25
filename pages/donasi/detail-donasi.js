import axios from 'axios';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import styles from '../../styles/Home.module.css'

DetailDonasi.title="Detail-Donasi"

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

        axios.get(`http://localhost:4000/donasis/${key}`).then(
            res => {
                console.log(res.data);
                const result = res.data;
                setJudul(result.judul); setDeskripsi(result.deskripsi);
                setFoto(result.foto); setIds(result.iduser); setTerkumpul(result.terkumpul);
                setTarget(result.target);
            }
        )

        axios.get(`http://localhost:4000/users/${ids}`).then(
            res => {
                const result = res.data;
                console.log(result);
                setNama(result.nama)
            }
        )
    }

    useEffect(() => {
        getDataDonasi();
    },[])

    return (
        <div>
            <Navbar donasi />
            <div style={{ paddingBottom: 50 }}>
                <h2 style={{ fontWeight: 'bold', marginTop: 20, textAlign: 'center' }}><u>DONASI</u></h2>
                <div className='container'>
                    <img src={`http://localhost:4000/resources/uploads/${foto}`} className={styles.imgDetailDonasi} alt='musibah' />
                    <div>
                        <h2 style={{ fontWeight: 'bold', marginTop: 10 }}>{judul}</h2>
                        <h5>Penggalang Dana : {nama}</h5>
                        <div className='container'>
                            <p style={{ textAlign: 'justify' }}>
                                {deskripsi}
                            </p>

                            <div className='row' style={{ marginTop: 20 }}>
                                <div className='col'>
                                    <h5 >Dana Terkumpul : Rp. {terkumpul},-</h5>
                                    <div className={styles.btnDetailDonasi}>
                                        <Link href={"/donasi/pembayaran"}>
                                            <button className={'btn btn-outline-success ' + styles.btnDetailDonasi}>Donasi Sekarang</button>
                                        </Link>
                                    </div>
                                </div>
                                <div className='col'>
                                    <h5 style={{textAlign:'right'}}>Target : Rp. {target},-</h5>
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