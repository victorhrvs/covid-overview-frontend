function maskDate(value: string) {
    value = value.replace(/\D/g, ""); // 12/02/2022
    value = value.replace(/^(\d{2})(\d{2})(\d{4})/, "$1/$2/$3");
    return value;
  }

function maskPhone(value: string) {
    value = value.replace(/\D/g, ""); // (11)1111-1111
    value = value.replace(/^(\d{2})(\d)/g, "($1)$2");
    value = value.replace(/(\d)(\d{4})$/, "$1-$2");
    return value;
}

export { maskDate , maskPhone }