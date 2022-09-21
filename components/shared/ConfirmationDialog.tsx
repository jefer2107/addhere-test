import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Paper from '@material-ui/core/Paper';
import Draggable from 'react-draggable';

interface IConfirmationDialogProps {
    handleCancel: any;
    handleConfirm: any;
    title: string;
    subtitle: string;
    confirmTitle: string;
    cancelTitle: string;
    open: boolean;
}

 const ConfirmationDialog: React.FC<IConfirmationDialogProps> = ({ open, handleCancel, handleConfirm, title, subtitle, confirmTitle, cancelTitle }) => {

        return (
            <div>

            <Dialog
                open={open}
                onClose={handleCancel}
                PaperComponent={PaperComponent}
                aria-labelledby="draggable-dialog-title"
            >

                <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
                { title }
                </DialogTitle>
                
                <DialogContent>
                
                    { subtitle && <DialogContentText>
                        {subtitle}
                    </DialogContentText> }

                </DialogContent>

                <DialogActions>
                
                    <Button autoFocus onClick={handleCancel} color="primary">
                        {cancelTitle}
                    </Button>
                    
                    <Button onClick={handleConfirm} color="primary">
                        {confirmTitle}
                    </Button>

                </DialogActions>

            </Dialog>

            </div>
        );
}

function PaperComponent(props) {
    return (
      <Draggable handle="#draggable-dialog-title" cancel={'[class*="MuiDialogContent-root"]'}>
        <Paper {...props} />
      </Draggable>
    );
}

export default ConfirmationDialog;