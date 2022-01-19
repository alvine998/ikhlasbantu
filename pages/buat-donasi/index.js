import Head from 'next/head';
import React from 'react';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import styles from '../../styles/Home.module.css'

index.title="Buat Donasi"

function index(props) {
    return (
        <div>
            <Navbar/>
            <div style={{ paddingBottom: 50 }}>
                <div className='container'>
                    <h2 className={styles.textTitle}>Buat Donasi</h2>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default index;