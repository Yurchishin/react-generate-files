## react-generate-files

Install:

### `npm i -g react-generate-files`

You can run:

### `rtg "type" "name"`

rtgconfig.json example:

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
