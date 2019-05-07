/**
 * Created by user on 28.11.2017.
 */
function add(data,koef,otvet) {
    var table = document.getElementById('table');

    var tr = document.createElement('tr');
    var td1 = document.createElement('td');
    var td2 = document.createElement('td');
    var td3 = document.createElement('td');
    var newText1 = document.createTextNode(data);
    var newText2 = document.createTextNode(koef);
    var newText3 = document.createTextNode(otvet);
    td1.appendChild(newText1);
    td2.appendChild(newText2);
    td3.appendChild(newText3);

    td1.setAttribute("class","STD");
    td2.setAttribute("class","STD");
    td3.setAttribute("class","STD");

    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.setAttribute("onclick","deleteRow(this)");
    table.appendChild(tr);
}

function deleteRow(r)
{
    var i=r.rowIndex;
    document.getElementById('table').deleteRow(i);
}
