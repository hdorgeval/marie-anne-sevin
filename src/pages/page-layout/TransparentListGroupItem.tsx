import { FC, useMemo } from 'react';
export interface TransparentListGroupItemOwnProps {
  className?: string;
  children: React.ReactNode;
}
export const TransparentListGroupItem: FC<TransparentListGroupItemOwnProps> = ({
  children,
  className,
}) => {
  const computedClassName = useMemo(() => {
    return `list-group-item border-0 border-top border-light border-opacity-25 text-light ${className}`;
  }, [className]);

  return (
    <li
      className={computedClassName}
      style={{
        background: 'transparent',
      }}
    >
      {children}
    </li>
  );
};

TransparentListGroupItem.displayName = 'TransparentListGroupItem';
