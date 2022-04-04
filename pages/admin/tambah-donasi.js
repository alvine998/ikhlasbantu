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
    const [collection, setCollection] = useState([])
    const [ftktp, setFtktp] = useState('');
    const [ftrek, setFtrek] = useState('');
    const [idd, setIdd] = useState('');
    const [image, setImage] = useState(null);
    const [imageName, setImageName] = useState(null);


    const handleFoto = (e) => {
        if (e.target.files && e.target.files[0]) {
            let img = e.target.files[0];
            setImage(img); setImageName(URL.createObjectURL(img))
        }
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
                    <div className={styles.mainAdmin} style={{ overflow: 'scroll', width: '100%', height: '100%', overflowX: 'hidden' }}>
                        <div className='container'>
                            <h2 style={{ fontWeight: 'bold', textAlign: 'center' }}>Tambah Donasi</h2>

                            <div style={{ paddingTop: 20 }}>
                                <div style={{ padding: 20 }}>
                                    <div>
                                        <h5 className='form-label'>Foto</h5>
                                        <input onChange={handleFoto} className='form-control' type={"file"}/>
                                        <div style={{display:"flex", alignItems:"center", justifyContent:"center", marginTop:20}}>
                                            <img src={imageName} style={{width:300, height:200}} />
                                        </div>
                                    </div>
                                    <div style={{paddingTop:20}}>
                                        <h5 className='form-label'>Judul Donasi</h5>
                                        <input className='form-control' type={"text"} maxLength={99} placeholder="Ketik disini" />
                                    </div>
                                    <div style={{paddingTop:20}}>
                                        <h5 className='form-label'>Deskripsi Donasi</h5>
                                        <textarea className='form-control' type={"text"} maxLength={255} rows={3} placeholder="Ketik disini"/>
                                    </div>
                                    <div style={{paddingTop:20}}>
                                        <h5 className='form-label'>Target Donasi</h5>
                                        <input className='form-control' type={"number"} maxLength={99} placeholder="Ketik disini" />
                                    </div>
                                    <div style={{paddingTop:20}}>
                                        <h5 className='form-label'>Durasi Donasi</h5>
                                        <input className='form-control' type={"number"} maxLength={3} placeholder="Ketik disini" />
                                    </div>
                                    <div style={{paddingTop:20, float:"right", paddingBottom:20}}>
                                        <Link href={"#"}>
                                            <button className='btn btn-outline-primary'>Tambah Donasi</button>
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