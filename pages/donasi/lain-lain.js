import axios from 'axios';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import NumberFormat from 'react-number-format';
import Navbar from '../../components/Navbar';
import styles from '../../styles/Home.module.css'

Lainlain.title = "Donasi Lain-lain"

function Lainlain(props) {
    const [collection4, setCollection4] = useState([]);

    const getDataLain = () => {
        axios.get(`http://localhost:4000/donasis/valid/lain-lain`).then(
            res => {
                const collection4 = res.data;
                setCollection4(collection4);
                console.log(collection4);
            }
        )
    }

    const SendIdDonasi = (id) => {
        localStorage.setItem('donasiKey', id);
    }

    useEffect(()=>{
        getDataLain();
    },[])
    return (
        <div>
            <Navbar />
            <div>
                <h2 style={{ fontWeight: "bold", textAlign: "center", paddingTop: 10 }}><u>DONASI LAIN-LAIN</u></h2>
                <div className='container'>
                    <div>
                        <div>
                            <div>
                                <div className='container'>
                                    <div className='row'>
                                        {
                                            collection4.reverse().map((res, i) => i < 3 ? (
                                                <div key={i} className='col-md-4'>
                                                    <div className={styles.boxDonasi}>
                                                        <img src={`http://localhost:4000/resources/uploads/${res.foto}`} className={styles.imgPosition} />
                                                        <h5>{res.judul}</h5>
                                                        <div>
                                                            <p>Dana Terkumpul : </p>
                                                            <p><NumberFormat value={res.terkumpul} displayType='text' thousandSeparator prefix='Rp ' />,-</p>
                                                        </div>
                                                        <div className={styles.btnWidth}>
                                                            <Link href={`/donasi/detail-donasi?id=${res._id}`}>
                                                                <button onClick={() => SendIdDonasi(res._id)} className={'btn btn-outline-success ' + styles.btnWidth}>Donasi</button>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            ) : null)
                                        }
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

export default Lainlain;