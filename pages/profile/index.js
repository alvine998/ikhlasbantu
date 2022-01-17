import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import styles from '../../styles/Home.module.css'
import Image from 'next/image';
import { default_profile } from '../../assets';
import axios from 'axios';
import swal from 'sweetalert';

index.title = "Your Profile"

function index(props) {
    const [keys, setKeys] = useState('');
    const [nama, setNama] = useState('');
    const [nohp, setNohp] = useState('');
    const [email, setEmail] = useState('');
    const [foto, setFoto] = useState('');
    const [id, setId] = useState('');

    const getDataUsers = () => {
        var keys = localStorage.getItem('loginKey');
        console.log(keys)
        setKeys(keys)

        axios.get(`http://localhost:4000/users/mail/${keys}`).then(
            res => {
                const result = res.data;
                setEmail(result.email); setNama(result.nama); setNohp(result.nohp); setFoto(result.foto);
                setId(result._id);
                console.log(result)
            }
        )
    }

    const handleNama = (e) => {
        setNama(e.target.value)
    }
    const handleNohp = (e) => {
        setNohp(e.target.value)
    }
    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    const updateProfile = () => {
        const dataUpdate = {
            nama: nama,
            nohp: nohp,
            email: email
        }

        axios.put(`http://localhost:4000/users/${id}`, dataUpdate).then(
            res => {
                swal("Data berhasil diubah",{icon:"success"});
                console.log(res.data);
                getDataUsers();
            }
        )
    }

    useEffect(() => {
        getDataUsers();
    }, [])

    return (
        <div>
            <Navbar />
            <div style={{ paddingBottom: 50 }}>
                <div className='container'>
                    <div className={styles.boxImgProfile}>
                        <div style={{ width: 180, height: 180, borderRadius: 100, paddingLeft:15 }}>
                            {
                                foto === "" ? (
                                    <Image src={default_profile} />
                                ) : (
                                    <img src={`http://localhost:4000/resources/upload/${foto}`} />
                                )
                            }
                        </div>
                    </div>
                    <div className={styles.btnCenter}>
                        <button className={'btn btn-outline-primary'}>Ganti Foto Profil</button>
                    </div>
                    <hr />
                    <div className={styles.btnCenter}>
                        <div className='row'>
                            <div className='col-md'>
                                <div className={styles.boxProfile}>
                                    <div>
                                        <div>
                                            <label className='form-label'>Nama</label>
                                            <input type={"text"} value={nama} onChange={handleNama.bind(this)} className='form-control' />
                                        </div>
                                        <div className={styles.inputProfile}>
                                            <label className='form-label'>No Telepon</label>
                                            <input type={"text"} maxLength={12} value={nohp} onChange={handleNohp.bind(this)} className='form-control' />
                                        </div>
                                        <div className={styles.inputProfile}>
                                            <label className='form-label'>Email</label>
                                            <input type={"email"} value={email} onChange={handleEmail.bind(this)} className='form-control' />
                                        </div>
                                        <div>
                                            <button type='submit' className={'btn btn-outline-primary ' + styles.inputProfileBtn} onClick={()=>updateProfile()}>Ganti</button>
                                        </div>
                                    </div>
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