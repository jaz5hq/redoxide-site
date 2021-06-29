---
slug: guid-generator
title: Guid Generator
description: Guid Generator
keywords:  
  - javascript
  - guid
  - generator
---

The code below can produce GUID (aka UUID) with properties that conform the standard format: 

- format: 00000000-0000-0000-0000-000000000000 (128 bits, each digit is hexadecimal)

- lower case

```js title="Guid.js"
class Guid {
    constructor(value) {
        if(value) {
            value = String(value);
        }
        this._value = this._normalize(value || this._generate());
    }

    _normalize (value) {
        value = value.replace(/[^a-f0-9]/ig, '').toLowerCase();
        while(value.length < 32) {
            value += '0';
        }
        return [
            value.substr(0, 8),
            value.substr(8, 4),
            value.substr(12, 4),
            value.substr(16, 4),
            value.substr(20, 12)
        ].join('-');
    }

    _generate() {
        let value = '';
        for(let i = 0; i < 32; i++) {
            value += Math.round(Math.random() * 15).toString(16);
        }
        return value;
    }

    toString() {
        return this._value;
    }

    valueOf(){
        return this._value;
    }

    toJSON() {
        return this._value;
    }
}

export default Guid;
```