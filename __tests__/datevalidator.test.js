const validator = function validateDateForm(input) {
    let regex = /^(20)\d\d([-])(0[1-9]|1[012])\2(0[1-9]|[12][0-9]|3[01])$/;
    let date = input;

    if (regex.test(date) === true) {
        return true;
    } else if ((date == '')) {
        alert('Future date must be filled out');
        return false;
    } else {
        alert('Please reenter your future date in the format YYYY-MM-DD');
        return false;
    }
}
 
it('Validation function', () => {
    const input = '09-09-2020';
    const output = false;

    expect(validator(input)).toBe(output);    
})
