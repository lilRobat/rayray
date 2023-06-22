import { Box, Card, CardContent, IconButton, Typography } from "@mui/material";
import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';


const StudyProgramCard = ({shortName, programName, handleOpen}) => {
    return(
        <Card>
            <CardContent>
                <Box>
                    <Typography variant="h5">{shortName}</Typography>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>{programName}</Typography>
                </Box>
                <Typography>Vorlesungen</Typography>
                <Box>

                </Box>
                <Typography>Dozenten</Typography>
                <Typography>Klassen</Typography>
                <Box sx={{ display: 'flex', justifyContent: 'flex-end', marginTop: 'auto' }}>
                
                <IconButton aria-label="add to favorites">
          <DeleteIcon />
        </IconButton>
        <IconButton aria-label="share" onClick={handleOpen}>
          <EditIcon />
        </IconButton>
                </Box>
            </CardContent>
        </Card>
    );
}
export default  StudyProgramCard;