/**
 * Created by ZZl.
 * DateTime: 2017/11/7 16:51
 * 读取dou里面所有存储为筛选过的网页的htm文件，合并为一个文件，文件输出到./result/result.htm
 */

const iconv = require('iconv-lite');
const cheerio = require('cheerio');
const fs = require('fs');

//计数编号
let count = 1;
//设置一个链接是一个图片还是两个图片
let links = 1;

//编号模板
let listNum = `<p class=MsoListParagraph style='margin-left:18.0pt;text-indent:-18.0pt'>
        <span lang=EN-US></span>
        <span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
        <span lang=EN-US>
            <a href=""></a>
        </span>
    </p>`;
//图片模板
let listImg = `<p class=MsoNormal>
        <span lang=EN-US>
            <img src="">
        </span><br/>
    </p><br/>`;

let $listNum = cheerio.load(listNum)('p');
let $listImg;

//文件处理函数
/**
 *一个链接对应一个图片的情况下，输入node app count,1为count值
 *否则，一个链接对应多个值的情况下，输入 node app count links
**/
function init(dir) {
    // 获取链接数是1个图片还是2个图片
    let args = process.argv.splice(2);
    let $listImgP = cheerio.load(listImg);
    //如果参数是2的话
    if (args && args.length > 1) {
        links = parseInt(args[1]);
        $listImgP('p').append('<span lang=EN-US> <img src=""> </span>');
    }
    count = parseInt(args[0]);
    
    $listImg = $listImgP('p');
    let allFileArray = getAllHtm(dir);
    let tmp = readFiles(allFileArray);
    writeToFile(tmp);
}

//读取文件夹中的htm文件
function getAllHtm(dir) {
    let htmArray = [];
    let files = fs.readdirSync(dir);
    files.forEach(function (item, index) {
        let absolutePath = dir + '/' + item;
        let sta = fs.statSync(absolutePath);
        let items = item.split('.');
        let extension = items[items.length - 1];
        if (!sta.isDirectory() && extension === 'htm') {
            htmArray.push(absolutePath);
        }
    });
    return htmArray;
}

//读取文件
function readFiles(fileNamesArray) {
    let tmp = '';
    fileNamesArray.forEach(function (item, index) {
        let imgArray = [], hrefArray = [];
        let tFs = fs.readFileSync(item);
        let $tFs = cheerio.load(iconv.decode(tFs, 'gb2312'));
        $tFs('img').each(function (i, ele) {
            let src = cheerio(this).attr('src');
            if (src) {
                imgArray.push({
                    src: '../dou/' + src,
                    width: cheerio(this).attr('width'),
                    height: cheerio(this).attr('height')
                });
            }
        });
        
        $tFs('a').each(function (i, ele) {
            let href = cheerio(this).attr('href');
            if (href) {
                hrefArray.push(href);
            }
        });
        
        if (imgArray.length === hrefArray.length * links) {
            let len = hrefArray.length;
            console.log(item + ':' + len);
            for (let i = 0; i < len; i++) {
                tmp += joinDoc(imgArray, hrefArray[i], i);
            }
        } else {
            console.log(item + ' 链接和图片数量不一致:链接数：' + hrefArray.length + ' ;图片数:' + imgArray.length);
        }
        
    });
    return tmp;
}

//将图片链接和网址拼接
function joinDoc(imgObj, href, index) {
    $listNum.find('span').eq(0).text(count);
    $listNum.find('a').attr('href', href).text(href);
    $listImg.find('img').eq(0).attr(imgObj[index * links]);
    if (links !== 1) {
        $listImg.find('img').eq(1).attr(imgObj[index * links + 1]);
    }
    count += links;
    return cheerio.html($listNum) + cheerio.html($listImg);
}

//将文件生成新的html
function writeToFile(data) {
    //主文件模板
    let template = fs.readFileSync('template.html');
    let $temp = cheerio.load(iconv.decode(template, 'gb2312'));
    $temp('div').html(data);
    fs.writeFile('./result/result.htm', $temp.html(), {flag: 'w', encoding: 'utf-8'}, function (error) {
        if (error) {
            console.log('write error')
        } else {
            console.log('success,filePath: ./result/result.htm,count:' + count);
        }
    })
}

//文件夹固定为./dou
init('./dou');


