const { toCamelCase } = require('../utils/string')

module.exports.classComponent = (componentName) => {
  return (
    `import * as React from 'react';
import { I${componentName}State } from './${componentName}.types.ts';
import { I${componentName}State } from './${componentName}.constants.ts';
import { I${componentName}State } from './${componentName}.styles.ts';
import { I${componentName}State } from './${toCamelCase(componentName)}.styles.ts';
`
  )
}
