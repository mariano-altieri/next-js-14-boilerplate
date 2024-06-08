interface Props {
  children: React.ReactNode;
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

export const Heading = (props: Props) => {
  const { children, tag = 'h1' } = props;
  const Tag = tag;

  return <Tag className="text-2xl font-semibold leading-none tracking-tight mb-6">{children}</Tag>;
};
