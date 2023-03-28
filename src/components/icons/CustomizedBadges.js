import * as React from 'react';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useRouter } from 'next/router'

 const CustomizedBadges = ({icon,productsCount,path}) => {
  const router = useRouter();
    let count = Number(productsCount)
   const badgeStyles = {
    '& .MuiBadge-badge': {
         backgroundColor : 'badge.bgcolor',
         color : 'badge.color'
      }
 }

 const handleClick = (path) =>{

  router.push(path)
 }
 
  return (
    <IconButton sx = {{borderRadius : '50%', width : '40px', margin : 'auto'}} onClick = {() => handleClick(path)}>
      <Badge sx = {badgeStyles} badgeContent = {count} invisible = { count > 0 ? false : true } >
        {icon}
      </Badge>
    </IconButton>
  );
}

export default CustomizedBadges;