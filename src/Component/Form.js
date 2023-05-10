import React, { Component } from 'react'

export default class Form extends Component {

    constructor(props) {
        super(props)
        this.state = {
            maSV: "",
            tenSV: "",
            ngaySinh: "",
            gioiTinh: "",
            khoa: "",
        }
    }

    handleOnChange = (e) => {
        let target = e.target;
        let value = target.value;
        let name = target.name;

        this.setState({
            [name]: value
        })


    }

    handleOnSubmit = (e) => {
        e.preventDefault();
        this.props.handleAddSV(this.state)
    }

    render() {
        const { maSV, tenSV, ngaySinh, gioiTinh, khoa, } = this.state
        return (
            <div className='formAddSV'>
                <form onSubmit={this.handleOnSubmit}>
                    <div className='inputInfo'>
                        <label>MaSV: </label>
                        <input
                            type='text'
                            value={maSV}
                            name='maSV'
                            onChange={this.handleOnChange}
                        />
                    </div>
                    <div className='inputInfo'>
                        <label>Tên SV: </label>
                        <input
                            type='text'
                            value={tenSV}
                            name='tenSV'
                            onChange={this.handleOnChange}
                        />
                    </div>
                    <div className='inputInfo'>
                        <label>Ngày Sinh: </label>
                        <input
                            type='date'
                            value={ngaySinh}
                            name='ngaySinh'
                            onChange={this.handleOnChange}
                        />
                    </div>
                    <div className='inputInfo'>
                        <label>Giới Tính: </label>
                        <input
                            type="radio"
                            value="Nam"
                            name="gioiTinh"
                            onChange={this.handleOnChange}
                        />Nam

                        <input
                            type="radio"
                            value="Nữ"
                            name="gioiTinh"
                            onChange={this.handleOnChange}
                        />Nữ
                    </div>
                    <div className='inputInfo'>
                        <label>Khoa: </label>
                        <select name='khoa' value={khoa} onChange={this.handleOnChange}>
                            <option value={'Toán'}>Toán</option>
                            <option value={'Lý'}>Lý</option>
                            <option value={'Hóa'}>Hóa</option>
                            <option value={'Anh'}>Anh</option>
                            <option value={'Văn'}>Văn</option>
                            <option value={'Sử'}>Sử</option>
                            <option value={'Địa'}>Địa</option>
                        </select>
                    </div>
                    <button type='submit'>Submit</button>
                </form>
            </div>
        )
    }
}
