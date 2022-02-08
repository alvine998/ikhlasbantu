import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import styles from '../../styles/Home.module.css'

index.title = "Donasimu"

function index(props) {
    

    useEffect(() => {
        
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
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    {/* <th scope="row">1</th>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                    <td>@mdo</td> */}
                                </tr>
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