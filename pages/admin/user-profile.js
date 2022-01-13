import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import Navadmin from '../../components/NavAdmin';
import NavMain from '../../components/NavMain';
import styles from '../../styles/Home.module.css'

UserProfile.title = "User Profile"

function UserProfile(props) {
    const [key, setKey] = useState(null);

    const getDataLogin = () => {
        var key = localStorage.getItem('loginKey')
        setKey(key)
        console.log(key)
    }

    const router = useRouter();

    const checkDataLogin = () => {
        if(key == null){
            router.push('/login')
        }
    }

    useEffect(() => {
        getDataLogin();
        checkDataLogin();
    })
    return (
        <div style={{overflow:'hidden'}}>
            <div className='row'>
                <div className='col-2'>
                    <Navadmin userprofile />
                </div>
                <div className='col'>
                    <NavMain />
                    <div className={styles.mainAdmin} style={{overflow:'scroll', width:'100%', height:570, overflowX:'hidden'}}>
                        <div className='container'>
                            <h2 style={{ fontWeight: 'bold', textAlign: 'center' }}>Profil User</h2>
                            <form className={styles.toRight}>
                                <div className='row'>
                                    <div className='col'>
                                        <input type={"text"} style={{width:200, marginLeft:20}} className='form-control me-2' placeholder='Cari disini' />
                                    </div>
                                    <div className='col'>
                                        <button className='btn btn-outline-primary' style={{width:70}}>Cari</button>
                                    </div>
                                </div>
                            </form>

                            <div style={{paddingTop:20}}>
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">No</th>
                                            <th scope="col">Id</th>
                                            <th scope="col">Nama</th>
                                            <th scope="col">Email</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>Mark</td>
                                            <td>Otto</td>
                                            <td>@mdo</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">2</th>
                                            <td>Jacob</td>
                                            <td>Thornton</td>
                                            <td>@fat</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">3</th>
                                            <td colspan="2">Larry the Bird</td>
                                            <td>@twitter</td>
                                        </tr>
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