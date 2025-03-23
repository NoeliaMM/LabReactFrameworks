import { useCartContext } from '@/core/provider';
import { Avatar, Grid, IconButton, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import React from 'react';
import { PictureInfo } from '../images1';


// interface PictureInfo {
//     id : string; 
//     picUrl: string; 
//     title: string; 
//     selected: boolean; 
// }


export const CartScene: React.FC = () => {
    const { removeItem, data } = useCartContext();
    const [pictures, setPictures] = React.useState<PictureInfo[]>([])
    
    const dense = false;
    const secondary = false;    

    React.useEffect(()=>{
        setPictures(data.filter((x)=>x.selected));
    },[data])
  
    return (
      <aside>
        <Grid item xs={12} md={6} sx={{ borderLeft: '2px solid', height: '100%', ml: 3 }}>
          <Typography sx={{ mb: 2, display: 'inline-flex', alignItems: 'start' }} variant="h6" component="div">
            <ShoppingCartIcon sx={{ fontSize: 24, ml: 1, mt: 0.5 }} />
            <h2 style={{ margin: 0 }}>Cart</h2>
          </Typography>
          {pictures.map((picture) => (
           
            (<List dense={dense} key={picture.id}>
              <ListItem
                secondaryAction={
                  <IconButton edge="end" aria-label="delete" onClick={() => removeItem(picture.id)}>
                    <DeleteIcon sx={{ color: 'default', fontSize: 20 }} />
                  </IconButton>
                }
              >
                <ListItemAvatar>
                  <Avatar alt={picture.title} src={picture.picUrl} />
                </ListItemAvatar>
                <ListItemText
                  primary="Single-line item"
                  secondary={secondary ? picture.title : null}
                />
              </ListItem>
            </List>) 
            
          ))}
        </Grid>
      </aside>
    );
  };
  