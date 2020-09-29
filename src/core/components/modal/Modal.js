import React from 'react';
import classNames from 'classnames';
import withStyles from '@material-ui/core/styles/withStyles';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import MUIModal from '@material-ui/core/Modal';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

import { withToggleValue } from 'components/withToggleValue';
import compose from 'utils/compose';
import changeMonitor from 'utils/changeMonitor';

import styles from './styles';

const closeChanged = changeMonitor(false);

type Props = {
  classes: Object,
  close?: boolean,
  toggleValue: boolean,
  triggerElement?: HTMLElement | Object,
  children: HTMLElement | Object | [] | string,
  hideCloseButton?: boolean,
  hideBackdrop?: boolean,
  onToggle: () => void,
};

const Modal = ({
  classes,
  toggleValue,
  onToggle,
  triggerElement,
  children,
  close,
  hideCloseButton,
  hideBackdrop,
  ...rest
}: Props) => {
  const closeHasChanged = closeChanged(close);

  if (close && closeHasChanged && toggleValue) {
    onToggle();
  }

  return (
    <>
      {triggerElement ? (
        <Box onClick={onToggle}>{triggerElement}</Box>
      ) : (
        <Button onClick={onToggle}>Open Modal</Button>
      )}

      <MUIModal
        open={toggleValue}
        onClose={onToggle}
        {...rest}
        hideBackdrop={hideBackdrop}>
        <div className={classNames('modalPaper', classes.paper)}>
          {!hideCloseButton && (
            <IconButton className={classes.closeButton} onClick={onToggle}>
              <CloseIcon fontSize="small" />
            </IconButton>
          )}
          {children}
        </div>
      </MUIModal>
    </>
  );
};

Modal.defaultProps = {
  triggerElement: null,
  close: true,
  hideCloseButton: false,
  hideBackdrop: false,
};

export default compose(withStyles(styles), withToggleValue)(Modal);
