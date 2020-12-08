import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ComponentStyles.css';

function Home() {
    return (
        <div className="cardStyle">
            <div className="card" style={{ width: '25rem' }}>
                <img className="card-img-top" style={{ height: '400px' }} src='https://images.complex.com/complex/image/upload/c_fill,dpr_auto,f_auto,fl_lossy,g_face,q_auto,w_1280/nqyq1tt3zvpcrgyaiaiw.jpg' alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">Shoe</h5>
                    <a style={{marginTop:'20px'}} href="#" className="btn btn-primary">Buy Now</a>
                </div>
            </div>
            <div className="card" style={{ width: '25rem' }}>
                <img className="card-img-top" style={{ height: '400px' }} src="https://cconnect.s3.amazonaws.com/wp-content/uploads/2019/09/Nike-Air-Jordan-34-2019-Blue-Void.jpg" />
                <div className="card-body">
                    <h5 className="card-title">Shoe</h5>
                    <a style={{marginTop:'20px'}} href="#" className="btn btn-primary">Buy Now</a>
                </div>
            </div>
            <div className="card" style={{ width: '25rem' }}>
                <img className="card-img-top" style={{ height: '400px' }} src='https://image.shutterstock.com/image-vector/pair-new-sport-running-shoes-260nw-1105919801.jpg' alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">Shoe</h5>
                    <a style={{marginTop:'20px'}} href="#" className="btn btn-primary">Buy Now</a>
                </div>
            </div>
            <div className="card" style={{ width: '25rem' }}>
                <img className="card-img-top" style={{ height: '400px' }} src='https://image.shutterstock.com/image-vector/pair-new-sport-running-shoes-260nw-1105919801.jpg' alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">Shoe</h5>
                    <a style={{marginTop:'20px'}} href="#" className="btn btn-primary">Buy Now</a>
                </div>
            </div>
            <div className="card" style={{ width: '25rem' }}>
                <img className="card-img-top" style={{ height: '400px' }} src='https://image.shutterstock.com/image-vector/pair-new-sport-running-shoes-260nw-1105919801.jpg' alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">Shoe</h5>
                    <a style={{marginTop:'20px'}} href="#" className="btn btn-primary">Buy Now</a>
                </div>
            </div>
            <div className="card" style={{ width: '25rem'}}>
                <img className="card-img-top" style={{ height: '400px' }} src='https://image.shutterstock.com/image-vector/pair-new-sport-running-shoes-260nw-1105919801.jpg' alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">Shoe</h5>
                    <a style={{marginTop:'20px'}} href="#" className="btn btn-primary">Buy Now</a>
                </div>
            </div>
        </div>
    )
}

export default Home;
