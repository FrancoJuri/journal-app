import { SaveOutlined } from "@mui/icons-material";
import { Button, Grid, TextField, Typography } from "@mui/material";
import { ImageGallery } from "../components";

const NoteView = () => {
    return (
        <Grid 
            container
            direction='row'
            justifyContent='space-between'
            alignItems='center'
            sx={{ mb: 1 }}
            className='animate__animated animate__fadeIn animate__faster'
        >

            <Grid item>
                <Typography fontSize={39} fontWeight='light'>
                    28 de Agosto, 2023
                </Typography>
            </Grid>

            <Grid item>
                <Button variant="contained" color="primary" sx={{ px: 2 }}>
                    <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
                    Guardar
                </Button>
            </Grid>

            <Grid container sx={{ mt: 2 }}>
                <TextField
                    type='text'
                    variant="filled"
                    fullWidth
                    placeholder="Ingrese un Título"
                    label='Título'
                    sx={{ border: 'none', mb: 1 }}
                />

                <TextField
                    type='text'
                    variant="filled"
                    fullWidth
                    multiline
                    placeholder="¿Qué sucedio en el día de hoy?"
                    minRows={5}
                />
            </Grid>

            <ImageGallery />

        </Grid>
    )
}

export default NoteView;