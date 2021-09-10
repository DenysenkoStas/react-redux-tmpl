import React, {useState} from 'react';
import ButtonMUI from '../../../shared/ButtonMUI';
import PopperMUI from '../../../shared/PopperMUI';

const PopperMUIExample = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);

  const togglePopper = (event) => {
    setAnchorEl(event.currentTarget);
    setOpen((prev) => !prev);
  };

  const clickAway = () => setOpen((prev) => !prev);

  return (
    <>
      <h2 className='mb-15'>PopperMUI</h2>

      <section className='card-wrap flex gap-25'>
        <ButtonMUI onClick={togglePopper}>Show popper</ButtonMUI>

        <PopperMUI open={open} anchorEl={anchorEl} clickAway={clickAway} children='Popper' />
      </section>
    </>
  );
};

export default PopperMUIExample;
