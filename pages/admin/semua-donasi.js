import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import swal from 'sweetalert';
import Navadmin from '../../components/NavAdmin';
import NavMain from '../../components/NavMain';
import styles from '../../styles/Home.module.css'

SemuaDonasi.title = "User Profile"

function SemuaDonasi(props) {
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

    const getDataUsers = () => {
        axios.get(`https://ikhlasbantu.herokuapp.com/donasis`).then(
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
            statususer: 'verified',
            statusktp: 'verified',
            statusrekening: 'verified',
        }
        axios.put(`https://ikhlasbantu.herokuapp.com/donasis/${id}`, data).then(
            res => {
                swal("Berhasil Verifikasi", { icon: "success" });
                console.log(res.data);
                getDataUsers();
            }
        )
    }

    const updateDataTolak = (id) => {
        const data = {
            statususer: 'not verified',
            statusktp: 'not verified',
            statusrekening: 'not verified',
        }
        axios.put(`https://ikhlasbantu.herokuapp.com/donasis/${id}`, data).then(
            res => {
                swal("Penolakan Berhasil", { icon: "success" });
                console.log(res.data);
                getDataUsers();
            }
        )
    }

    const modalEvent = () => {
        return (
            <div>
                {/* Modal */}
                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Verifikasi Identitas</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <div style={{ paddingTop: 20 }}>
                                    <h5>E-KTP :</h5>
                                    <img src={`https://ikhlasbantu.herokuapp.com/resources/uploads/${ftktp}`} className='w-100 h-100' />
                                </div>
                                <div style={{ paddingTop: 20 }}>
                                    <h5>Rekening Bank :</h5>
                                    <img src={`https://ikhlasbantu.herokuapp.com/resources/uploads/${ftrek}`} className='w-100 h-100' />
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" onClick={()=>console.log(idd)}>Tutup</button>
                                <button type="button" class="btn btn-danger" data-bs-dismiss="modal" onClick={() => updateDataTolak(idd)}>Tolak</button>
                                <button type="button" class="btn btn-primary" data-bs-dismiss="modal" onClick={() => updateData(idd)}>Verifikasi</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    useEffect(() => {
        getDataLogin();
        getDataUsers();
    }, [])

    return (
        <div style={{ overflow: 'hidden' }}>
            <div className='row'>
                <div className='col-2'>
                    <Navadmin SDonasi />
                </div>
                <div className='col'>
                    <NavMain />
                    <div className={styles.mainAdmin} style={{ overflow: 'scroll', width: '100%', height: 570, overflowX: 'hidden' }}>
                        <div className='container'>
                            <h2 style={{ fontWeight: 'bold', textAlign: 'center' }}>Semua Donasi</h2>
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
                                            <th scope="col">Durasi</th>
                                            <th scope="col">Foto</th>
                                            <th scope="col">Status Donasi</th>
                                            <th scope="col">Action</th>
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
                                                    <td>{res.target}</td>
                                                    <td>{res.durasi}</td>
                                                    <td><img style={{width:200, height:100}} src={res.foto} /></td>
                                                    <td>{res.status_donasi}</td>
                                                    <td>
                                                        {
                                                            modalEvent()
                                                        }
                                                        <div className='d-grid gap-2'>
                                                            <button data-bs-toggle="modal" onClick={()=>getDetailDataUsers(res._id)} data-bs-target="#exampleModal" className='btn btn-outline-warning'>Verifikasi</button>
                                                            <button className='btn btn-outline-danger'>Suspend</button>
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

export default SemuaDonasi;