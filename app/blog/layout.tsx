interface BlogLayoutProps {
  children: React.ReactNode;
}

export default function DocsLayout({ children }: BlogLayoutProps) {
  return <div className="">{children}</div>;
}
