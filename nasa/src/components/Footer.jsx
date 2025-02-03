import React from 'react'

export default function Footer(props) {
    const { showModal, handleToggleModal, data } = props
  return (
    <footer>
        <div className='bgGradient'>
            <h2>{data?.title}</h2>
            <h1>APOD PROJECT</h1>
        </div>
        <button onCLick={handleToggleModal}>
            <i className='fa-solid fa-circle-info'></i>
        </button>
    </footer>
  
    )
}
