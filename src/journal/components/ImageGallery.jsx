import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

const ImageGallery = ({ images }) => {

  if(!images?.length) return <></>;

  return (
    <ImageList sx={{ margin: '0 auto', mt: 4, width: '80%', height: 500, '::-webkit-scrollbar': { display: 'none'} }} cols={5} rowHeight={ 260 }>
      {
        images.map((image) => (
          <ImageListItem key={image}>
            <img
              src={`${image}?w=164&h=164&fit=crop&auto=format`}
              srcSet={`${image}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              alt='Imagen de la nota'
              loading="lazy"
            />
          </ImageListItem>
        ))
      }
    </ImageList>
  );
}

export default ImageGallery;