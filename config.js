/*
  • Created by Jarsépay
  • Github: https://github.com/jarsepay
  • Bot Script: https://github.com/jarsepay/Jarspy-Bot
  • My Bot: https://chat.whatsapp.com/KieFrG8MEt7C99IJKYS8qE
  • Ada kesulitan? Hubungi saya wa.me/6282148864989 (Jarsépay)

  # Thanks to all. 
  • Aaron (My leader)
  • Neil. T (My Partner)
  • Karl (Rdp)
  • Kaleb (Missing Njir)
  • Uniq (Idea)
  • BochilGaming (Base)
  • Whiskeysockets (Baileys)
  • Tronyx (Optiklink)
  • Mr.retslav (Retslav founder) & ibas (Helping fix bot connect)
  • Lolhuman (Api)
  • Erlan (Api menyala bosku🔥)
  • Danz/DannTeam (Friend) (Helping me)
  • Rehan El Staro (Friend) (Helping me)
  • Manz Radit (Friend) (Hilang gatau kemana)
  • Nayla (Friend) (Helping me)
  • Malik & Komang
  • ImYanXiao & Xnuvers007
  • Jarsépay
  • Dan semuanya, sorry kalau ga kesebut
*/

import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'

global.rowner = [
  ['6283865752867', 'Rz', true]
]

global.owner = [
  ['6283865752867', 'Rz', true]
]
global.mods = ['']
global.prems = ['6283865752867', '6283854567705'] // add it manually for permanent premium users

global.idgc = '120363041509832346@g.us'

global.lolkey = 'GataDios'
global.lann = 'JEedMZY5' // register to https://api.betabotz.eu.org

global.APIs = {
  nrtm: 'https://nurutomo.herokuapp.com',
  bg: 'http://bochil.ddns.net',
  xteam: 'https://api.xteam.xyz',
  lann: 'https://api.betabotz.eu.org',
  zahir: 'https://zahirr-web.herokuapp.com',
  zeks: 'https://api.zeks.xyz',
  pencarikode: 'https://pencarikode.xyz',
  LeysCoder: 'https://leyscoders-api.herokuapp.com'
}
global.APIKeys = {
  'https://api.xteam.xyz': 'd90a9e986e18778b',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://api.betabotz.eu.org': 'APIKEYMU', // please register first at https://api.betabotz.eu.org
  'https://api.zeks.xyz': 'apivinz',
  'https://pencarikode.xyz': 'pais',
  'https://leyscoders-api.herokuapp.com': 'dappakntlll'
}

global.namaowner = 'Rz' // owner name
global.nomorowner = '6283865752867' // owner number
global.namabot = 'Mz Ai' // bot name
global.nomorbot = '6285600164146' // bot number

global.wmtitle = 'Mz Ai' // title watermark is at the top
global.wmbody = 'B y  RZ06' // body watermark is under the title
global.thumbs = 'https://telegra.ph/file/476dabd35c800091e0357.jpg' // is this the main thumbnail
// see the example use here https://telegra.ph/file/2042154c2ad625bb23c84.jpg

global.sig = 'https://instagram.com/rizqirz21' // your instagram
global.sgh = 'https://github.com/RizqiRz' // your github
global.sgc = 'https://chat.whatsapp.com/DqMmVlDzaIH7JASaKXjbUY' // your whatsapp group link
global.sdc = 'https://s.id/yntkts' // your discord server (optional)
global.sid = 'https://s.id/yntkts' // change it to anything, must be a https://... link

// sticker packname and author name
global.packname = 'Mz Ai'
global.author = 'By RZ06'

global.fsizedoc = '99999999999999'
global.fpagedoc = '999'

global.multiplier = 10000

global.rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      nama: '✍🏻 ',
      umur: '⏳ ',
      gender: '🚻 ',
      crush: '❤️ ',
      partner: '💐 ',
      level: '🧬 ',
      role: '👤 ',
      limit: '🌌 ',
      health: '❤️ ',
      title: '🥇 ',
      misi: '🚀 ',
      skill: '🎭 ',
      
      strength: '💪🏻 ',
      psychic: '🍃 ',
      defense: '🛡️ ',
      speed: '⚡ ',
      death: '💀 ',
      protection: '🎗️ ',
      location: '🗾 ',
      
      exp: '✉️ ',
      money: '💵 ',
      potion: '🥤 ',
      medkit: '💉 ',
      followers: '👥 ',
      waifu: '💃🏻 ',
      husbu: '🕺🏻 ',
      kepercayaanwaifu: '💘 ',
      kepercayaanhusbu: '💘 ',
      story: '📖 ',
      quest: '🪖 ',
      
      gems: '🍁 ',
      click: '🤳🏿 ',
      social: '👥 ',
      smartphone: '📱 ',
      telephone: '☎️ ',
      luck: '☘ ',
      token: '🩻 ',
      balancer: '⚖️ ',
      lockpick: '🗝️ ',
      lock: '🔒 ',
      crowbar: '🪚 ',
      steal: '💰 ',
      
      auricore: '🔱 ',
      elixir: '🩸 ',
      sphere: '🧶 ',
      iron: '⛓️ ',
      gold: '🟨 ',
      diamond: '💎 ',
      emerald: '🟩 ',
      orb: '🔮 ',
      keping: '⏱️ ',
      crypto: '👾 ',
      ducky: '🪿 ',
      
      trash: '🗑 ',
      armor: '🥼 ',
      sword: '🗡️ ',
      wood: '🪵 ',
      rock: '🪨 ',
      string: '🕸️ ',
      
      ant: '🐜 ',
      horse: '🐎 ',
      cat: '🐈 ',
      dog: '🐕 ',
      fox: '🦊 ',
      dragon: '🐉 ',
      panda: '🐼 ',
      petFood: '🍖 ',
      
      car: '🚙 ',
      fuel: '⛽ ',
      
      pickaxe: '⛏️ ',
      fishingrod: '🎣 ',
      chest: '💼 ',
      ironore: '⚙️ ',
      goldore: '🟡 ',
      diamondore: '💠 ',
      ancientdebris: '🔥 ',
      silver: '⚱️ ',
      light_gold: '🏅 ',
      crystal: '🪩 ',
      
      tombak: '🦯 ',
      busur: '🏹 ',
      anakpanah: '🎯 ',
      glock: '🔫 ',
      ammo: '➖ ',
      ak47: '🔫 ',
      m4: '🔫 ',
      m16: '🔫 ',
      ar15: '🔫 ',
      scar: '🔫 ',
      famas: '🔫 ',
      aug: '🔫 ',
      uzi: '🔫 ',
      mp5: '🔫 ',
      p90: '🔫 ',
      mac10: '🔫 ',
      vector: '🔫 ',
      barrettm82: '🔫 ',
      remington700: '🔫 ',
      dragunovsvd: '🔫 ', 
      m40: '🔫 ', 
      m24: '🔫 ',
      
      elang: '🦅 ',
      beruang: '🐻 ',
      harimau: '🐅 ',
      buaya: '🐊 ',
      bebek: '🦆 ',
      ayam: '🐓 ',
      koala: '🐨 ',
      zebra: '🦓 ',
      sapi: '🐄 ',
      babi: '🐷 ',
      banteng: '🐃 ',
      kerbau: '🦬 ',
      kelinci: '🐇 ',
      tupai: '🐿️ ',
      serigala: '🐺 ',
      domba: '🐑 ',
      kelelawar: '🦇 ',
      landak: '🦔 ',
      kangguru: '🦘 ',
      trenggiling: '🦡 ',
      badak: '🦏 ',
      gajah: '🐘 ',
      
      burger: '🍔 ',
      pizza: '🍕 ',
      kentang: '🍟 ',
      
      maxcrate: '⏫ ',
      uncommon: '📦 ',
      common: '📦 ',
      rare: '📦 ',
      mythical: '📦 ',
      legendary: '📦 ',
      ancient: '📦 ',
      pet: '🎁 ',
    }
    let results = Object.keys(emot).filter(v => v == string)
    if (!results.length) return ''
    else return emot[results[0]]
  },
  
  role(level) {
    level = parseInt(level)
    if (isNaN(level)) return { name: '', level: '' }
    const role = [
      { name: 'Warrior V', level: 0 }, { name: 'Warrior IV', level: 4 }, { name: 'Warrior III', level: 8 }, { name: 'Warrior II', level: 12 }, { name: 'Warrior I', level: 16 },
      { name: 'Elite V', level: 20 }, { name: 'Elite IV', level: 24 }, { name: 'Elite III', level: 28 }, { name: 'Elite II', level: 32 }, { name: 'Elite I', level: 36 },
      { name: 'Gold V', level: 40 }, { name: 'Gold IV', level: 44 }, { name: 'Gold III', level: 48 }, { name: 'Gold II', level: 52 }, { name: 'Gold I', level: 56 },
      { name: 'Platinum V', level: 60 }, { name: 'Platinum IV', level: 64 }, { name: 'Platinum III', level: 68 }, { name: 'Platinum II', level: 72 }, { name: 'Platinum I', level: 76 },
      { name: 'Diamond V', level: 80 }, { name: 'Diamond IV', level: 84 }, { name: 'Diamond III', level: 88 }, { name: 'Diamond II', level: 92 }, { name: 'Diamond I', level: 96 },
      { name: 'Expert', level: 100 },
    ]

    return role.reverse().find(role => level >= role.level)
  }
}


let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})