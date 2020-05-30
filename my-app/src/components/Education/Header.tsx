import React, { useState, useEffect } from 'react'

import Modal from 'react-modal'
import { serachUniversities } from '../../config/api'
import axios from 'axios'

import './css/header.css'

interface University {
    name: string,
    country: string,
}

interface EducationInstitute {
    name: string,
    degree: string,
    field: string,
    startYear: number,
    endYear: number,
    grade?: string | null,
    description?: string | null,
}

const customStyle = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.75)'
    }
};

Modal.setAppElement('body');

const Header = (props: any) => {

    const [username] = useState(props.username);
    
    const [modalIsOpen, setIsOpen] = useState<boolean>(false);

    const [instituteName, setInstituteName] = useState<string>('');

    const [options, setOptions] = useState<Array<University>>([]);

    const [newEducation, setNewEducation] = useState<EducationInstitute>(Object);
    
    const openModal = (): void => setIsOpen(true);
    
    const closeModal = (): void => {
        setIsOpen(false);
        clearFormData();
    }

    const clearFormData = (): void => {
        setInstituteName('');
        setNewEducation(Object);
    }

    useEffect(() => {
        searchHandler();
    }, [instituteName]);

    const nameHandler = (name: string): void => {
        setInstituteName(name);
        setNewEducation({ ...newEducation, name: name});
        setOptions([]);
    }

    const degreeHandler = (e: any): void => {
        setNewEducation({ ...newEducation, degree: e.target.value});
    }

    const fieldHandler = (e: any): void => {
        setNewEducation({ ...newEducation, field: e.target.value});
    }

    const startYearHandler = (e: any): void => {
        setNewEducation({ ...newEducation, startYear: e.target.value });
    }
    
    const endYearHandler = (e: any): void => {
        setNewEducation({ ...newEducation, endYear: e.target.value });
    }

    const gradeHandler = (e: any): void => {
        setNewEducation({ ...newEducation, grade: e.target.value});
    }

    const descriptionHandler = (e: any): void => {
        setNewEducation({ ...newEducation, description: e.target.value});
    }

    const searchHandler = async () => {
        if(instituteName.length>=1){
            axios.get(serachUniversities(), {params: {name: instituteName}})
            .then(res => {
                setOptions(res.data);
            })
            .catch(e => console.log(e));
        } else {
            setOptions([]);
        }
    }

    const submitHandler = (e: any): void => {
        e.preventDefault();
        console.log(newEducation);
        closeModal();
    }

    return (
        <div className='educationHeader'>
            <h1>Welcome to {username}'s education page.</h1>
            <button onClick={openModal}>Add new education</button>
            <Modal 
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyle} >
                
                <h2 className='educationModalTitle'>Enter Institute Details</h2>
                {/* <button onClick={closeModal}>X</button> */}
                <hr />
                <br />
                <form className='addEducationForm' onSubmit={submitHandler}>
                    <table>
                        <tbody>
                            <tr>
                                <td>Name <span>*</span></td>
                                <td>
                                    <input type='text' id='instituteName' value={instituteName} onChange={(e) => setInstituteName(e.target.value)} required />
                                    {(options.length>0)?<ul id='instituteList'>
                                        {options.map((op, index) => {
                                            return <li key={index} onClick={() => nameHandler(op.name + ', ' + op.country)} >
                                                {op.name}, {op.country}
                                                </li>
                                        })}
                                    </ul> : null}
                                </td>
                            </tr>
                            
                            <tr>
                                <td>Degree <span>*</span></td>
                                <td>
                                    <select required onChange={degreeHandler}>
                                        <option value=''>Select</option>
                                        <option value='High School'>High School</option>
                                        <option value='High School Diploma / GED'>High School Diploma / GED</option>
                                        <option value='Bachelor'>Bachelor</option>
                                        <option value='Master'>Master</option>
                                        <option value='PhD'>PhD</option>
                                    </select>
                                </td>
                            </tr>

                            <tr>
                                <td>Field of study <span>*</span></td>
                                <td><input type='text' onChange={fieldHandler} required/></td>
                            </tr>

                            <tr>
                                <td>Start Year <span>*</span></td>
                                <td><input type='number' min={1900} max={2100} onChange={startYearHandler} required /></td>
                            </tr>

                            <tr>
                                <td>End Year(or Expected) <span>*</span></td>
                                <td>
                                    <input type='number' min={newEducation.startYear} max={2100} onChange={endYearHandler} required /><br />
                                </td>
                            </tr>

                            <tr>
                                <td>Grade</td>
                                <td><input type='text' onChange={gradeHandler} /></td>
                            </tr>

                            <tr>
                                <td>Description</td>
                                <td><textarea onChange={descriptionHandler} /></td>
                            </tr>

                            <tr>
                                <td colSpan={2}>
                                    <span>*</span> Please fill all the marked fields
                                </td>
                            </tr>

                            <tr>
                                <td></td>
                                <td>
                                    <input type='submit' value='Add' />
                                    <button onClick={closeModal}>X</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                </form>
            </Modal>
        </div>
    )
}

export default Header
