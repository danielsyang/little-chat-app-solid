interface MessageDisplayProps {
  content: string;
}

export default function MessageDisplay({ content }: MessageDisplayProps) {
  return <div>{content}</div>;
}
