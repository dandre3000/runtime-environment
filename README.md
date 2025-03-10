## Usage
``` js
// file.js
import { runtimeEnvironment } from 'runtime-environment'

console.log(runtimeEnvironment)
```

``` html 
<script src="./file.js" type="module"></script>
<!-- Log: "browser" -->
```

``` shell 
node file.js
# Log: "node"
```

``` shell 
bun file.js
# Log: "bun"
```

``` shell 
deno file.js
# Log: "deno"
```
