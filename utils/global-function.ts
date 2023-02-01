export function hidePartialPhone(phone: string) {
    if (phone.length <= 0) return phone;
    let newFormat = '(' + phone.slice(0, 3) + ') **** ' + phone.slice(7, 10);
    return newFormat;
}

export function hidePartialId(id: string) {
    if (id.length <= 0) return id;
    let newFormat = id.slice(0, 3) + ' ******* ' + id.slice(id.length - 4, id.length);
    return newFormat;
}

export function formatPhoneNumber(phone: string) {
    if (phone.length <= 0) return phone;
    let newFormat = '(' + phone.slice(0, 3) + ') ' + phone.slice(3, 7) + ' - ' + phone.slice(7, 10);
    return newFormat;
}

export function formatVND(amount: any) {
    if (amount.length <= 0) return;
    return amount.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
}

export function formatStringToCardNum(cardString: string) {
    if (cardString.length <= 0) return;
    return (
        cardString.slice(0, 4) +
        ' ' +
        cardString.slice(4, 8) +
        ' ' +
        cardString.slice(8, 12) +
        ' ' +
        cardString.slice(12, 16)
    );
}

export function convertPlateNo(plateNo: string) {
    if (!plateNo) {
        return;
    }
    if (plateNo.length == 8) {
        return (
            plateNo.slice(0, 3) + '-' + plateNo.slice(3, 6) + '.' + plateNo.slice(6, plateNo.length)
        );
    } else {
        return (
            plateNo.slice(0, 3) + '-' + plateNo.slice(3, 5) + '.' + plateNo.slice(5, plateNo.length)
        );
    }
}
export function generateUUID() {
    // Public Domain/MIT
    var d = new Date().getTime(); //Timestamp
    var d2 =
        (typeof performance !== 'undefined' && performance.now && performance.now() * 1000) || 0; //Time in microseconds since page-load or 0 if unsupported
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16; //random number between 0 and 16
        if (d > 0) {
            //Use timestamp until depleted
            r = (d + r) % 16 | 0;
            d = Math.floor(d / 16);
        } else {
            //Use microseconds since page-load if supported
            r = (d2 + r) % 16 | 0;
            d2 = Math.floor(d2 / 16);
        }
        return (c === 'x' ? r : (r & 0x3) | 0x8).toString(16).toUpperCase();
    });
}

export function formatStringToUuid(value: string) {
    let enteredNum = value.split('-').join('');
    var enteredNumLength = enteredNum.split('').length;
    var fieldValue = [];
    var newValue = '';

    function resetFieldValue(fieldValue: any) {
        newValue = fieldValue.join('-');
        // setLicense(newValue);
    }
    if (enteredNumLength == 32) {
        fieldValue[0] = enteredNum.substring(0, 8);
        fieldValue[1] = enteredNum.substring(8, 12);
        fieldValue[2] = enteredNum.substring(12, 16);
        fieldValue[3] = enteredNum.substring(16, 20);
        fieldValue[4] = enteredNum.substring(20, 32);
        resetFieldValue(fieldValue);
    } else if (enteredNumLength > 20) {
        fieldValue[0] = enteredNum.substring(0, 8);
        fieldValue[1] = enteredNum.substring(8, 12);
        fieldValue[2] = enteredNum.substring(12, 16);
        fieldValue[3] = enteredNum.substring(16, 20);
        fieldValue[4] = enteredNum.substring(20, enteredNumLength);

        resetFieldValue(fieldValue);
    } else if (enteredNumLength == 20) {
        fieldValue[0] = enteredNum.substring(0, 8);
        fieldValue[1] = enteredNum.substring(8, 12);
        fieldValue[2] = enteredNum.substring(12, 16);
        fieldValue[3] = enteredNum.substring(16, 20);

        resetFieldValue(fieldValue);
    } else if (enteredNumLength > 16) {
        fieldValue[0] = enteredNum.substring(0, 8);
        fieldValue[1] = enteredNum.substring(8, 12);
        fieldValue[2] = enteredNum.substring(12, 16);
        fieldValue[3] = enteredNum.substring(16, enteredNumLength);

        resetFieldValue(fieldValue);
    } else if (enteredNumLength == 16) {
        fieldValue[0] = enteredNum.substring(0, 8);
        fieldValue[1] = enteredNum.substring(8, 12);
        fieldValue[2] = enteredNum.substring(12, 16);

        resetFieldValue(fieldValue);
    } else if (enteredNumLength > 12) {
        fieldValue[0] = enteredNum.substring(0, 8);
        fieldValue[1] = enteredNum.substring(8, 12);
        fieldValue[2] = enteredNum.substring(12, enteredNumLength);

        resetFieldValue(fieldValue);
    } else if (enteredNumLength == 12) {
        fieldValue[0] = enteredNum.substring(0, 8);
        fieldValue[1] = enteredNum.substring(8, 12);

        resetFieldValue(fieldValue);
    } else if (enteredNumLength > 8) {
        fieldValue[0] = enteredNum.substring(0, 8);
        fieldValue[1] = enteredNum.substring(8, enteredNumLength);
        resetFieldValue(fieldValue);
    } else if (enteredNumLength == 8) {
        fieldValue[0] = enteredNum.substring(0, 8);

        resetFieldValue(fieldValue);
    } else if (enteredNumLength > 0) {
        fieldValue[0] = enteredNum.substring(0, enteredNumLength);
        resetFieldValue(fieldValue);
    } else if (enteredNumLength > 32) {
        fieldValue[0] = enteredNum.substring(0, 8);
        fieldValue[1] = enteredNum.substring(8, 12);
        fieldValue[2] = enteredNum.substring(12, 16);
        fieldValue[3] = enteredNum.substring(16, 20);
        fieldValue[4] = enteredNum.substring(20, 36);
        resetFieldValue(fieldValue);
    } else {
        return '';
    }
    return newValue;
}
export const renderStatusBtu = (status: string) => {
    if (typeof status !== 'string') return '';
    switch (status.toUpperCase()) {
        case 'VERIFY':
            return 'Xác minh';
        case 'SENDING':
            return 'Phiếu chuyển';
        case 'SENDED':
            return 'Đã gửi';
        case 'NOTIFY':
            return 'Thông Báo';
        case 'COMPLETE':
            return 'Hoàn Thành';
        case 'WAITING':
            return 'Chờ Nộp Phạt';
        default:
            return 'Chưa xử lý';
    }
};

export const renderDay = (day: string) => {
    switch (day.toUpperCase()) {
        case 'MONDAY':
            return 'Thứ Hai';
        case 'TUESDAY':
            return 'Thứ Ba';
        case 'WEDNESDAY':
            return 'Thứ Tư';
        case 'THURSDAY':
            return 'Thứ Năm';
        case 'FRIDAY':
            return 'Thứ Sáu';
        case 'SATURDAY':
            return 'Thứ Bảy';
        case 'SUNDAY':
            return 'Chủ Nhật';
        default:
            return 'Thứ Hai';
    }
};

/**
 * array  : mảng;
 * n : số phần tử trong mảng
 */
export const paginate = (array: string | any[], n: number) => {
    const pageSize = Math.ceil(array.length / n);

    let data = Array.from({ length: pageSize }, (_, index) => {
        const start = index * n;
        return array.slice(start, start + n);
    });
    return { data: data, total_page: data.length };
};
