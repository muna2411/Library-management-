import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Link } from 'react-router-dom';

const Card = ({cards}) => {
    const {image,category_name } = cards;

    return (
        <div>
<div >
                <div >
           
                   <div  className='hero w-[300px] '> 
                    <img className='w-[300px] h-[600px]' src={image}  />
                    <div className='mb-[-520px] hero-overlay bg-opacity-60 h-[80px]'>
                    <div className='flex justify-around items-center'>
                    <i className='text-[50px] text-white text-center'>{category_name}</i>
                    <Link to={`/book`}>  <button className='text-white text-[20px]' style={{ textDecoration: 'underline'}}>Show More</button> </Link>
                    </div>
                    </div>
                    </div>
            
                </div> 
           </div>

        </div>
    );
};

export default Card;
