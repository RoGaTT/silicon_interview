/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { formatAlt, isMac } from '@/utils/functions/os';
import Popover from '@material-ui/core/Popover';
import Tooltip from '@material-ui/core/Tooltip';
import React, {
  FC, useCallback, useMemo, useState,
} from 'react';

import { Icon } from '@iconify/react';
import bxQuestionMark from '@iconify/icons-bx/bx-question-mark';

import classes from './Widget.module.scss';

type PopoverItem = {
  command: string;
  description: string;
}

const Widget: FC = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const memoIsMac = useMemo(() => isMac(navigator.platform), []);

  const handleClosePopover = useCallback(() => {
    setAnchorEl(null);
  }, [setAnchorEl]);

  const handleOpenPopover = useCallback((event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  }, [setAnchorEl]);

  const memoPopoverItems = useMemo<PopoverItem[]>(() => [
    {
      command: `${formatAlt(memoIsMac)} + K`,
      description: 'Open the command pallete',
    },
    {
      command: 'J or K',
      description: 'Go up and down the list',
    },
    {
      command: 'Enter',
      description: 'When ticket is open, focus the response field',
    },
    {
      command: `${formatAlt(memoIsMac)} + Enter`,
      description: 'Submit ticket response. (choose status)',
    },
    {
      command: 'Esc',
      description: 'Exit/unfocus',
    },
    {
      command: `${formatAlt(memoIsMac)} + Arrow`,
      description: 'Change ticket',
    },
  ], [memoIsMac]);

  return (
    <div className={classes.root}>
      <Tooltip title="Shortcut list">
        <button
          type="button"
          onClick={handleOpenPopover}
          className={classes.icon}
        >
          <Icon
            icon={bxQuestionMark}
            style={{ color: '#928a8a', fontSize: '20px' }}
          />
        </button>
      </Tooltip>
      <Popover
        open={Boolean(anchorEl)}
        onClose={handleClosePopover}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        classes={{
          root: classes['popover-wrapper'],
        }}
      >
        <div className={classes.popover}>
          {
            memoPopoverItems.map((item, itemIndex) => (
              <div
                className={classes['popover-item']}
                key={`widget_popover_item_${itemIndex}`}
              >
                <span>{item.command}</span>
                <p>{item.description}</p>
              </div>
            ))
          }
        </div>
      </Popover>
    </div>
  );
};

export default Widget;
