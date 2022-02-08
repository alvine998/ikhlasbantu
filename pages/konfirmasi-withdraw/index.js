import React from 'react';
import Footer from '../../components/Footer';
import useMediaQuery from '../../components/MediaQuery';
import Navbar from '../../components/Navbar';

index.title = "Konfirmasi Withdraw"

function index(props) {

    let isBreakpoint = useMediaQuery(768);

    return (
        <div>
            <Navbar />
            <div style={{ paddingBottom: 30, paddingTop: 20 }}>
                <div className='container'>
                    <h2 style={{ fontWeight: "bold", textAlign: "center" }}><u>KONFIRMASI WITHDRAW</u></h2>
                    <div style={isBreakpoint ? { paddingLeft: 0, paddingRight: 0, paddingTop: 30 } : { paddingLeft: 450, paddingRight: 450, paddingTop: 30 }}>
                        <h5 style={{ textAlign: "center" }}>Dana Ditarik : </h5>
                        <hr />
                        <h5 style={{ textAlign: "center" }}>Potongan Biaya</h5>
                        <p style={{ textAlign: "center" }}>*Biaya Layanan : </p>
                        <p style={{ textAlign: "center" }}>Biaya Admin : Rp. 6.500,-</p>
                        <hr />
                        <h5 style={{ textAlign: "center" }}>Total Dana Ditarik : </h5>

                        <button className='btn btn-warning w-100'>
                            Konfirmasi
                        </button>
                    </div>
                    <div>
                        {
                            isBreakpoint ? (
                                <p>
                                    *Biaya Layanan dikenakan sebesar 10% dari dana
                                    yang akan ditarik.
                                </p>
                            ) : (
                                <p>
                                    *Biaya Layanan dikenakan sebesar 10% dari dana <br />
                                    yang akan ditarik.
                                </p>
                            )
                        }

                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default index;