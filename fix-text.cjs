const fs = require('fs');
const path = require('path');

function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        file = dir + '/' + file;
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) { 
            results = results.concat(walk(file));
        } else { 
            if(file.endsWith('.tsx') || file.endsWith('.ts')) {
                results.push(file);
            }
        }
    });
    return results;
}

const files = walk('src');
files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    if (content.includes('自营')) {
        content = content.replace(/官方自营发货/g, '德康官方发货');
        content = content.replace(/官方肉禽自营/g, '官方肉禽直供');
        content = content.replace(/陆良德康官方自营/g, '陆良德康官方供货');
        content = content.replace(/陆良德康自营农产品商城/g, '陆良德康农产品交易平台');
        content = content.replace(/自营精选/g, '平台精选');
        content = content.replace(/官方自营农产品平台/g, '官方农产品交易平台');
        content = content.replace(/自营商品/g, '平台商品');
        content = content.replace(/自营/g, '平台');
        fs.writeFileSync(file, content, 'utf8');
        console.log('Updated', file);
    }
});
