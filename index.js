const md5 = require('locutus/php/strings/md5');
// equals to php md5
module.exports = function phpmd5(str, raw_output) {
    if (!raw_output) {
        return md5(str);
    }

    return Buffer.from(md5(str), 'hex').toString('binary');
};
