export const readWavHeader = (
  file: Blob,
  setHeaderInfo: (arg0: {
    chunkID: string;
    chunkSize: number;
    format: string;
    subchunk1ID: string;
    subchunk1Size: number;
    audioFormat: number;
    numChannels: number;
    sampleRate: number;
    byteRate: number;
    blockAlign: number;
    bitsPerSample: number;
    subchunk2ID: string;
    subchunk2Size: number;
  }) => void
) => {
  const reader = new FileReader();

  reader.onload = (event) => {
    const buffer = event.target.result;
    const view = new DataView(buffer as ArrayBuffer);

    // Read the WAV header fields
    const chunkID = String.fromCharCode(
      ...Array.from(new Uint8Array(view.buffer.slice(0, 4)))
    );
    const chunkSize = view.getUint32(4, true);
    const format = String.fromCharCode(
      ...Array.from(new Uint8Array(view.buffer.slice(8, 12)))
    );
    const subchunk1ID = String.fromCharCode(
      ...Array.from(new Uint8Array(view.buffer.slice(12, 16)))
    );
    const subchunk1Size = view.getUint32(16, true);
    const audioFormat = view.getUint16(20, true);
    const numChannels = view.getUint16(22, true);
    const sampleRate = view.getUint32(24, true);
    const byteRate = view.getUint32(28, true);
    const blockAlign = view.getUint16(32, true);
    const bitsPerSample = view.getUint16(34, true);
    const subchunk2ID = String.fromCharCode(
      ...Array.from(new Uint8Array(view.buffer.slice(36, 40)))
    );
    const subchunk2Size = view.getUint32(40, true);

    const header = {
      chunkID,
      chunkSize,
      format,
      subchunk1ID,
      subchunk1Size,
      audioFormat,
      numChannels,
      sampleRate,
      byteRate,
      blockAlign,
      bitsPerSample,
      subchunk2ID,
      subchunk2Size,
    };

    setHeaderInfo(header);
  };

  reader.readAsArrayBuffer(file);
};
export const handleFileChange = (event, setHeaderInfo) => {
  const selectedFile = getFile(event);

  if (selectedFile) {
    readWavHeader(selectedFile, setHeaderInfo);
  }
};

const getFile = (event) => {
  return event?.dataTransfer?.files[0] || event?.target?.files[0];
};

export const handleDrag = (event, setDragging) => {
  event.preventDefault();
  event.stopPropagation();

  setDragging(event.type === 'dragenter');
};
