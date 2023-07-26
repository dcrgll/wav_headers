import { useState } from 'react';
import { handleFileChange, handleDrag } from './helpers';
import Title from '../title';

export default function FileInput({
  setHeaderInfo,
}: {
  setHeaderInfo: React.Dispatch<React.SetStateAction<any>>;
}) {
  const [dragging, setDragging] = useState(false);

  const handleDrop = (event: Event) => {
    event.preventDefault();
    event.stopPropagation();

    setDragging(false);
    handleFileChange(event, setHeaderInfo);
  };

  return (
    <div className="bg-secondary border-secondary border-8">
      <Title>WAV FILE EXTRACTOR</Title>
      <div className="flex items-center">
        <label
          className={
            'flex justify-center w-full transition text-white cursor-pointer h-48 items-center' +
            (dragging ? ' bg-secondary' : ' bg-primary')
          }
          onDrop={(event) => handleDrop(event as unknown as Event)}
          onDragEnter={(event) => handleDrag(event, setDragging)}
          onDragLeave={(event) => handleDrag(event, setDragging)}
          onDragOver={(event) => event.preventDefault()}
          data-testid="file-input"
        >
          <div className="pointer-events-none">
            {dragging ? 'DROP HERE' : 'DRAG FILE'}
          </div>
          <input
            type="file"
            accept=".wav"
            className="hidden"
            onChange={(event) => handleFileChange(event, setHeaderInfo)}
          />
        </label>
      </div>
    </div>
  );
}
