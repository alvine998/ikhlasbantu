import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import swal from 'sweetalert';
import Navadmin from '../../components/NavAdmin';
import NavMain from '../../components/NavMain';
import styles from '../../styles/Home.module.css'

Banner.title = "Banner"

function Banner(props) {

    const getDataLogin = () => {
        var key = localStorage.getItem('loginKey')
        console.log(key)
        if (key == null) {
            router.push('/login')
        }
    }

    const router = useRouter();

    useEffect(() => {
        getDataLogin();
        getDataBanner();
    }, [])

    const [judul, setJudul] = useState('');
    const [deskripsi, setDeskripsi] = useState('');
    const [image, setImage] = useState(null);
    const [imageName, setImageName] = useState(null);

    const [collection, setCollection] = useState([]);


    const handleJudul = (e) => {
        setJudul(e.target.value)
    }

    const handleDeskripsi = (e) => {
        setDeskripsi(e.target.value)
    }

    const handleImage = (e) => {
        if (e.target.files && e.target.files[0]) {
            let img = e.target.files[0];
            setImage(img); setImageName(URL.createObjectURL(img))
        }
    }

    const saveBanner = () => {
        const data = {
            judul: judul,
            deskripsi: deskripsi,
            gambar: 'bannerimages_' + image.name
        }

        console.log(data)
        axios.post(`http://localhost:4000/banners`, data).then(
            res => {
                const respon = res.data;
                setDeskripsi(""); setImageName(null); setJudul("");
                swal("Berhasil Upload Banner", { icon: "success" })
                getDataBanner();
            }
        )
    }

    const getDataBanner = () => {
        axios.get(`http://localhost:4000/banners`).then(
            res => {
                const collection = res.data;
                console.log(collection);
                setCollection(collection)
            }
        )
    }

    const deleteBanner = (id) => {
        axios.delete(`http://localhost:4000/banners/${id}`).then(
            res => {
                const collection = res.data;
                swal("Berhasil Hapus Banner", { icon: "success" })
                getDataBanner();
            }
        )
    }

    const uploadImage = () => {
        let formdata = new FormData()
        formdata.append("bannerimages", image)

        axios.post(`http://localhost:4000/upload/banner`, formdata).then(
            res => {
                const respon = res.data;
            }
        )
    }

    const deleteImage = (name) => {
        axios.delete(`http://localhost:4000/delete/banner/${name}`).then(
            res => console.log("Deleted Image")
        )
    }
    return (
        <div>
            <div style={{ overflow: 'hidden' }}>
                <div className='row'>
                    <div className='col-2'>
                        <Navadmin banner />
                    </div>
                    <div className='col'>
                        <NavMain />
                        <div className={styles.mainAdmin}>
                            <div className='container'>
                                <h2 style={{ fontWeight: 'bold', textAlign: 'center' }}>Banner</h2>
                                <div style={{ paddingTop: 20 }}>
                                    <button type='button' className='btn btn-outline-primary' data-bs-toggle="modal" data-bs-target="#urlModal">Tambah Banner</button>
                                    {/* Start Modal */}
                                    <div>
                                        <div class="modal fade" tabindex="-1" role="dialog" id="urlModal" aria-labelledby="urlModalLabel" aria-hidden="true">
                                            <div class="modal-dialog" role="document">
                                                <div class="modal-content">
                                                    <div class="modal-header">
                                                        <h5 class="modal-title">Input Banner Baru</h5>
                                                    </div>
                                                    <div class="modal-body">
                                                        <div>
                                                            <form className="form">
                                                                <div>
                                                                    <h5 style={{ float: 'left' }}>Judul</h5>
                                                                    <input className="form-control" value={judul} onChange={handleJudul.bind(this)} placeholder="Ketik disini ..." type="text" />
                                                                </div>

                                                                <div style={{ paddingTop: 20 }}>
                                                                    <h5 style={{ float: 'left' }}>Deskripsi</h5>
                                                                    <textarea rows={3} className="form-control" value={deskripsi} onChange={handleDeskripsi.bind(this)} placeholder="Ketik disini ..." type="text" />
                                                                </div>

                                                                <div style={{ paddingTop: 20 }}>
                                                                    <h5 style={{ float: 'left' }}>Gambar Banner</h5>
                                                                    <input className="form-control" onChange={handleImage.bind(this)} type="file" />
                                                                </div>

                                                                <div style={{ paddingTop: 20 }}>
                                                                    <img className='w-100 h-100' src={imageName} />
                                                                </div>
                                                            </form>
                                                        </div>
                                                    </div>
                                                    <div class="modal-footer">
                                                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Batal</button>
                                                        <button type="button" class="btn btn-primary" data-bs-dismiss="modal" onClick={() => {saveBanner(), uploadImage()}} >Simpan</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* End Modal */}
                                    <table class="table">
                                        <thead>
                                            <tr>
                                                <th scope="col" style={{textAlign:'center'}}>No</th>
                                                <th scope="col" style={{textAlign:'center'}}>Judul</th>
                                                <th scope="col" style={{textAlign:'center'}}>Gambar</th>
                                                <th scope="col" style={{textAlign:'center'}}>Deskripsi</th>
                                                <th scope="col" style={{textAlign:'center'}}>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                collection.reverse().map((res, i) => (
                                                    <tr key={i}>
                                                        <th scope="row">{i+1}</th>
                                                        <td>{res.judul}</td>
                                                        <td><img src={`http://localhost:4000/resources/uploads/${res.gambar}`} className={'w-50 h-50 ' + (styles.centering)} /></td>
                                                        <td>{res.deskripsi}</td>
                                                        <td><button onClick={()=>{deleteBanner(res._id), deleteImage(res.gambar)}} className='btn btn-outline-danger'>Hapus</button></td>
                                                    </tr>
                                                ))
                                            }
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Banner;