import { useState } from 'react'

import FileInput from '@/components/file_input'
import ResultsTable from '@/components/results_table'

export default function WavFileExtractor() {
  const [headerInfo, setHeaderInfo] = useState(null)

  return (
    <div className='min-h-[200px] min-w-[450px]'>
      <FileInput setHeaderInfo={setHeaderInfo} />
      <ResultsTable headerInfo={headerInfo} />
    </div>
  )
}
