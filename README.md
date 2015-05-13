# react-broadcast

React.jsにVue.jsのbroadcastを導入します。  
React.Componentを継承しているのでES6 Class形式で継承して下さい。  
JSXの変換部分でReact.createElementを使用するため、Reactのimportも必要です。

```js
import React     import 'react';
import Broadcast import './react-broadcast';

this.event.on(event, callback);
this.event.broadcast(event, value);
```

[react-mount](https://github.com/morisuke/react-mount) を併用するとVue.jsコンポーネントのように取り回せます。

```js
import React      from 'react';
import Broadcast  from './react-broadcast';
import ReactMount from './react-mount';

export default Component1 extends Broadcast {
  constructor(){
    super();
    
    this.event.on('event', function(value) {
      console.log(value);
    });
  }
}

export default Component2 extends Broadcast {
  constructor(){
    super();
    this.fire = this.fire.bind(this);
  }
  
  fire() {
    this.event.broadcast('event', 'Hello World');
  }
  
  render() {
    return (
      <div onClick={this.fire}></div>
    );
  }
}

ReactMount(<Component1 />, '[v-component=x-component1]');
ReactMount(<Component2 />, '[v-component=x-component2]');
```
