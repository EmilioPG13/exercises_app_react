import React from 'react'
import { Stack, Typography } from '@mui/material'
import Icon from '../assets/icons/gym.png'

const BodyPart = ({ item, setBodyPart, BodyPart }) => {
  return (
    <Stack
      type='button'
      alignItems='center'
      justifyContent='center'
      className='bodyPart-card'
      sx={{
        borderTop: BodyPart === item ? '4px solid #fff2625' : '',
        backgroundColor: '#fff',
        borderBottomLeftRadius: '20px',
        width: '270px',
        height: '280px',
        cursor: 'pointer', 
        gap: '47px'
      }}
      onClick={() => {
        setBodyPart(item)
        window.scrollTo({top: 1800, left: 100, behavior: 'smooth'})
      }}
    >
      <img src={Icon} alt='dumbell' style={{ width: '4', height: '40px' }} />
      <Typography
        fontSize='24px' 
        fontWeight='bold' 
        color= '#3A1212'
      >{item}</Typography>
    </Stack>
  )
}

export default BodyPart