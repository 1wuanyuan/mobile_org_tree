/* eslint-disable no-console */

const fs = require('fs');
const path = require('path');

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function writeJson(filePath, data) {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2) + '\n', 'utf8');
}

function copyIfExists(fromPath, toPath) {
  if (!fs.existsSync(fromPath)) return;
  fs.copyFileSync(fromPath, toPath);
}

function main() {
  const repoRoot = path.resolve(__dirname, '..');
  const rootPkgPath = path.join(repoRoot, 'package.json');
  const outDir = path.join(repoRoot, 'npm-package');
  const outPkgPath = path.join(outDir, 'package.json');

  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }

  const rootPkg = readJson(rootPkgPath);

  const packageName = 'mobile-org';
  const version = rootPkg.version;

  const outPkg = {
    name: packageName,
    version,
    description:
      rootPkg.description ||
      'Mobile org tree selector component for Vue 2 (mobile-friendly).',
    main: 'mobile-org.common.js',
    unpkg: 'mobile-org.umd.min.js',
    browser: 'mobile-org.umd.min.js',
    style: 'mobile-org.css',
    files: [
      'mobile-org.common.js',
      'mobile-org.umd.js',
      'mobile-org.umd.min.js',
      'mobile-org.css',
      'README.md'
    ],
    sideEffects: ['*.css'],
    author: rootPkg.author,
    repository: rootPkg.repository,
    bugs: rootPkg.bugs,
    homepage: rootPkg.homepage || 'https://github.com/stefan-ysh/mobile_org_tree',
    keywords:
      rootPkg.keywords ||
      ['vue2', 'mobile', 'org', 'organization', 'tree', 'selector'],
    license: rootPkg.license || 'UNLICENSED',
    peerDependencies: {
      vue: '^2.6.0'
    },
    publishConfig: {
      access: 'public'
    }
  };

  writeJson(outPkgPath, outPkg);

  // Keep npm-package README synced to root README for publish.
  copyIfExists(path.join(repoRoot, 'README.md'), path.join(outDir, 'README.md'));

  console.log(`Synced ${path.relative(repoRoot, outPkgPath)} (v${version}).`);
}

main();
