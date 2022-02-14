import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import swal from 'sweetalert';
import { logo, logo_bsi, muamalat, thanks } from '../../assets';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import styles from '../../styles/Home.module.css'

Konfirmasi.title = "Konfirmasi Pembayaran"

function Konfirmasi(props) {
    // State
    const [bank, setBank] = useState('');
    const [nominal, setNominal] = useState('');
    const [image, setImage] = useState(null);
    const [mail, setMail] = useState('');
    const [donasiId, setDonasiId] = useState('');
    const [poin, setPoin] = useState(0);
    const [imageName, setImageName] = useState(null);

    // Handling State
    const handleFoto = (e) => {
        if (e.target.files && e.target.files[0]) {
            let img = e.target.files[0];
            setImage(img); setImageName(URL.createObjectURL(img))
        }
    }

    // Function
    const getValue = () => {
        var key = localStorage.getItem('valueKey');
        var keys = JSON.parse(key);
        console.log(keys);
        setBank(keys.bank);
        setNominal(keys.harga);

        const result = keys.harga / 100;
        setPoin(result);
        console.log(poin)
    }

    const idUser = () => {
        var id = localStorage.getItem('loginKey');
        console.log(id)
        setMail(id)
    }

    const idDonasi = () => {
        var idDonasi = localStorage.getItem('donasiKey');
        console.log(idDonasi);
        setDonasiId(idDonasi)
    }

    const router = useRouter();

    const saveTransaksi = () => {
        if (image) {
            uploadImage();
            const data = {
                iduser: mail,
                iddonasi: donasiId,
                foto: 'images_' + image.name,
                bank: bank,
                nominal: nominal,
                poin: poin,
                status_transaksi: 'waiting',
                keterangan: 'donatur'
            }

            axios.post(`http://localhost:4000/transaksi`, data).then(
                res => {
                    console.log("Terimakasih");
                    swal("Terima kasih telah berdonasi", { icon: "success" });
                    router.push("/");
                    removeDonasiId();
                }
            )
        } else {
            const data = {
                iduser: mail,
                iddonasi: donasiId,
                bank: bank,
                nominal: nominal,
                poin: poin,
                status_transaksi: 'waiting',
                keterangan: 'donatur'
            }

            axios.post(`http://localhost:4000/transaksi`, data).then(
                res => {
                    console.log("Terimakasih");
                    swal("Terima kasih telah berdonasi", { icon: "success" });
                    router.push("/");
                    removeDonasiId();
                }
            )
        }


    }

    const uploadImage = () => {
        let formdata = new FormData()
        formdata.append("images", image)

        if (image.name == foto) {
            console.log("Foto sama")
            return foto;
        } else {
            axios.post(`http://localhost:4000/upload/`, formdata).then(
                res => {
                    const respon = res.data;
                }
            )
        }
    }

    const removeDonasiId = () => {
        localStorage.removeItem("valueKey");
    }

    useEffect(() => {
        getValue();
        idUser();
        idDonasi();
    }, [])
    return (
        <div>
            <Navbar donasi />
            <div style={{ paddingBottom: 50 }}>
                <div className='container'>
                    <div style={{ paddingTop: 20 }}>
                        <Link href={"/donasi/pembayaran"}>
                            <button className='btn btn-outline-danger'>Kembali</button>
                        </Link>
                    </div>
                    <h2 style={{ fontWeight: 'bold', marginTop: 20, textAlign: 'center' }}><u>DONASI</u></h2>
                    <div>
                        <h5>Transfer Bank {bank}</h5>
                        <div className={styles.flexImg}>
                            <Image src={bank == 'Muamalat' ? muamalat : bank == 'BSI' ? logo_bsi : logo} className={styles.centerImg} height={150} width={390} />
                        </div>
                        <h5 style={{ textAlign: 'center' }}>No Rekening : (147) 3460006152 <br /> a.n Yayasan Semesta Bertasbih</h5>
                        <div className='container' style={{ paddingTop: 20 }}>
                            <div className='row'>
                                <div className='col-md'>
                                    <p style={{ fontWeight: 'bold' }}>Cara Pembayaran di ATM {bank} :</p>
                                    <p className='container'>
                                        1. Klik transfer<br />
                                        2. Klik ke rekening {bank}<br />
                                        3. Masukkan no rekening Yayasan Semesta Bertasbih<br />
                                        4. Masukkan nominal jumlah uang
                                    </p>

                                    <p style={{ fontWeight: 'bold' }}>Cara Pembayaran di M-Banking {bank} :</p>
                                    <p className='container'>
                                        1. Login ke menu m-banking {bank}<br />
                                        2. Pilih menu transfer<br />
                                        3. Di kategori daftar transfer pilih antar rekening<br />
                                        4. Masukkan no rekening Ikhlas Bantu<br />
                                        5. Di kategori transfer pilih antar rekening<br />
                                        6. Pilih rekening atas nama Ikhlas Bantu<br />
                                        7. Masukkan nominal jumlah uang<br />
                                        8. Pilih send dan masukkan pin atm {bank}
                                    </p>

                                </div>
                                <div className='col-md'>
                                    <div>
                                        <div style={{ paddingTop: 20 }}>
                                            <h5>Upload Bukti Pembayaran</h5>
                                            <input onChange={handleFoto.bind(this)} type={"file"} className='form-control' />
                                            <img src={imageName} className='w-100 h-100' style={{ paddingTop: 10 }} />
                                        </div>
                                        <div style={{ paddingTop: 20 }}>
                                            <button onClick={() => saveTransaksi()} className='btn btn-outline-success' style={{ width: '100%' }}>Konfirmasi Pembayaran</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Konfirmasi;