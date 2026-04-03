# Angular App v19

Angular 19 demo app for `@dynamic-field-kit/angular`.

## What It Does

- Registers Angular field components in `src/app/fieldRegistry.ts`
- Renders a dynamic form from `src/app/app.component.ts` (standalone component)
- Uses `bootstrapApplication` for Angular 19 standalone APIs
- Updates and displays the submitted object as field values change

Current demo fields:

- `name` as `text`
- `age` as `number`

## Run

```bash
npm install
npm start
```

## Build

```bash
npm run build
```

## Main Files

- `src/main.ts` - Bootstrap with field registry registration
- `src/app/app.component.ts` - Standalone component with MultiFieldInput
- `src/app/app.component.html` - Template using dfk-multi-field-input
- `src/app/fieldRegistry.ts` - Register Angular field components
- `src/app/components/text-field.component.ts` - Text field renderer
- `src/app/components/number-field.component.ts` - Number field renderer
- `angular-instructions.md` - Full integration guide

## Integration

See `angular-instructions.md` for complete setup guide.
