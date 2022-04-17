// knex操作数据库

const {mysql} = require('../qcloud')

module.exports = async(ctx) => {
    const {opinion, src, wechat, openid} = ctx.request.body
    // console.log('=============opinion=========', opinion)
    try {
        // await 是必须等数据库操作完成才往下执行
        await mysql('opinions').insert({
            opinion, src, wechat, openid
        })
        ctx.state.data = {
            code: 0,
            msg: 'SUCCESS'
        }
    } catch (e) {
        ctx.state = {
            code: -1,
            data: {
                msg: '添加失败' + e.splMessage
            }
        }
        console.log('提交错误')
    }
}
