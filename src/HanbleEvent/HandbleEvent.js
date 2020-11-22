import React, { Component } from 'react'

export default class HandbleEvent extends Component {
    showMess = () => {
        alert('WOW Nice to meet U');
    }

    showInfo = (info) => {
        alert(info);
    }


    render() {
        return (
            <div className="container">
                <h3>Handble Event</h3>
                <button onClick={this.showMess}>Click Me Now</button>

                <button onClick={() => {
                    alert('hello${title}');
                }}>Show message</button>

                <button onClick={() => {
                    this.showInfo('HELLO')
                }}>Show info</button>

                {/* Cách cũ ít người không cần dùng */}
                <button onClick={this.showInfo.bind(this, 'Hello')}>Show Info</button>
            </div>
        )
    }
}
