import React, { Component } from 'react'

export default class BaiTapChonXe extends Component {
    state = {
        imgSrc: './img/car/products/red-car.jpg'//Giá trị mặc định của state
    }
    changeColor = (newColor) => {
        this.setState({
            imgSrc: './img/car/product/${newColor}-car.jpg'
        })
    }


    render() {
        return (
            <div>
                <div className="row mt-3 border border-dark p-5">
                    <div className="col-6">
                        //Hình ảnh của xe
                        <img onClick {() => {
                            this.changeColor('red')
                            })
                        }} src="./img/car/product/red-car.jpg" className="w-100" />
                    </div>
                    <div className="col-6">
                        //Nút option
                        <div className="card">
                            <div className="card-header bg-dark text-white">Exterior color
                            </div>
                            <div className="card-body">
                                <div class="row">
                                    <div className="col-2">
                                        <img src="./img/car/icons/icon-black.jpg" alt="" className="w-100" />
                                    </div>
                                    <div className="col-10">
                                        <h3>Black Color</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-3 border border-dark p-5">
                    <div className="col-6">
                        //Hình ảnh của xe
                        <img onClick {() => {
                            this.changeColor('red')
                            })
                        }} src="./img/car/product/red-car.jpg" className="w-100" />
                    </div>
                    <div className="col-6">
                        //Nút option
                        <div className="card">
                            <div className="card-header bg-dark text-white">Exterior color
                            </div>
                            <div className="card-body">
                                <div class="row">
                                    <div className="col-2">
                                        <img src="./img/car/icons/icon-silver.jpg" alt="" className="w-100" />
                                    </div>
                                    <div className="col-10">
                                        <h3>Silver Color</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-3 border border-dark p-5">
                    <div className="col-6">
                        //Hình ảnh của xe
                        <img onClick {() => {
                            this.changeColor('red')
                                imgSrc: './img/car/product/red-car.jpg'
                            })
                        }} src="./img/car/product/red-car.jpg" className="w-100" />
                    </div>
                    <div className="col-6">
                        //Nút option
                        <div className="card">
                            <div className="card-header bg-dark text-white">Exterior color
                            </div>
                            <div className="card-body">
                                <div class="row">
                                    <div className="col-2">
                                        <img src="./img/car/icons/icon-red.jpg" alt="" className="w-100" />
                                    </div>
                                    <div className="col-10">
                                        <h3>Red Color</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-3 border border-dark p-5">
                    <div className="col-6">
                        //Hình ảnh của xe
                        <img onClick () => {
                            this.changeColor('red')
                                imgSrc: './img/car/product/red-car.jpg'
                            }}
                        }} src="./img/car/product/red-car.jpg" className="w-100" />
                    </div>
                    <div className="col-6">
                        //Nút option
                        <div className="card">
                            <div className="card-header bg-dark text-white">Exterior color
                            </div>
                            <div className="card-body">
                                <div class="row">
                                    <div className="col-2">
                                        <img src="./img/car/icons/icon-steel.jpg" alt="" className="w-100" />
                                    </div>
                                    <div className="col-10">
                                        <h3>Steel Color</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

