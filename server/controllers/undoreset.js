// knex操作数据库

const {mysql} = require('../qcloud')

module.exports = async(ctx) => {
    const {openid} = ctx.request.body

    try {
        const res = await mysql('records')
        .where('openid', openid)
        .orderBy('id', 'desc')
        .first()
        var mark = 0
        if (res) {
            await mysql('records').where('id', res.id).del()
            // 删除之后，需要再获取当前的最后一条的分数
            const reRes = await mysql('records')
                        .where('openid', openid)
                        .select('mark')
                        .orderBy('id', 'desc')
                        .first()
            if (reRes) {
                mark = reRes.mark
            } else {
                mark = 0
            }
        } else {
            mark = 0
        }

        ctx.state.data = {
            code: 0,
            msg: 'SUCCESS',
            mark: mark
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
