import React from 'react';

type Props = {
  content: string;
}

export const Tag = ({ content }: Props) => {
  return (
    <div className="tag">
      {content}
    </div>
  )
}
