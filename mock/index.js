module.exports = {
  "GET /api/select/list": (req, res) => {
    const result = [];
      // 生成指定个数的随机字符串
    const genrateRandomWords = (n) => {
        let words = 'abcdefghijklmnopqrstuvwxyz你是好的嗯气短前端后端设计产品网但考虑到付款啦分手快乐的分类开发商的李开复封疆大吏师德师风吉林省附近',
            len = words.length,
            ret = ''
        for(let i=0; i< n; i++) {
          ret += words[Math.floor(Math.random() * len)]
        }
        return ret
      }
    for (let i = 0; i < 100000; i++) {
      result.push({
        key: i,
        title: genrateRandomWords(12),
        name: "姓名" + i,
      });
    }
    return res.json({
      status: "ok",
      code: "0",
      data: result,
    });
  },
};
