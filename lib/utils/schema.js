module.exports = {
    properties: {
    rokus: {
      type: 'object',
      default: {},
      patternProperties: {
        '\S*': {
          type: 'object',
          properties: {
            serial: { 
              type: 'string',
              pattern: '^[A-Za-z0-9]{12}$'   
            },
            auth: {
              type: 'object',
              properties: {
                user: { type: 'string' },
                pass: { type: 'string' },
              },
              required: ['user', 'pass']
            }
          },
          required: ['serial', 'auth']
        }
      }
    },
    flavors: {
      type: 'object', 
      default: {}, 
      patternProperties: {
        '\S*': {
          type: 'object',
          properties: {
            base: { 
              type: 'string',
              default: '' 
            },
            src: {
              type: 'array',
              default: []
            }
          },
          required: ['src']
        }
      }
    },
    defaults:{
      type: 'object',
      default: {},
      properties: {
        flavor: {
          type: 'string',
          pattern: '\S*'
        },
        roku: {
          type: 'string',
          pattern: '\S*'
        }
      }
    },
    buildDir: {
      type: 'string',
      pattern: '\S*',
      default: 'build'
    },
    sourceDir: {
      type: 'string',
      pattern: '\S*',
      default: 'src'
    },
    mainFlavor: {
      type: 'string',
      pattern: '\S*',
      default: 'main'
    }
  }
}