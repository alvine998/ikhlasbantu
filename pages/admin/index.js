import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import NumberFormat from 'react-number-format';
import Navadmin from '../../components/NavAdmin';
import NavMain from '../../components/NavMain';
import styles from '../../styles/Home.module.css'

index.title = "Dashboard"

function index(props) {
    const getDataLogin = () => {
        var key = localStorage.getItem('loginKey')
        console.log(key)
        if (key == null) {
            router.push('/login')
        }
    }
    const [collection, setCollection] = useState([])
    const [collection2, setCollection2] = useState([])
    const [collection3, setCollection3] = useState([])
    const [total, setTotal] = useState('')

    const getDataUsers = () => {
        axios.get(`http://localhost:4000/users`).then(
            res => {
                const collection = res.data;
                console.log(collection);
                setCollection(collection)
            }
        )
    }

    const getDataDonasi = () => {
        axios.get(`http://localhost:4000/donasis`).then(
            res => {
                const collection2 = res.data;
                console.log(collection2);
                setCollection2(collection2)
            }
        )
    }

    const getDataDonasiAktif = () => {
        axios.get(`http://localhost:4000/donasis/valid`).then(
            res => {
                const collection3 = res.data;
                console.log(collection3);
                setCollection3(collection3);
                const result = collection3.reduce((a, v) => a = a + v.terkumpul, 0);
                console.log(result);
                setTotal(result);
            }
        )
    }

    const router = useRouter();

    useEffect(() => {
        getDataLogin();
        getDataUsers();
        getDataDonasi();
        getDataDonasiAktif();
    }, [])

    return (
        <div>
            <div className='row'>
                <div className='col-2'>
                    <Navadmin home />
                </div>
                <div className='col'>
                    <NavMain />
                    <div className={styles.mainAdmin}>

                        {/* Box Total */}
                        <div className='container'>
                            <div className='row'>
                                <div className='col'>
                                    <div className={styles.boxTotalDonasi} style={{ backgroundColor: "#B22222" }}>
                                        <h5 style={{ color: "white" }}>Total Donasi Aktif :</h5>
                                        <h3 style={{ color: "white" }}>{collection3.length}</h3>
                                    </div>
                                </div>
                                <div className='col'>
                                    <div className={styles.boxTotalDonasi} style={{ backgroundColor: "#5BB222" }}>
                                        <h5 style={{ color: "white" }}>Total Seluruh Donasi :</h5>
                                        <h3 style={{ color: "white" }}>{collection2.length}</h3>
                                    </div>
                                </div>
                                <div className='col'>
                                    <div className={styles.boxTotalDonasi} style={{ backgroundColor: "#229CB2" }}>
                                        <h5 style={{ color: "white" }}>Total User :</h5>
                                        <h3 style={{ color: "white" }}>{collection.length}</h3>
                                    </div>
                                </div>
                                <div className='col' style={{ paddingTop: 10 }}>
                                    <div className={styles.boxTotalDonasi} style={{ backgroundColor: "#6122B2" }}>
                                        <h5 style={{ color: "white" }}>Total Value Donasi :</h5>
                                        <h3 style={{ color: "white" }}><NumberFormat value={total} displayType='text' thousandSeparator prefix='Rp ' />,-</h3>
                                    </div>
                                </div>
                                <div className='col' style={{ paddingTop: 10 }}>
                                    <div className={styles.boxTotalDonasi} style={{ backgroundColor: "#22B277" }}>
                                        <h5 style={{ color: "white" }}>Total Transaksi Donasi :</h5>
                                        <h3 style={{ color: "white" }}><NumberFormat value={total} displayType='text' thousandSeparator prefix='Rp ' />,-</h3>
                                    </div>
                                </div>
                                <div className='col' style={{ paddingTop: 10 }}>
                                    <div className={styles.boxTotalDonasi} style={{ backgroundColor: "#CEDA1E" }}>
                                        <h5 style={{ color: "white" }}>Total Transaksi Withdraw :</h5>
                                        <h3 style={{ color: "white" }}><NumberFormat value={total} displayType='text' thousandSeparator prefix='Rp ' />,-</h3>
                                    </div>
                                </div>

                            </div>
                        </div>
                        {/* End Box Total */}

                        <div>

                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
}

export default index;