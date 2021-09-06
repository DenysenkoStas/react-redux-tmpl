const promptDirectory = require('inquirer-directory');

const componentTypes = {
  FUNCTION_COMPONENT: 'Function component',
  CLASS_COMPONENT: 'Class component',
};

const reactFunctionComponentGenerator = () => ({
  description: componentTypes.FUNCTION_COMPONENT,
  prompts: [
    {
      type: 'list',
      name: 'src',
      message: 'Base directory',
      choices: ['features', 'shared'],
      default: 0,
    },
    {
      type: 'directory',
      name: 'directory',
      message: 'select directory',
      basePath: './src/features',
      when: (answers) => answers.src === 'features',
    },
    {
      type: 'directory',
      name: 'directory',
      message: 'select directory',
      basePath: './src/shared',
      when: (answers) => answers.src === 'shared',
    },
    {
      type: 'input',
      name: 'name',
      message: 'component name',
    },
  ],
  actions: function (data) {
    return [
      {
        type: 'add',
        path: `src/${data.src}/{{directory}}/{{pascalCase name}}/{{pascalCase name}}.jsx`,
        templateFile: 'plop-templates/component/Component.hbs',
      },
      {
        type: 'add',
        path: `src/${data.src}/{{directory}}/{{pascalCase name}}/{{pascalCase name}}.scss`,
        templateFile: 'plop-templates/component/Component.scss.hbs',
      },
      {
        type: 'add',
        path: `src/${data.src}/{{directory}}/{{pascalCase name}}/index.js`,
        templateFile: 'plop-templates/component/Component.index.hbs',
      },
    ];
  },
});

const reactClassComponentGenerator = () => ({
  description: componentTypes.CLASS_COMPONENT,
  prompts: [
    {
      type: 'list',
      name: 'src',
      message: 'Base directory',
      choices: ['features', 'shared'],
      default: 0,
    },
    {
      type: 'directory',
      name: 'directory',
      message: 'select directory',
      basePath: './src/features',
      when: (answers) => answers.src === 'features',
    },
    {
      type: 'directory',
      name: 'directory',
      message: 'select directory',
      basePath: './src/shared',
      when: (answers) => answers.src === 'shared',
    },
    {
      type: 'input',
      name: 'name',
      message: 'component name',
    },
  ],
  actions: function (data) {
    return [
      {
        type: 'add',
        path: `src/${data.src}/{{directory}}/{{pascalCase name}}/{{pascalCase name}}.jsx`,
        templateFile: 'plop-templates/component/ClassComponent.hbs',
      },
      {
        type: 'add',
        path: `src/${data.src}/{{directory}}/{{pascalCase name}}/{{pascalCase name}}.scss`,
        templateFile: 'plop-templates/component/Component.scss.hbs',
      },
      {
        type: 'add',
        path: `src/${data.src}/{{directory}}/{{pascalCase name}}/index.js`,
        templateFile: 'plop-templates/component/Component.index.hbs',
      },
    ];
  },
});

module.exports = function (plop) {
  plop.setPrompt('directory', promptDirectory);
  plop.setGenerator(componentTypes.FUNCTION_COMPONENT, reactFunctionComponentGenerator());
  plop.setGenerator(componentTypes.CLASS_COMPONENT, reactClassComponentGenerator());
};
