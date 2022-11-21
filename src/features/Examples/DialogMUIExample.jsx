import React from 'react';
import {useToggle} from '../../helpers/hooks';
import {ExampleLayout} from './Examples';
import {ButtonMUI, DialogMUI} from '../../shared';

const DialogMUIExample = () => {
  const [dialog, toggleDialog] = useToggle();
  const [secondDialog, toggleSecondDialog] = useToggle();

  return (
    <ExampleLayout propsList='children, className, fullScreen, onClose, open'>
      <div className='flex gap-25 mt-25'>
        <ButtonMUI onClick={toggleDialog}>Simple dialog</ButtonMUI>
        <ButtonMUI variant='outlined' onClick={toggleSecondDialog}>
          Full screen dialog
        </ButtonMUI>
      </div>

      <DialogMUI open={dialog} onClose={toggleDialog}>
        <h2 className='mb-15'>Dialog title</h2>
        <p className='mb-10'>
          Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Sed porttitor lectus nibh. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
          posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Nulla quis
          lorem ut libero malesuada feugiat. Donec sollicitudin molestie malesuada.
        </p>
        <p>
          Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Sed porttitor lectus nibh. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
          posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Nulla quis
          lorem ut libero malesuada feugiat. Donec sollicitudin molestie malesuada.
        </p>
      </DialogMUI>

      <DialogMUI open={secondDialog} onClose={toggleSecondDialog} fullScreen>
        <h2 className='mb-15'>Full screen dialog</h2>
        <p className='mb-10'>
          Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Proin eget tortor risus. Mauris blandit
          aliquet elit, eget tincidunt nibh pulvinar a. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
          Proin eget tortor risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur arcu erat,
          accumsan id imperdiet et, porttitor at sem. Proin eget tortor risus. Sed porttitor lectus nibh. Sed porttitor
          lectus nibh. Donec sollicitudin molestie malesuada. Pellentesque in ipsum id orci porta dapibus. Proin eget
          tortor risus. Curabitur aliquet quam id dui posuere blandit. Curabitur arcu erat, accumsan id imperdiet et,
          porttitor at sem. Cras ultricies ligula sed magna dictum porta. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Cras ultricies ligula sed magna
          dictum porta. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
        </p>
        <p className='mb-10'>
          Curabitur aliquet quam id dui posuere blandit. Cras ultricies ligula sed magna dictum porta. Sed porttitor
          lectus nibh. Cras ultricies ligula sed magna dictum porta. Curabitur aliquet quam id dui posuere blandit.
          Donec rutrum congue leo eget malesuada. Vivamus magna justo, lacinia eget consectetur sed, convallis at
          tellus. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Curabitur aliquet quam id dui
          posuere blandit. Nulla porttitor accumsan tincidunt. Vestibulum ante ipsum primis in faucibus orci luctus et
          ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula.
          Proin eget tortor risus. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Nulla porttitor
          accumsan tincidunt. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Donec sollicitudin
          molestie malesuada. Proin eget tortor risus. Donec rutrum congue leo eget malesuada. Quisque velit nisi,
          pretium ut lacinia in, elementum id enim. Donec rutrum congue leo eget malesuada.
        </p>

        <ButtonMUI color='secondary' onClick={toggleSecondDialog}>
          Close dialog
        </ButtonMUI>
      </DialogMUI>
    </ExampleLayout>
  );
};

export default DialogMUIExample;
