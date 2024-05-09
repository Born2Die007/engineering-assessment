// Function to parse CSV data
function parseCSV(csv, quoteChar = '"', delimiter = ',') {

  const rows = csv.split("\n");
  const headers = rows[0].split(",");

  const regex = new RegExp(`\\s*(${quoteChar})?(.*?)\\1\\s*(?:${delimiter}|$)`, 'gs');

  const match = line => [...line.matchAll(regex)]
    .map(m => m[2]) 
    .slice(0, -1); 

  let lines = csv.split('\n');
  const heads = headers ?? match(lines.shift());
  lines = lines.slice(1);
  
  return lines.map(line => {
    return match(line).reduce((acc, cur, i) => {
      // replace blank matches with `null`
      const val = cur.length <= 0 ? null : Number(cur) || cur;
      const key = heads[i] ?? `{i}`;
      return { ...acc, [key]: val };
    }, {});
  });

}

module.exports = { parseCSV };