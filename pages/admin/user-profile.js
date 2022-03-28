import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import swal from 'sweetalert';
import Navadmin from '../../components/NavAdmin';
import NavMain from '../../components/NavMain';
import styles from '../../styles/Home.module.css'

UserProfile.title = "User Profile"

function UserProfile(props) {
    const getDataLogin = () => {
        var key = localStorage.getItem('loginKey')
        console.log(key)
        if (key == null) {
            router.push('/login')
        }
    }

    const router = useRouter();
    const [collection, setCollection] = useState([])

    const getDataUsers = () => {
        axios.get(`https://ikhlasbantu.herokuapp.com/users`).then(
            res => {
                const collection = res.data;
                console.log(collection);
                setCollection(collection)
            }
        )
    }

    const updateData = (id) => {
        const data = {
            statususer: 'verified',
            statusktp: 'verified',
            statusrekening: 'verified',
        }
        axios.put(`https://ikhlasbantu.herokuapp.com/users/${id}`, data).then(
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
        axios.put(`https://ikhlasbantu.herokuapp.com/users/${id}`, data).then(
            res => {
                swal("Penolakan Berhasil", { icon: "success" });
                console.log(res.data);
                getDataUsers();
            }
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
                    <Navadmin userprofile />
                </div>
                <div className='col'>
                    <NavMain />
                    <div className={styles.mainAdmin} style={{ overflow: 'scroll', width: '100%', height: 570, overflowX: 'hidden' }}>
                        <div className='container'>
                            <h2 style={{ fontWeight: 'bold', textAlign: 'center' }}>Profil User</h2>
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
                                            <th scope="col">Nama</th>
                                            <th scope="col">Email</th>
                                            <th scope="col">No Hp</th>
                                            <th scope="col">Status User</th>
                                            <th scope="col">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            collection.reverse().map((res, i) => (
                                                <tr>
                                                    <th scope="row">{i + 1}</th>
                                                    <td>{res._id.substr(0, 10)}</td>
                                                    <td>{res.nama}</td>
                                                    <td>{res.email}</td>
                                                    <td>{res.nohp}</td>
                                                    <td>{res.statususer}</td>
                                                    <td>
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
                                                                            <img src={`https://ikhlasbantu.herokuapp.com/resources/uploads/${res.fotoktp}`} className='w-100 h-100' />
                                                                        </div>
                                                                        <div style={{ paddingTop: 20 }}>
                                                                            <h5>Rekening Bank :</h5>
                                                                            <img src={`https://ikhlasbantu.herokuapp.com/resources/uploads/${res.fotorekening}`} className='w-100 h-100' />
                                                                        </div>
                                                                    </div>
                                                                    <div class="modal-footer">
                                                                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Tutup</button>
                                                                        <button type="button" class="btn btn-danger" data-bs-dismiss="modal" onClick={() => updateDataTolak(res._id)}>Tolak</button>
                                                                        <button type="button" class="btn btn-primary" data-bs-dismiss="modal" onClick={() => updateData(res._id)}>Verifikasi</button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className='d-grid gap-2'>
                                                            <button data-bs-toggle="modal" data-bs-target="#exampleModal" className='btn btn-outline-warning'>Verifikasi</button>
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

export default UserProfile;