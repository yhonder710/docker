export const root = true;
export const env = {
  browser: true,
  es2021: true,
  node: true,
};
export const parser = '@typescript-eslint/parser';
export const parserOptions = {
  ecmaFeatures: {
    jsx: true,
  },
  ecmaVersion: 'latest',
  sourceType: 'module',
};
export const plugins = ['react', '@typescript-eslint'];
export const rules = {
  // Aquí puedes añadir o sobrescribir reglas
  'react/react-in-jsx-scope': 'off', // No necesario desde React 17+
  '@typescript-eslint/no-explicit-any': 'warn', // Avisar pero no error para any
  'react/jsx-uses-react': 'error',
  'react/jsx-uses-vars': 'error',
};
export const settings = {
  react: {
    version: 'detect', // Detecta automáticamente la versión de React
  },
};
