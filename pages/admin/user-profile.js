import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
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
        axios.get(`http://localhost:4000/users`).then(
            res => {
                const collection = res.data;
                console.log(collection);
                setCollection(collection)
            }
        )
    }

    useEffect(() => {
        getDataLogin();
        getDataUsers();
    },[])
    
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
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            collection.reverse().map((res, i) => (
                                                <tr>
                                                    <th scope="row">{i + 1}</th>
                                                    <td>{res._id.substr(0,10)}</td>
                                                    <td>{res.nama}</td>
                                                    <td>{res.email}</td>
                                                    <td>{res.nohp}</td>
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