const fs = require('fs');

// Kesinlikle NPM'de var olan ve bağımlılık ağacı çok derin olan paketlerin devasa listesi
const massiveRealPackages = [
  // --- BULUT SDK'LARI (En büyük şişkinlik buradan gelir) ---
  "@aws-sdk/client-s3", "@aws-sdk/client-dynamodb", "@aws-sdk/client-ec2", 
  "@aws-sdk/client-lambda", "@aws-sdk/client-iam", "@aws-sdk/client-cognito-identity", 
  "@aws-sdk/client-rds", "@aws-sdk/client-sqs", "@aws-sdk/client-sns", 
  "@aws-sdk/client-kms", "@aws-sdk/client-cloudwatch", "@aws-sdk/client-cloudformation", 
  "@aws-sdk/client-ssm", "@aws-sdk/client-sts", "@aws-sdk/client-athena", 
  "@aws-sdk/client-batch", "@aws-sdk/client-cloudfront", "@aws-sdk/client-ecs", 
  "@aws-sdk/client-eks", "@aws-sdk/client-elasticache", "@aws-sdk/client-glue", 
  "@aws-sdk/client-kinesis", "@aws-sdk/client-route-53", "@aws-sdk/client-secrets-manager", 
  "@aws-sdk/client-ses", "@aws-sdk/client-sfn", "@aws-sdk/client-waf", 
  "@aws-sdk/client-xray", "aws-sdk", // Eski monolitik AWS SDK
  "@azure/storage-blob", "@azure/identity", "@azure/cosmos", "@azure/keyvault-secrets", 
  "@azure/service-bus", "@azure/event-hubs", "@azure/arm-compute",
  "@google-cloud/storage", "@google-cloud/pubsub", "@google-cloud/bigquery", 
  "@google-cloud/firestore", "@google-cloud/datastore", "firebase-admin", "firebase",

  // --- DEV ÇATI FRAMEWORK'LER (CLI ve Core) ---
  "@angular/cli", "@angular/core", "@angular/material", "@angular/compiler-cli",
  "next", "nuxt", "gatsby", "gatsby-cli", "expo-cli", "react-native",
  "@nestjs/cli", "@nestjs/core", "@nestjs/microservices", "@nestjs/graphql",
  "vue", "react", "svelte", "@sveltejs/kit",

  // --- TEST & OTOMASYON (Tarayıcı motorları indirdikleri için inanılmaz ağırdır) ---
  "puppeteer", "playwright", "cypress", "jest", "mocha", "chai", "selenium-webdriver",

  // --- DERLEYİCİLER & BUILD ARAÇLARI ---
  "webpack", "webpack-cli", "webpack-dev-server", "vite", "rollup", "parcel", "esbuild",
  "typescript", "babel-cli", "@babel/core", "@babel/preset-env", "@babel/preset-react",
  "@babel/preset-typescript", "eslint", "prettier", "stylelint",

  // --- VERİTABANI & ORM ---
  "typeorm", "sequelize", "mongoose", "prisma", "@prisma/client", "knex", "pg", "mysql2",

  // --- UI KÜTÜPHANELERİ VE VERİ GÖRSELLEŞTİRME ---
  "@mui/material", "@mui/icons-material", "antd", "bootstrap", "tailwindcss",
  "three", "d3", "echarts", "chart.js", "highcharts",

  // --- YARDIMCI KÜTÜPHANELER (Ecosystem bloat) ---
  "rxjs", "lodash", "moment", "date-fns", "chalk", "inquirer", "graphql", 
  "apollo-server", "express", "socket.io", "pm2", "serverless"
];

const dependencies = {};

// Bütün paketleri dependencies objesine ekliyoruz
massiveRealPackages.forEach(pkg => {
  dependencies[pkg] = "latest"; 
});

const packageJson = {
  name: "sbom-timeout-tester-extreme",
  version: "1.0.0",
  description: "An extreme mock repository to completely overload GitHub SBOM API.",
  dependencies: dependencies
};

// Dosyayı oluştur
fs.writeFileSync('package.json', JSON.stringify(packageJson, null, 2));

console.log("🔥 Ekstra şişirilmiş package.json başarıyla oluşturuldu!");
console.log(`📦 Toplam ana paket sayısı: ${Object.keys(dependencies).length}`);
console.log("Şimdi NPM'i çalıştırarak bu ağacı çözmesini isteyebilirsin.");