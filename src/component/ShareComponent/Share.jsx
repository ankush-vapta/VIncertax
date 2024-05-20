import React from 'react'
import { Button } from '@mui/material';
import './share.css'

export const Share = ({ title, gotoLoginPage }) => {
    return (
        <>
            <Button
                className='button'
                onClick={() => { gotoLoginPage() }}
            >
                {title}
            </Button>
        </>
    )
}
