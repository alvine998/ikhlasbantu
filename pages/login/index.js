import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useRef, useState } from 'react';
import swal from 'sweetalert';
import { view1 } from '../../assets';
import styles from '../../styles/Home.module.css'

index.title = 'Login - Ikhlas bantu';

function index(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [flag, setFlag] = useState(false);
    const [keys, setKeys] = useState(null);

    const router = useRouter();

    const checkDataLogin = () => {
        var keys = localStorage.getItem('loginKey')
        setKeys(keys)
        console.log(keys)
    }

    const dataLogin = (id) => {
        localStorage.setItem("loginKey", id)
    }

    const usersLogin = (emails) => {
        const data = {
            email: email,
            password: password
        }

        axios.post(`http://localhost:4000/users/login`, data).then(
            res => {
                swal("Berhasil Login", { icon: "success" })
                dataLogin(emails)
                router.push('/profile')
            }
        )
            .catch(err => {
                if (email == 'admin@ikhlasbantu.com' && password == '12345678') {
                    alert("Selamat datang admin Ikhlas Bantu")
                    dataLogin(emails)
                    router.push('/admin')
                } else {
                    console.log(err)
                    alert("Password atau email salah!")
                }

            })
    }

    const mounted = useRef()
    useEffect(() => {
        if (!mounted.current) {
            mounted.current = true
        } else {
            console.log("Testing")
        }

        checkDataLogin();
    }, [])

    const handlingEmail = (e) => {
        setEmail(e.target.value)
    }

    const handlingPass = (e) => {
        setPassword(e.target.value)
    }

    return (
        <div>
            <div style={{ overflow: 'hidden' }}>
                <div className='row'>
                    <div className='col-md'>
                        <Image src={view1} alt='mountain' width={700} height={650} className='h-100' layout='responsive' />
                    </div>
                    <div className='col-md'>
                        <div className={styles.padtop}>
                            <h3 className={styles.centeringText}>Ikhlas Bantu</h3>
                            <div className={styles.roundedTube}>
                                <h5 style={{ textAlign: 'center' }}>Login</h5>
                            </div>

                            <div style={{ marginTop: 20 }}>
                                <form>
                                    <div className={styles.inputWidth}>
                                        <label>Email</label>
                                        <input className='form-control' onChange={handlingEmail.bind(this)} value={email} placeholder='email@domain.com' type={"email"} required />
                                    </div>
                                    <div className={styles.inputWidth} style={{ marginTop: 10 }}>
                                        <label>Password</label>
                                        <input className='form-control' onChange={handlingPass.bind(this)} value={password} placeholder='********' type={"password"} required />
                                    </div>
                                    <div className={styles.centerBtn} style={{ marginTop: 20 }}>
                                        <Link href={flag == true ? "/profile" : "/login?email=wrong or password=wrong"}>
                                            <button onClick={() => { usersLogin(email) }} className={'btn btn-outline-success ' + styles.widthBtn}>Masuk</button>
                                        </Link>
                                    </div>
                                    <div className={styles.centerBtn} style={{ marginTop: 10 }}>
                                        <Link href={"/register"}>
                                            <button className={'btn btn-outline-primary ' + styles.widthBtn}>Daftar</button>
                                        </Link>
                                    </div>
                                    <div className={styles.centerBtn} style={{ marginTop: 20 }}>
                                        <Link href={"/"}>
                                            <a>Kembali ke menu utama</a>
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