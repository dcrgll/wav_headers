import Grid from '@/components/grid';
import GridCell from '@/components/grid_cell';
import Title from '@/components/title';
import React from 'react';

export default function ResultsTable({ headerInfo }) {
  if (!headerInfo) return null;

  return (
    <div className="border-8 border-secondary bg-secondary mt-8">
      <Title>RESULTS</Title>

      <Grid>
        <GridCell heading>Header</GridCell>
        <GridCell heading>Value</GridCell>

        {Object.entries(headerInfo).map(([key, value]) => (
          <React.Fragment key={key}>
            <GridCell>{key}</GridCell>
            <GridCell>{value as string}</GridCell>
          </React.Fragment>
        ))}
      </Grid>
    </div>
  );
}
