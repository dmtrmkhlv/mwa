export const usePhoneMask = () => {
  const setCursorPosition = (pos: number, e: any) => {
    e.focus();
    if (e.setSelectionRange) {
      e.setSelectionRange(pos, pos);
    } else if (e.createTextRange) {
      let range = e.createTextRange();
      range.collapse(true);
      range.moveEnd("character", pos);
      range.moveStart("character", pos);
      range.select();
    }
  };

  const setPhoneValue = (inputValue: string) => {
    let matrix = "+7(___)___-__-__";
    // inputValue = inputValue;
    let i = 0;
    let def = matrix.replace(/\D/g, "");
    let val = inputValue.replace(/\D/g, "");
    def.length >= val.length && (val = def);
    matrix = matrix.replace(/[_\d]/g, function () {
      return inputValue.replace(/\D/g, "").charAt(i++) || "_";
    });
    return matrix;
  };

  const phoneMask = (input: HTMLInputElement) => {
    let matrix = input.placeholder;
    let i = 0;
    let def = matrix.replace(/\D/g, "");
    let val = input.value.replace(/\D/g, "");
    def.length >= val.length && (val = def);
    matrix = matrix.replace(/[_\d]/g, function () {
      return val.charAt(i++) || "_";
    });
    input.value = matrix;
    i = matrix.lastIndexOf(val.substr(-1));
    i < matrix.length && matrix !== input.placeholder
      ? i++
      : (i = matrix.indexOf("_"));
    setCursorPosition(i, input);
  };

  return { setPhoneValue, phoneMask };
};
