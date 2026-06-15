const fs = require('fs');

const DEP_DEPTH = 2250; // 3000 seviye iç içe!
console.log(`İç içe ${DEP_DEPTH} seviye derinliğinde package-lock.json oluşturuluyor...`);

const lockfile = {
  name: "deep-nested-timeout-tester",
  version: "1.0.0",
  lockfileVersion: 1,
  requires: true,
  dependencies: {}
};

let currentLevel = lockfile.dependencies;

// İç içe ağaç (Matruşka gibi) oluşturuyoruz
for (let i = 0; i < DEP_DEPTH; i++) {
  const pkgName = `nested-package-${i}`;
  
  currentLevel[pkgName] = {
    version: "1.0.0",
    resolved: `https://registry.npmjs.org/${pkgName}/-/${pkgName}-1.0.0.tgz`,
    integrity: "sha512-mockhash12345",
    requires: {},
    dependencies: {}
  };

  // Bir sonraki paket, bu paketin requires listesine ekleniyor
  if (i < DEP_DEPTH - 1) {
    currentLevel[pkgName].requires[`nested-package-${i + 1}`] = "1.0.0";
  }

  // Referansı bir alt seviyeye taşı
  currentLevel = currentLevel[pkgName].dependencies;
}

fs.writeFileSync('package-lock.json', JSON.stringify(lockfile, null, 2));

// Eşlik eden basit bir package.json
const packageJson = {
  name: "deep-nested-timeout-tester",
  version: "1.0.0",
  dependencies: {
    "nested-package-0": "1.0.0"
  }
};
fs.writeFileSync('package.json', JSON.stringify(packageJson, null, 2));

console.log("✅ Derin bağımlılık labirenti oluşturuldu!");