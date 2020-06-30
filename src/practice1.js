const parseData = ({ data, column }) =>
  data.map((rowData) => parseRowData({ rowData, column }));

const parseRowData = ({ rowData, column }) =>
  column.reduce(
    (acc, cur, index) => ({ ...acc, [cur.name]: rowData[index] }),
    {}
  );

export { parseData };
