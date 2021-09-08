import { PrimaryButton, SecondaryButton } from 'components/Buttons';
import { Dialog, DialogContent, DialogOptions, DialogText, DialogTitle } from 'components/Dialog';
import * as React from 'react';

interface DeleteDialogProps {
  zIndex: number;
  isOpen: boolean;
  onClose: React.MouseEventHandler<HTMLButtonElement>;
  deleteDrawing: React.MouseEventHandler<HTMLButtonElement>;
}

function DeleteDialog({ isOpen, zIndex, onClose, deleteDrawing }: DeleteDialogProps) {
  const deleteDrawingAndClose = (event: React.MouseEvent<HTMLButtonElement>) => {
    deleteDrawing(event);
    onClose(event);
  };

  return (
    <Dialog zIndex={zIndex} isOpen={isOpen} onClose={onClose}>
      <DialogContent>
        <DialogTitle title="Delete Drawing 😱" />
        <DialogText>
          Are you sure you want to delete your drawing? This action cannot be undone.
        </DialogText>
      </DialogContent>
      <DialogOptions>
        <SecondaryButton style={{ padding: '0.8rem 1.6rem' }} onClick={onClose}>
          Cancel
        </SecondaryButton>
        <PrimaryButton style={{ padding: '0.8rem 1.6rem' }} onClick={deleteDrawingAndClose}>
          Delete
        </PrimaryButton>
      </DialogOptions>
    </Dialog>
  );
}

export default DeleteDialog;
