// knex操作数据库

const {mysql} = require('../qcloud')

module.exports = async(ctx) => {
    const {openid, add} = ctx.request.body

    try {
        const res = await mysql('records')
        .where('openid', openid)
        .select('mark')
        .orderBy('id', 'desc')
        .first()
        var mark = 0
        if (res) {
            mark = res.mark
        } else {
            mark = 0
        }
        mark = mark + add
        console.log('当前分数: ', mark)

        await mysql('records').insert({
            openid, add, mark
        })

        ctx.state.data = {
            code: 0,
            msg: 'SUCCESS'
        }
        console.log('执行成功')
    } catch (e) {
        ctx.state = {
            code: -1,
            data: {
                msg: '添加失败' + e.splMessage
            }
        }
        console.log('提交错误', e)
    }
}
