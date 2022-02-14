import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import styles from '../../styles/Home.module.css'

index.title = "Donasimu"

function index(props) {

    const [collect, setCollect] = useState([]);

    const getData = () => {
        var log = localStorage.getItem('loginKey')
        axios.get(`http://localhost:4000/transaksi/user/${log}`).then(
            res => {
                const collect = res.data;
                setCollect(collect);
            }
        )
    }


    useEffect(() => {
        getData();
    }, [])

    return (
        <div>
            <Navbar />
            <div style={{ paddingBottom: 200 }}>
                <div className='container'>
                    <h2 className={styles.textTitle}>DONASIMU</h2>
                    <div className='table-responsive'>
                        <table class="table stripped">
                            <thead>
                                <tr>
                                    <th scope="col">No</th>
                                    <th scope="col">Donasi</th>
                                    <th scope="col">Tanggal Donasi</th>
                                    <th scope="col">Jumlah Donasi</th>
                                    <th scope="col">Keterangan</th>
                                    <th scope="col">Rewards</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    collect.map((res, i) => (
                                        <tr key={i}>
                                            <th scope="row">{i+1}</th>
                                            <td>{res.iddonasi.substr(0,8)}</td>
                                            <td>{res.createdAt.substr(0,10)}</td>
                                            <td>{res.nominal}</td>
                                            <td>{res.status_transaksi}</td>
                                            <td>+ {res.poin} Poin</td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default index;