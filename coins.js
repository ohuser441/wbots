const rcoin = ["100", "5", "10", "25", "50", "100", "1", "1", "17", "9", "50", "125", "7", "6", "5", "7", "3", "1", "99", "32", "44", "97", "475", "555", "1", "55"]
const mcoin = Math.floor(Math.random() * rcoin.length);
let handler = async (m, { isPrems }) => {
  let time = global.db.data.users[m.sender].lastccoin + 120000
  if (new Date - global.db.data.users[m.sender].lastccoin < 120000) throw `Mining Coin Amda Masih Cooldown.\ntunggu ${msToTime(time - new Date())} lagi untuk mining coin`
  global.db.data.users[m.sender].coin += mcoin
  m.reply(`Anda mendapatkan +${mcoin} Coins dari mining\n\nanda dapat menukarkan *COIN* menjadi *Money* dengan /mbuy <jumlah money> \n\n1 Money = 1000 coins`)
  global.db.data.users[m.sender].lastccoin = new Date * 1
}
handler.help = ['mine', 'mining']
handler.tags = ['xp']
handler.command = /^(mine|mining)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0
handler.coin = 0

module.exports = handler

function msToTime(duration) {
  var milliseconds = parseInt((duration % 1000) / 100),
    seconds = Math.floor((duration / 1000) % 60),
    minutes = Math.floor((duration / (1000 * 60)) % 60),
    hours = Math.floor((duration / (1000 * 60 * 60)) % 24)

  hours = (hours < 10) ? "0" + hours : hours
  minutes = (minutes < 10) ? "0" + minutes : minutes
  seconds = (seconds < 10) ? "0" + seconds : seconds

  return hours + " jam " + minutes + " menit"
}
