import React from 'react';
import {Link} from 'react-router-dom';
import {ButtonGroup} from '@material-ui/core';
import {ExampleLayout} from './Examples';
import ButtonMUI from '../../shared/ButtonMUI';
import {ReactComponent as FolderIcon} from '../../assets/icons/folder-white.svg';

const ButtonMUIExample = () => {
  return (
    <ExampleLayout
      propsList='children, className, color, component, disabled, endIcon, formAction (type="submit"), fullWidth,
          href, loading, noShadow, onClick, size, startIcon, variant'
    >
      <p className='mb-10 mt-25'>color="default / primary / secondary"</p>
      <div className='flex gap-25'>
        <ButtonMUI>Default</ButtonMUI>
        <ButtonMUI color='primary'>Primary</ButtonMUI>
        <ButtonMUI color='secondary'>Secondary</ButtonMUI>
      </div>

      <p className='mb-10 mt-25'>component={'{Link}'} to="/main/dashboard"</p>
      <ButtonMUI component={Link} to='/main/dashboard'>
        Router link
      </ButtonMUI>

      <p className='mb-10 mt-25'>disabled</p>
      <ButtonMUI disabled>Disabled</ButtonMUI>

      <p className='mb-10 mt-25'>
        startIcon={'{<FolderIcon />}'} / endIcon={'{<FolderIcon />}'}
      </p>
      <div className='flex gap-25'>
        <ButtonMUI startIcon={<FolderIcon />}>Start icon</ButtonMUI>
        <ButtonMUI endIcon={<FolderIcon />}>End icon</ButtonMUI>
      </div>

      <p className='mb-10 mt-25'>fullWidth</p>
      <ButtonMUI fullWidth>Full width</ButtonMUI>

      <p className='mb-10 mt-25'>href="https://v4.mui.com/ru/components/buttons/" target="_blank"</p>
      <ButtonMUI href='https://v4.mui.com/ru/components/buttons/' target='_blank'>
        Href
      </ButtonMUI>

      <p className='mb-10 mt-25'>loading</p>
      <ButtonMUI loading>Loading</ButtonMUI>

      <p className='mb-10 mt-25'>noShadow</p>
      <ButtonMUI noShadow>No shadow</ButtonMUI>

      <p className='mb-10 mt-25'>size="small / medium / large"</p>
      <div className='flex gap-25'>
        <ButtonMUI size='small'>Small</ButtonMUI>
        <ButtonMUI>Medium</ButtonMUI>
        <ButtonMUI size='large'>Large</ButtonMUI>
      </div>

      <p className='mb-10 mt-25'>variant="contained / outlined / text"</p>
      <div className='flex gap-25'>
        <ButtonMUI>Contained</ButtonMUI>
        <ButtonMUI variant='outlined'>Outlined</ButtonMUI>
        <ButtonMUI variant='text'>Text</ButtonMUI>
      </div>

      <p className='mb-10 mt-25'>
        <b>ButtonGroup wrapper: </b>
        <a href='https://v4.mui.com/components/button-group/' target='_blank'>
          https://v4.mui.com/components/button-group/
        </a>
      </p>
      <div className='flex gap-25'>
        <ButtonGroup color='default' fullWidth variant='contained' orientation='vertical' aria-label='button group'>
          <ButtonMUI>Button</ButtonMUI>
          <ButtonMUI>Button</ButtonMUI>
          <ButtonMUI>Button</ButtonMUI>
        </ButtonGroup>
        <ButtonGroup color='primary' size='small' aria-label='button group'>
          <ButtonMUI>Button</ButtonMUI>
          <ButtonMUI>Button</ButtonMUI>
          <ButtonMUI>Button</ButtonMUI>
        </ButtonGroup>
        <ButtonGroup color='secondary' size='large' aria-label='button group'>
          <ButtonMUI>Button</ButtonMUI>
          <ButtonMUI>Button</ButtonMUI>
          <ButtonMUI>Button</ButtonMUI>
        </ButtonGroup>
      </div>
    </ExampleLayout>
  );
};

export default ButtonMUIExample;
