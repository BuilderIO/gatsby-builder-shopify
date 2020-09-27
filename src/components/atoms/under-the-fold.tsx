/** @jsx jsx */
import { useRef } from 'react';
import { Spinner, jsx } from 'theme-ui';
import VisibilitySensor from 'react-visibility-sensor';
interface Shape {
  top?: number;
  left?: number;
  bottom?: number;
  right?: number;
}

export interface UnderTheFoldProps {
  onChange?: (isVisible: boolean) => void;
  active?: boolean;
  partialVisibility?: boolean;
  offset?: Shape;
  minTopValue?: number;
  intervalCheck?: boolean;
  intervalDelay?: number;
  scrollCheck?: boolean;
  scrollDelay?: number;
  scrollThrottle?: number;
  resizeCheck?: boolean;
  resizeDelay?: number;
  resizeThrottle?: number;
  containment?: any;
  delayedCall?: boolean;
  children: (args: { isVisible: boolean; visibilityRect?: Shape }) => React.ReactNode;
}

const UnderTheFold: React.FC<UnderTheFoldProps> = props => {
  const seenRef = useRef<boolean>();
  return (
    <VisibilitySensor>
      {({ isVisible, visibilityRect }) => {
        if (isVisible || seenRef.current) {
          seenRef.current = true;
          return props.children({ isVisible, visibilityRect });
        }
        return (
          <div
            sx={{
              my: 20,
              alignItems: 'center',
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <Spinner />
          </div>
        );
      }}
    </VisibilitySensor>
  );
};
export default UnderTheFold;
