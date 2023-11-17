import * as sass from 'node-sass';
import jsonImporter from 'node-sass-json-importer';
import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

sass.render(
  {
    file: path.join(__dirname, './_all-variables.scss'),
    importer: jsonImporter(),
  },
  (err, result) => {
    if (err) {
      console.error('Error generating theme:', err);
      return;
    }

    try {
      let cssString = result.css.toString();

      cssString = cssString
        .replace(/:export\s*\{/, '')
        .replace(/\}/, '')
        .trim();

      const json = cssString
        .split(';')
        .filter((line) => line.trim().length > 0)
        .reduce((acc, line) => {
          const [key, value] = line.split(':').map((part) => part.trim());
          acc[key] = value;
          return acc;
        }, {});

      fs.writeFileSync(
        path.join(__dirname, './theme.json'),
        JSON.stringify(json)
      );
      console.log('Theme generated successfully.');
    } catch (parseError) {
      console.error('Error parsing theme:', parseError);
    }
  }
);
