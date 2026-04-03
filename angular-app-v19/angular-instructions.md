# Wiring `@dynamic-field-kit/angular` into an Angular app

This document shows the current recommended integration for a consumer Angular application.

Summary

- Install `@dynamic-field-kit/core` and `@dynamic-field-kit/angular`.
- Register your Angular field components in the shared `fieldRegistry` before bootstrap.
- Use `dfk-multi-field-input` in your template.
- `layout` currently supports `column`, `row`, and `grid`.
- When linking the package locally with `file:`, set `preserveSymlinks: true` in `angular.json`.

Quick start

1. Create an Angular app if you do not already have one:

```bash
npm install -g @angular/cli
ng new my-dfk-app --defaults --skip-git
cd my-dfk-app
```

2. Install the library packages.

Published package:

```bash
npm install @dynamic-field-kit/core @dynamic-field-kit/angular
```

Local monorepo development:

```json
{
  "dependencies": {
    "@dynamic-field-kit/core": "file:../packages/core",
    "@dynamic-field-kit/angular": "file:../packages/angular/dist"
  }
}
```

Then run:

```bash
npm install
```

3. If you are using a local `file:` dependency, enable `preserveSymlinks` in `angular.json`:

```json
{
  "projects": {
    "my-dfk-app": {
      "architect": {
        "build": {
          "options": {
            "preserveSymlinks": true
          }
        }
      }
    }
  }
}
```

4. Register Angular field renderers before bootstrap:

```ts
// src/main.ts
import 'zone.js';
import { bootstrapApplication } from '@angular/platform-browser';
import { fieldRegistry } from '@dynamic-field-kit/angular';
import { AppComponent } from './app/app.component';
import { TextFieldComponent } from './app/components/text-field.component';
import { NumberFieldComponent } from './app/components/number-field.component';

fieldRegistry.register('text', TextFieldComponent as any);
fieldRegistry.register('number', NumberFieldComponent as any);

bootstrapApplication(AppComponent, {
  providers: [],
}).catch((err) => console.error(err));
```

5. Implement field renderer components:

```ts
// src/app/components/text-field.component.ts
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-text-field',
  standalone: true,
  template: `
    <input
      [value]="value ?? ''"
      [placeholder]="placeholder || ''"
      (input)="onInput($event)"
    />
  `,
})
export class TextFieldComponent {
  @Input() value?: string;
  @Input() placeholder?: string;
  @Output() valueChange = new EventEmitter<string>();

  onInput(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.valueChange.emit(value);
  }
}
```

6. Use `dfk-multi-field-input` in your standalone component:

```ts
// src/app/app.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MultiFieldInput } from '@dynamic-field-kit/angular';
import { FieldDescription } from '@dynamic-field-kit/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, MultiFieldInput],
  templateUrl: './app.component.html',
})
export class AppComponent {
  fields: FieldDescription[] = [
    { name: 'name', type: 'text', label: 'Name' },
    { name: 'age', type: 'number', label: 'Age' },
  ];

  data: any = {};

  onChange(data: any) {
    this.data = data;
  }
}
```

```html
<!-- src/app/app.component.html -->
<dfk-multi-field-input
  [fieldDescriptions]="fields"
  [properties]="data"
  (onChange)="onChange($event)"
></dfk-multi-field-input>
```

Notes

- Do not import package internals from `@dynamic-field-kit/angular/src/...` in a consumer app.
- Register Angular component classes in `fieldRegistry`; do not register React or Vue components.
- If you rebuild `packages/angular` in a linked local setup, restart `ng serve` so Angular CLI reloads the updated package.
