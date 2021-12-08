// uptimerobot rss to .upptimerc.yml

/**
 * 1. uptimerobot export csv
 * 2. csv to json https://csvjson.com/csv2json
 * 3. json to yml
 */

// https://csvjson.com/csv2json
const YAML = require('json-to-pretty-yaml');

(async () => {
  const sitesJson = [
    {
      "ID": 789996010,
      "Type": "HTTP",
      "Status": "Down",
      "Friendly Name": "API Governance",
      "URL/IP": "https://governance.matataki.io/api/logs",
      "Keyword Type": "",
      "Keyword Value": "",
      "Port": ""
    },
    {
      "ID": 789995983,
      "Type": "HTTP",
      "Status": "Up",
      "Friendly Name": "API management",
      "URL/IP": "https://api-mgr-hk.mttk.net",
      "Keyword Type": "",
      "Keyword Value": "",
      "Port": ""
    },
    {
      "ID": 789996215,
      "Type": "HTTP",
      "Status": "Up",
      "Friendly Name": "API Meta Network",
      "URL/IP": "https://network.api.metanetwork.online",
      "Keyword Type": "",
      "Keyword Value": "",
      "Port": ""
    },
    {
      "ID": 789987714,
      "Type": "HTTP",
      "Status": "Up",
      "Friendly Name": "API MTTK",
      "URL/IP": "https://api.mttk.net",
      "Keyword Type": "",
      "Keyword Value": "",
      "Port": ""
    },
    {
      "ID": 789996103,
      "Type": "HTTP",
      "Status": "Up",
      "Friendly Name": "API MTTK auth-be",
      "URL/IP": "http://auth-be.mttk.net",
      "Keyword Type": "",
      "Keyword Value": "",
      "Port": ""
    },
    {
      "ID": 789996101,
      "Type": "HTTP",
      "Status": "Up",
      "Friendly Name": "API MTTK cache-ore",
      "URL/IP": "http://cache-ore.mttk.net",
      "Keyword Type": "",
      "Keyword Value": "",
      "Port": ""
    },
    {
      "ID": 789996082,
      "Type": "HTTP",
      "Status": "Down",
      "Friendly Name": "API MTTK cache-ore subscriptions",
      "URL/IP": "https://cache-ore.mttk.net/matataki/status/subscriptions",
      "Keyword Type": "",
      "Keyword Value": "",
      "Port": ""
    },
    {
      "ID": 789995670,
      "Type": "HTTP",
      "Status": "Up",
      "Friendly Name": "API MTTK IPFS",
      "URL/IP": "https://api.mttk.net/post/ipfs/QmSr94SdMEdCgGTKyJYTwMdVEzZ28sRiLqfQ7S7c2t8C5h",
      "Keyword Type": "",
      "Keyword Value": "",
      "Port": ""
    },
    {
      "ID": 789995708,
      "Type": "HTTP",
      "Status": "Up",
      "Friendly Name": "API MTTK Token",
      "URL/IP": "https://api.mttk.net/minetoken/238",
      "Keyword Type": "",
      "Keyword Value": "",
      "Port": ""
    },
    {
      "ID": 789995959,
      "Type": "HTTP",
      "Status": "Down",
      "Friendly Name": "API Quest",
      "URL/IP": "https://misson-hall-api.mttk.net",
      "Keyword Type": "",
      "Keyword Value": "",
      "Port": ""
    },
    {
      "ID": 789995853,
      "Type": "HTTP",
      "Status": "Down",
      "Friendly Name": "Cryptomeetup",
      "URL/IP": "https://cryptomeetup.async.moe",
      "Keyword Type": "",
      "Keyword Value": "",
      "Port": ""
    },
    {
      "ID": 789995862,
      "Type": "HTTP",
      "Status": "Up",
      "Friendly Name": "Hero",
      "URL/IP": "https://dao-hero.netlify.app",
      "Keyword Type": "",
      "Keyword Value": "",
      "Port": ""
    },
    {
      "ID": 789995975,
      "Type": "HTTP",
      "Status": "Up",
      "Friendly Name": "management",
      "URL/IP": "https://mgr-prod.mttk.net",
      "Keyword Type": "",
      "Keyword Value": "",
      "Port": ""
    },
    {
      "ID": 789995832,
      "Type": "HTTP",
      "Status": "Up",
      "Friendly Name": "Matataki Airdrop",
      "URL/IP": "https://www.matataki-airdrop.xyz",
      "Keyword Type": "",
      "Keyword Value": "",
      "Port": ""
    },
    {
      "ID": 789995868,
      "Type": "HTTP",
      "Status": "Up",
      "Friendly Name": "Matataki DAO",
      "URL/IP": "https://matataki-dao.netlify.app",
      "Keyword Type": "",
      "Keyword Value": "",
      "Port": ""
    },
    {
      "ID": 789995731,
      "Type": "HTTP",
      "Status": "Up",
      "Friendly Name": "Matataki developer",
      "URL/IP": "https://developer.matataki.io",
      "Keyword Type": "",
      "Keyword Value": "",
      "Port": ""
    },
    {
      "ID": 789995914,
      "Type": "HTTP",
      "Status": "Up",
      "Friendly Name": "Matataki Doc",
      "URL/IP": "https://docs.matataki.io",
      "Keyword Type": "",
      "Keyword Value": "",
      "Port": ""
    },
    {
      "ID": 789984867,
      "Type": "HTTP",
      "Status": "Up",
      "Friendly Name": "Matataki FE Article",
      "URL/IP": "https://www.matataki.io/article",
      "Keyword Type": "",
      "Keyword Value": "",
      "Port": ""
    },
    {
      "ID": 789995690,
      "Type": "HTTP",
      "Status": "Up",
      "Friendly Name": "Matataki FE P",
      "URL/IP": "https://www.matataki.io/p/9730",
      "Keyword Type": "",
      "Keyword Value": "",
      "Port": ""
    },
    {
      "ID": 789995677,
      "Type": "HTTP",
      "Status": "Up",
      "Friendly Name": "Matataki FE Token",
      "URL/IP": "https://www.matataki.io/token/238",
      "Keyword Type": "",
      "Keyword Value": "",
      "Port": ""
    },
    {
      "ID": 789995894,
      "Type": "HTTP",
      "Status": "Up",
      "Friendly Name": "Matataki Governace",
      "URL/IP": "https://governance.matataki.io",
      "Keyword Type": "",
      "Keyword Value": "",
      "Port": ""
    },
    {
      "ID": 789995877,
      "Type": "HTTP",
      "Status": "Up",
      "Friendly Name": "Matataki mining",
      "URL/IP": "https://matataki-mining.netlify.app",
      "Keyword Type": "",
      "Keyword Value": "",
      "Port": ""
    },
    {
      "ID": 789995817,
      "Type": "HTTP",
      "Status": "Up",
      "Friendly Name": "Matataki NFT Market",
      "URL/IP": "https://nft-market.matataki.io",
      "Keyword Type": "",
      "Keyword Value": "",
      "Port": ""
    },
    {
      "ID": 789995881,
      "Type": "HTTP",
      "Status": "Up",
      "Friendly Name": "Matataki Quest",
      "URL/IP": "https://quest.matataki.io",
      "Keyword Type": "",
      "Keyword Value": "",
      "Port": ""
    },
    {
      "ID": 789995907,
      "Type": "HTTP",
      "Status": "Up",
      "Friendly Name": "MatatakiMD",
      "URL/IP": "https://md.mttk.net",
      "Keyword Type": "",
      "Keyword Value": "",
      "Port": ""
    },
    {
      "ID": 789996201,
      "Type": "HTTP",
      "Status": "Up",
      "Friendly Name": "Metanetowrk Map",
      "URL/IP": "https://www.metanetwork.online",
      "Keyword Type": "",
      "Keyword Value": "",
      "Port": ""
    },
    {
      "ID": 789996173,
      "Type": "HTTP",
      "Status": "Up",
      "Friendly Name": "MetaNetwork Home",
      "URL/IP": "https://home.metanetwork.online",
      "Keyword Type": "",
      "Keyword Value": "",
      "Port": ""
    },
    {
      "ID": 789995751,
      "Type": "HTTP",
      "Status": "Up",
      "Friendly Name": "OSS aliyuncs cn hongkong",
      "URL/IP": "https://smartsignature-img.oss-cn-hongkong.aliyuncs.com/avatar/2020/01/27/4ea1a68f7445d49f4cc36df476be2a09.jpg",
      "Keyword Type": "",
      "Keyword Value": "",
      "Port": ""
    }
  ]
  const sites = sitesJson.map(i => ({
    name: i['Friendly Name'],
    url: i['URL/IP']
  }))

  const data = YAML.stringify(sites);
  console.log(data, sites.length)
})();