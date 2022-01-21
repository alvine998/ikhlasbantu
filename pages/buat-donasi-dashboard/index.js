import Link from 'next/link';
import React from 'react';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import styles from '../../styles/Home.module.css'

index.title="Pengajuan Pembuatan Donasi"

function index(props) {
    return (
        <div>
            <Navbar />
            <div style={{ paddingBottom: 200 }}>
                <div className='container'>
                    <h2 className={styles.textTitle}>PENGAJUAN PEMBUATAN DONASI</h2>
                    <div style={{marginTop:20}}>
                        <div>
                            <Link href={"/buat-donasi"}>
                                <button className='btn btn-outline-primary'>+ Buat Donasi</button>
                            </Link>
                        </div>
                        <table class="table stripped">
                            <thead>
                                <tr>
                                    <th scope="col">No</th>
                                    <th scope="col">Judul</th>
                                    <th scope="col">Kategori</th>
                                    <th scope="col">Target</th>
                                    <th scope="col">Dana Terkumpul</th>
                                    <th scope="col">Foto</th>
                                    <th scope="col">Deskripsi</th>
                                    <th scope="col">Durasi</th>
                                    <th scope="col">Keterangan</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                    <td>@mdo</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                    <td>@mdo</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
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