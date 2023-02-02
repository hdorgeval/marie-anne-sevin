export interface OpenExternalLinkButtonOwnProps {
  link: string;
  className?: string;
  children?: React.ReactNode;
}
export const OpenExternalLinkButton: React.FC<OpenExternalLinkButtonOwnProps> = ({
  link,
  className,
  children,
}) => {
  const linkClassNames = `${className}`;

  return (
    <>
      <a className={linkClassNames} href={link} target="_blank">
        {children}
        <i className="bi bi-box-arrow-up-right"></i>
      </a>
    </>
  );
};

OpenExternalLinkButton.displayName = 'OpenExternalLinkButton';
