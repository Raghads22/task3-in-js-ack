
var prodNameField = document.querySelector("#productName");
var prodDescField = document.querySelector("#productDesc");
var prodPriceField = document.querySelector("#productPrice");

// مصفوفة لتخزين بيانات المنتجات
var productList = [];


document.querySelector("#productEntryForm").onsubmit = function(event) {
    event.preventDefault(); 


    var newProduct = {
        productName: prodNameField.value,
        productDescription: prodDescField.value,
        productPrice: prodPriceField.value
    };

    
    productList.push(newProduct);

    
    updateTable();
};

// دالة لتحديث عرض الجدول
function updateTable() {
    var tableContent = "";
    for (var j = 0; j < productList.length; j++) {
        tableContent += `
            <tr>
                <td>${productList[j].productName}</td>
                <td>${productList[j].productDescription}</td>
                <td>${productList[j].productPrice}</td>
            </tr>
        `;
    }
    document.querySelector("tbody").innerHTML = tableContent;
}
