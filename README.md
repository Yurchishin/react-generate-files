## react-generate-files

Install:

### `npm i -D react-generate-files`

You can run:

### `rgf generate "type" "name"`

rgfconfig.json example:

     {
       "components": {
         "path": "./src/components",
         "dirname": "$NAME$",
         "files": [
           {
             "name": "$NAME$.tsx",
             "content": "$NAME$.code"
           },
           {
             "name": "$NAME$.type.tsx",
             "content": "code"
           },
           {
             "name": "$NAME$.style.ts",
             "content": "code"
           },
           {
             "name": "style.scss",
             "content": "code"
           },
           {
             "name": "index.name",
             "content": "export { dafault } from './$NAME$'"
           }
         ]
       },
       "containers": {
         "path": "./src/components",
         "dirname": "$NAME$",
         "files": [
           {
             "name": "$NAME$.tsx",
             "content": "code"
           },
           {
             "name": "$NAME$.type.tsx",
             "content": "$NAME$.type"
           },
           {
             "name": "index",
             "content": "export { dafault } from './$NAME$'"
           }
         ]
       }
     }
`
