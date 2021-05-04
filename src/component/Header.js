import React from 'react'
import Button from './Button'

const Header = ({ title }) => {

    const onClick = () => {
        console.log('click');
    }

    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button color='steelblue' text='Add' onClick={onClick} />
        </header>
    )
}


export default Header
