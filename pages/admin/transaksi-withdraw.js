import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import NumberFormat from 'react-number-format';
import swal from 'sweetalert';
import Navadmin from '../../components/NavAdmin';
import NavMain from '../../components/NavMain';
import styles from '../../styles/Home.module.css'

TransaksiWithdraw.title = "Transaksi Withdraw"

function TransaksiWithdraw(props) {
    const getDataLogin = () => {
        var key = localStorage.getItem('loginKey')
        console.log(key)
        if (key == null) {
            router.push('/login')
        } else if (key !== 'admin') {
            router.push('/login')
        }
    }

    const router = useRouter();
    const [collection, setCollection] = useState([])

    const getDataTransaksi = () => {
        axios.get(`http://localhost:4000/transaksi/withdraw`).then(
            res => {
                const collection = res.data;
                console.log(collection);
                setCollection(collection)
            }
        )
    }

    const updateData = (id) => {
        const data = {
            status_transaksi: 'verified',
        }
        axios.put(`http://localhost:4000/transaksi/${id}`, data).then(
            res => {
                swal("Berhasil Verifikasi", { icon: "success" });
                console.log(res.data);
                getDataTransaksi();
            }
        )
    }

    const updateDataTolak = (id) => {
        const data = {
            status_transaksi: 'not verified',
        }
        axios.put(`http://localhost:4000/transaksi/${id}`, data).then(
            res => {
                swal("Penolakan Berhasil", { icon: "success" });
                console.log(res.data);
                getDataTransaksi();
            }
        )
    }

    useEffect(() => {
        getDataLogin();
        getDataTransaksi();
    }, [])

    return (
        <div style={{ overflow: 'hidden' }}>
            <div className='row'>
                <div className='col-2'>
                    <Navadmin TWithdraw />
                </div>
                <div className='col'>
                    <NavMain />
                    <div className={styles.mainAdmin} style={{ overflow: 'scroll', width: '100%', height: 570, overflowX: 'hidden' }}>
                        <div className='container'>
                            <h2 style={{ fontWeight: 'bold', textAlign: 'center' }}>Transaksi Withdraw</h2>
                            <div className={styles.toRight}>
                                <div className='row'>
                                    <div className='col'>
                                        <input type={"text"} style={{ width: 200, marginLeft: 20 }} className='form-control me-2' placeholder='Cari disini' />
                                    </div>
                                    <div className='col'>
                                        <button className='btn btn-outline-primary' style={{ width: 70 }}>Cari</button>
                                    </div>
                                </div>
                            </div>

                            <div className='table-responsive' style={{ paddingTop: 20 }}>
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">No</th>
                                            <th scope="col">Tanggal Penarikan</th>
                                            <th scope="col">Id Donasi</th>
                                            <th scope="col">Email</th>
                                            <th scope="col">Bank Penarikan</th>
                                            <th scope="col">No Rekening</th>
                                            <th scope="col">Nama Pemilik Rekening</th>
                                            <th scope="col">Nominal</th>
                                            <th scope="col">Status Transaksi</th>
                                            <th scope="col">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            collection.reverse().map((res, i) => (
                                                <tr>
                                                    <th scope="row">{i + 1}</th>
                                                    <td>{res.createdAt.substr(0, 10)}</td>
                                                    <td>{res._id.substr(0, 10)}</td>
                                                    <td>{res.iduser}</td>
                                                    <td>Transfer Bank {res.bank}</td>
                                                    <td><NumberFormat value={res.nominal} displayType='text' thousandSeparator prefix='Rp ' />,-</td>
                                                    <td>{res.status_transaksi}</td>
                                                    <td>
                                                        {/* Modal */}
                                                        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                            <div class="modal-dialog">
                                                                <div class="modal-content">
                                                                    <div class="modal-header">
                                                                        <h5 class="modal-title" id="exampleModalLabel">Verifikasi Transaksi</h5>
                                                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                                    </div>
                                                                    <div class="modal-body">
                                                                        <div style={{ paddingTop: 20 }}>
                                                                            <h5>Bukti Transaksi Donasi :</h5>
                                                                            {
                                                                                res.foto == null ? (
                                                                                    <p>Tidak ada bukti transaksi</p>
                                                                                ) : (
                                                                                    <img src={`http://localhost:4000/resources/uploads/${res.foto}`} className='w-100 h-100' />
                                                                                )
                                                                            }
                                                                        </div>
                                                                    </div>
                                                                    <div class="modal-footer">
                                                                        {/* <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Tutup</button> */}
                                                                        <button type="button" class="btn btn-danger" data-bs-dismiss="modal" onClick={() => updateDataTolak(res._id)}>Tolak</button>
                                                                        <button type="button" class="btn btn-primary" data-bs-dismiss="modal" onClick={() => updateData(res._id)}>Verifikasi</button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className='d-grid gap-2'>
                                                            <button data-bs-toggle="modal" data-bs-target="#exampleModal" className='btn btn-outline-warning'>Verifikasi</button>
                                                            {/* <button className='btn btn-outline-danger'>Tolak</button> */}
                                                        </div>
                                                    </td>
                                                </tr>
                                            ))
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TransaksiWithdraw;