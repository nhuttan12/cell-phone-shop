import fs from 'fs';
import yaml from 'yaml';
import { AppConfig } from '@/type/config/config';

function loadConfig(): AppConfig {
  // 1. Load config from file
  const yamlConfigFilePath: string = './config.env.yaml';

  // 2. Read file config
  const file: string = fs.readFileSync(yamlConfigFilePath, 'utf8');

  // 3. Parse config
  const data: AppConfig = yaml.parse(file) as AppConfig;

  // 4. Return config
  return data;
}

export const config: AppConfig = loadConfig();
