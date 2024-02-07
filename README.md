# Windows Event Logger Transport for Pino

## Instalation

```
npm i pino-windows-event-logger-transport
```

## Requirements
The package requires administrator rights in order to be able to write to the Event Logger.

## Usage
Pass the config to Pino as usual:
```
{
  target: 'pino-windows-event-logger-transport',
  level: 'info',
  options: { appName: 'The name that will be used to indentify the log source in Event Viewer' },
}
```

## Licence

MIT
