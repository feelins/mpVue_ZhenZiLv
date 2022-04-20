// knex操作数据库

const {mysql} = require('../qcloud')

module.exports = async(ctx) => {
    const {id, note} = ctx.request.body

    try {
        await mysql('records').where('id', id).update('note', note)
        // 执行成功，返回标记
        ctx.state.data = {
            code: 0,
            msg: 'success'
        }
        console.log('执行成功')
    } catch (e) {
        ctx.state = {
            code: -1,
            data: {
                msg: '清零失败' + e.splMessage
            }
        }
        console.log('执行失败', e)
    }
}
