import React, { Component } from 'react'

export default class RenderWithMap extends Component {
    products = [
        { id: '1', name: 'Iphone', price: '1000' },
        { id: '2', name: 'IphoneX', price: '2000' },
        { id: '3', name: 'IphoneXL', price: '3000' },
    ]

    renderProduct = () => {
        let a = [];
        for (let index in this.products) {
            //Mỗi lần duyệt lấy ra 1 đối tượng
            let product = this.products[index];
            //từ đối tượng sản phẩm tạo ra 1 đối tượng jsx
            let jsxProduct = <div className="col-4">
                <div className="card">
                    <img className="card-img-top" src="http://picsum.photos/200" alt="" />
                </div>
                <div className="card-body">
                    <h4 className="card-title">{product.name} </h4>
                    <p className="card-text">{product.price} </p>
                </div>
            </div>
        }
    }

    renderTable = () => {
        return this.products.map((product, index) => {
            return <tr key={index}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
            </tr>
        })
    }

    renderProductWithMap = () => {
        const arrJSX = this.products.map((product, index)) => {
            return <div classname="col-4" key={index}>
                <img classname="card-img-top" src="holder.js/100px180/" alt />
                <div classname="card">
                    <h4 classname="card-title">{product.name}</h4>
                    <p classname="card-text">{product.price}</p>
                </div>
            </div>
        }
    }

    render() {


        console.log([
            <p>Hello</p>,
            <p>WOW</p>,
        ])
        return (
            <div className="container">
                <div class="row">
                    {this.renderProduct()}
                </div>
            </div>
        )
    }
}
