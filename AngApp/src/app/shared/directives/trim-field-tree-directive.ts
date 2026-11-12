import { Directive, input } from '@angular/core';
import { FieldTree } from '@angular/forms/signals';

@Directive({
  selector: 'input[appTrimFieldTree], textarea[appTrimFieldTree]',
  host: {
    '(blur)': "onBlur()"
  }
})
export class TrimFieldTreeDirective {
  readonly fieldTree = input.required<FieldTree<string, string, "writable">>({
    alias: 'appTrimFieldTree'
  });
  //private readonly el = inject(ElementRef<HTMLInputElement | HTMLTextAreaElement>);
  onBlur() {
    const fieldState = this.fieldTree()();
    const current = fieldState.value();
    const trimmed = current.trim();
    if (current !== trimmed) {
      fieldState.value.set(trimmed);
    }

    // Always sync the DOM in case the signal was already equal to `trimmed`
    // (e.g., user added a trailing space after blur/focus)
    /*if (this.el.nativeElement.value !== trimmed) {
      this.el.nativeElement.value = trimmed;
    }*/
  }
}
