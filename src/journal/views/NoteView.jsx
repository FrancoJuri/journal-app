import { useEffect, useMemo, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DeleteOutline, SaveOutlined, UploadOutlined } from "@mui/icons-material";
import { Button, Grid, IconButton, TextField, Typography } from "@mui/material";
import { useForm } from "../../hooks/useForm";
import { ImageGallery } from "../components";
import { setActiveNote } from "../../store/journal/journalSlice";
import { startDeletingNote, startSavingNote, startUploadingFiles } from "../../store/journal/thunks";
import Swal from "sweetalert2";
import 'sweetalert2/dist/sweetalert2.css';
import { format } from 'date-fns';
import { es } from "date-fns/locale/es";
import Footer from "../../ui/components/Footer";

const NoteView = () => {

    const dispatch = useDispatch();

    const { active: note, messageSaved, isSaving } = useSelector(state => state.journal);

    const { title, body, date, onInputChange, formState } = useForm(note);

    const dateString = useMemo(() => {
        const formattedDate = format(date, 'PPpp', {
            locale: es,
        });
        
        return formattedDate;
    }, [date])

    const fileInputRef = useRef();

    useEffect(() => {
        dispatch(setActiveNote(formState));
    }, [formState])

    useEffect(() => {
        if(messageSaved.length <= 0) return;

        Swal.fire('Nota actualizada', messageSaved, 'success');
    }, [messageSaved])

    const onSaveNote = () => {
        dispatch(startSavingNote());
    }

    const onFileInputChange = ({target}) => {
        if(target.files === 0) return;
        
        dispatch(startUploadingFiles(target.files));
    }

    const onDelete = () => {
        dispatch(startDeletingNote());
    }

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
                    {dateString}
                </Typography>
            </Grid>

            <Grid item display='flex' gap={3} sx={{ mt: { xs: 1, sm: 0 }}}>

                <input 
                    ref={fileInputRef} 
                    type="file" 
                    accept="image/*" 
                    multiple 
                    onChange={onFileInputChange} 
                    style={{ display: 'none' }} 
                />

                <IconButton disabled={isSaving} color="primary" onClick={() => {
                    fileInputRef.current.click();
                }}>
                    <UploadOutlined />
                </IconButton>

                <Button disabled={isSaving} onClick={onSaveNote} variant="contained" color="primary" sx={{ px: 2 }}>
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
                    name="title"
                    value={title}
                    onChange={onInputChange}
                    sx={{ border: 'none', mb: 1 }}
                />

                <TextField
                    type='text'
                    variant="filled"
                    fullWidth
                    multiline
                    placeholder="¿Qué sucedio en el día de hoy?"
                    minRows={5}
                    name="body"
                    value={body}
                    onChange={onInputChange}
                />
            </Grid>

            <Grid container justifyContent='start'>

                <Button onClick={onDelete} variant='contained' color="error" sx={{ mt: 2 }}>
                    <DeleteOutline sx={{ mr: 1 }} />
                    Borrar Nota
                </Button>

            </Grid>


            <ImageGallery images={note?.imageUrls} />

        </Grid>
    )
}

export default NoteView;