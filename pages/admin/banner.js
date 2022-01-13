import React, { useState } from 'react';
import Navadmin from '../../components/NavAdmin';
import NavMain from '../../components/NavMain';
import styles from '../../styles/Home.module.css'

Banner.title = "Banner"

function Banner(props) {
    const [judul, setJudul] = useState('');
    const [image, setImage] = useState(null);
    const [imageName, setImageName] = useState(null);
    
    const handleJudul = (e) => {
        setJudul(e.target.value)
    }

    const handleImage = (e) => {

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
                                                                    <input className="form-control" onChange={handleJudul.bind(this)} placeholder="Ketik disini ..." type="text" />
                                                                </div>

                                                                <div style={{ paddingTop: 20 }}>
                                                                    <h5 style={{ float: 'left' }}>Gambar Banner</h5>
                                                                    <input className="form-control" type="file" />
                                                                </div>

                                                                <div style={{ paddingTop: 20 }}>
                                                                    <img/>
                                                                </div>
                                                            </form>
                                                        </div>
                                                    </div>
                                                    <div class="modal-footer">
                                                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Batal</button>
                                                        <button type="button" class="btn btn-primary" >Simpan</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* End Modal */}
                                    <table class="table">
                                        <thead>
                                            <tr>
                                                <th scope="col">No</th>
                                                <th scope="col">Judul</th>
                                                <th scope="col">Gambar</th>
                                                <th scope="col">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row">1</th>
                                                <td>Mark</td>
                                                <td>Otto</td>
                                                <td><button className='btn btn-outline-danger'>Hapus</button></td>
                                            </tr>
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