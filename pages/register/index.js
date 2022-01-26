import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import swal from 'sweetalert';
import { view1 } from '../../assets';
import styles from '../../styles/Home.module.css'

index.title = 'Daftar - Ikhlas bantu';

function index(props) {

    const [nama, setNama] = useState('');
    const [nohp, setNohp] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [sukses, setSukses] = useState('');

    const handlingNama = (e) => {
        setNama(e.target.value)
    }

    const handlingNohp = (e) => {
        setNohp(e.target.value)
    }

    const handlingEmail = (e) => {
        setEmail(e.target.value)
    }

    const handlingPass = (e) => {
        setPassword(e.target.value)
    }

    const router = useRouter();

    const handleSukses = () => {
        setSukses("berhasil")
    }

    useEffect(() => {
        handleSukses();
    },[])

    const saveData = () => {
        const data = {
            nama: nama,
            nohp: nohp,
            email: email,
            password: password
        }

        console.log(data)
        axios.post(`http://localhost:4000/users`, data).then(
            res => {
                console.log(res.data);
                swal("Berhasil mendaftar", { icon: "success" });
                handleSukses();
            }
        )
    }

    return (
        <div>
            <div style={{ overflow: 'hidden' }}>
                <div className='row'>
                    <div className='col-md'>
                        <Image src={view1} alt='mountain' width={700} height={650} layout='responsive' />
                    </div>
                    <div className='col-md'>
                        <div className={styles.padtop2}>
                            <h3 className={styles.centeringText}>Ikhlas Bantu</h3>
                            <div className={styles.roundedTube}>
                                <h5 style={{ textAlign: 'center' }}>Daftar</h5>
                            </div>

                            <div style={{ marginTop: 20 }}>
                                <form>
                                    <div className={styles.inputWidth}>
                                        <label>Nama Lengkap</label>
                                        <input value={nama} onChange={handlingNama.bind(this)} className='form-control' placeholder='name' type={"text"} required />
                                    </div>
                                    <div className={styles.inputWidth} style={{ marginTop: 10 }}>
                                        <label>No Handphone</label>
                                        <input value={nohp} maxLength={12} onChange={handlingNohp.bind(this)} className='form-control' placeholder='+62' type={"text"} required />
                                    </div>
                                    <div className={styles.inputWidth} style={{ marginTop: 10 }}>
                                        <label>Email</label>
                                        <input value={email} onChange={handlingEmail.bind(this)} className='form-control' placeholder='email@domain.com' type={"email"} required />
                                    </div>
                                    <div className={styles.inputWidth} style={{ marginTop: 10 }}>
                                        <label>Password</label>
                                        <input value={password} onChange={handlingPass.bind(this)} className='form-control' placeholder='********' type={"password"} required />
                                    </div>
                                    <div className={styles.centerBtn} style={{ marginTop: 20 }}>
                                        <Link href={ sukses === "berhasil" ? "/login" : "/register?pendaftaran=gagal"}>
                                            <button className={'btn btn-outline-primary ' + styles.widthBtn} onClick={()=>saveData()}>Daftar</button>
                                        </Link>
                                    </div>
                                    <div className={styles.centerBtn} style={{ marginTop: 10 }}>
                                        <Link href={"/login"} >
                                            <button className={'btn btn-outline-danger ' + styles.widthBtn}>Kembali</button>
                                        </Link>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default index;