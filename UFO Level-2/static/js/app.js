var filteredData = data;
showTable(data);
d3.select('button').on('click',handleClick);
d3.selectAll('input').on('change',handleChange);

function showTable(data) {
    d3.select('tbody').html('');
    
    data.forEach(obj => {
        var row = d3.select('tbody').append('tr');
        Object.values(obj).forEach(val => {
            var cell = row.append('td');
            cell.text(val);
        });
    });
};

function handleClick() {
    d3.selectAll('input').property('value','');
    showTable(data);
    filteredData = data;
};

function handleChange() {
    var key = d3.select(this).property('id');
    var value = d3.select(this).property('value');
    
    filteredData = filteredData.filter(obj => obj[key] == value);
    showTable(filteredData);
};



