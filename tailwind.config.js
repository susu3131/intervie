module.exports = {
  content: ["./app/**/*.{html,ejs,js}"],
  theme: {
    extend: {
      //extend 自行客製新增樣式
      colors: {
        'primary': '#3DB370',  // 綠
        'gray-light' :'#CCCCCC', //淺灰 (背景)
        'gray-light2' :'#D9D9D9', //淺灰 (框框)
        'gray-light3' :'#E7E9E8', //淺灰 (箭頭)
        'gray-dark' :'#666666',//深灰
      },
    },
    backgroundImage: {
      'bg-img': "url('/assets/images/APAC-Sustainability-Landing page-header.png')",
    }
  }

}