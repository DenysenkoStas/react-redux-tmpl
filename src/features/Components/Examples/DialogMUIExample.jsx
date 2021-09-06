import React, {useState} from 'react';
import ButtonMUI from '../../../shared/ButtonMUI';
import DialogMUI from '../../../shared/DialogMUI';

const DialogMUIExample = () => {
  const [dialog, setDialog] = useState(false);

  return (
    <>
      <h2 className='mb-15'>DialogMUI</h2>

      <section className='card-wrap'>
        <ButtonMUI onClick={() => setDialog(true)}>Open dialog</ButtonMUI>
      </section>

      <DialogMUI open={dialog} onClose={() => setDialog(false)}>
        <h2 className='mb-15'>Dialog title</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <p>Quisque velit nisi, pretium ut lacinia in, elementum id enim.</p>
        <p>Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </DialogMUI>
    </>
  );
};

export default DialogMUIExample;
