import Head from 'next/head';
import Link from 'next/link';
import React, { useState } from 'react';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import styles from '../../styles/Home.module.css'

index.title = "Buat Donasi"

function index(props) {
    const [judul, setJudul] = useState('');
    const [deskripsi, setDeskripsi] = useState('');
    const [targetDonasi, setTargetDonasi] = useState('');
    const [kategori, setKategori] = useState('');

    const [image, setImage] = useState(null);
    const [imageName, setImageName] = useState(null);

    // Handling State
    const handleJudul = (e) => {
        setJudul(e.target.value)
    }
    const handleDeskripsi = (e) => {
        setDeskripsi(e.target.value)
    }
    const handleTarget = (e) => {
        setTargetDonasi(e.target.value)
    }
    const handleKategori = (e) => {
        setKategori(e.target.value)
    }
    const handleFoto = (e) => {
        if (e.target.files && e.target.files[0]) {
            let img = e.target.files[0];
            setImage(img); setImageName(URL.createObjectURL(img))
        }
    }

    // Function

    // Views
    return (
        <div>
            <Navbar />
            <div style={{ paddingBottom: 50 }}>
                <div className='container'>
                    <h2 className={styles.textTitle}>Buat Donasi</h2>
                    <form className='container'>
                        <div>
                            <label className='form-label'>Judul Donasi</label>
                            <input maxLength={30} value={judul} onChange={handleJudul.bind(this)} className='form-control' placeholder='Ketik disini ...' type={"text"} required />
                        </div>

                        <div style={{ paddingTop: 10 }}>
                            <label className='form-label'>Deskripsi</label>
                            <textarea rows={4} value={deskripsi} onChange={handleDeskripsi.bind(this)} className='form-control' placeholder='Ketik disini ...' type={"text"} required />
                        </div>

                        <div style={{ paddingTop: 10 }}>
                            <label className='form-label'>Target Donasi</label>
                            <input className='form-control' value={targetDonasi} onChange={handleTarget.bind(this)} placeholder='Rp' type={"text"} required />
                        </div>

                        <div style={{ paddingTop: 10 }}>
                            <label className='form-label'>Kategori Donasi</label>
                            <select className='form-select' value={kategori} onChange={handleKategori.bind(this)} aria-label='Kategori' required>
                                <option selected>Pilih Disini</option>
                                <option value={"Kesehatan"}>Kesehatan</option>
                                <option value={"Bencana Alam"}>Bencana Alam</option>
                                <option value={"Sedekah"}>Sedekah</option>
                                <option value={"Lain-lain"}>Lain-lain</option>
                            </select>
                        </div>

                        <div style={{ paddingTop: 10 }}>
                            <label className='form-label'>Upload Foto</label>
                            <input className='form-control' onChange={handleFoto.bind(this)} type={"file"} required />
                            <div className={'container ' + (styles.centeringImg)} style={{ paddingTop: 10 }}>
                                <img src={imageName} className={styles.imgBuatDonasi} />
                            </div>
                        </div>

                        <div className='d-grid gap-2' style={{ paddingTop: 10 }}>
                            <button className='btn btn-outline-primary'>Buat Donasi</button>
                            <Link href={"/buat-donasi-dashboard"}>
                                <button className='btn btn-outline-danger'>Kembali</button>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default index;