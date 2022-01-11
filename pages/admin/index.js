import React from 'react';
import Navadmin from '../../components/NavAdmin';
import NavMain from '../../components/NavMain';
import styles from '../../styles/Home.module.css'

function index(props) {
    return (
        <div>
            <div className='row'>
                <div className='col-2'>
                    <Navadmin home />
                </div>
                <div className='col'>
                    <NavMain/>
                    <div className={styles.mainAdmin}>
                        <h5>Test</h5>
                    </div>
                </div>
            </div>


        </div>
    );
}

export default index;