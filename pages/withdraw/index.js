import axios from 'axios';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import NumberFormat from 'react-number-format';
import swal from 'sweetalert';
import Footer from '../../components/Footer';
import useMediaQuery from '../../components/MediaQuery';
import Navbar from '../../components/Navbar';

index.title = "Withdraw"

function index(props) {

    const [namaBank, setNamaBank] = useState('');
    const [norek, setNorek] = useState('');
    const [nama, setNama] = useState('');
    const [nominal, setNominal] = useState('');
    const [saldo, setSaldo] = useState('');

    const handlingBank = (e) => {
        setNamaBank(e.target.value)
    }
    const handlingNama = (e) => {
        setNama(e.target.value)
    }
    const handlingNominal = (e) => {
        setNominal(e.target.value)
    }
    const handlingNorek = (e) => {
        setNorek(e.target.value)
    }

    const getData = () => {
        var key = localStorage.getItem("wdKey");
        console.log(key);

        axios.get(`http://localhost:4000/donasis/${key}`).then(
            res => {
                console.log(res.data);
                const result = res.data;
                setSaldo(result.terkumpul)
            }
        )
    }

    const onVerification = () => {
        if(nominal > saldo){
            swal("Nominal tidak sesuai saldo dana",{icon:"warning"})
        }
    }

    useEffect(()=>{
        getData();
    },[])

    const isBreakpoint = useMediaQuery(768);
    return (
        <div>
            <Navbar />
            <div style={{ paddingBottom: 30 }}>
                <div style={{ paddingTop: 20 }}>
                    <h2 style={{ textAlign: "center", fontWeight: "bold" }}><u>WITHDRAW</u></h2>
                </div>
                <div className='container' style={{ paddingTop: 20 }}>
                    <div className='row'>
                        <div className='col-md'>
                            <h5>Data Kepemilikan Rekening</h5>
                            {
                                isBreakpoint ? (
                                    <div>
                                        <div style={{ width: "100%", height: "100%", borderStyle: "hidden", borderRadius: 10, backgroundColor: "gray" }}>
                                            <div className='container'>
                                                <div style={{ paddingTop: 20 }}>
                                                    <input value={namaBank} onChange={handlingBank.bind(this)} placeholder='Nama Bank' type={"text"} className='form-control' />
                                                </div>
                                                <div style={{ paddingTop: 10 }}>
                                                    <input value={norek} onChange={handlingNorek.bind(this)} placeholder='No Rekening' type={"text"} className='form-control' />
                                                </div>
                                                <div style={{ paddingTop: 10 }}>
                                                    <input value={nama} onChange={handlingNama.bind(this)} placeholder='Nama Pemilik Rekening' type={"text"} className='form-control' />
                                                </div>
                                                <div style={{ paddingTop: 10, paddingLeft: 10 }}>
                                                    <p style={{ color: "white" }}>Saldo Donasi : <NumberFormat value={saldo} displayType='text' thousandSeparator prefix='Rp ' />,-</p>
                                                </div>
                                                <div style={{ paddingTop: 10 }}>
                                                    <input value={nominal} onChange={handlingNominal.bind(this)} placeholder='Nominal Tarik Dana' type={"text"} className='form-control' />
                                                </div>
                                                <div style={{ paddingTop: 10, paddingBottom: 20 }}>
                                                    <button onClick={()=>{onVerification()}} className='btn btn-warning w-100'>Tarik Dana</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    <div>
                                        <div style={{ width: 500, height: "100%", borderStyle: "hidden", borderRadius: 10, backgroundColor: "gray" }}>
                                            <div className='container'>
                                                <div style={{ paddingTop: 20 }}>
                                                    <input value={namaBank} onChange={handlingBank.bind(this)} placeholder='Nama Bank' type={"text"} className='form-control' />
                                                </div>
                                                <div style={{ paddingTop: 10 }}>
                                                    <input value={norek} onChange={handlingNorek.bind(this)} placeholder='No Rekening' type={"text"} className='form-control' />
                                                </div>
                                                <div style={{ paddingTop: 10 }}>
                                                    <input value={nama} onChange={handlingNama.bind(this)} placeholder='Nama Pemilik Rekening' type={"text"} className='form-control' />
                                                </div>
                                                <div style={{ paddingTop: 10, paddingLeft: 10 }}>
                                                    <p style={{ color: "white" }}>Saldo Donasi : <NumberFormat value={saldo} displayType='text' thousandSeparator prefix='Rp ' />,-</p>
                                                </div>
                                                <div style={{ paddingTop: 10 }}>
                                                    <input value={nominal} onChange={handlingNominal.bind(this)} placeholder='Nominal Tarik Dana' type={"text"} className='form-control' />
                                                </div>
                                                <div style={{ paddingTop: 10, paddingBottom: 20 }}>
                                                    <button onClick={()=>{onVerification()}} className='btn btn-warning w-100'>Tarik Dana</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }

                        </div>
                        <div className='col-md'>
                            <div style={{ justifyContent: "center", alignItems: "center", display: "flex" }}>
                                <Image width={300} height={300} src={"/withdraw.jpg"} />
                            </div>
                            <p style={{ textAlign: "justify" }}>
                                * Data kepemilikan rekening yang telah dimasukkan
                                harus sesuai dengan buku rekening yang telah diupload
                                di halaman profil, jika tidak sama maka proses penarikan
                                dana akan ditolak.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default index;