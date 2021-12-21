let handler = async (m, { conn, args, participants }) => {
  text = `
*~MULTIPLIER MATKET~*
  [001] +1 multiplier coin, harga = 500 money

note :
_fungsinya untuk melipat gandakan penghasilan coin dari /mine_
_item dapat di stack_

cara membeli :
/buy<kode item> <jumlah>
 contoh:
/buy001 1
`.trim()
  conn.reply(m.chat, text, m)
}

handler.help = ['shop']
handler.tags = ['xp', 'ekonomi']
handler.command = /^(shop|shops)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

module.exports = handler
