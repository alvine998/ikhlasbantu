import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import swal from 'sweetalert';
import Navadmin from '../../components/NavAdmin';
import NavMain from '../../components/NavMain';
import styles from '../../styles/Home.module.css'

TambahDonasi.title = "Tambah Donasi"

function TambahDonasi(props) {
    const getDataLogin = () => {
        var key = localStorage.getItem('loginKey')
        console.log(key)
        if (key == null) {
            router.push('/login')
        }
    }

    const router = useRouter();
    const [judul, setJudul] = useState('')
    const [deskripsi, setDeskripsi] = useState('');
    const [targetDonasi, setTargetDonasi] = useState(0);
    const [durasi, setDurasi] = useState(0);
    const [kategori, setKategori] = useState('');
    const [ids, setIds] = useState('');
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

    const tambah_donasi = () => {
        // const nameImage = image.name;
        // const newImage = nameImage.replace(/ /g, "_")
        const data = {
            iduser:'admin',
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
        axios.post('http://ikhlasbantu.herokuapp.com/donasis', data).then(
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
        getDataLogin();
    }, [])

    return (
        <div style={{ overflow: 'hidden' }}>
            <div className='row'>
                <div className='col-2'>
                    <Navadmin TamDonasi />
                </div>
                <div className='col'>
                    <NavMain />
                    <div className={styles.mainAdmin} style={{ overflow: 'scroll', width: '100%', height: 570, overflowX: 'hidden' }}>
                        <div className='container'>
                            <h2 style={{ fontWeight: 'bold', textAlign: 'center' }}>Tambah Donasi</h2>

                            <div style={{ paddingTop: 20 }}>
                                <div style={{ padding: 20 }}>
                                    <div>
                                        <h5 className='form-label'>Foto</h5>
                                        <input onChange={handleFoto} className='form-control' type={"file"} />
                                        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", marginTop: 20 }}>
                                            <img src={imageName} style={{ width: 300, height: 200 }} />
                                        </div>
                                    </div>
                                    <div style={{ paddingTop: 20 }}>
                                        <h5 className='form-label'>Judul Donasi</h5>
                                        <input className='form-control' value={judul} onChange={handleJudul} type={"text"} maxLength={99} placeholder="Ketik disini" />
                                    </div>
                                    <div style={{ paddingTop: 20 }}>
                                        <h5 className='form-label'>Deskripsi Donasi</h5>
                                        <textarea className='form-control' value={deskripsi} onChange={handleDeskripsi} type={"text"} maxLength={255} rows={3} placeholder="Ketik disini" />
                                    </div>
                                    <div style={{ paddingTop: 20 }}>
                                        <label className='form-label'>Kategori Donasi</label>
                                        <select className='form-select' value={kategori} onChange={handleKategori} aria-label='Kategori' required>
                                            <option selected>Pilih Disini</option>
                                            <option value={"Kesehatan"}>Kesehatan</option>
                                            <option value={"Bencana Alam"}>Bencana Alam</option>
                                            <option value={"Sedekah"}>Sedekah</option>
                                            <option value={"Lain-lain"}>Lain-lain</option>
                                        </select>
                                    </div>
                                    <div style={{ paddingTop: 20 }}>
                                        <h5 className='form-label'>Target Donasi</h5>
                                        <input className='form-control' value={targetDonasi} onChange={handleTarget} type={"number"} maxLength={99} placeholder="Ketik disini" />
                                    </div>
                                    <div style={{ paddingTop: 20 }}>
                                        <h5 className='form-label'>Durasi Donasi</h5>
                                        <input className='form-control' value={durasi} onChange={handleDurasi} type={"number"} maxLength={3} placeholder="Ketik disini" />
                                    </div>
                                    <div style={{ paddingTop: 20, float: "right", paddingBottom: 20 }}>
                                        <Link href={"/admin/semua-donasi"}>
                                            <button className='btn btn-outline-primary' onClick={()=>{tambah_donasi(), saveFoto()}}>Tambah Donasi</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TambahDonasi;