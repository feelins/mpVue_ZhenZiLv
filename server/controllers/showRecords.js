// knex操作数据库

const {mysql} = require('../qcloud')

module.exports = async(ctx) => {
    const {openid, page} = ctx.request.query

    try {
        const records = await mysql('records')
                                .where('openid', openid)
                                .select('id', 'add', 'mark', 'note', 'create_time')
                                .orderBy('id', 'desc')
                                .limit(15).offset(Number(page * 15))

        // limit n offset m是mysql的分页语句  代码从m行开始查，查找n条数据
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
