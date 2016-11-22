# Klicknotify

> Simple notification plugin for Klick* projects

## Install

Get it on npm:

```
npm install klicknotify --save
```

## Usage

```
import Notify from 'klicknotify';

// Initialize plugin
Notify.init();

// Show notification
Notify.show({ type: 'success', message: 'Ok!' });
```

### Suported types

- success
- error
- warning

You can use the types as alias to show notification:

```
Notification.success({ message: 'ok' });

Notification.error({ message: 'error' });

Notification.warning({ message: 'caution' });
```
