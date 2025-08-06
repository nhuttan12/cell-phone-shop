import { readFileSync } from 'fs';
import * as yaml from 'js-yaml';
import { join } from 'path';
import { AppConfig } from './interface/config.interface';

const YAML_CONFIG_FILENAME = 'config.env.yaml';

export default () => {
  const config = yaml.load(
    readFileSync(join(__dirname, YAML_CONFIG_FILENAME), 'utf-8'),
  ) as Record<string, any>;

  return config as AppConfig;
};
