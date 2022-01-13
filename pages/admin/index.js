import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import Navadmin from '../../components/NavAdmin';
import NavMain from '../../components/NavMain';
import styles from '../../styles/Home.module.css'

index.title="Dashboard"

function index(props) {
    const [key, setKey] = useState(null);

    const getDataLogin = () => {
        var key = localStorage.getItem('loginKey')
        setKey(key)
        console.log(key)
        if(key == null){
            router.push('/login')
        }
    }

    const router = useRouter();

    useEffect(() => {
        getDataLogin();
    })

    return (
        <div>
            <div className='row'>
                <div className='col-2'>
                    <Navadmin home />
                </div>
                <div className='col'>
                    <NavMain />
                    <div className={styles.mainAdmin}>

                        {/* Box Total */}
                        <div className='container'>
                            <div className='row'>
                                <div className='col'>
                                    <div className={styles.boxTotalDonasi}>
                                        <h5>Total Donasi :</h5>
                                        <h3>45</h3>
                                    </div>
                                </div>
                                <div className='col'>
                                    <div className={styles.boxTotalDonasi}>
                                        <h5>Total User :</h5>
                                        <h3>50</h3>
                                    </div>
                                </div>
                                <div className='col'>
                                    <div className={styles.boxTotalDonasi}>
                                        <h5>Total Uang Terkumpul :</h5>
                                        <h3>Rp. 500.000.000,-</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* End Box Total */}

                        <div>

                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
}

export default index;