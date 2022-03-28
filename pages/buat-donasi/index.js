import axios from 'axios';
import Head from 'next/head';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import swal from 'sweetalert';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import styles from '../../styles/Home.module.css'

index.title = "Buat Donasi"

function index(props) {
    const [judul, setJudul] = useState('');
    const [deskripsi, setDeskripsi] = useState('');
    const [targetDonasi, setTargetDonasi] = useState('');
    const [kategori, setKategori] = useState('');
    const [ids, setIds] = useState('');
    const [durasi, setDurasi] = useState(0);

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
    const handleDurasi = (e) => {
        if(e.target.value < 0){
            setDurasi(0)
            swal("Durasi tidak boleh kurang dari 0 hari", {icon:"warning"})
        } else if(e.target.value > 90){
            setDurasi(0);
            swal("Durasi tidak boleh lebih dari 90 hari", {icon:"warning"})
        } else {
            setDurasi(e.target.value)
        }
    }
    const handleFoto = (e) => {
        if (e.target.files && e.target.files[0]) {
            let img = e.target.files[0];
            setImage(img); setImageName(URL.createObjectURL(img))
        }
    }

    // Function

    const getDataId = () => {
        var id = localStorage.getItem('loginKey');
        axios.get(`https://ikhlasbantu.herokuapp.com/users/mail/${id}`).then(
            res => {
                console.log(res.data);
                const a = res.data;
                const ids = a._id;
                setIds(ids)
            }
        )
    }

    const saveDonasi = () => {
        console.log("di donasi : ", ids)
        const data = {
            iduser:ids,
            judul: judul,
            deskripsi: deskripsi,
            target : targetDonasi,
            kategori: kategori,
            terkumpul: '0',
            durasi: durasi,
            foto : 'donasiimages_' + image.name,
            status_donasi : 'Sedang Diproses'
        }

        console.log(data)
        axios.post(`https://ikhlasbantu.herokuapp.com/donasis`, data).then(
            res => {
                console.log(res.data)
                setImageName(null); setDeskripsi(''); setJudul('');
                setKategori(''); setTargetDonasi(''); setDurasi(0)
                swal("Donasi Berhasil Diajukan", {icon:"success"})
            }
        )
    }

    const saveFoto = () => {
        let formdata = new FormData()
        formdata.append("donasiimages", image)

        axios.post(`https://ikhlasbantu.herokuapp.com/upload/donasi`, formdata).then(
                res => {
                    const respon = res.data;
                }
            )
    }

    useEffect(() => {
        getDataId();
    },[])

    // Views
    return (
        <div>
            <Navbar />
            <div style={{ paddingBottom: 50 }}>
                <div className='container'>
                    <h2 className={styles.textTitle}>Buat Donasi</h2>
                    <div className='container'>
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
                            <label className='form-label'>Durasi Donasi</label>
                            <input className='form-control' value={durasi} onChange={handleDurasi.bind(this)}  type={"number"} required />
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
                            <button className='btn btn-outline-primary' onClick={()=>{saveDonasi(), saveFoto()}}>Buat Donasi</button>
                            <Link href={"/buat-donasi-dashboard"}>
                                <button className='btn btn-outline-danger'>Kembali</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default index;