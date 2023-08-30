import { useState } from 'react';

const useMeetings = ({ file }: { file: JSON }) => {
  const [meetings] = useState<any>(file);
  const [error] = useState<unknown>("");
  return {
    meetings,
    error
  };
}
export default useMeetings;