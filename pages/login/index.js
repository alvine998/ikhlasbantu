import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { view1 } from '../../assets';
import styles from '../../styles/Home.module.css'

function index(props) {
    return (
        <div>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col'>
                        <Image src={view1} alt='mountain' width={984} height={610} layout='responsive' />
                    </div>
                    <div className='col-3'>
                        <div className={styles.padtop}>
                            <h3 className={styles.centeringText}>Ikhlas Bantu</h3>
                            <div className={styles.roundedTube}>
                                <h5 style={{ textAlign: 'center' }}>Login</h5>
                            </div>

                            <div style={{ marginTop: 20 }}>
                                <form>
                                    <div className={styles.inputWidth}>
                                        <label>Email</label>
                                        <input className='form-control' placeholder='email@domain.com' type={"email"} required />
                                    </div>
                                    <div className={styles.inputWidth} style={{ marginTop: 10 }}>
                                        <label>Password</label>
                                        <input className='form-control' placeholder='********' type={"password"} required />
                                    </div>
                                    <div className={styles.centerBtn} style={{ marginTop: 20 }}>
                                        <button className={'btn btn-outline-success ' + styles.widthBtn}>Masuk</button>
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