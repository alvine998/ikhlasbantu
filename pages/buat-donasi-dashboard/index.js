import axios from 'axios';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import swal from 'sweetalert';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import styles from '../../styles/Home.module.css'

index.title = "Pengajuan Pembuatan Donasi"

const dataKosong = () => {
    return (
        <div className='container'>
            <h5>Kamu Belum Buat Pengajuan Donasi</h5>
        </div>
    )
}


function index(props) {
    // State
    const [collection, setCollection] = useState([]);

    // function
    const getDataDonasi = () => {
        axios.get(`http://localhost:4000/donasis`).then(
            res => {
                const collection = res.data;
                console.log(collection);
                setCollection(collection.reverse());
            }
        )
    }

    const deleteDonasi = (id) => {
        axios.delete(`http://localhost:4000/donasis/${id}`).then(
            res => {
                swal("Berhasil Hapus Data", {icon:"success"})
                getDataDonasi();
            }
        )
    }

    useEffect(() => {
        getDataDonasi();
    }, [])

    return (
        <div>
            <Navbar />
            <div style={{ paddingBottom: 200 }}>
                <div className='container'>
                    <h2 className={styles.textTitle}>PENGAJUAN PEMBUATAN DONASI</h2>
                    <div style={{ marginTop: 20 }}>
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
                                    {
                                        collection.map((res, i) => (
                                            <tr key={i}>
                                                <th scope="row">{i+1}</th>
                                                <td>{res.judul}</td>
                                                <td>{res.kategori}</td>
                                                <td>{res.target}</td>
                                                <td>{res.terkumpul}</td>
                                                <td><img src={`http://localhost:4000/resources/uploads/${res.foto}`} className='w-100 h-100' /></td>
                                                <td>{res.deskripsi.substr(0,10)}</td>
                                                <td>{res.durasi}</td>
                                                <td>{res.status_donasi}</td>
                                                <td><button className='btn btn-outline-danger' onClick={()=>deleteDonasi(res._id)}>Hapus</button></td>
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