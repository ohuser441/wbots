const fcoins = 400
const pcoins = 1600
let handler = async (m, { isPrems }) => {
  let kali = global.db.data.users[m.sender].multiple
  const fcoin = fcoins *kali
  const pcoin = pcoins *kali
  let time = global.db.data.users[m.sender].lastccoin + 20000 //default 120000
  if (new Date - global.db.data.users[m.sender].lastccoin < 20000) throw `Mining Coin Anda Masih Cooldown.\ntunggu ${msToTime(time - new Date())} lagi untuk mining coin`
  global.db.data.users[m.sender].coin += isPrems ? pcoin : fcoin
  m.reply(`Anda mendapatkan +${isPrems ? pcoin : fcoin}  Coins.\nMultiple: ${kali}\n\n*NB*: _Pengguna Premium Mendapatkan COINS 4 kali lipat lebih banyak_ `)
  global.db.data.users[m.sender].lastccoin = new Date * 1
}
handler.help = ['mine', 'mining']
handler.tags = ['xp', 'ekonomi']
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

  return minutes + " menit " + seconds + " detik "
}
