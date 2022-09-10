let sortedRows = Array.from(table.rows)
    .slice(1)
    .sort((rowsA, rowsB) => {
        return rowsA.cells[1].innerHTML - rowsB.cells[1].innerHTML;
    });

table.tBodies[0].append(...sortedRows);