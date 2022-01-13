import React, { useState } from 'react';
import Navadmin from '../../components/NavAdmin';
import NavMain from '../../components/NavMain';
import styles from '../../styles/Home.module.css'

CompanyProfile.title = "Company Profile"

function CompanyProfile(props) {
    const [nama, setNama] = useState('');
    const [deskripsi, setDeskripsi] = useState('');
    const [email, setEmail] = useState('');
    const [nohp, setNohp] = useState('');
    const [alamat, setAlamat] = useState('');

    const handlingNama = (e) => {
        setNama(e.target.value)
    }

    const handlingDeskripsi = (e) => {
        setDeskripsi(e.target.value)
    }

    const handlingEmail = (e) => {
        setEmail(e.target.value)
    }

    const handlingNohp = (e) => {
        setNohp(e.target.value)
    }

    const handlingAlamat = (e) => {
        setAlamat(e.target.value)
    }

    return (
        <div>
            <div style={{ overflow: 'hidden' }}>
                <div className='row'>
                    <div className='col-2'>
                        <Navadmin companyprofile />
                    </div>
                    <div className='col'>
                        <NavMain />
                        <div className={styles.mainAdmin} style={{overflow:'scroll', width:'100%', height:570, overflowX:'hidden'}}>
                            <div className='container'>
                                <h2 style={{ fontWeight: 'bold', textAlign: 'center' }}>Company Profile</h2>
                                <div style={{ paddingTop: 20, paddingBottom:50 }}>
                                    <form>
                                        <div style={{paddingRight:300, paddingLeft:150}}>
                                            <label className='form-label'>Nama Perusahaan :</label>
                                            <input value={nama} onChange={handlingNama.bind(this)} className='form-control' placeholder='Ketik disini ...' type={"text"}/>
                                        </div>

                                        <div style={{paddingRight:300, paddingLeft:150, paddingTop:20}}>
                                            <label className='form-label'>Deskripsi Perusahaan :</label>
                                            <textarea value={deskripsi} onChange={handlingDeskripsi.bind(this)} rows={4} className='form-control' placeholder='Ketik disini ...' type={"text"}/>
                                        </div>

                                        <div style={{paddingRight:300, paddingLeft:150, paddingTop:20}}>
                                            <label className='form-label'>Email Perusahaan :</label>
                                            <input value={email} onChange={handlingEmail.bind(this)} className='form-control' placeholder='email@domain.com' type={"email"}/>
                                        </div>

                                        <div style={{paddingRight:300, paddingLeft:150, paddingTop:20}}>
                                            <label className='form-label'>No Telpon Perusahaan :</label>
                                            <input value={nohp} onChange={handlingNohp.bind(this)} className='form-control' placeholder='+62 ' type={"text"}/>
                                        </div>

                                        <div style={{paddingRight:300, paddingLeft:150, paddingTop:20}}>
                                            <label className='form-label'>Alamat Perusahaan :</label>
                                            <input value={alamat} onChange={handlingAlamat.bind(this)} className='form-control' placeholder='Ketik disini ...' type={"text"}/>
                                        </div>

                                        <div style={{paddingRight:300, paddingLeft:150, paddingTop:20}}>
                                            <button className='btn btn-outline-primary' style={{width:'100%'}}>Simpan</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CompanyProfile;