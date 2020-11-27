import {FormControl} from '@angular/forms';

// Hijacked the normal behavior of form control
export class DateFormControl extends FormControl{
  setValue(value: string, options: any){
    super.setValue(value + '*',options);
  }
}
