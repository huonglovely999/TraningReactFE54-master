import React, { Component } from 'react'

export default class DemoState extends Component {

    //State là thuộc tính có sắn của component => dùng để quản lý người dùng dữ liệu thay đổi trên giao diện khi người dùng thao tác (click,change,blur...)
    state = {
        isLogin: false
    }

    // isLogin = false;
    userName = 'Hưởng';

    renderContent = () => {
        if (this.state.isLogin)
            return <p>
                Hello! {this.userName}
            </p>
        return <button onClick={() => {
            this.handleLogin();
        }} className="btn btn-danger">Đăng nhập</button>
    }



    handleLogin = () => {
        //Không được thay đổi state trực tiếp mà phải thông qua phương thức this.setState

        // this.state.isLogin = true;
        // console.log('isLogin', this.state.isLogin);

        //setState(): là phương thức có sẳn của lớp đối tượng component=>dùng để thay đổi giá trị trong this.state đồng thời gọi lại render

        this.setState = ({
            isLogin: true
        });

    }

    render() {
        return (
            <div className="container">
                <h3>IF ELSE REACT</h3>
                {this.renderContent()}
            </div>
        )
    }
}
