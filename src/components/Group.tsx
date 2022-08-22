import { type ReactNode, forwardRef, memo } from 'react';
import Parser from './Parser';
import getCurrentHref from '../utils/getCurrentHref';

export type GroupProps = {
  href?: string;
  skin?: string;
  showSocialContext?: boolean;
  showMetaData?: boolean;
  width?: number | string;
  children?: ReactNode;
  style?: Object;
};

function Group(props: GroupProps, ref: any) {
  const {
    style,
    href = getCurrentHref(),
    width,
    showSocialContext,
    showMetaData,
    children,
    skin,
    ...rest
  } = props;

  return (
    <Parser>
      <div
        className="fb-group"
        style={style}
        data-href={href}
        data-width={width}
        data-show-social-context={showSocialContext}
        data-show-metadata={showMetaData}
        data-skin={skin}
        {...rest}
        ref={ref}
      >
        {children}
      </div>
    </Parser>
  );
}

export default memo(forwardRef(Group));
