import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

const ImageGallery = ({ images }) => {

  if(!images?.length) return <></>;

  return (
    <ImageList sx={{ width: '100%', height: 'auto', pb: 3 }} cols={3}>
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