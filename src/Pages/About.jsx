import { Box, Button, Container, Typography } from '@mui/material'
import React from 'react'

const About = () => {
  return (
    <>
    <Container>
      <Box display={'flex'}>
      <Box p={5} bgcolor={'primary.light'} width={"50%"}>
        <Typography
        variant='h3'
        color={'white'}
        textAlign={'center'}
        fontWeight={'bold'}
        sx={{textDecoration:"underline"}} marginBottom={'10px'}
        >
          About Us
        </Typography>
        <Typography
        color={'white'}
        variant='body1'
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam unde, excepturi consequuntur modi aut nulla perspiciatis debitis hic voluptas quia nobis ad repellat natus, vel voluptatem rem dolor? Non similique placeat aliquid incidunt quasi vel veniam. Sunt modi eos fugit tempora vero, dolores id voluptate qui unde consectetur cupiditate neque culpa illo ducimus odio praesentium omnis accusamus. Nemo, ea. Ratione odio esse deserunt autem quod incidunt provident cumque saepe vel, magni nesciunt excepturi maxime nobis doloribus sapiente ut? Error, alias facere repudiandae eos amet impedit? Excepturi harum earum in nulla natus, architecto mollitia accusamus vero dolores tempora eum perspiciatis. Reiciendis.
        </Typography>
        <Button variant='contained' sx={{marginRight:"5px"}}>Subscribe</Button>
        <Button variant='outlined' sx={{bgcolor:'white'}}>Contact US</Button>
      </Box>
      <Box bgcolor={'secondary.main'} p={5} width={'50%'}>

      </Box>
    </Box>
    </Container>
    </>
  )
}

export default About