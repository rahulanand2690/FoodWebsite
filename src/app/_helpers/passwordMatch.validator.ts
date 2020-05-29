import { FormGroup, FormControl } from '@angular/forms';

export function MustMatch(controlName: FormControl, matchingControlName: FormControl) {
  return (formGroup: FormGroup) => {
   // const password = formGroup.controls[controlName];
    //const confirmPassword = formGroup.controls[matchingControlName];
    if (
      controlName.value.length !== matchingControlName.value.length &&
      controlName.value !== matchingControlName.value
    ) {
      return false;
    } else {
      return null;
    }
  };
}
