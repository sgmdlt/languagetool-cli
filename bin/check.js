#!/usr/bin/env node

import { exec } from 'child_process';
import { runCheck } from '../src/index.js';

exec('/LanguageTool-6.3/start.sh >/dev/null 2>&1 &', () => setTimeout(async () => {
  const rules = process.argv.slice(2);

  runCheck(rules);
}, 5000));
