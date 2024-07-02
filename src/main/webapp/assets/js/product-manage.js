let isValid4 = true;
let isValid5 = true;
let isValid7 = true;
let isValid8 = true;
let isValid9 = true;
let isValid10 = true;
let isValid11 = true;
let isValid12 = true;
let isValid13 = true;
let isValid14 = true;
let isValid15 = true;
let isValid16 = true;
let isValid17 = true;

function validateProductName(id) {
    const productName = document.getElementById("productNameUpdate" + id).value;
    if (productName.trim().length === 0 || productName.length < 3 || productName.length > 500) {
        showError("productNameUpdateError" + id, "Tên sản phẩm từ 3-500 ký tự");
        isValid4 = false;
    } else {
        clearError("productNameUpdateError" + id);
        isValid4 = true;
    }
    checkIsValidUpdate(id);
}

function validateUnitPrice(id) {
    const unitPrice = document.getElementById("unitPriceUpdate" + id).value.trim();
    if (unitPrice === "" || isNaN(unitPrice) || unitPrice < 0 || unitPrice % 1 !== 0 || unitPrice.includes('.')) {
        showError("unitPriceUpdateError" + id, "Đơn giá là số nguyên không âm");
        isValid5 = false;
    } else {
        clearError("unitPriceUpdateError" + id);
        isValid5 = true;
    }
    checkIsValidUpdate(id);
}

function validateStockUnit(id) {
    const stockUnit = document.getElementById("stockUnitUpdate" + id).value.trim();
    if (stockUnit === "" || isNaN(stockUnit) || stockUnit < 0 || stockUnit % 1 !== 0 || stockUnit.includes('.')) {
        showError("stockUnitUpdateError" + id, "Tồn kho là số nguyên không âm");
        isValid7 = false;

    } else {
        clearError("stockUnitUpdateError" + id);
        isValid7 = true;

    }
    checkIsValidUpdate(id);
}

function validateDescription(id) {
    const descriptionUpdate = document.getElementById("descriptionUpdate" + id).value;
    if (descriptionUpdate.trim().length === 0 ) {
        showError("descriptionUpdateError" + id, "Xin vui lòng nhập đầy đủ các trường");
        isValid13 = false;
    }
    else if (descriptionUpdate.length < 1 || descriptionUpdate.length > 1000) {
        showError("descriptionUpdateError" + id, "Mô tả từ 1-1000 ký tự");
        isValid8 = false;
    } else {
        clearError("descriptionUpdateError" + id);
        isValid8 = true;
    }
    checkIsValidUpdate(id);
}

function validateOperatingSystem(id) {
    const osUpdate = document.getElementById("osUpdate" + id).value;
    if (osUpdate.trim().length === 0 ) {
        showError("osUpdateError" + id, "Xin vui lòng nhập đầy đủ các trường");
        isValid14 = false;
    }
    else if (osUpdate.length < 1 || osUpdate.length > 50) {
        showError("osUpdateError" + id, "Hệ điều hành từ 1-50 ký tự");
        isValid9 = false;
    } else {
        clearError("osUpdateError" + id);
        isValid9 = true;
    }
    checkIsValidUpdate(id);
}

function validateCPU(id) {
    const cpuUpdate = document.getElementById("cpuUpdate" + id).value;
    if (cpuUpdate.trim().length === 0 ) {
        showError("cpuUpdateError" + id, "Xin vui lòng nhập đầy đủ các trường");
        isValid15 = false;
    }
    else if (cpuUpdate.length < 1 || cpuUpdate.length > 50) {
        showError("cpuUpdateError" + id, "CPU từ 1-50 ký tự");
        isValid10 = false;
    } else {
        clearError("cpuUpdateError" + id);
        isValid10 = true;
    }
    checkIsValidUpdate(id);
}

function validateRAM(id) {
    const ramUpdate = document.getElementById("ramUpdate" + id).value;
    if (ramUpdate.trim().length === 0 ) {
        showError("ramUpdateError" + id, "Xin vui lòng nhập đầy đủ các trường");
        isValid16 = false;
    }
    else if (ramUpdate.length < 1 || ramUpdate.length > 50) {
        showError("ramUpdateError" + id, "RAM từ 1-50 ký tự");
        isValid11 = false;
    } else {
        clearError("ramUpdateError" + id);
        isValid11 = true;
    }
    checkIsValidUpdate(id);
}

function validateScreen(id) {
    const screenUpdate = document.getElementById("screenUpdate" + id).value;
    if (screenUpdate.trim().length === 0 ) {
        showError("screenUpdateError" + id, "Xin vui lòng nhập đầy đủ các trường");
        isValid17 = false;
    }
    else if (screenUpdate.length < 1 || screenUpdate.length > 50) {
        showError("screenUpdateError" + id, "Màn hình từ 1-50 ký tự");
        isValid12 = false;
    } else {
        clearError("screenUpdateError" + id);
        isValid12 = true;
    }
    checkIsValidUpdate(id);
}


function showError(elementId, message) {
    const errorElement = document.getElementById(elementId);
    errorElement.textContent = message;
    errorElement.style.display = "block";
}
function clearError(elementId) {
    const errorElement = document.getElementById(elementId);
    errorElement.textContent = "";
    errorElement.style.display = "none";
}

function checkIsValidUpdate(id) {
    const updateTitle = document.getElementById('updateModalTitle' + id);
    const updateMessage = document.getElementById('messageUpdate' + id);
    const updateButton = document.getElementById('updateButton' + id);

    let errorMessages = [];

    if (!isValid4) errorMessages.push("Tên sản phẩm từ 3-500 ký tự");
    if (!isValid5) errorMessages.push("Đơn giá là số nguyên không âm");
    if (!isValid7) errorMessages.push("Tồn kho là số nguyên không âm");
    if (!isValid8) errorMessages.push("Mô tả từ 1-1000 ký tự");
    if (!isValid9) errorMessages.push("Hệ điều hành từ 1-50 ký tự");
    if (!isValid10) errorMessages.push("CPU từ 1-50 ký tự");
    if (!isValid11) errorMessages.push("RAM từ 1-50 ký tự");
    if (!isValid12) errorMessages.push("Màn hình từ 1-50 ký tự");
    if ( !isValid13 || !isValid14 || !isValid15 || !isValid16 || !isValid17) errorMessages.push("Xin vui lòng nhập đầy đủ các trường");

    if (errorMessages.length === 0) {
        updateTitle.textContent = "Thành công";
        updateMessage.textContent = "Chỉnh sửa thành công sản phẩm";
        updateButton.disabled=false;
    } else {
        updateTitle.textContent = "Thất bại";
        updateMessage.innerHTML = errorMessages.join("<br>");
        updateButton.disabled = true;
    }
}


document.addEventListener("DOMContentLoaded", function () {
    var msgDiv = document.getElementById('msg');
    var msgContent = document.getElementById('msgContent');
    // Kiểm tra nội dung của thẻ h1
    if (msgContent.textContent.trim() !== "") {
        setTimeout(function () {
            msgDiv.classList.add('show');
            setTimeout(function () {
                msgDiv.classList.remove('show');
                setTimeout(function () {
                    msgDiv.style.display = 'none';
                }, 600); // Chờ thời gian chuyển tiếp để hoàn thành
            }, 3000); // Hiển thị thông báo trong 3 giây
        }, 500);
    }
});
$(document).ready(function () {
    $('#myTable').DataTable({
        columnDefs: [
            {width: "50%", targets: 1} // Set width of second column (index 1) to 50%
        ]
    });
});
document.addEventListener('DOMContentLoaded', function () {
    toggleFields();  // Initial check on page load
});
const createButton = document.getElementById('createButton');
const productName = document.getElementById('productName');
const unitPrice = document.getElementById('unitPrice');
const stockUnit = document.getElementById('stockUnit');
const fileInput = document.getElementById('image');
let isValid1 = false;
let isValid2 = false;
let isValid3 = false;


/*
    ------------- check valid add product ------------------------
 */
productName.addEventListener('input', () => {
    const val1 = productName.value;
    if (val1.trim().length === 0) {
        document.getElementById('productNameError').textContent = 'Vui lòng nhập tên sản phẩm.';
        isValid1 = false;
    } else {
        document.getElementById('productNameError').textContent = '';
        isValid1 = true;
    }
    checkIsValidCreate();
});

        unitPrice.addEventListener('input', () => {
            const val1 = unitPrice.value;
            if (val1.length === 0) {
                document.getElementById('unitPriceError').textContent = 'Vui lòng nhập đơn giá.';
                isValid2 = false;
            } else if (isNaN(val1) || val1 <= 0 || val1.indexOf('.') !== -1) {
                document.getElementById('unitPriceError').textContent = 'Đơn giá phải là số nguyên lớn hơn 0.';
                isValid2 = false;
            } else {
                document.getElementById('unitPriceError').textContent = '';
                isValid2 = true;
            }
            checkIsValidCreate();
        });
        stockUnit.addEventListener('input', () => {
            const val1 = stockUnit.value;
            if (val1.length === 0) {
                document.getElementById('stockUnitError').textContent = 'Vui lòng nhập số lượng.';
                isValid3 = false;
            } else if (isNaN(val1) || val1 < 0 || val1.indexOf('.') !== -1) {
                document.getElementById('stockUnitError').textContent = 'Vui lòng nhập số nguyên từ 0.';
                isValid3 = false;
            } else {
                document.getElementById('stockUnitError').textContent = '';
                isValid3 = true;
            }
            checkIsValidCreate();
        });

        function checkIsValidCreate() {
            if (isValid1 === true && isValid2 === true && isValid3 === true) {
                createButton.disabled = false;
                return;
            }
            createButton.disabled = true;
        }

        fileInput.addEventListener('input', () => {
            let isValid = true;
            // Kiểm tra trường image (file) nếu đã chọn file
            const filePath = fileInput.value;
            const allowedExtensions = /(\.jpg|\.jpeg|\.png|\.img)$/i;
            if (filePath !== '') {
                if (!allowedExtensions.exec(filePath)) {
                    document.getElementById('imageError').textContent = 'Định dạng file ảnh không hợp lệ. Chỉ chấp nhận các định dạng: .jpg, .jpeg, .png, .img.';
                    isValid = false;
                } else {
                    document.getElementById('imageError').textContent = '';
                }
            }
            createButton.disabled = !isValid;
        });

        /*
            ------------- END check valid add product ------------------------
         */


        function toggleFields() {
            const category = document.getElementById('productCategory').value;
            const conditionalFields = document.getElementById('conditionalFields');
            if (category === '1' || category === '2') {
                conditionalFields.style.display = 'block';
            } else {
                conditionalFields.style.display = 'none';
            }
        }


        function resetForm() {
            document.getElementById('productForm').reset();
            document.getElementById('createButton').disabled = true;
            document.getElementById('productNameError').textContent = '';
            document.getElementById('unitPriceError').textContent = '';
            document.getElementById('conditionalFields').style.display = 'none';
        }

        function showProductDetails(categoryId, producID) {
            var productDetailsModal = new bootstrap.Modal(document.getElementById('productDetailsModal' + producID));
            productDetailsModal.show();
        }

        function editModal(categoryId, producID) {
            var productUpdateModal = new bootstrap.Modal(document.getElementById('productUpdateModal' + producID));
            productUpdateModal.show();
        }

        function confirmUpdateModal(id) {
            var confirmModal = new bootstrap.Modal(document.getElementById('confirmUpdateModal'+id));
            confirmModal.show();
        }

        function deleteModal(id) {
            var deleteModal = new bootstrap.Modal(document.getElementById('myModal' + id));
            deleteModal.show();
        }

