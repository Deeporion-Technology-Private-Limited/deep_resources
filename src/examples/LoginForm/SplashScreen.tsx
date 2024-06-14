import { Box, Button, Text } from '@/components'
import { TextWeight, TextSize, Alignment } from '@/utils/style'
import React from 'react'
import { Login } from './type'
import background from '../../images/backimage.png'

const SplashScreen = () => {
  return (
    <Box className=" w-[100vw] flex items-center justify-between">
    <Box className="w-[50vw] flex justify-center flex-col items-center">
      <Text
        weight={TextWeight.Bold}
        className="absolute left-7 top-5 text-2xl"
      >
        {Login.Logo}
      </Text>
      <Box className="flex flex-col gap-4 items-center">
        <Text weight={TextWeight.Bold} size={TextSize.XXl} className='w-80' align={Alignment.Center}>
          {Login.Elevate}
        </Text>

        <Box className="flex flex-col">
        
          <Text size={TextSize.Small}>
            {Login.Enheance}
          </Text>
        </Box>
      </Box>
    </Box>
    <Box className="relative">
      <img src={background} alt="img" />
      <Text
        className="absolute bottom-28 left-56 w-96 text-center text-white text-3xl"
        weight={TextWeight.Bold}
      >
        {Login.NewShopping}
      </Text>
    </Box>
  </Box>
  )
}

export default SplashScreen