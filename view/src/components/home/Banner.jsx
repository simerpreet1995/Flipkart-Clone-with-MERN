import Carousel from 'react-multi-carousel'
import { bannerData } from '../../constants/data';
import styled from '@emotion/styled';
import 'react-multi-carousel/lib/styles.css';
import { Box } from '@mui/material';


const Image = styled('img')({
    width: '100%',
    height: 270

})


const responsive = {
    
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

const Banner = () =>{
    return (
        <Carousel 
        responsive={responsive}
        swipeable={false}
        draggable={false}
        infinite={true}
        autoPlay={true}
        keyBoardControl={true}
        autoPlaySpeed={3000}
        customTransition="all .3"
        transitionDuration={500}
        slidesToSlide={1}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        containerClass="carousel-container"

        >
            {
                bannerData.map((data, idx) =>(
                  <Box key={idx}>
                    <Image src={data.url} alt="" />
                    </Box>
                ))
            }
        </Carousel>

        
    )
};

export default Banner;