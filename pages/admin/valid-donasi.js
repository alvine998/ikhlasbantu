import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import NumberFormat from 'react-number-format';
import swal from 'sweetalert';
import Navadmin from '../../components/NavAdmin';
import NavMain from '../../components/NavMain';
import styles from '../../styles/Home.module.css'

ValidDonasi.title = "Donasi Valid"

function ValidDonasi(props) {
    const getDataLogin = () => {
        var key = localStorage.getItem('loginKey')
        console.log(key)
        if (key == null) {
            router.push('/login')
        }
    }

    const router = useRouter();
    const [collection, setCollection] = useState([])
    const [ftktp, setFtktp] = useState('');
    const [ftrek, setFtrek] = useState('');
    const [idd, setIdd] = useState('');

    const getDataDonasis = () => {
        axios.get(`https://ikhlasbantu.herokuapp.com/donasis/valid`).then(
            res => {
                const collection = res.data;
                console.log(collection);
                setCollection(collection)
            }
        )
    }

    const getDetailDataUsers = (id) => {
        axios.get(`https://ikhlasbantu.herokuapp.com/donasis/${id}`).then(
            res => {
                console.log(res.data);
                const datas = res.data;
                setFtktp(datas.fotoktp); setFtrek(datas.fotorekening);
                setIdd(datas._id);
            }
        )
    }

    const updateData = (id) => {
        const data = {
            status_donasi:"Valid",
        }
        axios.put(`https://ikhlasbantu.herokuapp.com/donasis/${id}`, data).then(
            res => {
                console.log(res.data);
                getDataDonasis();
            }
        )
    }

    const updateDataTolak = (id) => {
        const data = {
            status_donasi:"Ditolak",
        }
        axios.put(`https://ikhlasbantu.herokuapp.com/donasis/${id}`, data).then(
            res => {
                console.log(res.data);
                getDataDonasis();
            }
        )
    }

    const verificationValid = (id) => {
        swal({
            title: "Validasi Donasi",
            text: "Klik Validasi untuk memvalidasi donasi ini untuk ditampilkan pada aplikasi ikhlasbantu",
            buttons: "Validasi",
        })
            .then((willDelete) => {
                if (willDelete) {
                    updateData(id)
                    swal("Berhasil memvalidasi donasi ini !", {
                        icon: "success",
                        buttons: "Ok"
                    });
                } else {
                    null;
                }
            })
    }

    const verificationSuspend = (id) => {
        swal({
            title: "Suspend Donasi",
            text: "Klik Suspend untuk memblokir donasi ini",
            icon: "warning",
            buttons: [true, {text:"Suspend"}],
            dangerMode: true
        })
            .then((willDelete) => {
                if (willDelete) {
                    updateDataTolak(id)
                    swal("Berhasil Suspend!", {
                        icon: "success",
                        buttons:"Ok"
                    });
                } else {
                    null;
                }
            })
    }

    useEffect(() => {
        getDataLogin();
        getDataDonasis();
    }, [])

    return (
        <div style={{ overflow: 'hidden' }}>
            <div className='row'>
                <div className='col-2'>
                    <Navadmin VDonasi />
                </div>
                <div className='col'>
                    <NavMain />
                    <div className={styles.mainAdmin} style={{ overflow: 'scroll', width: '100%', height: 570, overflowX: 'hidden' }}>
                        <div className='container'>
                            <h2 style={{ fontWeight: 'bold', textAlign: 'center' }}>Donasi Valid</h2>
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

                            <div style={{ paddingTop: 20 }}>
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">No</th>
                                            <th scope="col">Id</th>
                                            <th scope="col">Judul</th>
                                            <th scope="col">Deskripsi</th>
                                            <th scope="col">Target</th>
                                            <th scope="col">Terkumpul</th>
                                            <th scope="col">Durasi</th>
                                            <th scope="col">Foto</th>
                                            <th scope="col">Kategori</th>
                                            {/* <th scope="col">Status Donasi</th>
                                            <th scope="col">Action</th> */}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            collection.reverse().map((res, i) => (
                                                <tr>
                                                    <th scope="row">{i + 1}</th>
                                                    <td>{res._id.substr(0, 10)}</td>
                                                    <td>{res.judul}</td>
                                                    <td>{res.deskripsi}</td>
                                                    <td><NumberFormat value={res.target} displayType='text' thousandSeparator prefix='Rp ' />,-</td>
                                                    <td><NumberFormat value={res.terkumpul} displayType='text' thousandSeparator prefix='Rp ' />,-</td>
                                                    <td>{res.durasi}</td>
                                                    <td><img style={{ width: 200, height: 100 }} src={`https://ikhlasbantu.herokuapp.com/resources/uploads/${res.foto}`} /></td>
                                                    <td>{res.kategori}</td>
                                                    {/* <td>{res.status_donasi}</td>
                                                    <td>
                                                        <div className='d-grid gap-2'>
                                                            <button onClick={() => verificationValid(res._id)}  className='btn btn-outline-warning'>Verifikasi</button>
                                                            <button onClick={() => verificationSuspend(res._id)} className='btn btn-outline-danger'>Suspend</button>
                                                        </div>
                                                    </td> */}
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

export default ValidDonasi;