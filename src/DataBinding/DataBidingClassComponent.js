import React, { Component } from 'react'

export default class DataBidingClassComponent extends Component {
    sinhVien = {
        ma: '0001',
        ten: 'Nguyen A',
        hinhAnh: '',
    }

    renderPicture = () => {
        return <img src={this.sinhVien.hinhAnh} width="300" height="300" alt=""></img>
    }

    render() {
        const title = "fondend54";
        const renderTitle = () => {
            return <p className="text-danger">
                {title}
            </p>
        };
        return (
            <div>
                <h3>React Databiding Component</h3>
                <p>Tiêu đề: {title}</p>
                {renderTitle()}
                <h3>Thông tin sinh viên</h3>
                <ul>
                    <li>Mã sinh viên:{this.sinhVien.ma}</li>
                    <li>Mã sinh viên:{this.sinhVien.ten}</li>
                    <li><img src={this.sinhVien.hinhAnh} width="200" height="200"></img>
                    </li>
                </ul>
            </div>
        )
    }
}
