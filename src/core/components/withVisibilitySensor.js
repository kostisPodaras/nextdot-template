import React from 'react';
import VisibilitySensor from 'react-visibility-sensor';

import { compose } from 'utils';

import { withHeight } from './withHeight';

type Props = {
  height: number,
};

const withVisibilitySensor = ({
  bottomOnly,
  intervalDelay,
  resizeCheck,
  partialVisibility,
}) => (Component) => (props: Props) => (
  <VisibilitySensor
    intervalDelay={intervalDelay || 0}
    resizeCheck={resizeCheck || true}
    partialVisibility={partialVisibility || false}
    offset={bottomOnly ? { top: -props?.height } : {}}>
    {({ isVisible }) => <Component {...props} isVisible={isVisible || false} />}
  </VisibilitySensor>
);

export default (options) =>
  compose(withHeight, withVisibilitySensor(options || {}));
