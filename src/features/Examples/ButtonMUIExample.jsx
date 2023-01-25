import React from 'react';
import {Link} from 'react-router-dom';
import {ExampleLayout} from './Examples';
import ButtonMUI from '../../shared/ButtonMUI';
import {ReactComponent as FolderIcon} from '../../assets/icons/folder-white.svg';

const ButtonMUIExample = () => {
  return (
    <ExampleLayout
      propsList='children, className, color, component, disabled, disableElevation, endIcon, formAction (type="submit"), fullWidth,
          href, loading, onClick, size, startIcon, variant'
    >
      <p className='mb-10 mt-25'>color="primary / secondary / info / success / error / warning"</p>
      <div className='flex gap-25'>
        <div className='flex gap-25'>
          <ButtonMUI color='primary'>Primary</ButtonMUI>
          <ButtonMUI color='secondary'>Secondary</ButtonMUI>
          <ButtonMUI color='success'>Success</ButtonMUI>
          <ButtonMUI color='error'>Error</ButtonMUI>
          <ButtonMUI color='info'>Info</ButtonMUI>
          <ButtonMUI color='warning'>Warning</ButtonMUI>
        </div>

        <div className='flex gap-25'>
          <ButtonMUI color='primary' variant='outlined'>
            Primary
          </ButtonMUI>
          <ButtonMUI color='secondary' variant='outlined'>
            Secondary
          </ButtonMUI>
          <ButtonMUI color='success' variant='outlined'>
            Success
          </ButtonMUI>
          <ButtonMUI color='error' variant='outlined'>
            Error
          </ButtonMUI>
          <ButtonMUI color='info' variant='outlined'>
            Info
          </ButtonMUI>
          <ButtonMUI color='warning' variant='outlined'>
            Warning
          </ButtonMUI>
        </div>

        <div className='flex gap-25'>
          <ButtonMUI color='primary' variant='text'>
            Primary
          </ButtonMUI>
          <ButtonMUI color='secondary' variant='text'>
            Secondary
          </ButtonMUI>
          <ButtonMUI color='success' variant='text'>
            Success
          </ButtonMUI>
          <ButtonMUI color='error' variant='text'>
            Error
          </ButtonMUI>
          <ButtonMUI color='info' variant='text'>
            Info
          </ButtonMUI>
          <ButtonMUI color='warning' variant='text'>
            Warning
          </ButtonMUI>
        </div>
      </div>

      <p className='mb-10 mt-25'>component={'{Link}'} to="/main/dashboard"</p>
      <ButtonMUI component={Link} to='/main/dashboard'>
        Router link
      </ButtonMUI>

      <p className='mb-10 mt-25'>disabled</p>
      <ButtonMUI disabled>Disabled</ButtonMUI>

      <p className='mb-10 mt-25'>disableElevation={'{false}'}</p>
      <ButtonMUI disableElevation={false}>Elevation</ButtonMUI>

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
      <ButtonMUI href='https://mui.com/material-ui/react-button/' target='_blank'>
        Href
      </ButtonMUI>

      <p className='mb-10 mt-25'>loading</p>
      <ButtonMUI loading>Loading</ButtonMUI>

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
    </ExampleLayout>
  );
};

export default ButtonMUIExample;
