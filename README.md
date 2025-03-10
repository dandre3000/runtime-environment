## Usage
``` js
// main.js
import { runtimeEnvironment } from 'runtime-environment'

console.log(runtimeEnvironment)
```

``` html 
<script src="./main.js" type="module"></script>
```
``` js
// Log: "browser"
```

``` console 
node main.js
```
``` js
// Log: "node"
```

``` console 
bun main.js
```
``` js
// Log: "bun"
```

``` console 
deno main.js
```
``` js
// Log: "deno"
```