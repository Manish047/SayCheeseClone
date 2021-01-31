import React from 'react';

function NextArrow(props) {
    const { onClick, inside } = props;
    return (
        <div style={{ display: "block", zIndex: 1, position: 'absolute', right: inside ? '3%' : '-10%', top: '42.5%' }} onClick={onClick} >
            <i className="fas fa-chevron-right" style={{ cursor: 'pointer', fontSize: '1.3rem', color: 'rgb(252, 2, 77)' }} ></i>
        </div>
    );
}

function PrevArrow(props) {
    const { onClick, inside } = props;
    return (
        <div style={{ display: "block", zIndex: 1, position: 'absolute', left: inside ? '3%' : '-10%', top: '42.5%' }} onClick={onClick}>
            <i className="fas fa-chevron-left" style={{ cursor: 'pointer', fontSize: '1.3rem', color: 'rgb(252, 2, 77)' }}></i>
        </div>
    );
}

export { NextArrow, PrevArrow };