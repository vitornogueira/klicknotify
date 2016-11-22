# Klicknotify

[![Build Status](https://travis-ci.org/ignicaodigitalbr/klicknotify.svg?branch=master)](https://travis-ci.org/ignicaodigitalbr/klicknotify)
[![npm](https://img.shields.io/npm/v/klicknotify.svg)](https://github.com/ignicaodigitalbr/klicknotify)

> Simple notification plugin for Klick* projects

## Install

Get it on npm:

```shell
npm install klicknotify --save
```

## Usage

```javascript
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

```javascript
Notify.success({ message: 'ok' });

Notify.error({ message: 'error' });

Notify.warning({ message: 'caution' });
```
