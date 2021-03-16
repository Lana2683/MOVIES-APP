import React from 'react';
import PropTypes from 'prop-types';

import { TextInput } from './TextInput';

export const MovieModal = ({ text, isEdit, isDelete, toggleMovieModal }) => (
    <div className="add-modal">

        <form className="modal-content">
            <span className="close-modal font-size-bg" onClick={toggleMovieModal}>&#x2715;</span>
            <ul>
                <span className="title">{text.toUpperCase()}</span>
                {isEdit && (
                    <li className="first-input text-input">
                        <span className="label">MOVIE ID</span>
                        <span>MKJYF3984</span>
                    </li>
                )}
                {isDelete ? (
                    <li className="first-input">
                        <span>Are you sure you want to delete this movie?</span>
                    </li>
                ) : (
                    <>
                        <li className={!isEdit ? 'first-input' : ''}>
                            <TextInput title={'title'} type={'text'} placeholder={'Select Title'}/>
                        </li>
                        <li>
                            <TextInput title={'release date'} type={'text'} placeholder={'Select Date'}/>
                        </li>
                        <li>
                            <TextInput title={'movie url'} type={'text'} placeholder={'Movie URL here'}/>
                        </li>
                        <li>
                            <TextInput title={'genre'} type={'select'} placeholder={'Select Genre'}/>
                        </li>
                        <li>
                            <TextInput title={'overview'} type={'text'} placeholder={'Overview here'}/>
                        </li>
                        <li>
                            <TextInput title={'runtime'} type={'text'} placeholder={'Runtime here'}/>
                        </li>
                    </>
                )}
            </ul>
            <div className="btns-wrapper">
                {isDelete ? (
                    <button className="sbmt-btn border-r">CONFIRM</button>
                ) : (
                    <>
                        <button className="rst-btn border-r">RESET</button>
                        <button className="sbmt-btn border-r">SUBMIT</button>
                    </>
                )}
            </div>
        </form>
    </div>
);

MovieModal.prototypes = {
    text: PropTypes.string.isRequired,
    toggleMovieModal: PropTypes.func.isRequired,
    isEdit: PropTypes.bool.isRequired,
    isDelete: PropTypes.bool.isRequired,
}

export default MovieModal;
