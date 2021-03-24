/*
 * @Author: 张锦滨
 * @Date: 2021-03-23 17:23:04
 * @LastEditTime: 2021-03-24 08:57:04
 * @Description: 
 * @FilePath: \superman\vue.config.js
 */
module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
                'assets': '@/assets',
                'common': '@/common',
                'components': '@/components',
                'network': '@/network',
                'views': '@/views',
            }
        }
    }
}