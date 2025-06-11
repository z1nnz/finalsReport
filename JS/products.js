


const products = [
  {
    id: 1,
    name: "日本Ariel洗衣精",
    image: "img/img005.jpg",
    price: 99,
    originalPrice: 199,
    description: "日本超強洗淨洗衣精，婆媽最愛、家庭主婦最愛，最熱銷、最搶手，衣物處理沒煩惱。"
  },
  {
    id: 2,
    name: "保鮮封口夾",
    image: "img/img006.png",
    price: 30,
    originalPrice: 50,
    description: "食物保鮮封口夾，食品衛生沒煩惱，小巧玲瓏，攜帶方便。"
  },  
  {
    id: 3,
    name: "真空防水壓縮袋",
    image: "img/img007.png",
    price: 60,
    originalPrice: 80,
    description: "省去塑膠袋的浪費，防水、防止細菌孳生，好用又實在。"
  },
  
  {
    id: 4,
    name: "樂天金幣餅",
    image: "img/img008.png",
    price: 70,
    originalPrice: 100,
    description: "金幣餅乾，大人小孩都愛，讓你吃金幣每天賺金幣。"
  },
  {
    id: 5,
    name: "日本巧克力雪糕",
    image: "img/img009.png",
    price: 80,
    originalPrice: 120,
    description: "香濃巧克力加上日本牛奶結合，夏天雪糕不可少。"
  },
  {
    id: 6,
    name: "蜂蜜蛋糕",
    image: "img/img010.png",
    price: 100,
    originalPrice: 150,
    description: "小農蜂蜜製造，蛋糕綿密、柔軟好吃，讓你吃完濃情蜜意。"
  },
  {
    id: 7,
    name: "香茅油精",
    image: "img/img011.png",
    price: 50,
    originalPrice: 100,
    description: "香茅油精，驅趕文字、蚊蟲叮咬立即見效。"
  },
  {
    id: 8,
    name: "甘栗仁",
    image: "img/img012.png",
    price: 30,
    originalPrice: 50,
    description: "糖炒栗子，搖身一變變成整顆甘栗，糖分不高，適合全家人吃。"
  }, 
  {
    id: 9,
    name: "晚餐自助式餐券",
    image: "img/img013.png",
    price: 1000,
    originalPrice: 1500,
    description: "知名餐廳晚餐Buffet餐券，情侶、夫妻、家庭都買起來。"
  },
  {
    id: 10,
    name: "下午茶餐券",
    image: "img/img014.png",
    price: 800,
    originalPrice: 1200,
    description: "知名餐廳下午茶餐券，貴婦、閨蜜、姐妹趕快搶購囉。"
  },  
  {
    id: 11,
    name: "日本製益生菌牙膏",
    image: "img/img016.png",
    price: 30,
    originalPrice: 50,
    description: "日本製牙膏，添加益生菌，顧牙顧健康，讓你清新好口氣。"
  },
  {
    id: 12,
    name: "庫洛米純水濕紙巾",
    image: "img/img015.png",
    price: 40,
    originalPrice: 60,
    description: "小孩最愛的庫洛米來囉，推出聯名濕紙巾，爸媽快搶購囉。"
  },
];

localStorage.setItem("products", JSON.stringify(products));