import React from 'react';
import Navadmin from '../../components/NavAdmin';
import NavMain from '../../components/NavMain';
import styles from '../../styles/Home.module.css'

Banner.title = "Banner"

function Banner(props) {
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
                                    <button className='btn btn-outline-primary'>Tambah Banner</button>
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