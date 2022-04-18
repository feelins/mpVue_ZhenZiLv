// knex操作数据库

const {mysql} = require('../qcloud')

module.exports = async(ctx) => {
    const {openid} = ctx.request.query

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

        ctx.state.data = {
            code: 0,
            mark: mark,
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
