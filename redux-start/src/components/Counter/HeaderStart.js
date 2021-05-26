import React from 'react'
import logos from '../../img/logos 1.png'
import pizza from '../../img/piza 2.png'
import product1 from '../../img/image 19.png'
import product2 from '../../img/qoroshki.PNG'
import product3 from '../../img/image 20 1.png'
import product4 from '../../img/image 27.png'
import product5 from '../../img/qoroshki.PNG'


export const HeaderStart = () => {
    return (
        <header>
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light ">
                    <div className="container-fluid">
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav col-lg-5  mb-2 mb-lg-0">
                                <li className="nav-item ">
                                    <a className="nav-link text-dark" aria-current="page" href="#">Payment</a>
                                </li>
                                <li className="nav-item ">
                                    <a className="nav-link text-dark" href="#">About Us</a>
                                </li>
                                <li className="nav-item ">
                                    <a className="nav-link text-dark" href="#" aria-disabled="true">Contact</a>
                                </li>
                            </ul>
                            <div className="navbar-nav me-auto col-lg-3 mb-2 mb-lg-0">

                                <img src={logos} alt="logo " />
                            </div>
                            <div className="navbar-nav headerInfo justify-content-between d-flex col-lg-3 mb-2 mb-lg-0">
                                <div className="date">
                                    Daily 11am - 9pm
                        </div>
                                <div className="d-flex">
                                    <img src="assets/img/Group 31.png" className="phoneIcon" alt="" />
                                    <div className="phoneNum">0 800 33 08 98</div>
                                </div>

                            </div>
                        </div>
                    </div>
                </nav>
            </div>
            <section id="intro">
                <div className="intoHead row justify-content-center">
                    <div className="col-lg-8 text-center">
                        <h4 className="title">
                            Food delivery in Kovel
                </h4>
                    </div>
                    <div className="col-lg-6 text-center">
                        <p className="des">
                            If you decide to relax or have unexpected guests, call us. We make sure that your vacation is
                            comfortable, enjoyable and delicious
                </p>

                    </div>
                    <div className="d-flex justify-content-center">
                        <img className="w-50" src={pizza} alt="pizza" />
                    </div>
                    <div className="product1">
                        <img src={product1} alt="" />
                    </div>
                    <div className="product2">
                        <img src={product2} alt="" />
                    </div>
                    <div className="product3">
                        <img src={product3} alt="" />
                    </div>
                    <div className="product4">
                        <img src={product4} alt="" />
                    </div>
                    <div className="product5">
                        <img src={product5} alt="" />
                    </div>
                </div></section>
        </header >

    )
}

