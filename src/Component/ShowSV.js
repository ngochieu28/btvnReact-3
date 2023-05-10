import React, { Component } from 'react'
import Form from './Form'
import "./style.scss"

export default class ShowSV extends Component {

    constructor(props) {
        super(props)
        this.state = {
            sinhVien: [
                { maSV: 'A01', tenSV: 'Nguyễn Anh Tuấn', ngaySinh: '2001-01-01', gioiTinh: 'Nam', khoa: 'Toán' },
                { maSV: 'A02', tenSV: 'Phạm Thị Hồng Nhung', ngaySinh: '2002-02-02', gioiTinh: 'Nữ', khoa: 'Lý' },
            ]
        }
    }

    handleAddSV = (nSinhVien) => {
        let isMaSVExisted = this.state.sinhVien.some((item) => item.maSV === nSinhVien.maSV);
        if (isMaSVExisted) {
            alert("MaSV đã tồn tại !!")
            return;
        }
        else {
            this.setState({
                sinhVien: [...this.state.sinhVien, nSinhVien]
            })
        }

    }
    render() {
        const { sinhVien } = this.state
        return (
            <>
                <div className='DisplayArea-container'>
                    <table>
                        <thead>
                            <tr>
                                <td></td>
                                <td>Mã SV</td>
                                <td>Tên sinh viên</td>
                                <td>Ngày sinh</td>
                                <td>Giới tính</td>
                                <td>Khoa</td>
                                <td></td>
                            </tr>
                        </thead>
                        <tbody>
                            {sinhVien.map((item) => {
                                return (
                                    <tr key={item.maSV}>
                                        <td><input type='checkbox' /></td>
                                        <td>{item.maSV}</td>
                                        <td>{item.tenSV}</td>
                                        <td>{item.ngaySinh}</td>
                                        <td>{item.gioiTinh}</td>
                                        <td>{item.khoa}</td>
                                        <td>
                                            <button>Edit</button>
                                            &nbsp;
                                            <button>Delete</button>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>

                <Form handleAddSV={this.handleAddSV} />
            </>
        )
    }
}
