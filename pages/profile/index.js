import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import styles from '../../styles/Home.module.css'
import Image from 'next/image';
import { default_profile, ktp } from '../../assets';
import axios from 'axios';
import swal from 'sweetalert';
import useMediaQuery from '../../components/MediaQuery';

index.title = "Your Profile"

function index(props) {
    const [keys, setKeys] = useState('');
    const [nama, setNama] = useState('');
    const [nohp, setNohp] = useState('');
    const [email, setEmail] = useState('');
    const [foto, setFoto] = useState('');
    const [fotoktp, setFotoktp] = useState('');
    const [jenisk, setJenisk] = useState('');
    const [alamat, setAlamat] = useState('');
    const [pekerjaan, setPekerjaan] = useState('');
    const [status, setStatus] = useState('');
    const [statusktp, setStatusktp] = useState('');
    const [statusrekening, setStatusrekening] = useState('');
    const [fotorekening, setFotorekening] = useState('');

    const [id, setId] = useState('');

    const [image, setImage] = useState(null);
    const [imageName, setImageName] = useState(null);

    const [image2, setImage2] = useState(null);
    const [imageName2, setImageName2] = useState(null);

    const [image3, setImage3] = useState(null);
    const [imageName3, setImageName3] = useState(null);

    const getDataUsers = () => {
        var keys = localStorage.getItem('loginKey');
        console.log(keys)
        setKeys(keys)

        axios.get(`https://ikhlasbantu.herokuapp.com/users/mail/${keys}`).then(
            res => {
                const result = res.data;
                setEmail(result.email); setNama(result.nama); setNohp(result.nohp);
                setFoto(result.foto); setAlamat(result.alamat); setFotoktp(result.fotoktp);
                setJenisk(result.jeniskelamin); setPekerjaan(result.pekerjaan);
                setId(result._id); setStatus(result.statususer); setStatusktp(result.statusktp);
                setStatusrekening(result.statusrekening); setFotorekening(result.fotorekening);
                console.log(result)
            }
        )
    }

    const handleNama = (e) => {
        setNama(e.target.value)
    }
    const handleNohp = (e) => {
        setNohp(e.target.value)
    }
    const handleEmail = (e) => {
        setEmail(e.target.value)
    }
    const handleJenisk = (e) => {
        setJenisk(e.target.value)
    }
    const handleAlamat = (e) => {
        setAlamat(e.target.value)
    }
    const handlePekerjaan = (e) => {
        setPekerjaan(e.target.value)
    }
    const handleFoto = (e) => {
        if (e.target.files && e.target.files[0]) {
            let img = e.target.files[0];
            console.log(img);
            setImage(img); setImageName(URL.createObjectURL(img))
        }
    }
    const handleFotoktp = (e) => {
        if (e.target.files && e.target.files[0]) {
            let img = e.target.files[0];
            setImage2(img); setImageName2(URL.createObjectURL(img))
        }
    }
    const handleFotorekening = (e) => {
        if (e.target.files && e.target.files[0]) {
            let img = e.target.files[0];
            setImage3(img); setImageName3(URL.createObjectURL(img))
        }
    }

    const updateProfile = () => {
        const dataUpdate = {
            nama: nama,
            nohp: nohp,
            email: email,
            jeniskelamin: jenisk,
            alamat: alamat,
            pekerjaan: pekerjaan
        }

        axios.put(`https://ikhlasbantu.herokuapp.com/users/${id}`, dataUpdate).then(
            res => {
                swal("Data berhasil diubah", { icon: "success" });
                console.log(res.data);
                getDataUsers();
            }
        )
    }

    const updateFoto = () => {
        const dataUpdate = {
            foto: 'images_' + image.name
        }

        axios.put(`https://ikhlasbantu.herokuapp.com/users/${id}`, dataUpdate).then(
            res => {
                swal("Data berhasil diubah", { icon: "success" });
                console.log(res.data);
                getDataUsers();
            }
        )
    }

    const updateFotoKtp = () => {
        const dataUpdate = {
            fotoktp: 'images_' + image2.name,
            statusktp: 'hold ktp'
        }

        axios.put(`https://ikhlasbantu.herokuapp.com/users/${id}`, dataUpdate).then(
            res => {
                swal("Data berhasil diubah", { icon: "success" });
                console.log(res.data);
                getDataUsers();
            }
        )
    }

    const updateFotoRekening = () => {
        const dataUpdate = {
            fotorekening: 'images_' + image3.name,
            statusrekening: 'hold rekening'
        }

        axios.put(`https://ikhlasbantu.herokuapp.com/users/${id}`, dataUpdate).then(
            res => {
                swal("Data berhasil diubah", { icon: "success" });
                console.log(res.data);
                getDataUsers();
            }
        )
    }

    const uploadImage = () => {
        let formdata = new FormData()
        formdata.append("images", image)

        if (image.name == foto) {
            console.log("Foto sama")
            return foto;
        } else {
            axios.post(`https://ikhlasbantu.herokuapp.com/upload/`, formdata).then(
                res => {
                    const respon = res.data;
                    console.log(respon)
                }
            )
        }
    }

    const uploadImageKtp = () => {
        let formdata = new FormData()
        formdata.append("images", image2)

        if (image2.name == fotoktp) {
            console.log("Foto sama")
            return fotoktp;
        } else {
            axios.post(`https://ikhlasbantu.herokuapp.com/upload/`, formdata).then(
                res => {
                    const respon = res.data;
                }
            )
        }
    }

    const uploadImageRekening = () => {
        let formdata = new FormData()
        formdata.append("images", image3)

        if (image3.name == fotorekening) {
            console.log("Foto sama")
            return fotorekening;
        } else {
            axios.post(`https://ikhlasbantu.herokuapp.com/upload/`, formdata).then(
                res => {
                    const respon = res.data;
                }
            )
        }
    }

    useEffect(() => {
        getDataUsers();
    }, [])

    const fileButton = () => {
        document.getElementById('fileid').click();
    }

    const fileButton2 = () => {
        document.getElementById('fileid2').click();
    }

    const isBreakpoint = useMediaQuery(768);

    return (
        <div>
            <Navbar />
            <div style={{ paddingBottom: 50 }}>
                <div className='container'>
                    <div className={styles.boxImgProfile}>
                        <div style={{ width: 180, height: 180, borderRadius: 100, paddingLeft: 15, paddingTop: 15 }}>
                            {
                                foto === "" ? (
                                    <Image src={default_profile} />
                                ) : (
                                    <img src={`https://ikhlasbantu.herokuapp.com/resources/uploads/${foto}`} className='w-100 h-100' style={{ borderRadius: 100 }} />
                                )
                            }
                        </div>
                    </div>
                    <div className={styles.btnCenter}>
                        <button className={'btn btn-outline-primary'} data-bs-toggle="modal" data-bs-target="#exampleModal">Ganti Foto Profil</button>
                        {/* Modal */}
                        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title" id="exampleModalLabel">Ganti Foto Profil</h5>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        <input type={"file"} onChange={handleFoto.bind(this)} />
                                        <img src={imageName} className='w-100 h-100' style={{ paddingTop: 10 }} />
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Batal</button>
                                        <button type="button" class="btn btn-primary" onClick={() => { updateFoto(), uploadImage(); }} data-bs-dismiss="modal">Simpan</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className={styles.btnCenter}>
                        <div className='row'>
                            <div className='col-md'>
                                {
                                    isBreakpoint ? (
                                        <div className={styles.boxProfile2}>
                                            <div>
                                                <div className={styles.boxDonasiProfile}>
                                                    <p>Total Donasimu : <br />Rp. 0,-</p>
                                                </div>
                                                <div>
                                                    <label className='form-label'>Nama</label>
                                                    <input type={"text"} value={nama} onChange={handleNama.bind(this)} className='form-control' />
                                                </div>
                                                <div className={styles.inputProfile}>
                                                    <label className='form-label'>No Telepon</label>
                                                    <input type={"text"} maxLength={12} value={nohp} onChange={handleNohp.bind(this)} className='form-control' />
                                                </div>
                                                <div className={styles.inputProfile}>
                                                    <label className='form-label'>Email</label>
                                                    <input type={"email"} value={email} onChange={handleEmail.bind(this)} className='form-control' />
                                                </div>
                                                <div className={styles.inputProfile}>
                                                    <label className='form-label'>Jenis Kelamin</label>
                                                    <select className='form-select' value={jenisk} onChange={handleJenisk.bind(this)} >
                                                        <option selected>Pilih Jenis Kelamin</option>
                                                        <option value={"Laki-laki"}>Laki-laki</option>
                                                        <option value={"Perempuan"}>Perempuan</option>
                                                    </select>
                                                </div>
                                                <div className={styles.inputProfile}>
                                                    <label className='form-label'>Alamat</label>
                                                    <textarea rows={4} value={alamat} onChange={handleAlamat.bind(this)} className='form-control' />
                                                </div>
                                                <div className={styles.inputProfile}>
                                                    <label className='form-label'>Pekerjaan</label>
                                                    <input type={"text"} value={pekerjaan} onChange={handlePekerjaan.bind(this)} className='form-control' />
                                                </div>
                                                <div>
                                                    <button type='submit' className={'btn btn-outline-primary ' + styles.inputProfileBtn} onClick={() => updateProfile()}>Ganti</button>
                                                </div>
                                            </div>
                                        </div>
                                    ) : (
                                        <div className={styles.boxProfile}>
                                            <div>
                                                <div className={styles.boxDonasiProfile}>
                                                    <p>Total Donasimu : <br />Rp. 0,-</p>
                                                </div>
                                                <div>
                                                    <label className='form-label'>Nama</label>
                                                    <input type={"text"} value={nama} onChange={handleNama.bind(this)} className='form-control' />
                                                </div>
                                                <div className={styles.inputProfile}>
                                                    <label className='form-label'>No Telepon</label>
                                                    <input type={"text"} maxLength={12} value={nohp} onChange={handleNohp.bind(this)} className='form-control' />
                                                </div>
                                                <div className={styles.inputProfile}>
                                                    <label className='form-label'>Email</label>
                                                    <input type={"email"} value={email} onChange={handleEmail.bind(this)} className='form-control' />
                                                </div>
                                                <div className={styles.inputProfile}>
                                                    <label className='form-label'>Jenis Kelamin</label>
                                                    <select className='form-select' value={jenisk} onChange={handleJenisk.bind(this)} >
                                                        <option selected>Pilih Jenis Kelamin</option>
                                                        <option value={"Laki-laki"}>Laki-laki</option>
                                                        <option value={"Perempuan"}>Perempuan</option>
                                                    </select>
                                                </div>
                                                <div className={styles.inputProfile}>
                                                    <label className='form-label'>Alamat</label>
                                                    <textarea rows={4} value={alamat} onChange={handleAlamat.bind(this)} className='form-control' />
                                                </div>
                                                <div className={styles.inputProfile}>
                                                    <label className='form-label'>Pekerjaan</label>
                                                    <input type={"text"} value={pekerjaan} onChange={handlePekerjaan.bind(this)} className='form-control' />
                                                </div>
                                                <div>
                                                    <button type='submit' className={'btn btn-outline-primary ' + styles.inputProfileBtn} onClick={() => updateProfile()}>Ganti</button>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }
                            </div>
                            <div className='col-md'>
                                {
                                    isBreakpoint ? (
                                        <div>
                                            <div className={styles.boxProfileKtp2}>
                                                <a onClick={() => fileButton()} href='#uploadktp' style={{ textDecoration: 'none' }}>
                                                    {
                                                        fotoktp == "" ? (
                                                            <div className={styles.ktpImg}>
                                                                {
                                                                    imageName2 == null ? (
                                                                        <div>
                                                                            <Image src={ktp} />
                                                                            <p style={{ textAlign: 'center' }}>Upload KTP Disini</p>
                                                                        </div>
                                                                    ) : (
                                                                        <div>
                                                                            <img src={imageName2} className='w-100 h-100' />
                                                                        </div>
                                                                    )
                                                                }
                                                            </div>
                                                        ) : (
                                                            <img src={`https://ikhlasbantu.herokuapp.com/resources/uploads/${fotoktp}`} className='w-100 h-100' />
                                                        )
                                                    }
                                                    <input id='fileid' disabled={statusktp == 'verified' ? true : statusktp === 'hold ktp' ? true : false} onChange={handleFotoktp.bind(this)} hidden type={"file"} />
                                                </a>
                                            </div>
                                            <div className='d-grid gap-2' style={{ paddingTop: 20 }}>
                                                <button disabled={statusktp == 'verified' ? true : statusktp === 'hold ktp' ? true : false} onClick={() => { uploadImageKtp(), updateFotoKtp() }} className='btn btn-outline-primary'>
                                                    {statusktp == 'hold ktp' ? 'Menunggu Verifikasi' : statusktp == 'verified' ? 'KTP Telah Diverifikasi' : 'Upload'}
                                                </button>
                                            </div>

                                            {/* Upload Rekening */}
                                            <div className={styles.boxProfileKtp2}>
                                                <a onClick={() => fileButton2()} href='#uploadrekening' style={{ textDecoration: 'none' }}>
                                                    {
                                                        fotorekening == "" ? (
                                                            <div className={styles.ktpImg}>
                                                                {
                                                                    imageName3 == null ? (
                                                                        <div>
                                                                            <Image src={ktp} />
                                                                            <p style={{ textAlign: 'center' }}>Upload Rekening Disini</p>
                                                                        </div>
                                                                    ) : (
                                                                        <div>
                                                                            <img src={imageName3} className='w-100 h-100' />
                                                                        </div>
                                                                    )
                                                                }
                                                            </div>
                                                        ) : (
                                                            <img src={`https://ikhlasbantu.herokuapp.com/resources/uploads/${fotorekening}`} className='w-100 h-100' />
                                                        )
                                                    }
                                                    <input id='fileid2' disabled={statusrekening == 'verified' ? true : statusrekening === 'hold rekening' ? true : false} onChange={handleFotorekening.bind(this)} hidden type={"file"} />
                                                </a>
                                            </div>
                                            <div className='d-grid gap-2' style={{ paddingTop: 20 }}>
                                                <button disabled={statusrekening == 'verified' ? true : statusrekening === 'hold rekening' ? true : false} onClick={() => { uploadImageRekening(), updateFotoRekening() }} className='btn btn-outline-primary'>
                                                    {statusrekening == 'hold rekening' ? 'Menunggu Verifikasi' : statusrekening == 'verified' ? 'Rekening Telah Diverifikasi' : 'Upload'}
                                                </button>
                                            </div>
                                        </div>
                                    ) : (
                                        <div>
                                            <div className={styles.boxProfileKtp}>
                                                <a onClick={() => fileButton()} href='#uploadktp' style={{ textDecoration: 'none' }}>
                                                    {
                                                        fotoktp == "" ? (
                                                            <div className={styles.ktpImg}>
                                                                {
                                                                    imageName2 == null ? (
                                                                        <div>
                                                                            <Image src={ktp} />
                                                                            <p style={{ textAlign: 'center' }}>Upload KTP Disini</p>
                                                                        </div>
                                                                    ) : (
                                                                        <div>
                                                                            <img src={imageName2} className='w-100 h-100' />
                                                                        </div>
                                                                    )
                                                                }
                                                            </div>
                                                        ) : (
                                                            <img src={`https://ikhlasbantu.herokuapp.com/resources/uploads/${fotoktp}`} className='w-100 h-100' />
                                                        )
                                                    }
                                                    <input id='fileid' disabled={statusktp == 'verified' ? true : statusktp === 'hold ktp' ? true : false} onChange={handleFotoktp.bind(this)} hidden type={"file"} />
                                                </a>
                                            </div>
                                            <div className='d-grid gap-2' style={{ paddingTop: 20 }}>
                                                <button disabled={statusktp == 'verified' ? true : statusktp === 'hold ktp' ? true : false} onClick={() => { uploadImageKtp(), updateFotoKtp() }} className='btn btn-outline-primary'>
                                                    {statusktp == 'hold ktp' ? 'Menunggu Verifikasi' : statusktp == 'verified' ? 'KTP Telah Diverifikasi' : 'Upload'}
                                                </button>
                                            </div>

                                            {/* Upload Rekening */}
                                            <div className={styles.boxProfileKtp}>
                                                <a onClick={() => fileButton2()} href='#uploadrekening' style={{ textDecoration: 'none' }}>
                                                    {
                                                        fotorekening == "" ? (
                                                            <div className={styles.ktpImg}>
                                                                {
                                                                    imageName3 == null ? (
                                                                        <div>
                                                                            <Image src={ktp} />
                                                                            <p style={{ textAlign: 'center' }}>Upload Rekening Disini</p>
                                                                        </div>
                                                                    ) : (
                                                                        <div>
                                                                            <img src={imageName3} className='w-100 h-100' />
                                                                        </div>
                                                                    )
                                                                }
                                                            </div>
                                                        ) : (
                                                            <img src={`https://ikhlasbantu.herokuapp.com/resources/uploads/${fotorekening}`} className='w-100 h-100' />
                                                        )
                                                    }
                                                    <input id='fileid2' disabled={statusrekening == 'verified' ? true : statusrekening === 'hold rekening' ? true : false} onChange={handleFotorekening.bind(this)} hidden type={"file"} />
                                                </a>
                                            </div>
                                            <div className='d-grid gap-2' style={{ paddingTop: 20 }}>
                                                <button disabled={statusrekening == 'verified' ? true : statusrekening === 'hold rekening' ? true : false} onClick={() => { uploadImageRekening(), updateFotoRekening() }} className='btn btn-outline-primary'>
                                                    {statusrekening == 'hold rekening' ? 'Menunggu Verifikasi' : statusrekening == 'verified' ? 'Rekening Telah Diverifikasi' : 'Upload'}
                                                </button>
                                            </div>
                                        </div>
                                    )
                                }

                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default index;