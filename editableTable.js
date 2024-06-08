document.addEventListener('DOMContentLoaded', (event) => {
    const table = document.getElementById('editableTable');
    loadTableData();

    table.addEventListener('change', () => {
        saveTableData();
    });
});

function saveTableData() {
    console.log('Saving table data');
    const table = document.getElementById('editableTable');
    const rows = table.rows;
    let tableData = [];

    for (let i = 1; i < rows.length; i++) { // Skip the header row
        let row = [];
        for (let j = 0; j < rows[i].cells.length; j++) {
            row.push(rows[i].cells[j].children[0].checked);
        }
        tableData.push(row);
    }

    localStorage.setItem('tableData', JSON.stringify(tableData));
}

function loadTableData() {
    console.log('Loading table data');
    const tableData = JSON.parse(localStorage.getItem('tableData'));
    if (tableData) {
        const table = document.getElementById('editableTable');
        const rows = table.rows;

        for (let i = 1; i < rows.length; i++) { // Skip the header row
            for (let j = 0; j < rows[i].cells.length; j++) {
                rows[i].cells[j].children[0].checked = tableData[i - 1][j] || false;
            }
        }
    }
}

