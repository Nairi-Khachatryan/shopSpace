import { Popconfirm } from 'antd';

interface ConfirmPopProps {
  title?: string;
  onConfirm: () => void;
  children: React.ReactNode;
}

export function ConfirmPop({
  title = 'Are you sure?',
  onConfirm,
  children,
}: ConfirmPopProps) {
  return (
    <Popconfirm
      title={title}
      onConfirm={onConfirm}
      okText="Yes"
      cancelText="No"
    >
      {children}
    </Popconfirm>
  );
}
