import {FormControl} from '@angular/forms';

// Hijacked the normal behavior of form control
export class DateFormControl extends FormControl{

  // tslint:disable-next-line:typedef
  setValue(value: string | null, options: any){
    if (!value){
      super.setValue('', {...options, emitModelToViewChange: true});
      return ;
    }
    if (value.match(/[^0-9|\/]/gi)){
      super.setValue(this.value, {...options, emitModelToViewChange: true});
      return ;
    }
    if (value.length > 5){
      super.setValue(this.value, {...options, emitModelToViewChange: true});
      return ;
    }
    if (value.length === 2 && this.value.length === 3){
      super.setValue(value, {...options, emitModelToViewChange: true});
      return ;
    }
    if (value.length === 2){
      super.setValue(value + '/', {...options, emitModelToViewChange: true});
      return;
    }
    super.setValue(value, {...options, emitModelToViewChange: true});
  }
}
