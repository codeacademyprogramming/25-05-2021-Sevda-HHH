import React from 'react'
import imgs from '../../img/pic1 5.png'
export const CardBasket = () => {
    return (
        <div id="card">
            <a id="button" className="show"></a>
            <div className="cardData " className="show">
                <h3 className="head">
                    Your Cart
        </h3>
                <ul className="list-unstyled">
                    <li className="d-flex">
                        <img src={imgs} alt="product image" />
                        <div className="count">

                        </div>
                        <div className="des">
                            <div className="title">
                                Cheesy bites trio shrimp pizza
                    </div>
                            <div className="siz">
                                <b>
                                    size: small
                        </b>
                            </div>
                        </div>
                        <div className="price">
                            12.0$
                </div>
                    </li>
                    <li className="d-flex">
                        <img src={
                            imgs
                        } alt="product image" />
                        <div className="count">
                            1x
                </div>
                        <div className="des">
                            <div className="title">
                                Cheesy bites trio shrimp pizza
                    </div>
                            <div className="siz">
                                <b>
                                    size: small
                        </b>
                            </div>
                        </div>
                        <div className="price">
                            12.0$
                </div>
                    </li>
                    <li className="d-flex">
                        <img src={imgs} alt="product image" />
                        <div className="count">
                            1x
                </div>
                        <div className="des">
                            <div className="title">
                                Cheesy bites trio shrimp pizza
                    </div>
                            <div className="siz">
                                <b>
                                    size: small
                        </b>
                            </div>
                        </div>
                        <div className="price">
                            12.0$
                </div>
                    </li>
                    <li className="d-flex">
                        <img src={imgs} alt="product image" />
                        <div className="count">
                            1x
                </div>
                        <div className="des">
                            <div className="title">
                                Cheesy bites trio shrimp pizza
                    </div>
                            <div className="siz">
                                <b>
                                    size: small
                        </b>
                            </div>
                        </div>
                        <div className="price">
                            12.0$
                </div>
                    </li>
                </ul>
            </div>
        </div>

    )
}

