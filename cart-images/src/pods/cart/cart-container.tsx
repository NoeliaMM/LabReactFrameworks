import { useCartContext } from '@/core/provider';
import React from 'react';
import { CartComponent } from './components/cart-component';
import { PictureCart } from './cart.vm';


export const CartContainer: React.FC = () => {
    const { data } = useCartContext();
    const [pictures, setPictures] = React.useState<PictureCart[]>([]);   

    React.useEffect(()=>{
        setPictures(data.filter((x)=>x.selected));
    },[data])
  
    return (
        <CartComponent pictures={pictures}/>    
    );
  };
  