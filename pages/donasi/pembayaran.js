import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import styles from '../../styles/Home.module.css'

function Pembayaran(props) {
    const [harga, setHarga] = useState('');
    const [nominal, setNominal] = useState(false);
    const [nama, setNama] = useState('');
    const [noemail, setNoemail] = useState('');
    const [pesan, setPesan] = useState('');


    const clickHarga = (total=0) => {
        setHarga(total);
        console.log('Rp. ', total);
    }

    const handlingHarga = (e) => {
        setHarga(e.target.value)
    }

    const handlingNama = (e) => {
        setNama(e.target.value)
    }

    const handlingNoemail = (e) => {
        setNoemail(e.target.value)
    }

    const handlingPesan = (e) => {
        setPesan(e.target.value)
    }

    const onBayar = (total) => {
        if(total < 10000){
            alert("Pembayaran minimal Rp 10.000")
        } else if(nama == ''){
            alert("Nama tidak boleh kosong!")
        } else if(noemail == ''){
            alert("No Hp atau Email tidak boleh kosong!")
        }
    }

    useEffect(() => {
        clickHarga();
    }, [])

    const banks = <Pembayaran bank="1" />
    return (
        <div>
            <Navbar donasi />
            <div style={{ paddingBottom: 50 }}>
                <h2 style={{ fontWeight: 'bold', marginTop: 20, textAlign: 'center' }}><u>DONASI</u></h2>
                <div className='container'>
                    <h2 style={{ fontWeight: 'bold', marginTop: 10 }}>Pembayaran Donasi</h2>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-4'>
                                <h5>Pilih Metode Pembayaran : </h5>
                            </div>
                            <div className='col-4'>
                                <select className='form-select' aria-label='Default select example'>
                                    <option value={"BSI"} selected>Transfer Bank Syariah Indonesia (BSI)</option>
                                    <option value={"BCA"}>Transfer Bank BCA</option>
                                    <option value={"Muamalat"}>Transfer Bank Muamalat</option>
                                </select>
                            </div>
                        </div>

                        <div style={{ marginTop: 30 }}>
                            <h5>Pilih Jumlah Uang Yang Akan Didonasikan : </h5>
                            <div className='row'>
                                <div className='col-md-3'>
                                    <div onClick={() => {clickHarga('10000'), setNominal(false)}} className={styles.boxUangDonasi}>
                                        <p style={{ textAlign: 'center', fontSize: 20 }}>Rp. 10.000</p>
                                    </div>
                                </div>

                                <div className='col-md-3'>
                                    <div onClick={() => {clickHarga('50000'), setNominal(false)}} className={styles.boxUangDonasi}>
                                        <p style={{ textAlign: 'center', fontSize: 20 }}>Rp. 50.000</p>
                                    </div>
                                </div>

                                <div className='col-md-3'>
                                    <div onClick={() => {clickHarga('100000'), setNominal(false)}} className={styles.boxUangDonasi}>
                                        <p style={{ textAlign: 'center', fontSize: 20 }}>Rp. 100.000</p>
                                    </div>
                                </div>

                                <div className='col-md-3'>
                                    <div onClick={() => {clickHarga('200000'), setNominal(false)}} className={styles.boxUangDonasi}>
                                        <p style={{ textAlign: 'center', fontSize: 20 }}>Rp. 200.000</p>
                                    </div>
                                </div>
                            </div>

                            <div className='row'>
                                <div className='col-md-3'>
                                    <div onClick={() =>{ clickHarga('500000'), setNominal(false)}} className={styles.boxUangDonasi}>
                                        <p style={{ textAlign: 'center', fontSize: 20 }}>Rp. 500.000</p>
                                    </div>
                                </div>

                                <div className='col-md-3'>
                                    <div onClick={() => {clickHarga('1000000'), setNominal(false)}} className={styles.boxUangDonasi}>
                                        <p style={{ textAlign: 'center', fontSize: 20 }}>Rp. 1.000.000</p>
                                    </div>
                                </div>

                                <div className='col-md-3'>
                                    <div onClick={() => {clickHarga('2000000'), setNominal(false)}} className={styles.boxUangDonasi}>
                                        <p style={{ textAlign: 'center', fontSize: 20 }}>Rp. 2.000.000</p>
                                    </div>
                                </div>

                                <div className='col-md-3'>
                                    <div onClick={() =>{ setNominal(true)}} className={styles.boxUangDonasi}>
                                        <p style={{ textAlign: 'center', fontSize: 20 }}>Nominal Lain</p>
                                    </div>
                                </div>
                            </div>

                            <div className={styles.inputWidthDonasi}>
                                <label>Jumlah Donasi : </label>
                                <input disabled={nominal == false ? true : false} onChange={ nominal == true ? handlingHarga.bind(this) : {}} className='form-control' value={harga} placeholder='Masukkan nominal' />
                            </div>

                            <div className={styles.boxDataDiri}>
                                <h5 className={styles.textUpper}>Isi Data Dibawah Ini</h5>
                                <form >
                                    <div>
                                        <label>Nama Lengkap</label>
                                        <input onChange={handlingNama.bind(this)} value={nama} className='form-control' placeholder='Ketik disini ...' type={"text"} />
                                    </div>
                                    <div style={{ paddingTop: 20 }}>
                                        <label>No Handphone / Email</label>
                                        <input onChange={handlingNoemail.bind(this)} value={noemail} className='form-control' placeholder='Ketik disini ...' type={"text"} />
                                    </div>
                                </form>
                            </div>

                            <div className={styles.widthInputPesan}>
                                <label>Pesan :</label>
                                <textarea onChange={handlingPesan.bind(this)} value={pesan} className='form-control' rows={4} placeholder='Ketik disini ...' />
                            </div> 

                            <div style={{ paddingTop: 20 }}>
                                <Link href={ harga >= 10000 && nama !== '' && noemail !== '' ? "/donasi/konfirmasi-pembayaran" : "?Wrong-Input"}>
                                    <button onClick={()=>onBayar(harga)} className={'btn btn-outline-success ' + styles.widthInputPesan}>Bayar Sekarang</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Pembayaran;