import React, { Component } from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';

export default class formAddSV extends Component {

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
                <div className='formAddSV'>
                    <Form onSubmit={this.handleOnSubmit}>
                        <Row className="mb-3 mt-4">
                            <Form.Group className='mb-1'>
                                <div className='inputInfo'>
                                    <label>Mã SV: </label>
                                    <input
                                        type='text'
                                        value={maSV}
                                        name='maSV'
                                        onChange={this.handleOnChange}
                                    />
                                </div>
                            </Form.Group>
                            <Form.Group className='mb-1'>
                                <label>Tên SV: </label>
                                <input
                                    type='text'
                                    value={tenSV}
                                    name='tenSV'
                                    onChange={this.handleOnChange}
                                />
                            </Form.Group>
                            <Form.Group className='mb-1'>
                                <label>Ngày Sinh: </label>
                                <input
                                    type='date'
                                    value={ngaySinh}
                                    name='ngaySinh'
                                    onChange={this.handleOnChange}
                                />
                            </Form.Group>
                            <Form.Group className='mb-1'>
                                <label>Giới Tính: </label>
                                <input
                                    type="radio"
                                    value="Nam"
                                    name="gioiTinh"
                                    onChange={this.handleOnChange}
                                />Nam
                                &nbsp;
                                <input
                                    type="radio"
                                    value="Nữ"
                                    name="gioiTinh"
                                    onChange={this.handleOnChange}
                                />Nữ
                            </Form.Group>
                            <Form.Group className='mb-1'>
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
                            </Form.Group>
                        </Row>

                        <Button type="submit">Submit form</Button>
                    </Form>
                </div>
            </div>






        );
    }


}
