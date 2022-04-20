// knex操作数据库

const {mysql} = require('../qcloud')

module.exports = async(ctx) => {
    const {openid} = ctx.request.query

    try {
        const records = await mysql('records')
                                .where('openid', openid)
                                .select('id', 'add', 'mark', 'note', 'create_time')
                                .orderBy('id', 'desc')
        // 执行成功返回的数据
        ctx.state.data = {
            records
        }
        console.log('执行成功')
    } catch (e) {
        // 执行失败返回的数据
        ctx.state = {
            code: -1,
            data: {
                msg: '添加失败' + e.splMessage
            }
        }
        console.log('提交错误', e)
    }
}
