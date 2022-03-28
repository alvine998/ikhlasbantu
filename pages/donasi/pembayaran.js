import axios from 'axios';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import swal from 'sweetalert';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import styles from '../../styles/Home.module.css'
import useMediaQuery from '../../components/MediaQuery';
import { useRouter } from 'next/router';

Pembayaran.title = "Pembayaran"

function Pembayaran(props) {
    const [harga, setHarga] = useState('');
    const [nominal, setNominal] = useState(false);
    const [nama, setNama] = useState('');
    const [noemail, setNoemail] = useState('');
    const [pesan, setPesan] = useState('');
    const [bank, setBank] = useState('');


    const clickHarga = (total = 0) => {
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

    const handlingBank = (e) => {
        setBank(e.target.value)
    }

    const handlingPesan = (e) => {
        setPesan(e.target.value)
    }

    const idDonasi = () => {
        var idDonasi = localStorage.getItem('donasiKey');
        console.log(idDonasi);
        setDonasiId(idDonasi)
    }

    const router = useRouter();

    const onBayar = (total, bank) => {
        if (total < 10000) {
            swal("Pembayaran minimal Rp 10.000", { icon: "warning" })
        } else if (nama == '') {
            swal("Nama tidak boleh kosong!", { icon: "warning" })
        } else if (noemail == '') {
            swal("No Hp atau Email tidak boleh kosong!", { icon: "warning" })
        } else if (bank == '') {
            swal("Bank tidak boleh kosong!", { icon: "warning" })
        } else {
            const data = {
                iduser: noemail,
                iddonasi: donasiId,
                bank: bank,
                nominal: harga,
                poin: poin,
                status_transaksi: 'waiting',
                keterangan: 'donatur'
            }

            axios.post(`https://ikhlasbantu.herokuapp.com/transaksi`, data).then(
                res => {
                    console.log("Terimakasih");
                    swal("Terima kasih telah berdonasi", { icon: "success" });
                    router.push("/donasi/konfirmasi-pembayaran");
                }
            )
        }
    }

    // const sendData = (nama, noemail, harga, bank, pesan) => {
    //     var value = { nama: nama, noemail: noemail, harga: harga, bank: bank, pesan: pesan }
    //     localStorage.setItem("valueKey", JSON.stringify(value))
    // }

    const sendData = (bank) => {
        localStorage.setItem("valueKey", bank)
    }

    const [mail, setMail] = useState('');
    const [donasiId, setDonasiId] = useState('');
    const [poin, setPoin] = useState(0);

    const getPoin = (total = 0) => {
        const result = total / 1000;
        setPoin(result);
        console.log("Poin ", result)
    }

    // const removeDonasiId = () => {
    //     localStorage.removeItem("valueKey");
    // }

    useEffect(() => {
        clickHarga();
        getDataUser();
        getPoin();
        idDonasi();
    }, [])

    const isBreakpoint = useMediaQuery(768)

    const getDataUser = () => {
        var key = localStorage.getItem('loginKey')
        axios.get(`https://ikhlasbantu.herokuapp.com/users/mail/${key}`).then(
            res => {
                console.log(res.data);
                const result = res.data;
                setNama(result.nama); setNoemail(result.nohp);
            }
        )
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <div>
            <Navbar donasi />
            <div style={{ paddingBottom: 50 }}>
                <h2 style={{ fontWeight: 'bold', marginTop: 20, textAlign: 'center' }}><u>DONASI</u></h2>
                <div className='container'>
                    <h2 style={{ fontWeight: 'bold', marginTop: 10 }}>Pembayaran Donasi</h2>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-md-4'>
                                <h5>Pilih Metode Pembayaran : </h5>
                            </div>
                            <div className='col-md-4'>
                                <select onChange={handlingBank.bind(this)} value={bank} className='form-select' aria-label='Default select example'>
                                    <option selected>Pilih Bank</option>
                                    {/* <option value={"BSI"}>Transfer Bank Syariah Indonesia (BSI)</option>
                                    <option value={"BCA"}>Transfer Bank BCA</option> */}
                                    <option value={"Muamalat"}>Transfer Bank Muamalat</option>
                                </select>
                            </div>
                        </div>

                        <div style={{ marginTop: 30 }}>
                            <h5>Pilih Jumlah Uang Yang Akan Didonasikan : </h5>
                            {
                                isBreakpoint ? (
                                    <div className={styles.centering}>
                                        <div className='row'>
                                            <div className='col-md-3'>
                                                <div onClick={() => { clickHarga('10000'), setNominal(false), getPoin(10000) }} className={styles.boxUangDonasi}>
                                                    <p style={{ textAlign: 'center', fontSize: 20 }}>Rp. 10.000</p>
                                                </div>
                                            </div>

                                            <div className='col-md-3'>
                                                <div onClick={() => { clickHarga('50000'), setNominal(false), getPoin(50000) }} className={styles.boxUangDonasi}>
                                                    <p style={{ textAlign: 'center', fontSize: 20 }}>Rp. 50.000</p>
                                                </div>
                                            </div>

                                            <div className='col-md-3'>
                                                <div onClick={() => { clickHarga('100000'), setNominal(false) }} className={styles.boxUangDonasi}>
                                                    <p style={{ textAlign: 'center', fontSize: 20 }}>Rp. 100.000</p>
                                                </div>
                                            </div>

                                            <div className='col-md-3'>
                                                <div onClick={() => { clickHarga('200000'), setNominal(false) }} className={styles.boxUangDonasi}>
                                                    <p style={{ textAlign: 'center', fontSize: 20 }}>Rp. 200.000</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className='row'>
                                            <div className='col-md-3'>
                                                <div onClick={() => { clickHarga('500000'), setNominal(false) }} className={styles.boxUangDonasi}>
                                                    <p style={{ textAlign: 'center', fontSize: 20 }}>Rp. 500.000</p>
                                                </div>
                                            </div>

                                            <div className='col-md-3'>
                                                <div onClick={() => { clickHarga('1000000'), setNominal(false) }} className={styles.boxUangDonasi}>
                                                    <p style={{ textAlign: 'center', fontSize: 20 }}>Rp. 1.000.000</p>
                                                </div>
                                            </div>

                                            <div className='col-md-3'>
                                                <div onClick={() => { clickHarga('2000000'), setNominal(false) }} className={styles.boxUangDonasi}>
                                                    <p style={{ textAlign: 'center', fontSize: 20 }}>Rp. 2.000.000</p>
                                                </div>
                                            </div>

                                            <div className='col-md-3'>
                                                <div onClick={() => { setNominal(true) }} className={styles.boxUangDonasi}>
                                                    <p style={{ textAlign: 'center', fontSize: 20 }}>Nominal Lain</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className={styles.inputWidthDonasi}>
                                            <label>Jumlah Donasi : </label>
                                            <input disabled={nominal == false ? true : false} onChange={nominal == true ? handlingHarga.bind(this) : {}} className='form-control' value={harga} placeholder='Masukkan nominal' />
                                        </div>
                                    </div>
                                ) : (
                                    <div>
                                        <div className='row'>
                                            <div className='col-md-3'>
                                                <div onClick={() => { clickHarga('10000'), setNominal(false) }} className={styles.boxUangDonasi}>
                                                    <p style={{ textAlign: 'center', fontSize: 20 }}>Rp. 10.000</p>
                                                </div>
                                            </div>

                                            <div className='col-md-3'>
                                                <div onClick={() => { clickHarga('50000'), setNominal(false) }} className={styles.boxUangDonasi}>
                                                    <p style={{ textAlign: 'center', fontSize: 20 }}>Rp. 50.000</p>
                                                </div>
                                            </div>

                                            <div className='col-md-3'>
                                                <div onClick={() => { clickHarga('100000'), setNominal(false) }} className={styles.boxUangDonasi}>
                                                    <p style={{ textAlign: 'center', fontSize: 20 }}>Rp. 100.000</p>
                                                </div>
                                            </div>

                                            <div className='col-md-3'>
                                                <div onClick={() => { clickHarga('200000'), setNominal(false) }} className={styles.boxUangDonasi}>
                                                    <p style={{ textAlign: 'center', fontSize: 20 }}>Rp. 200.000</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className='row'>
                                            <div className='col-md-3'>
                                                <div onClick={() => { clickHarga('500000'), setNominal(false) }} className={styles.boxUangDonasi}>
                                                    <p style={{ textAlign: 'center', fontSize: 20 }}>Rp. 500.000</p>
                                                </div>
                                            </div>

                                            <div className='col-md-3'>
                                                <div onClick={() => { clickHarga('1000000'), setNominal(false) }} className={styles.boxUangDonasi}>
                                                    <p style={{ textAlign: 'center', fontSize: 20 }}>Rp. 1.000.000</p>
                                                </div>
                                            </div>

                                            <div className='col-md-3'>
                                                <div onClick={() => { clickHarga('2000000'), setNominal(false) }} className={styles.boxUangDonasi}>
                                                    <p style={{ textAlign: 'center', fontSize: 20 }}>Rp. 2.000.000</p>
                                                </div>
                                            </div>

                                            <div className='col-md-3'>
                                                <div onClick={() => { setNominal(true) }} className={styles.boxUangDonasi}>
                                                    <p style={{ textAlign: 'center', fontSize: 20 }}>Nominal Lain</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className={styles.inputWidthDonasi}>
                                            <label>Jumlah Donasi : </label>
                                            <input disabled={nominal == false ? true : false} onChange={nominal == true ? handlingHarga.bind(this) : {}} className='form-control' value={harga} placeholder='Masukkan nominal' />
                                        </div>
                                    </div>
                                )
                            }


                            <div className={isBreakpoint ? styles.boxDataDiri2 : styles.boxDataDiri}>
                                <h5 className={styles.textUpper}>Isi Data Dibawah Ini</h5>
                                <form >
                                    <div>
                                        <label>Nama Lengkap</label>
                                        <input onChange={handlingNama.bind(this)} value={nama} className='form-control' placeholder='Ketik disini ...' type={"text"} required />
                                    </div>
                                    <div style={{ paddingTop: 20 }}>
                                        <label>No Handphone / Email</label>
                                        <input onChange={handlingNoemail.bind(this)} value={noemail} className='form-control' placeholder='Ketik disini ...' type={"text"} required />
                                    </div>
                                </form>
                            </div>

                            <div className={isBreakpoint ? styles.widthInputPesan2 : styles.widthInputPesan}>
                                <label>Pesan : (optional)</label>
                                <textarea onChange={handlingPesan.bind(this)} value={pesan} className='form-control' rows={4} placeholder='Ketik disini ...' />
                            </div>

                            <div style={{ paddingTop: 20 }} >
                                <button onClick={() => { onBayar(harga, bank), sendData(bank) }} className={'btn btn-outline-success ' + (isBreakpoint ? 'w-100' : styles.widthInputPesan)}>Bayar Sekarang</button>
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