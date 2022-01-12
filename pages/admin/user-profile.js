import React from 'react';
import Navadmin from '../../components/NavAdmin';
import NavMain from '../../components/NavMain';
import styles from '../../styles/Home.module.css'

function UserProfile(props) {
    return (
        <div>
            <div className='row'>
                <div className='col-2'>
                    <Navadmin userprofile />
                </div>
                <div className='col'>
                    <NavMain />
                    <div className={styles.mainAdmin}>
                        <div className='container'>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserProfile;